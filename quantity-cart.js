const shopingCart = [
    {name : 'shoe',price: 2200 ,quantity :5},
    {name : 'shirt',price: 3200 ,quantity :2},
    {name : 'pant',price: 1200 ,quantity :3},
    {name : 'belt',price: 600 ,quantity :4},
    {name : 'tshirt',price: 200 ,quantity :7},
];

function totalCost (products){
    let sum = 0;
    for ( let i= 0 ; i<products.length ; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum =sum+ productTotal;
        // console.log(product);
    }
    return sum;
}
const expens = totalCost(shopingCart);
console.log('Total expense today is :' ,expens);