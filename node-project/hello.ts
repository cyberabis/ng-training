interface Human {
    name: string
}

class Man implements Human {
    name: string;
    speak(){
        console.log('In male voice, I am ', this.name);
    }
}

class Woman implements Human {
    name: string;
    speak() {
        console.log('In female voice, I am ', this.name);
    }
}

let abishek = new Man();
abishek.name = 'Abishek';
abishek.speak();
