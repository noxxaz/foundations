"use strict"
console.log("------------ OBJECTS ---------------");

class Toaster {
    constructor() {
      this.bread = null;
    }
    // TODO: your code here
    addToast(bread) {
        this.bread = {type: bread,
                      toasted: false};
    }
    eject() {
        if (this.bread === null) {
            return("Toaster is empty.");
        } else {
            let eject = this.bread.type + 
                (this.bread.toasted ? " (toasted)" : " (raw)");
            clearTimeout(this.timerID);
            this.bread = null;
            return eject;
        }
    }
    start() {
        if (this.bread === null) {
            return("Toaster is empty.");
        } else {
            this.timerId = setTimeout(() => {
                if(this.bread != null) {
                    this.bread.toasted = true;
                    console.log("Ding!");
                }
            }, 2000);
        }
    }
}

const toaster = new Toaster();
toaster.addToast("white bread");
console.log(toaster.bread) // {type: "white bread", toasted: false}

// console.log("ejecting", toaster.eject()); // "white bread (raw)"
// console.log(toaster.bread); // null
// console.log(toaster.eject()); // "white bread (raw)"

console.log(toaster.start());
// console.log("ejecting", toaster.eject()); // "white bread (toasted)"
