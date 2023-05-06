const shopingCart = [
    {name : 'shoe',price: 2200},
    {name : 'shirt',price: 3200},
    {name : 'pant',price: 1200},
    {name : 'belt',price: 600},
    {name : 'tshirt',price: 200},
];

function totalCost (products){
    let sum = 0;
    for ( let i= 0 ; i<products.length ; i++){
        const product = products[i];
        sum =sum+ product.price;
        // console.log(product);
    }
    return sum;
}
const expens = totalCost(shopingCart);
console.log('Total expense today is :' ,expens);