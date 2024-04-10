import fs from "fs";

const agregarJson= (nombre, rut, curso, nivel)=>{
    const estudianteAM = {
        nombre,
        rut,
        curso,
        nivel,
    }; 
    let estudiantes = [];//aquí inserta los objetos al json

    try {
        const data = fs.readFileSync("estudiantes.json", "utf8");
        const estudiantesData = JSON.parse(data);
        if (estudiantesData.estudiantes) {
          estudiantes = estudiantesData.estudiantes;
        } 
        estudiantes.push(estudianteAM);
        fs.writeFileSync("estudiantes.json", JSON.stringify({ estudiantes }));
        console.log("Usuario almacenado con éxito");
      } catch (error) {
        console.log("No se pudo leer el archivo estudiantes.json: " + error.message);
      }
      return agregarJson
};

// agregarJson(nombre, rut, curso, nivel);

export default agregarJson;

