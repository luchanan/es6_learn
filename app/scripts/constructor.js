class Animal{
    constructor(name){
        this.name=name;
    }
    say(){
        console.log(this.name+" say hi!");
    }
}
const animal=new Animal("luchanan");
animal.say();