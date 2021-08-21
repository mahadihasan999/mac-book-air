// const memoryButton1 = document.getElementById('memory-btn-first');
// const storageButton1 = document.getElementById('storage-btn-first');
// const deliveryButton1 = document.getElementById('delivery-btn-first');

// const memoryButton2 = document.getElementById('memory-btn-second');
// const storageButton2 = document.getElementById('storage-btn-second');
// const storageButton3 = document.getElementById('storage-btn-third');
// const deliveryButton2 = document.getElementById('delivery-btn-second');


// const memoryCost = document.getElementById('memory-cost');
// const storageCost = document.getElementById('storage-cost');
// const deliveryCost = document.getElementById('delivery-cost');

// memoryButton1.addEventListener('click', function () {
//     memoryCost.innerText = 0;


// })
// storageButton1.addEventListener('click', function () {
//     storageCost.innerText = 0;

// })
// deliveryButton1.addEventListener('click', function () {
//     deliveryCost.innerText = 0;

// })



// function updatePrice(totalId) {
//     const totalMemoryCost = parseFloat(memoryCost.innerText);
//     const totalStorageCost = parseFloat(storageCost.innerText);
//     const totalDeliveryCost = parseFloat(deliveryCost.innerText);
//     const totalProductPrice = totalMemoryCost + totalStorageCost + totalDeliveryCost;

//     const totalPrice = document.getElementById(totalId);
//     const totalPriceText = totalPrice.innerText;
//     const newPrice = parseFloat(totalPriceText);
//     const totalPriceEx = newPrice + totalProductPrice;
//     totalPrice.innerText = totalPriceEx;

//     document.getElementById('coupon-btn').addEventListener('click', function () {
//         const couponField = document.getElementById('coupon-input');
//         const coupon = couponField.value;


//         if (coupon == 'steavkaku') {
//             const discountPriceTotal = totalPrice * 20 / 100;
//             totalPriceEx.innerText = totalPrice - discountPriceTotal;

//         }
//         else {
//             totalPrice.innerText = totalPriceEx;
//         }
//         coupon.value = '';
//     });
//     return totalPrice;

// }

// memoryButton2.addEventListener('click', function () {
//     memoryCost.innerText = 180;
//     updatePrice('total-price')
//     updatePrice('grand-total')
// })
// storageButton2.addEventListener('click', function () {
//     storageCost.innerText = 100;
//     updatePrice('total-price')
//     updatePrice('grand-total')
// })
// storageButton3.addEventListener('click', function () {
//     storageCost.innerText = 180;
//     updatePrice('total-price')
//     updatePrice('grand-total')
// })
// deliveryButton2.addEventListener('click', function () {
//     deliveryCost.innerText = 20;
//     updatePrice('total-price')
//     updatePrice('grand-total')
// })




/* vARIABLE declare */
const basePrice = document.getElementById('best-price');
const memoryCostTotal = document.getElementById('memory-cost');
const storageCostTotal = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalAmount = document.getElementById('total-price');
const promoCode = document.getElementById('promo-code');
const discountPriceFirst = document.getElementById('discount-price');


/* Extra memory cost */
document.getElementById('memory-btn-first').addEventListener('click', function () {
    memoryCostTotal.innerText = 0;
    totalCost()
})
document.getElementById('memory-btn-second').addEventListener('click', function () {
    memoryCostTotal.innerText = 180;
    totalCost()
})

// extra storage cost 

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


// extra delivery cost 
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
    const extraMemoryCost = parseFloat(memoryCostTotal.innerText);
    const extraStorageCost = parseFloat(storageCostTotal.innerText);
    const expressDeliveryCost = parseFloat(deliveryCost.innerText);
    const typedCode = promoCode.value;
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + expressDeliveryCost;
    totalAmount.innerText = totalPrice;
    if (typedCode == 'stevekaku') {
        const discountPriceTotal = totalPrice * 20 / 100;
        discountPriceFirst.innerText = totalPrice - discountPriceTotal;
    }
    else {
        discountPriceFirst.innerText = totalPrice;
    } promoCode.value = '';
    return totalAmount;
}

document.getElementById('promo-btn').addEventListener('click', function () {
    totalCost();
})