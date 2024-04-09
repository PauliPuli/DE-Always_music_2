import fs from "fs";

const estudianteAM = {
    nombre: "Luisa Díaz",
    rut: "96378443",
    curso: "Arpa",
    nivel: "Avanzado",
};

let estudiantes = [];

try {
  const data = fs.readFileSync("estudiantes.json", "utf8");
  const estudiantesData = JSON.parse(data);
  if (estudiantesData.estudiantes) {
    estudiantes = estudiantesData.estudiantes;
  }
} catch (error) {
  console.log("No se pudo leer el archivo estudiantes.json: " + error.message);
}
estudiantes.push(estudianteAM);


  
  
  fs.writeFileSync("estudiantes.json", JSON.stringify({ estudiantes }));
  console.log("Usuario almacenado con éxito");
  
  

