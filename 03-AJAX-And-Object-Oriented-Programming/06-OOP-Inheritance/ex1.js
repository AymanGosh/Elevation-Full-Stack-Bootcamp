class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }
}

class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
  }
  //method overriding!
  addCourse(course) {
    if (this.courses.indexOf(course) == -1) {
      super.addCourse(course);
    }
  }
  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }
}

class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(null, startYear);
    this.salary = salary;
    this.name = "Professor " + name;
  }
  giveGrade(student, courseName, grade) {
    student.receiveGrade(courseName, grade);
  }
}

const s1 = new Student("Ronda", 2017);
console.log(s1.name); //prints "Ronda"

s1.addCourse("Algebra II");
console.log(s1.courses); //prints ["Algebra II"]
