let instruments = [];

let synthApp = {
    synth: new Tone.Synth().toDestination(),
    notes: ["C4", "D4", "E4", ],
    currentInstrument: 0,
    playSound() {
        this.synth.triggerAttackRelease(this.notes[this.currentInstrument], "8n")
        this.currentInstrument++;

        if (this.currentInstrument == 1){
            instruments[0] = new Woodwind(" Loud");
            instruments[0].playNext();
        }
        if(this.currentInstrument == 2){
            instruments[1] = new Percussion(" Soft")
            instruments[1].playNext();
        }
        if(this.currentInstrument == 3){
            this.currentInstrument = 0;
            instruments[2] = new String(" As loud as Possible ")
            instruments[2].playNext();
        }

        setTimeout(this.playSound.bind(this), 500);
    }
}

class Intrument {

    constructor(loudness, family, playVerb){
        this.loudness = loudness;
        this.family = family;
        this.playVerb = playVerb;
    }

    playNext(){
        console.log("Family: " + this.family+ ", " + this.playVerb + this.loudness);
        
    }
}


class Woodwind extends Intrument{
    constructor(loudness){
        super(loudness, "Wood Wind", "Play Sax");
    }

}

class Percussion extends Intrument{
    constructor(loudness){
        super(loudness, "Percussion", "Play Snare" );
    }
}

class String extends Intrument{
    constructor(loudness){
        super(loudness, "String",  "play Guitar");
    }
}
