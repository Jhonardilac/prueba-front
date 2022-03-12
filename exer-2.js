/* INSTRUCCIONES:

Crear una función que reciba los parámetros la variable "companies" y un booleano "hasCar":

1. Para cada "company" debe conservar solo "users" cuyo valor de atributo "car" es igual al parámetro del booleano "hasCar".

2. El atributo "usersLength" deben indicar el total de "users" correspondientes al parámetro "hasCar".

*/

const { cleanConsole } = require("../helpers/system.helpers");
const { createAll } = require("../helpers/data.helper");

const companies = createAll();

// cleanConsole(2, companies);
// console.log('%c ---- RES 2 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

function Parte2(CompaniesZ, hasCar) {
  let NuevaCompanies = [];

  CompaniesZ.forEach((Companiess, IndexEmpresa) => {
    NuevaCompanies[IndexEmpresa] = Companiess;
    let usersTemporal = [];
    Companiess.users.forEach((dataUser) => {
      if (dataUser.car === hasCar) {
        usersTemporal.push(dataUser);
      }
    });

    NuevaCompanies[IndexEmpresa].users = usersTemporal;
    NuevaCompanies[IndexEmpresa].usersLength = usersTemporal.length;
  });
  return NuevaCompanies;
}

console.log(Parte2(companies, false));
