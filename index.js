// Remember to import the data and Dog class!
import Dog from './Dog.js';
import dogs from "./data.js";

const dogsArray = ["Rex","Bella","Teddy"];
let isWaiting = false;

function getNewDog(){
    const newDogData = dogs[dogsArray.shift()];
    console.log(newDogData)
    return newDogData ? new Dog(newDogData) : {};

}

function renderPost(){
    document.getElementById("post").innerHTML = dog.getNewPost();
}

let dog = getNewDog();
renderPost();

document.getElementById("like-btn").addEventListener("click", () => {

    if(!isWaiting) {
        isWaiting = true;
        if (nope.style.display = "none") {
            like.style.display = "block";
        }
        getBadge();
    }         
})

document.getElementById("nope-btn").addEventListener("click", () => {

    if(!isWaiting) {
        isWaiting = true;
        if (like.style.display = "none") {
            nope.style.display = "block";
        }
        getBadge();
    }  
})


function getBadge() {
    setTimeout(() => {
        dog = getNewDog();
        renderPost();
        isWaiting = false;
    }, 1500);
}

function checkPost(){
    if(dogsArray.length < 0) {
        return `
        <div id="end-message">No more dogs!</div>
        <section style="display:none"></section>
        `
    }
}

