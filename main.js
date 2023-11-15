class LearningPath{

}
const escuelaWeb = new LearningPath();
const escuelaData = new LearningPath();
const escuelaDesign = new LearningPath();

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
    learningPaths
});

const dubexy = new Student({
    name:"dubexy",
    username:"duby01",
    email:"duby01@gmail.com",
    instagram: "duby"

});