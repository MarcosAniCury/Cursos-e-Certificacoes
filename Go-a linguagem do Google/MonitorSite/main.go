package main

import (
	"fmt"
	"net/http"
	"os"
)

var SITES_TO_MONITOR = []string{"https://www.sofex.com.br", "https://www.facialmap.com.br"}

func monitoringWebsite() {
	fmt.Println("Initialize monitor...")
	for {
		for _, site := range SITES_TO_MONITOR {
			fmt.Println("Check website: ", site, "")
			result, err := http.Get(site)

			if err != nil {
				fmt.Println("Error:", err)
			}

			if result.StatusCode == 200 {
				fmt.Println("Site is OK (200)...")
			} else {
				fmt.Println("Error: Status Code ", result.StatusCode)
			}
		}
	}
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
		fmt.Println("Logs will be show...")
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
