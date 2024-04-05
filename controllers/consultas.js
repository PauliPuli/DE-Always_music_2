import pool from "../config/estudiantes.js";
import estudiantes from "../index.js";
//Capturar datos
const estudiante = process.argv.slice(2);
const opcion = estudiante[0];
const nombre = estudiante[1];
let rut = estudiante[2];
const curso = estudiante[3];
const nivel = estudiante[4];


//Agregar nuevo estudiante
const addEstudiante = async (nombre, rut, curso, nivel) => {
  let sql ={
    text:'insert into estudiantes(nombre, rut , curso, nivel) values ($1,$2,$3,$4)',
    values:[nombre, rut, curso, nivel],
  };
  try{
    const response = await pool.query(sql);
    console.log(`Estudiante ${nombre} agregado con éxito`);
  }catch(error){
console.log(`${error} - Usuario no agregado`)
  }
};
//Consultar estudiantes
const showEstudiante = async () => {
  let sql = {
    text:"select * from estudiantes",
    rowMode:'array',
}; try {
  const response = await pool.query(sql);
  console.log(response.rows);
}catch(error){

  console.log(`${error} - Consulta con problemas`)
}
 
};

//Consultar estudiante por rut
const selectEstudiante = async (rut) => {
  let sql = {
    text:"select * from estudiantes where rut=$1",
    values:[rut],
    rowMode:'array',
}; try{
  const response = await pool.query(sql);
  console.log(response.rows);
}catch(error){
  console.log(`${error} - No existe ningun estudiante con ese rut`)
}
};

//Actualizar información de un estudiante
const updateEstudiante = async (nombre, rut, curso, nivel) => {
  let sql = {
    text:'update estudiantes set nombre=$1, curso=$3, nivel=$4 where rut=$2',
    values:[nombre, rut, curso, nivel],
  }; try {
    const response = await pool.query(sql);
    console.log(response.rows);
  }catch(error){
    console.log(`${error} - Lo sentimos, no hemos logrado actualizar sus datos`)
  }
};


//Eliminar estudiante por rut
const deleteEstudiante = async (rut) => {
  let sql = {
    text:'delete from estudiantes where rut=$1',
    values:[rut],
  };
try{
  const response = await pool.query(sql);
  console.log("Eliminado de la base de datos");
}catch(error){
  console.log(`${error} - Lo sentimos por el inconveniente :c`)
}
};




if (opcion === "add") {
  addEstudiante(nombre, rut, curso, nivel);
} else if (opcion === "show") {
  showEstudiante();
} else if (opcion === "update") {
  updateEstudiante(nombre, rut, curso, nivel);
} else if (opcion === "delete") {
  rut = estudiante[1];
  deleteEstudiante(rut);
} else if (opcion == "select") {
  rut = estudiante[1]; //
  selectEstudiante(rut);
} else {
  console.log("Función o acción no existente");
}
