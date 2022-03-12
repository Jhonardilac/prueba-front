/*
INSTRUCCIONES:

Crear una función que reciba la variable "companies" como parámetro y reemplazar:

1. Todos los valores "undefined" en "usuarios" por un string vacío.

2. El nombre de cada "company" debe tener la primer letra en mayúscula.

3. El nombre y el apellido de cada "user" debe tener la primer letra en mayúscula.

4. Las "companies" deben ordenarse por su total de "user" (orden decreciente).

5. Los "users" de cada "company" deben aparecer en orden alfabético.
*/

const { cleanConsole } = require("../helpers/system.helpers");
const { createAll } = require("../helpers/data.helper");
const companies = createAll();

// cleanConsole(1, companies);
// console.log('%c ---- RES 1 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

function Tarea1(CompaniesZ) {
  let NuevaCompanies = [];

  function PrimeraLetraMayuscula(Texto) {
    return Texto.charAt(0).toUpperCase() + Texto.slice(1);
  }

  // primer paso
  CompaniesZ.forEach((Compa, index, array) => {
    // segundo paso
    Compa.name = PrimeraLetraMayuscula(Compa.name);
    //final segundo paso

    NuevaCompanies[index] = Compa;

    Compa.users.forEach((UsersCompa, indexUser) => {
      if (!UsersCompa.firstName) {
        NuevaCompanies[index].users[indexUser].firstName = "";
      } else {
        //paso 3
        NuevaCompanies[index].users[indexUser].firstName =
          PrimeraLetraMayuscula(UsersCompa.firstName);
      }

      if (!UsersCompa.lastName) {
        NuevaCompanies[index].users[indexUser].lastName = "";
      } else {
        //paso 3

        NuevaCompanies[index].users[indexUser].lastName = PrimeraLetraMayuscula(
          UsersCompa.lastName
        );
      }
    });

    //paso 5
    NuevaCompanies[index].users.sort(function (a, b) {
      if (a.firstName > b.firstName) {
        return 1;
      }
      if (a.firstName < b.firstName) {
        return -1;
      }
      return 0;
    });
  });

  //paso 4
  NuevaCompanies.sort(function (a, b) {
    if (a.users.length > b.users.length) {
      return -1;
    }
    if (a.users.length < b.users.length) {
      return 1;
    }
    return 0;
  });

  return NuevaCompanies;
}

///// ejecuta tarea

// console.log(Tarea1(companies));

//
exports.Tarea1 = Tarea1;
