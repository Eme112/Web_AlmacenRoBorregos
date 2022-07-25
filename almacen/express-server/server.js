/* DUDAS:
1. ¿Hacer lo mismo para registrar una nueva cuenta?
2. ¿Responsiva?
3. Pendiente de integrar correctamente con Mongoose
4. Cómo cargar imágenes
*/

////////////////////////////// DEPENDENCIES //////////////////////////////
var express = require("express");
var cors = require("cors")

// SETUP EXPRESS APP
var app = express();
var PORT = process.env.PORT || 4000;

// HANDLE DATA PARSINT EXPRESS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

////////////////////////////// INITIAL DATA //////////////////////////////
var materials = [
    {
        routeName: "objeto1",
        name: "Objeto 1",
        cant: 1,
        locker: 10,
        available: true,
        datasheet: ""
    },
    {
        routeName: "objeto2",
        name: "Objeto 2",
        cant: 2,
        locker: 20,
        available: true,
        datasheet: ""
    },
    {
        routeName: "objeto3",
        name: "Objeto 3",
        cant: 3,
        locker: 30,
        available: true,
        datasheet: ""
    },
    {
        routeName: "objeto0",
        name: "Objeto 0",
        cant: 0,
        locker: 0,
        available: false,
        datasheet: ""
    }
];

////////////////////////////// ROUTES //////////////////////////////
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.send("Servidor para manejo de almacen");
});

// Displays materials
app.get("/api/materials", function(req, res) {
    return res.json(materials);
});

// Displays a single material, or returns false
app.get("/api/materials/:material", function(req, res) {
    var chosen = req.params.material;
  
    console.log(chosen);
  
    for (var i = 0; i < materials.length; i++) {
      if (chosen === materials[i].routeName) {
        return res.json(materials[i]);
      }
    }
  
    return res.json(false);
});

// Add material - takes in JSON input
app.post("/api/materials", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var addedMaterial = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    addedMaterial.routeName = addedMaterial.name.replace(/\s+/g, "").toLowerCase();

    console.log(addedMaterial);

    materials.push(addedMaterial);

    res.json(addedMaterial);
});
  
////////////////////////////// START SERVER //////////////////////////////
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
  