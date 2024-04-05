import fs from "fs";

    //   const estudianteAM= {
    //   nombre:'Lucho',
    //   rut:'85405761',
    //   curso:'acordeón' ,
    //   nivel:'Experto',
    // };

    // fs.writeFileSync("estudiantes.json", JSON.stringify(estudianteAM)); 
    // console.log('Usuario almacenado con éxito'); 

fs.readFile('estudiantes.json','utf8', function(e,data){
    let estudianteAM= JSON.parse(data);
    console.log(estudianteAM)
});
    // estudiantes.push(estudianteAM); 

    // res.json(estudiantes);


