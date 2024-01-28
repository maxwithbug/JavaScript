class Student {
  constructor(Name) {
    this.Name = Name;
    this.Coursess = [];
  }
  /*display of enrolled students*/
  ShowCourse = () => {
    if (this.Coursess.length > 0) {
      console.log(`${this.Name}'s enrolled coursse is : ${this.Coursess.join(', ')} `);
    } else {
      console.log(`${this.Name} is not enrolled any course`);
    }
  };
}
class Admission extends Student {
  constructor(name) {
    super(name); // Inherit name property from Student,//this is very Important otherwise you can't use this keyword
  }
    /*student enrollment function */
    EnrolledStudent = (StudentName) => {
      // console.log(this.Name); //[undefined] because we are passing instance of the Student class directly and instances dosen't have the name value directly (this currently refering Global object)
      if (typeof StudentName.Name === "string") {
        console.log(` ${StudentName.Name} has been enrolled`);
      } else {
        console.log(`Wrong input , please Check`);
      }
    };

    /*course admission function */
    AssignCourse = (StudentName, StudentCourse) => {
      if (typeof StudentName.Name === "string") {
        // this.Coursess.push(StudentCourse);  //---The issue persists because the AssignCourse method in the Admission class is still incorrectly assigning courses to the AdmissionOffice object's Coursess array, rather than the individual student objects.
          StudentName.Coursess.push(StudentCourse);

        console.log(
          ` ${StudentName.Name} has been enrolled in ${StudentCourse}`
        );
      } else {
        console.log(`Wrong input , please Check`);
      }
    };
}

const AdmissionOffice = new Admission();
let Student0 = new Student("rimita", "rimita444@gmail.com");
let Student1 = new Student("tiasha", "tiashaChakraborty@gmail.com");

AdmissionOffice.EnrolledStudent(Student0); //passing an instance of the Student class directly
AdmissionOffice.EnrolledStudent(Student1); //passing an instance of the Student class directly

AdmissionOffice.AssignCourse(Student0, "full stackk web development");
AdmissionOffice.AssignCourse(Student1, "Devops");

// AdmissionOffice.AssignCourse('bob','Devops')

Student0.ShowCourse();
Student1.ShowCourse();
