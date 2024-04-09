class University {
  constructor(universityName) {
    this.universityName = universityName;
    this.faculties = [];
  }

  get universityName() {
    return this._universityName;
  }

  set universityName(name) {
    this._universityName = name;
  }

  get allFaculty() {
    return this.faculties;
  }

  addFaculty(name) {
    this.faculties.push(name);
  }

  deleteFaculty(name) {
    this.faculties = this.faculties.filter((faculty) => faculty !== name);
  }
}

const psu = new University("PSU");
psu.addFaculty("ФИТ");
psu.addFaculty("МТФ");
psu.addFaculty("РТФ");

psu.deleteFaculty("МТФ");

console.log(psu.universityName);
console.log(psu.faculties);
