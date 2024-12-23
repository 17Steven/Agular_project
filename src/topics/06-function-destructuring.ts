export interface Product{
    description: string;
    price: number;
}

// const phone: Product = {
//     description: 'Nokia A1',
//     price: 100
// }
// const tablet: Product = {
//     description: 'iPad Air',
//     price: 250
// }

export interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number,number]{  
    let total = 0;
    options.products.forEach( ({price}) => {
        total += price
    });
    return [total,total * options.tax];
}

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const [Total, TaxTotal] = taxCalculation({
//     products:shoppingCart,
//     tax
// })

// console.log('Total', Total);
// console.log('Tax', TaxTotal);

