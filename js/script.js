// Ticket select and Buy function
var count = 0;
function seatSelection(seatId) {
    const ElementContainer = document.getElementById(seatId);
    const classList = ElementContainer.className;
    if (count < 4 || classList.includes('bg-[#1DD100]')) {
        if (classList.includes('bg-[#1DD100]')) {
            deSlectSeat(seatId);
            count--;
        } else {
            selectSeat(seatId);
            count++;
        }
    }
    else {
        alert("Warning : You can't buy more than 4 ticket.");
    }
}


// Discount coupon use function
function useCoupon() {
    const couponText = document.getElementById('Coupon').value;
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = totalPriceElement.innerText;
    let totalPriceFloat = parseFloat(totalPrice);
    const grandPriceElement = document.getElementById('grandPrice');
    if (couponText == 'NEW15') {
        totalPriceFloat -= (totalPriceFloat * 0.15);
        grandPriceElement.innerText = totalPriceFloat;
        const couponLableContainer = document.getElementById('couponLabel');
        couponLableContainer.classList.add('hidden');
    }
    else if (couponText == 'Couple 20') {
        totalPriceFloat -= (totalPriceFloat * 0.20);
        grandPriceElement.innerText = totalPriceFloat;
        const couponLableContainer = document.getElementById('couponLabel');
        couponLableContainer.classList.add('hidden');
    }
    else {
        alert("Warning : The Coupon Code Not Valid.");
    }
}

// Successfull Function by click next button
function Successfulls(event) {
    event.preventDefault(); // Fix the typo here
    const nameFieldContent = document.getElementById('nameFind').value;
    const numberFildContent = document.getElementById('numberFild').value;
    console.log('Hello')
    if (nameFieldContent === '') {
        const nameErrorElement = document.getElementById('nameError');
        nameErrorElement.classList.remove('hidden');
    } else if (numberFildContent === '') {
        const nameErrorElement = document.getElementById('nameError');
        nameErrorElement.classList.add('hidden');
        const numberErrorElement = document.getElementById('numberError');
        numberErrorElement.classList.remove('hidden');
    } else {
        const bodyContainer = document.getElementById('fullBody');
        bodyContainer.classList.add('hidden');
        const ThanksContainer = document.getElementById('Thanks');
        ThanksContainer.classList.replace('hidden', 'flex');
    }
}


function Successfull(event) {
    event.preventDefault();
    const nameFieldContent = document.getElementById('nameFind').value;
    const numberFildContent = document.getElementById('numberFild').value;

    if (nameFieldContent === '') {
        const nameErrorElement = document.getElementById('nameError');
        nameErrorElement.classList.remove('hidden');
    }
    else if (numberFildContent === '') {
        const nameErrorElement = document.getElementById('nameError');
        nameErrorElement.classList.add('hidden');
        const numberErrorElement = document.getElementById('numberError');
        numberErrorElement.classList.remove('hidden');
    }
    else {
        const bodyContainer = document.getElementById('fullBody');
        bodyContainer.classList.add('hidden');
        const ThanksContainer = document.getElementById('Thanks');
        ThanksContainer.classList.replace('hidden', 'flex');
    }

}

// Press continue button for back to the home screen
function BackToHome() {
    const ThanksContainer = document.getElementById('Thanks');
    ThanksContainer.classList.remove('flex');
    ThanksContainer.classList.add('hidden');

    const bodyContainer = document.getElementById('fullBody');
    bodyContainer.classList.remove('hidden');
}

// Amimimaction
