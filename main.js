const doniel ={
    name:"Doniel",
    age:27,
    cursosAprobados:[
        "curso PHP",
        "curso PYTHON",
        "curso RUBY",
        "curso JAVASCRIP"
    ],

    aprobarCurso(newCurso){
        this.cursosAprobados.push(newCurso);
  
    }
};

// DONIEL APROBO EL CURSO
doniel.cursosAprobados.push("Laravel");

function Student(name,age,cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}
Student.prototype.aprobarCurso = function(newCurso){
    this.cursosAprobados.push(newCurso);
}

const duby = new Student(

    "Duby Acosta",
    21,
    [
        "Diseno",
        "html"
    ]
);

// prototipos con sintaxis de  clas
class Studen2{
    constructor({name,age,cursosAprobados}){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(newCurso){
        this.cursosAprobados.push(newCurso);

    }
}

const abc = new Studen2(

  { name: "Duby solanger",
    age:21,
    cursosAprobados:[
        "Diseno 2",
    ],}
);
