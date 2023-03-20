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

let radius = prompt('what is the radius of the circle')

function circleArea(radius){
    radius = parseInt(radius);
    if (isNaN(radius)){
        alert('this is not a number')
    }else{    
        const area = Math.PI * radius**2;
    }

    return area
}

 let area = circleArea(radius);
 alert(`the area of a circle with radius ${radius} is ${area}`);
