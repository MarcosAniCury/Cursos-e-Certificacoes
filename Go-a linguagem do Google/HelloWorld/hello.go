package main

import (
	"fmt"
	"reflect"
)

func main() {
	name := "Marcos Ani Cury"
	var version = 1.1
	fmt.Println("Ola Mundo,", name)
	fmt.Println("Esse software está na versão:", version)

	fmt.Printf("%s", reflect.TypeOf(version).String())
}
