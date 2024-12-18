function addNumber(a:number, b:number):number{
    return a + b;
}

const result: string =  addNumber(1,2).toString();

const addNumbersArrow = (a:number, b:number):string =>{
    return `${a+b}`;
}

const result1 = addNumbersArrow(2,5);

console.log({result,result1});

