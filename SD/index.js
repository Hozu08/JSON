//Se utiliza el parámetro async par amanejar los datos de forma asíncrona y manejar await que esperen una "promesa" 
async function giveDatas(){
    try {

        //Se traen los datos utilizando fetch y se guardan como JSON en "datas"
        const url = "https://hozu08.github.io/JSON/data.json";
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        //Selecciona el id del contenetor
        const cont = document.getElementById("container");

        //Separa los elementos pares
        const personasP = datos.filter((_, indice) => indice % 2 === 0);

        //Se utiliza forEach para extraer los datos del JSON        
        personasP.forEach(persona => {
            const p = document.createElement("p");
            p.innerHTML = "<br><br>Nombre: " + persona.nombre + "<br>Celuda: " + persona.cedula + "<br>Fecha de nacimiento: " + persona.fecha_nacimiento + "<br>Estatura: " + persona.estatura;
            cont.appendChild(p);
        });

        

        // Crea un objeto Blob con el contenido JSON
        const blob = new Blob([JSON.stringify(datos, null, 2)], { type: 'application/json' });
        
        // Crea un enlace de descarga
        const enlace = document.createElement('a');
        enlace.href = URL.createObjectURL(blob);
        enlace.download = 'data.json';
        
        // Simula un clic en el enlace para iniciar la descarga
        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace); 

    } catch (error) {
        console.error("No se han podido obtener los datos", error);
    }
}

//Se llama la funcion
giveDatas();
