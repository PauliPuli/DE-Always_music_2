<h1>Desafío Evaluado - Always Music 2</h1>
<p>Trabajaremos con la misma base de datos del <a href='https://github.com/PauliPuli/DE-Always_music'>ejercicio anterior</a> pero esta vez aplicando la parametrización de los valores para evitar vulnerabilidades.</p>

<p>Lista de usuarios ingresados a estudiantes.json mediante 'fs'.</p>
<img src='https://github.com/PauliPuli/DE-Always_music_2/assets/156126623/1ebbc318-d7b8-4ae4-8eb3-add72282f735'>
<p>Ahora debemos pasar los estudiantes de la base de datos al json</p>

<img src='https://github.com/PauliPuli/DE-Always_music_2/assets/156126623/186f771c-9aac-4ae2-8422-dcded49b88c6'>
<p>Elimino a los usuarios uno a uno</p>
<img src='/image002.png'>
<p>Al consultar la tabla observamos que eliminó a los usuarios, pero en el JSON al editar a un usuario vuelve a agregar:</p>
<img src='/image003.png'>
<p>En index creamos una función síncrona llamada 'eliminarJson', que a diferencia de la de agregar sólo requerimos del rut y cambiar de método. Podemos usar filter:</p>
<img src='/image004.png'>
<p>Teníamos 3 veces a Mario José en nuestro JSON. Ejecutamos el rut de 'Mario José:</p>
<img src='/image005.png'>
<p>Y al observar el JSon ¡ya no está!</p>
4<img src='/image006.png'>
<figcaption>*Agregué una estudiante para comprobar que estaba filtrando el rut adecuadamente</figcaption>
<p>El desafío también requiere mostrar todos los estudiantes. Agregamos la función de showJson, que utiliza el método map, junto a showEstudiante en la línea 92 y realizamos la consulta:</p>
<img src='/image007.png'>
<p>Al igual que en la función eliminar, ocupamos el método filter para que encuentre al usuario por su rut, pero sin sobreescribir el archivo. El callback lo colocamos dentro del comando 'select' en el archivo de 'consultas', línea 103. Obtenemos: </p>
<img src='/image008.png'>
<p>Finalmente, para editar la información de algún estudiante, creamos una función para actualizar. Para ello usamos el método find.</p>
<img src='/image009.png'>
<figcaption>En este caso, cambiamos el nivel de "Intermedio" a "Avanzado"</figcaption>

