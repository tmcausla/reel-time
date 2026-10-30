package main
import (	
	"log"
	"os"
	"database/sql"
	"net/http"
	_ "github.com/jackc/pgx/v5/stdlib"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found; using existing environment variables")
	}

	databaseURL := os.Getenv("DATABASE_URL")
	if databaseURL == "" {
		log.Fatal("DATABASE_URL env variable is not set")
	}

	db, err := sql.Open("pgx", databaseURL)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	if err := db.Ping(); err != nil {
		log.Printf("error pinging database: %v", err)
		return
	}

	log.Println("connected to Reel Time database") // DEBUG CONNECTION

	http.HandleFunc("GET /api/franchises", func(w http.ResponseWriter, r *http.Request) {
		getFranchises(db, w, r)
	})
	http.HandleFunc("GET /api/movies", func(w http.ResponseWriter, r *http.Request) {
		getMovies(db, w, r)
	})
	
	log.Fatal(http.ListenAndServe(":8080", nil))
}