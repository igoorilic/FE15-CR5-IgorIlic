"use strict";
// creating a variable for the array and setting it in empty brackets so the value can fill in with it
let animal1 = [];
// creating the classes 
class animal {
    // creating the constrcutor 
    constructor(img, name, gender, size, age, vaccine) {
        this.img = img;
        this.name = name;
        this.gender = gender;
        this.size = size;
        this.age = age;
        this.vaccine = vaccine;
        animal1.push(this);
    }
    // function for what should be displayed in the id/cards
    startDisplay() {
        return `<div class="col mx-0">
                    <div class="card shadow-lg mb-1" id="testtest" style="width: 18rem;">
                        <img src="${this.img}" class="card-img-top" alt="...">
                    <div class="card-body p-0">
                        <h5 class="card-title text-center bg-dark text-light p-1">${this.name}</h5>
                        <p class="card-text">Gender: ${this.gender}</p>
                        <p class="card-text">Age: ${this.age}</p>
                        <p class="card-text">Size: ${this.size}</p>
                        <p class="card-text text-center btn d-flex justify-content-center bg-${this.vaccine ? "success" : "danger"}">Vaccine ${this.vaccine}</p>`;
    }
    // letting it open so that the start and end display can fill up the extended childs 
    endDisplay() {
        return `</div>
                </div>
                </div>`;
    }
    // creating the display function so that start and enddisplay will return together
    display() {
        return this.startDisplay() + this.endDisplay();
    }
}
// child extending creating 
class cat extends animal {
    constructor(img, name, gender, size, age, vaccine, breed, furcolor, URLbreed) {
        super(img, name, gender, size, age, vaccine);
        this.breed = breed;
        this.furColor = furcolor;
        this.URLbreed = URLbreed;
    }
    //  grabbing the super from the parent so i dont have to repeat
    startDisplay() {
        return `${super.startDisplay()}
              <p class="card-text">Breed: ${this.breed}</p>
              <p class="card-text">Fur color: ${this.furColor}</p>
              <p class="card-text">Breed info: </a>
              <a href="">${this.URLbreed}</a>
            </div>
            </div>
            </div>`;
    }
}
// child extending creating 
class dog extends animal {
    constructor(img, name, gender, size, age, vaccine, breed, training) {
        super(img, name, gender, size, age, vaccine);
        this.breed = breed;
        this.training = training;
    }
    //  grabbing the super from the parent so i dont have to repeat
    startDisplay() {
        return `${super.startDisplay()}
              <p class="card-text">Breed: ${this.breed}</p>
              <p class="card-text">Training: ${this.training}</p>
            </div>
            </div>
            </div>`;
    }
}
// info animals
new animal("img/pig.jpg", "Bacon", "male", "small", 2, true);
new animal("img/hippo.jpg", "Hippocleansi", "male", "large", 25, false);
new animal("img/giraffe.jpg", "Longdotclown", "female", "xxlarge", 12, true);
// info cats
new cat("img/cat1.jpg", "Gray sheep", "female", "small", 3, true, "persian", "gray", "https://en.wikipedia.org/wiki/Persian_cat");
new cat("img/cat2.jpg", "Gray sheep", "female", "small", 3, true, "persian", "gray", "https://en.wikipedia.org/wiki/Persian_cat");
new cat("img/cat3.jpg", "Mary", "female", "small", 1, false, "british shorthair", "blond", "https://en.wikipedia.org/wiki/British_Shorthair");
// info dogs
new dog("img/beagle.jpg", "Pongo", "male", "medium", 3, true, "beagle", true);
new dog("img/dalmatiner.jpg", "Luxina", "female", "large", 5, false, "Dalmatiner", false);
new dog("img/germanSheeper.jpg", "Rexina", "male", "large", 2, true, "German Sheeper", true);
// sorting 
// picking the button as a trigger
document.getElementById("sortIcon").addEventListener("click", sortingAge);
// creating the function
function sortingAge() {
    // picking the array from beginning and declaring the function for sorting
    animal1.sort(function (a, b) {
        // in the making of the sorting
        return a.age - b.age;
    });
    // Making it not overwrite
    document.getElementById("row").innerHTML = "";
    // displaying the sorted result 
    showCard();
}
;
// cards
// displaying the cards 
function showCard() {
    // making the loop for the cards. taking the values of it.
    animal1.forEach((val) => {
        // picking the id where it should display and making the cards 
        document.getElementById("row").innerHTML += val.display();
    });
}
// calling the function (the cards)
showCard();
