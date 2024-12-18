export class Person{
    // public name: string;
    // public address: string;

    // constructor(name: string, address: string){
    //     this.name = name;
    //     this.address = address;
    // }

    constructor(public name: string, private address?: string){}
}

export class Hero{
    constructor(
        public superHero: string,
        public ageHero: number,        
        public person: Person
    ){}
}


const ironman = new Person('Jhonny','Colombia' );
const result = new Hero('Camejaa', 55, ironman);
console.log(result);