// let count = 0

// function increase(){
//     count+=1
//     document.getElementById("myLabel").innerHTML=count
// }

// function decrease(){
//     count-=1
//     document.getElementById("myLabel").innerHTML=count
// }

let count = 0

document.getElementById("increaseButton").onclick = function(){
    count+=1
    document.getElementById("myLabel").innerHTML=count
}

document.getElementById("decreaseButton").onclick= function(){
    count-=1
    document.getElementById("myLabel").innerHTML=count
}