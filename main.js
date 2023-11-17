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

/***************** */
//intermedio de POO
/***************** */

const alberto ={
  name:"Doniel",
  age:18,
  approvedCourses:["Curso 1"],
  addCourse(newCourse){
    console.log("This",this);
    console.log("This.approvedCourses",this);
    this.approvedCourses.push(newCourse);
  }
}

// console.log(Object.keys(alberto));
// console.log(Object.getOwnPropertyNames(alberto));
// console.log(Object.entries(alberto));

// Object.defineProperties(alberto,"pruebaNasa",{
//   value: "extraterrestres",
//   writable: true,
//   configurable: true,
//   enumerable: true
// });

// Object.defineProperty(alberto,"navigator",{
//   value:"Chrome",
//   enumerable: false,
//   writable: true,
//   configurable: true,
// });

// Object.defineProperty(alberto,"editor",{
//   value:"VSCode",
//   enumerable: true,
//   writable: false,
//   configurable: true,
// });

// Object.defineProperty(alberto,"terminal",{
//   value:"VSCode",
//   enumerable: true,
//   writable: false,
//   configurable: false,
// });
// Object.defineProperty(alberto,"",{
//   value:"",
//   enumerable: true,
//   writable: true,
//   configurable: true,
// });

// Object.defineProperty(alberto,"pruebaNasa",{
//   value:"extraterrestres",
//   enumerable: false,
//   writable: false,
//   configurable: false,
// });
// Object.seal();
// Object.freeze();
// console.log(Object.getOwnPropertyDescriptors(alberto));

/************ */

// const obj1 ={
//   a:"a",
//   b:"b",
//   c:{
//     d:"d",
//     e:"e",
//   }
// }
// const obj2 ={};

// for (prop in obj1) {
//   obj2[prop] = obj1[prop];
// }

// const obj3 = Object.assign({},obj1);
// const obj4 = Object.create({},obj1);


const obj1 ={
  a:"a",
  b:"b",
  c:{
    d:"d",
    e:"e",
  },
  editA(){
    this.a ="AAAAAAAA";
  }
}
// const stringfiedComplexObj = JSON.stringify(obj1);
// const obj = JSON.parse(stringfiedComplexObj);

// function recursiva(){
//   if (/*validacion*/) {
//     //llamado recursivo 
//   }else{
//     //llamados normales, ssin recursividad
//   }
// }
// const numeritos = [0,1,2,3,4,5,6,7,8,9];
// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++) {
//   const numerito = numeritos[index];
//   console.log({index,numerito});
  
// }

// const numeritosA = [0,1,2,3,4,5,6,7,8,9,11,55,1564,3,53,321,351,315,35,35,2];

// function recursiva(numeritosA){
//   if (numeritosA.length !=0) {
//     const num = numeritosA[0];
//     console.log(num);
//     numeritosA.shift();
//     recursiva(numeritosA)
//   }
// }

function isObject(subject){
return typeof subject =="object";
}
function isArray(subject){
  return Array.isArray(subject);
}
function deepCopy(subject){
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);
  if (subjectIsArray){
    copySubject = [];
  }else if(subjectIsObject){
    copySubject = {}
  }else{
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);
    if (keyIsObject) {
      // copySubject[key] = deepCopy(subject[key]);
    }else{
      if(subjectIsArray){
        copySubject.push(subject[key]);
      }else{
        copySubject[key] = subject[key];
      }
    }
  }
  return copySubject
}

const studentBase ={
  name:undefined,
  email:undefined,
  age:undefined,
  approvedCourses:undefined,
  learningPaths:undefined,
  socialMedia:{
    twitter:undefined,
    instagram:undefined,
    facebook:undefined
  },
}

const jose = deepCopy(studentBase);
Object.seal(jose);
jose.name = "Jose Alberto";
// Object.defineProperty(jose,"name",{
//   value:"jose",
//   configurable:false,
// })

/****************** */
//Factory pattern y RORO
/****************** */

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    "_name": name,
  };

  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name(){
     return  private["_name"];
    },
    set name(newName){
      if (newName.length !=0) {
        private["_name"] = newName;
      }else{
        console.warn("tu nombre debe tener al menos 1 caracter");
      }
    }
    // readName() {
    //   return private["_name"];
    // },
    // changeName(newName) {
    //   private["_name"] = newName;
    // },
  };

  Object.defineProperty(public, "readName", {
    writable: false,
    configurable: false,
  });
  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });

  return public;
}

const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });