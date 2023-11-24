class Document {
  constructor(EmployeeName) {
    this._EmployeeName = EmployeeName;
  }
  get EmployeeName() {
    return this._EmployeeName;
  }
}

class Employee {
  constructor(name) {
    this._name = name;
  }
  work(office) {
    for (let i = 0; i < 10; i++) {
      office.addNewdocuments(new Document(this.name));
    }
  }
  get name() {
    return this._name;
  }
}

class Manager {
  constructor(name) {
    this._name = name;
    this._employees = [];
  }

  get name() {
    return this._name;
  }
  get employees() {
    return this._employees;
  }
  hireEmployee(name) {
    this._employees.push(new Employee(name));
  }
  askEmployeesToWork(office) {
    this._employees.forEach((e) => {
      e.work(office);
    });
  }
}
class Cleaner {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  clean() {
    console.log("Clean");
  }
}
class Office {
  constructor() {
    this._managers = [];
    this._documents = [];
    this._cleaners = [];
  }
  get managers() {
    return this._managers;
  }
  get documents() {
    return this._documents;
  }
  get cleaners() {
    return this._cleaners;
  }
  addNewdocuments(employeeName) {
    this._documents.push(employeeName);
  }
  hireManager(name) {
    this._managers.push(new Manager(name));
  }
  hireCleaner(name) {
    this._cleaners.push(new Cleaner(name));
  }
  startWorkDay() {
    this._managers.forEach((manager) => manager.askEmployeesToWork(this));
    this._cleaners.forEach((cleaner) => cleaner.clean());
  }
}
