// project

class Person {
  name: string;
  age: number;
  constructor(nam: string, ag: number) {
    this.name = nam;
    this.age = ag;
  }

  getName() {
    return this.name;
  }
}

class Student extends Person {
  rollNumber: string;
  courses: Course[] = [];

  constructor(nam: string, ag: number, rolNum: string) {
    super(nam, ag);
    this.rollNumber = rolNum;
  }
  registerForCourses(course: Course) {
    this.courses.push(course);
  }
}

class Instructer extends Person {
  salary: number;
  courses: Course[] = [];

  constructor(nam: string, ag: number, sal: number) {
    super(nam, ag);
    this.salary = sal;
  }

  assigncourses(course: Course) {
    this.courses.push(course);
  }
}

class Course {
  id: string;
  name: string;
  students: Student[] = [];
  instructer!: Instructer;
  constructor(iD: string, nme: string) {
    this.id = iD;
    this.name = nme;
  }

  addStudent(student: Student) {
    this.students.push(student);
    student.registerForCourses(this);
  }

  setinstructer(instructer: Instructer) {
    this.instructer = instructer;
    instructer.assigncourses(this);
  }
}

class Department {
  name: string;
  courses: Course[] = [];
  constructor(nam: string) {
    this.name = nam;
  }
  addCourse(course: Course) {
    this.courses.push(course);
  }
}

let student1 = new Student("asif", 22, "stdnt1");
let student2 = new Student("Kashif", 20, "stdnt2");



let instructer1 = new Instructer("Zia", 65, 1500000);
let instructer2 = new Instructer("Ali", 30, 100000);

let course1 = new Course("Course1", "English Language");
course1.addStudent(student1);
course1.addStudent(student2);

course1.setinstructer(instructer1);
//console.log(course1.instructer);
let course2 = new Course("Course2", "Computer Programing");

course2.setinstructer(instructer2);
course2.addStudent(student1);
course2.addStudent(student2);
course2.setinstructer(instructer2);

let department1 = new Department("English")
department1.addCourse(course1)
department1.addCourse(course2)
let department2 = new Department("International Relation")
department2.addCourse(course1)
department2.addCourse(course2)







