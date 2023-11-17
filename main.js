class Comment{
  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }){

    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar(){
    console.log(this.studentName + " (" + this.studentRole + ")");
    console.log(this.likes + " likes");
    console.log(this.content);
  }
}
function videoPlay(id){
  const urlSecreta = "https://platzi.comwewq" + id;
  console.log("reproduciendo");
}
function videoStop(id){
  const urlSecreta = "https://platzi.comwqdqw" + id;
  console.log("pausamos la url" +urlSecreta);
}

class PClass{
  constructor({
    name,
    videoId
  }){
    this.name =name;
    this.videoId =videoId;
  }
  reproducir(){
    videoPlay(this.videoId);
  }
  pausar(){
    videoStop(this.videoId);
  }
}
class Course {
    constructor({
      name,
      classes = [],
      isFree = false,
      lang = "spanish",

    }) {
      this._name = name;
      this.classes = classes;
      this.isFree = isFree;
      this.lang = lang;

    }

    get name(){
      return this._name;
    }
    // cambiar nombre
    cahngeName(nuevoNombrecito){
      this._name =nuevoNombrecito
    }

    set name(nuevoNombrecito){
      if (nuevoNombrecito ==="Curso Malo de programacion") {
        console.error("web noo");
      }else{
        this._name =nuevoNombrecito;
      }
    }
  }
  
  const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree:true,
  });

  cursoProgBasica.name
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang:"english",

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

    publicarComentario(commentContent){
      const comment =new Comment({
        content: commentContent,
        studentName: this.name
      });
      comment.publicar();
    }
}

class FreeStudent extends Student{
  constructor(props){
    super(props);
  }

  approvedCourse(newCourse){
    if (newCourse.isFree){
      this.approvedCourses.push(newCourse);
    }else{
      console.warn("Lo siento," + this.name + ", solo puedes tomar cursos abiertos");
    }

  }
}
class BasicStudent extends Student{
  constructor(props){
    super(props);
  }
  approvedCourse(newCourse){
    if (newCourse.lang !== "english"){
      this.approvedCourses.push(newCourse);
    }else{
      console.warn("Lo siento," + this.name + ", no puedes tomar cursos en ingles");
    }

  }
}
class ExpertStudent extends Student{
  constructor(props){
    super(props);
  }

  approvedCourse(newCourse){
 
      this.approvedCourses.push(newCourse);
  

  }
}

class TeacherStudent extends Student{
  constructor(props){
    super(props);
  }

  approvedCourse(newCourse){
 
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent){
    const comment =new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor",
    });
    comment.publicar();
  }
}

const doniel = new FreeStudent({
    name:"Doniel",
    username:"doni1995",
    email:"donielacosta1995@gmail.com",
    twitter: "donielacosta",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
      ],
});

const dubexy = new ExpertStudent({
    name:"dubexy",
    username:"duby01",
    email:"duby01@gmail.com",
    instagram: "duby",
    learningPaths: [
        escuelaWeb,
        escuelaData,
      ],
});

const ana = new TeacherStudent({
  name:"Ana Contreras",
  username:"ana1911a",
  email:"anacontreras@gmail.com",
  instagram: "ana",

});