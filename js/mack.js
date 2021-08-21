
/* varialbe declare */
const basePrice = document.getElementById('best-price');
const memoryCostTotal = document.getElementById('memory-cost');
const storageCostTotal = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalAmount = document.getElementById('total-price');
const promoCode = document.getElementById('promo-code');
const discountPrice = document.getElementById('discount-price');


//memory cost 
document.getElementById('memory-btn-first').addEventListener('click', function () {
    memoryCostTotal.innerText = 0;
    totalCost()
})
document.getElementById('memory-btn-second').addEventListener('click', function () {
    memoryCostTotal.innerText = 180;
    totalCost()
})

//storage cost 

document.getElementById('storage-btn-first').addEventListener('click', function () {
    storageCostTotal.innerText = 0;
    totalCost()
})

document.getElementById('storage-btn-second').addEventListener('click', function () {
    storageCostTotal.innerText = 100;
    totalCost()
})
document.getElementById('storage-btn-third').addEventListener('click', function () {
    storageCostTotal.innerText = 180;
    totalCost()
})


// delivery cost 
document.getElementById('delivery-btn-first').addEventListener('click', function () {
    deliveryCost.innerText = 0;
    totalCost()
})
document.getElementById('delivery-btn-second').addEventListener('click', function () {
    deliveryCost.innerText = 20;
    totalCost()
})

// update total price 
function totalCost() {
    const bestPrice = parseFloat(basePrice.innerText);
    const addMemoryCost = parseFloat(memoryCostTotal.innerText);
    const addStorageCost = parseFloat(storageCostTotal.innerText);
    const addDeliveryCost = parseFloat(deliveryCost.innerText);
    const coupon = promoCode.value;
    const totalPrice = bestPrice + addMemoryCost + addStorageCost + addDeliveryCost;
    totalAmount.innerText = totalPrice;

    // coupon code check
    if (coupon == 'stevekaku') {
        const discountPriceTotal = totalPrice * 20 / 100;
        discountPrice.innerText = totalPrice - discountPriceTotal;
    }
    else {
        discountPrice.innerText = totalPrice;
    } promoCode.value = '';
    return totalAmount;
}

document.getElementById('promo-btn').addEventListener('click', function () {
    totalCost();
})