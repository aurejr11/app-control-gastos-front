//variable Constante

let port = "8080"
const URL_BASE = "localhost:" + port + "/"

 export let end_points = {
    users: URL_BASE + "users/", // esta linea es lo mismo que las dos lines de arriba: localhost:8080/users/
    merchants: URL_BASE + "merchants/",
    expenses: URL_BASE + "expenses/",
    paymen_methods: URL_BASE + "paymen_methods/",
    category: URL_BASE + "category/"
    
}


