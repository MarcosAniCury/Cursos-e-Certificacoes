package main

import "fmt"

func main() {
	fmt.Println("This software monitoring you web site, Welcome")
	fmt.Println("1 - Start Monitoring")
	fmt.Println("2 - Show Logs")
	fmt.Println("0 - Exit")

	var command int
	fmt.Print("Enter your command: ")
	fmt.Scanln(&command)
}
