class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  }
  
  const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
  });
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
  });
  
class LearningPath{
    constructor({
        name, 
        courses =[]
    }){
        this.name =name;
        this.courses =courses;
    }
}
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoProgBasica,
      cursoDefinitivoHTML,
      cursoPracticoHTML,
    ],
  });
  
  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoProgBasica,
      "Curso DataBusiness",
      "Curso Dataviz",
    ],
  });
  
  const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
      cursoProgBasica,
      "Curso de Unity",
      "Curso de Unreal",
    ],
  })
  

class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses =[],
        learningPaths =[],
    }){
        this.name = name,
        this.email = email,
        this.username = username,
        this.socialMedia ={
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses= approvedCourses,
        this.learningPaths = learningPaths
    }
}

const doniel = new Student({
    name:"Doniel",
    username:"doni1995",
    email:"donielacosta1995@gmail.com",
    twitter: "donielacosta",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
      ],
});

const dubexy = new Student({
    name:"dubexy",
    username:"duby01",
    email:"duby01@gmail.com",
    instagram: "duby",
    learningPaths: [
        escuelaWeb,
        escuelaData,
      ],
});