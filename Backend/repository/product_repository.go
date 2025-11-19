package repository

import (
	"Backend/config"
)

type Product struct {
	ID          int
	Name        string
	Description string
	Price       float64
	ImageURL    string
	Stock       int
}

func GetAllProducts() ([]Product, error) {
	rows, err := config.DB.Query("SELECT id, name, description, price, image_url, stock FROM products")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var products []Product
	for rows.Next() {
		var p Product
		if err := rows.Scan(&p.ID, &p.Name, &p.Description, &p.Price, &p.ImageURL, &p.Stock); err != nil {
			return nil, err
		}
		products = append(products, p)
	}
	return products, nil
}

func CreateProduct(p Product) error {
	_, err := config.DB.Exec(
		"INSERT INTO products (name, description, price, image_url, stock) VALUES (?, ?, ?, ?, ?)",
		p.Name, p.Description, p.Price, p.ImageURL, p.Stock,
	)
	return err
}
