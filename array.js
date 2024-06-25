let prices=[98,98,298,398]
//create new prices by adding +1
//expected outpit:[99,199,299,399]

let new_prices=prices.ma((price)=>) {
    return price+1

}
console.log(new_prices)