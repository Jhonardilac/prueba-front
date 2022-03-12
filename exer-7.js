/*
INSTRUCCIONES:

1. Crear una función tomando como parámetro un "id" de "company" y devolver el nombre de la "company".

2: Crear una función tomando como parámetro un "id" de "company" y quitar la "company" de la lista.

4: Crear una función tomando como parámetro un "id" de "company" y un nuevo "user" cuyo el apelido es "Delgado",
   el nombre "Juan", de 35 años y dueño de un carro.
   El nuevo "user" debe agregarse a la lista de "users" de este "company" y tener un "id" generado automáticamente.
   La función también debe modificar el atributo "usersLength" de "company".

5: Crear una función tomando como parámetro un "id" de "company" y un "id" de "user".
   La función debe quitar este "user" de la lista de "users" de "company" y cambiar el atributo "usersLength" de "company".

6: Crear una función tomando como parámetro dos "id" de "company" y un "id" de "user".
   La función debe permitir que el user sea transferido de la primera "company" a la una "company".
   El atributo "usersLength" de cada "company" debe actualizarse. */

const { cleanConsole } = require("../helpers/system.helpers");
const { createAll } = require("../helpers/data.helper");

const companies = createAll();

// cleanConsole(7, companies);

// console.log('%c ---- RES 7 --- part 1', 'background: #bada55; color: #222', 'Put here your method: ');
// console.log('%c ---- RES 7 --- part 2', 'background: #bada55; color: #222', 'Put here your method: ');
// console.log('%c ---- RES 7 --- part 3', 'background: #bada55; color: #222', 'Put here your method: ');
// console.log('%c ---- RES 7 --- part 4', 'background: #bada55; color: #222', 'Put here your method: ');
// console.log('%c ---- RES 7 --- part 5', 'background: #bada55; color: #222', 'Put here your method: ');
// console.log('%c ---- RES 7 --- part 6', 'background: #bada55; color: #222', 'Put here your method: ');

function Parte1(Companies, IdCompa) {
  Companies.forEach((RowEmpresa) => {
    if (RowEmpresa.id === IdCompa) {
      console.log(RowEmpresa.id, RowEmpresa.name, "Empresa localizada");
      return RowEmpresa.name;
    }
  });
}

//ejecutar parte 1
// Parte1(companies, 3);

//// parte 2

function Parte2(Companies, IdCompa) {
  let NewCompanie = Companies;

  Companies.forEach((RowEmpresa, IndexEmpresa) => {
    if (RowEmpresa.id === IdCompa) {
      NewCompanie.splice(0, IndexEmpresa);
    }
  });
  return NewCompanie;
}

///// ejecutar parte 2
// Parte2(companies, 1);

//// parte 4
function Parte4(Companies, IdCompa, NewUser) {
  let NewEmpresas = Companies;
  Companies.forEach((RowEmpresa, indexEmpresa) => {
    if (RowEmpresa.id === IdCompa) {
      NewEmpresas[indexEmpresa] = RowEmpresa;
      NewEmpresas[indexEmpresa].users.push({ ...NewUser, id: Date.now() });

      NewEmpresas[indexEmpresa].usersLength =
        NewEmpresas[indexEmpresa].users.length;
    }
  });

  return NewEmpresas;
}

// Parte4(companies, 3, {
//   lastName: "Delgado",
//   firstName: "Juan",
//   age: 35,
//   car: true,
// });

/// parte 5

function Parte5(Companies, CompaniId, UserId) {
  let NewEmpresa = Companies;
  Companies.forEach((RowEmpresa, IndexEmpresa) => {
    if (RowEmpresa.id === CompaniId) {
      RowEmpresa.users.forEach((rrrrm, IndexUser) => {
        if (rrrrm.id === UserId) {
          NewEmpresa[IndexEmpresa].users.splice(IndexUser, 1);
        }
      });
    }
  });

  return NewEmpresa;
}

// ejecutar parte 5
// Parte5(companies, 5, 3);

//parte 6
function Parte6(Companies, UserId, NewCompaniId, OldCompaniId) {
  let NewComapnias = Companies;
  let OldDataUser = [];

  //buscar y remover empleado viejo
  Companies.forEach((RowEmpresa, IndexEmpresa) => {
    if (RowEmpresa.id === OldCompaniId) {
      RowEmpresa.users.forEach((RowWorker, IndexWorker) => {
        if (RowWorker.id === UserId) {
          console.log(RowEmpresa.usersLength);
          OldDataUser = RowWorker;

          NewComapnias[IndexEmpresa].users.splice(IndexWorker, 1);
          NewComapnias[IndexEmpresa].usersLength =
            NewComapnias[IndexEmpresa].users.length;
          console.log(RowEmpresa.usersLength);
        }
      });
    }
  });

  //buscar nueva empresa y agregar nuevo empleado
  Companies.forEach((RowEmpresa, IndexEmpresa) => {
    if (RowEmpresa.id === NewCompaniId) {
      NewComapnias[IndexEmpresa].users.push(OldDataUser);
      NewComapnias[IndexEmpresa].usersLength =
        NewComapnias[IndexEmpresa].users.length;
    }
  });

  return NewComapnias;
}

//ejecutar parte 6
Parte6(companies, 4, 1, 6);
