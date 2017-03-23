//1 object 属性 简写

function objSimpleAttr() {
  const MugenScrollData = 'list';
  const MugenScroll = {MugenScrollData} //{MugenScrollData}等同于{MugenScrollData:MugenScrollData}=>{MugenScrollData}，属性名为变量名, 属性值为变量的值
  console.dir(MugenScroll) //{MugenScrollData:list};
}
//属性名为变量名, 属性值为变量的值

function objAttrIsVar(){
  function getInfo(name,sex) {
    return {name,sex}
  }

  console.log("姓名："+getInfo('ivan','男').name)
  console.log("性别："+getInfo('ivan','男').sex)
}
//2 object 方法 简写

function objSimpleMethod() {
  const method={
    getName(){
      console.log('ivan');
      //等同于下面的写法
    },
    getSex:function () {
      console.log('man');
    }
  }

  method.getName();
  method.getSex();
}

// object 属性名表达式，即属性名为不确定的表达式
function objectAttrExp() {
  var MAX_AGE='最大年龄';
  var GET_NAME='getName';

  var person={
    [GET_NAME](){
      return 'ivan';
    },
    [MAX_AGE]:'100',
  }
  console.log(person[MAX_AGE])
  console.log(person['getName']())
  /*const students={}
   getStudent();
   function getStudent() {
   for(let i=0;i<5;i++){
   students['学生'+i+":"]=i;
   }
   }
   console.log(students['学生2:'])*/
}

const person={
  sayHi(){
    console.log('hehe')
  }
}

const obj={
  get age(){

  },
  set age(number){

  }
}

function objectGetMethodName() {
  console.log('方法名：'+person.sayHi.name);
  //console.log('方法名：'+person.get.age);//error Cannot read property 'age' of undefined
  //console.log('方法名：'+person.set.age);//error Cannot read property 'age' of undefined
  const descriptor = Object.getOwnPropertyDescriptor(obj, 'age');
  console.log('方法名：'+descriptor.get.name);
  console.log('方法名：'+descriptor.set.name);
}

function objectIs() {
  console.log(Object.is(1,1))//true
  console.log(Object.is('1',1))//false
  console.log(Object.is({},{}))//false
}

function objectAssign() {
  let obj1={
    'name':'ivan'
  }
  let obj2={
    'age':99
  }
  let obj3={
    'age':10
  }
  console.log(Object.assign(obj1,obj2,obj3))
}



