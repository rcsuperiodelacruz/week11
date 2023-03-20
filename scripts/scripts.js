function greet(name, time = 'day'){
    console.log(`good ${time} ${name}`)
}
name = prompt('enter name')
time = 'night'

greet(name)

const greet1 = function(){
    console.log("hello" + name)

}
greet1(name)

const greet2 = (name)=>{
    console.log("hello" + name)

}
greet2(name)
