/*
INSTRUCCIONES:

1. Use la función creada en el ejemplo 4 para crear una nueva función tomando como parámetro
   la variable "companies" y devolver un nuevo objeto con los siguientes atributos:

    'size' => total de "users"
    'average' => edad promedio de "users"
    'hasCar' => total de "users" propietarios de un carro
    'averageWithCar' => edad promedio de los "users" con un carro
 */
const { cleanConsole } = require("../helpers/system.helpers");
const { createAll } = require("../helpers/data.helper");
const { Tarea4 } = require("./exer-4");

const companies = createAll();

// cleanConsole(5, companies);
// console.log('%c ---- RES 5 --- ', 'background: #bada55; color: #222', 'Put here your method: ');

function SacarPromedio(Datos) {
  let values = Datos;
  let count = Datos.length;
  values = values.reduce((previous, current) => (current += previous));
  values /= count;
  return values;
}

function Tarea5(EmpresasLoads) {
  const AllWorkers = Tarea4(EmpresasLoads);
  let EmpresasLoading = {};
  let EmpresaRowTemp = {};
  AllWorkers.forEach((RowWorker, IndexWorker) => {
    if (EmpresasLoading[RowWorker.company]) {
      EmpresaRowTemp = EmpresasLoading[RowWorker.company];
    } else {
      EmpresaRowTemp = { size: 0, average: [], hasCar: 0, averageWithCar: [] };
    }
    //  EmpresaRowTemp.push(RowWorker);
    EmpresaRowTemp.size = EmpresaRowTemp.size + 1;
    EmpresaRowTemp.average.push(RowWorker.age);

    if (RowWorker.car) {
      EmpresaRowTemp.hasCar = EmpresaRowTemp.hasCar + 1;
      EmpresaRowTemp.averageWithCar.push(RowWorker.age);
    }

    //parte final
    EmpresasLoading[RowWorker.company] = EmpresaRowTemp;
  });

  for (const NameEmpresa in EmpresasLoading) {
    const element = EmpresasLoading[NameEmpresa];

    EmpresasLoading[NameEmpresa].average = SacarPromedio(element.average);
    EmpresasLoading[NameEmpresa].averageWithCar = SacarPromedio(
      element.averageWithCar
    );
  }

  return EmpresasLoading;
}

//ejecutar

console.log(Tarea5(companies));
