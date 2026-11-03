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

	franchises, err := fetchFranchises(db)
	if err != nil {
		log.Printf("failed to fetch franchises data: %v", err)
		http.Error(w, "Failed to fetch franchises", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(franchises); err != nil {
		log.Printf("failed to encode franchises: %v", err)
		return
	}

	log.Println("successfully fetched franchise data")
}