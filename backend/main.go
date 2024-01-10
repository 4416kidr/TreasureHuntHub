package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
)

type Store struct {
	Name       string
	Location   string
	StoreStock int
	Comment    string
	ImagePath  string
}

func gen_store_date(count int) []Store {
	stores := make([]Store, count)

	for i := 0; i < count; i++ {
		store := Store{
			Name:       "Store" + fmt.Sprint(i+1),
			Location:   "Location of store" + fmt.Sprint(i+1),
			StoreStock: 1,
			Comment:    "Comment about store" + fmt.Sprint(i+1),
			ImagePath:  "/path/to/store" + fmt.Sprint(i+1) + "/image",
		}
		stores[i] = store
	}
	return stores
}

func main() {
	store_data := gen_store_date(20)
	fmt.Println(store_data)
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.Logger.Fatal(e.Start(":1323"))
}
