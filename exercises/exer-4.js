/*
INSTRUCCIONES:

Crear una función que reciba la variable "companies" como parámetro:

1. Agrupar todos los "users" de todas las "companies" en una sola tabla.

2. Cada "user" debe tener un nuevo atributo "company" que tenga como valor el nombre de la "company".

3. Los "users" deben ordenarse de acuerdo con su edad (de mayor a menor).
*/
const { cleanConsole } = require("../helpers/system.helpers");
const { createAll } = require("../helpers/data.helper");

const companies = createAll();

// cleanConsole(4, companies);
// console.log('%c ---- RES 4 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

function Tarea4(Empresas) {
  let Trabajadores = [];

  Empresas.forEach((Work) => {
    Work.users.forEach((RowWorkers, index, arrayWork) => {
      let WorkerTemp = RowWorkers;
      WorkerTemp.company = Work.name;
      Trabajadores.push(WorkerTemp);
    });
  });

  return Trabajadores.sort(function (a, b) {
    if (a.age > b.age) {
      return -1;
    }
    if (a.age < b.age) {
      return 1;
    }
    return 0;
  });
}

// ejecutar
// console.log(Tarea4(companies));

exports.Tarea4 = Tarea4;
