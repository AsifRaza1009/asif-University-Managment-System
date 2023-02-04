// project
class Person {
    name;
    age;
    constructor(nam, ag) {
        this.name = nam;
        this.age = ag;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(nam, ag, rolNum) {
        super(nam, ag);
        this.rollNumber = rolNum;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instructer extends Person {
    salary;
    courses = [];
    constructor(nam, ag, sal) {
        super(nam, ag);
        this.salary = sal;
    }
    assigncourses(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructer;
    constructor(iD, nme) {
        this.id = iD;
        this.name = nme;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourses(this);
    }
    setinstructer(instructer) {
        this.instructer = instructer;
        instructer.assigncourses(this);
    }
}
class Department {
    name;
    courses = [];
    constructor(nam) {
        this.name = nam;
    }
    addCourse(course) {
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
let department1 = new Department("English");
department1.addCourse(course1);
department1.addCourse(course2);
let department2 = new Department("International Relation");
department2.addCourse(course1);
department2.addCourse(course2);
console.log(instructer1.courses);
export {};
