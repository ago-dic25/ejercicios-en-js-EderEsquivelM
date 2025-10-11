var alumnos = [
  { nombre: "Rodrigo", apellidoP: "Lopez", apellidoM: "Escobedo", matricula: "2129553" },
  { nombre: "Cesar Oziel", apellidoP: "Guajardo", apellidoM: "Rodriguez", matricula: "2044992" },
  { nombre: "Regina", apellidoP: "Sosa", apellidoM: "Huerta", matricula: "2940002" },
  { nombre: "Carlos Manuel", apellidoP: "Valerio", apellidoM: "Rios", matricula: "2049992" },
  { nombre: "Andrea Carolina", apellidoP: "Alfaro", apellidoM: "Sanchez", matricula: "2667442" },
  { nombre: "Mayela Mayte", apellidoP: "Lopez", apellidoM: "Cerino", matricula: "2029444" },
  { nombre: "Eder Abraham", apellidoP: "Sampayo", apellidoM: "Gonzalez", matricula: "2098883" },
  { nombre: "Carlos Hector", apellidoP: "Leal", apellidoM: "Delgado", matricula: "2089471" },
  { nombre: "Noemi Michelle", apellidoP: "Ortiz", apellidoM: "Juarez", matricula: "2548991" },
  { nombre: "Eder Abisai", apellidoP: "Esquivel", apellidoM: "Maldonado", matricula: "2029995" }
];

console.log(alumnos[1].nombre)
//Elimina un elemento del arreglo
//alumnos.pop();


//Agrega al arreglo
//alumnos.push("Edgar Aurelio");


//Agrega al inicio
//alumnos.unshift("Axel Gabriel");


//Elimina al inicio
//alumnos.shift();

//Modifica valor de cierto elemento del arrego
//alumnos[5]="Guillermo Bautista";

//Numero de indice del arreglo
//console.log(alumnos.indexOf("Wasaaaaa"));

//Verifica si el elemento existe en el arreglo
//console.log(alumnos.includes("Wasaaaaa"));

//console.log(alumnos.find(nombre =>nombre == "Regina"));

//console.log(alumnos.findIndex(nombre => nombre == "Regina"))

const arreglo = document.getElementById("listaAlumnos");
const input = document.getElementById("filtroAlumno");
const boton = document.getElementById("btnFiltrar");
const propiedad = document.getElementById("propiedad");

function mostrarLista(arr) {
    arreglo.innerHTML = "";
    if (arr.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No se encontraron coincidencias";
        arreglo.appendChild(li);
        return;
    }

    arr.forEach(alumno => {
        const li = document.createElement("li");

         li.innerHTML = `<strong>Alumno:</strong> ${alumno.nombre} ${alumno.apellidoP} ${alumno.apellidoM}<br>
            <strong>Matrícula:</strong> ${alumno.matricula}`;

        arreglo.appendChild(li);
    });
}

mostrarLista(alumnos);

boton.addEventListener("click", () => {
    const filtro = input.value.trim().toLowerCase();
    const prop = propiedad.value;

    if (filtro === "") {
        mostrarLista(alumnos);
        return;
    }

    const coincidencias = alumnos.filter(alumno => alumno[prop].toLowerCase().includes(filtro));

    mostrarLista(coincidencias);
});