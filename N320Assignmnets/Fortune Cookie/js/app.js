class RandomPicker{

    //list of all items to be selected from randomly
    items

    constructor(items) {
        //store the use set of items
        this.items = items;
    }

    //returns a randome entry in the array
    pickRandom(){
        return this.items[Math.floor(Math.random()* this.items.length)];
    }

}

class FortuneCookie extends RandomPicker{

    outputElement

    fCount =1;

    constructor(element){
        super(["A lifetime friend shall soon be made.", 
        "A pleasant surprise is waiting for you.",
        "A smile is your personal welcome mat.",
        "All your hard work will soon pay off.",
        "Allow compassion to guide your decisions.",
        "Believe in yourself and others will too.",
        "Chance favors those in motion.",
        "Good Fortune Lies Ahead."]);

        this.outputElement = element;
    }

    openFortune(){
        if(this.fCount<2){
            let paper = this.pickRandom();
            this.outputElement.innerHTML = paper;
        }
        if(this.fCount>= 2){
            this.outputElement.innerHTML = "PLEASE PICK UP A NEW FORTUNE COOKIE!!";
        }
        this.fCount++;
    }

    newFortune(){
        if(this.fCount>= 2){
            this.outputElement.innerHTML = "Please open your cookie!";
            this.fCount=1;
        } 
}
}

let yourFortune = new FortuneCookie(document.getElementById("Fortune"));



