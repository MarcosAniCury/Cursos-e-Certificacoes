package main

import (
	"bufio"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
	"time"
)

const ARQUIVE_WITH_SITES = "sites-to-monitoring.txt"
const ARQUIVE_TO_WRITE_LOGS = "sites-status-log.txt"
const WAIT_TIME_BEFORE_MONITOR_AGAIN = time.Minute * 10

func writeArquiveLn(arquiveName string, text string) {
	arq, error := os.OpenFile(arquiveName, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)

	if error != nil {
		fmt.Println("Erro happend here:", error)
		os.Exit(-1)
	}

	arq.WriteString(text)

	arq.Close()
}

func readArquiveLn(arquiveName string) []string {
	arq, error := os.Open(arquiveName)

	if error != nil {
		fmt.Println("Erro happend here:", error)
		os.Exit(-1)
	}

	var lines []string

	reader := bufio.NewReader(arq)

	for {
		line, error := reader.ReadString('\n')

		lines = append(lines, strings.TrimSpace(line))

		if error == io.EOF {
			break
		}
	}

	arq.Close()

	return lines
}

func monitoringWebsite() {
	fmt.Println("Initialize monitor...")
	for {
		for _, site := range readArquiveLn(ARQUIVE_WITH_SITES) {
			fmt.Println("Check website: ", site, "")
			result, err := http.Get(site)

			if err != nil {
				fmt.Println("Error:", err)
				os.Exit(-1)
			}

			var logWrite string

			dateNow := time.Now().Format("02/01/2006 15:04:05")

			if result.StatusCode == 200 {
				logWrite = fmt.Sprintf("%s: %s is OK (200)...\n", dateNow, site)
				fmt.Println("Site is OK (200)...")
			} else {
				logWrite = fmt.Sprintf("%s: %s Error: Status Code %d", dateNow, site, result.StatusCode)
				fmt.Println("Error: Status Code ", result.StatusCode)
			}
			writeArquiveLn(ARQUIVE_TO_WRITE_LOGS, logWrite)
		}
		time.Sleep(WAIT_TIME_BEFORE_MONITOR_AGAIN)
	}
}

func readLog() int {
	fmt.Println("Logs will be show...")
	for _, log := range readArquiveLn(ARQUIVE_TO_WRITE_LOGS) {
		fmt.Println(log)
	}
	return 1
}

func showMenu() int {
	var command int
	fmt.Println("This software monitoring you web site, Welcome")
	fmt.Println("1 - Start Monitoring")
	fmt.Println("2 - Show Logs")
	fmt.Println("0 - Exit")

	fmt.Print("Enter your command: ")
	fmt.Scanln(&command)

	switch command {
	case 1:
		monitoringWebsite()
	case 2:
		readLog()
	case 0:
		fmt.Println("Exit aplication...")
		os.Exit(0)
	default:
		fmt.Println("Command not recognize, insert again")
		showMenu()
	}
	return command
}

func main() {
	showMenu()
}
