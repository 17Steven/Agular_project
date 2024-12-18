
const skill: string[] = ["Holamundo", "help", "Comer"];

interface Caracter{
    name: string;
    hp:number;
    skill: string[];
    hometow?: string;
}

const strider : Caracter={
    name:"Strider",
    hp:100,
    skill: ["Hola", "Mundo"],
};

strider.hometow="Rivendell";

console.table(strider);
console.table(skill);