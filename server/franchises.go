package main
import (
	"log"
	"net/http"
	"encoding/json"
	"database/sql"
)

type Franchise struct {
	ID   int 	`json:"id"`
	Name string `json:"name"`
}

func getFranchises(db *sql.DB, w http.ResponseWriter, r *http.Request) {
	log.Println("fetching franchise data...")

	rows, err := db.Query("SELECT id, name FROM franchises ORDER BY name")
	if err != nil {
		http.Error(w, "Failed to fetch franchises", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	franchises := []Franchise{}

	for rows.Next() {
		var franchise Franchise
		if err := rows.Scan(&franchise.ID, &franchise.Name); err != nil {
			http.Error(w, "Failed to read franchise data", http.StatusInternalServerError)
			return
		}
		
		franchises = append(franchises, franchise)
	}

	if err := rows.Err(); err != nil {
		http.Error(w, "Error reading franchises", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(franchises); err != nil {
		log.Printf("Failed to encode franchises: %v", err)
	}

	log.Println("successfully fetched franchise data")
}