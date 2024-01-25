package main

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
)

type Store struct {
	Name       string
	Location   string
	StoreStock int
	Comment    string
	ImagePath  string
}

// e.GET("/store/:count", GetStoresData)
func GetStoresData(c echo.Context) error {
	count, err := strconv.Atoi(c.Param("count"))
	if err != nil {
		c.String(http.StatusBadRequest, "[Error] must be integer")
	}

	var stores []Store
	for i := 0; i < count; i++ {
		store := Store{
			Name:       "Store" + fmt.Sprint(i+1),
			Location:   "Location of store" + fmt.Sprint(i+1),
			StoreStock: i % 3,
			Comment:    "Comment about store" + fmt.Sprint(i+1),
			ImagePath:  "/path/to/store" + fmt.Sprint(i+1) + "/image",
		}
		stores = append(stores, store)
	}
	return c.JSONPretty(http.StatusOK, stores, "  ")
}

// e.GET("/hello", HelloWorld)
func HelloWorld(c echo.Context) error {
	return c.String(http.StatusOK, "hello world")
}

func main() {
	e := echo.New()
	e.GET("/hello", HelloWorld)
	e.GET("/store/:count", GetStoresData)
	e.Logger.Fatal(e.Start(":1323"))
}
