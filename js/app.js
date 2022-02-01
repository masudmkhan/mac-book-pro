// function for extra memory
function memoryChange(memory) {
    const extraMemory = document.getElementById('extra-memory-cost');
    if (memory == 8) {
        extraMemory.innerText = 0;
    }
    if (memory == 16) {
        extraMemory.innerText = 180;
    }
    totalPrice();
}

// function for extra storage
function storageChange(storage) {
    const extraStorage = document.getElementById('extra-storage-cost');
    if (storage == 256) {
        extraStorage.innerText = 0;
    }
    if (storage == 512) {
        extraStorage.innerText = 100;
    }
    if (storage == 1000) {
        extraStorage.innerText = 180;
    }
    totalPrice();
}

// function for delivery charge
function deliveryCharge(deliver) {
    const deliveryCost = document.getElementById('delivery-charge');
    if (deliver == 'free') {
        deliveryCost.innerText = 0;
    }
    if (deliver == 'paid') {
        deliveryCost.innerText = 20;
    }
    totalPrice();
}

// function for total price
function totalPrice() {
    const totalCost = document.getElementById('total-price');
    const finalTotal = document.getElementById('final-total');
    const extraMemoryText = document.getElementById('extra-memory-cost').innerText;
    const extraMemory = parseInt(extraMemoryText);
    const extraStorageText = document.getElementById('extra-storage-cost').innerText;
    const extraStorage = parseInt(extraStorageText);
    const deliveryCostText = document.getElementById('delivery-charge').innerText;
    const deliveryCost = parseInt(deliveryCostText);
    const total = 1299 + extraMemory + extraStorage + deliveryCost;
    totalCost.innerText = total;
    finalTotal.innerText = total;
}

// function for promo code
function promoCode() {
    const finalCostText = document.getElementById('final-total');
    const totalCostText = document.getElementById('total-price');
    const totalCost = parseFloat(totalCostText.innerText);
    const promoInput = document.getElementById('promo-input');
    // if promo code is stevekaku then 20% discount
    if (promoInput.value == 'stevekaku') {
        const reducedValue = totalCost * 0.2;
        const finalCostValue = totalCost - reducedValue;
        finalCostText.innerText = finalCostValue;
        document.getElementById('promo-accepted').style.display = 'block';
        promoInput.value = '';
    }
    else {
        document.getElementById('promo-accepted').style.display = 'none';
        promoInput.value = '';
    }
}

// Button for 8GB extra memory
const btnMemory8GB = document.getElementById('memory-8gb-btn').addEventListener('click', function () {
    memoryChange(8);
})
// Button for 16GB extra memory
const btnMemory16GB = document.getElementById('memory-16gb-btn').addEventListener('click', function () {
    memoryChange(16);
})

// Button for 256GB storage
const btnSsd256GB = document.getElementById('ssd-256gb-btn').addEventListener('click', function () {
    storageChange(256);
})
// Button for 512GB storage
const btnSsd512GB = document.getElementById('ssd-512gb-btn').addEventListener('click', function () {
    storageChange(512);
})
// Button for 1TB storage
const btnSsd1TB = document.getElementById('ssd-1tb-btn').addEventListener('click', function () {
    storageChange(1000);
})

// Button for free delivery
const freeDelivery = document.getElementById('free-delivery-btn').addEventListener('click', function () {
    deliveryCharge('free');
})
// Button for paid delivery
const paidDelivery = document.getElementById('paid-delivery-btn').addEventListener('click', function () {
    deliveryCharge('paid');
})

// Button for promo code
const applyPromo = document.getElementById('apply-promo').addEventListener('click', function () {
    promoCode();
})