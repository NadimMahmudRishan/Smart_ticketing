// Seat slection function
function selectSeat(seatId) {
    const ElementContainer = document.getElementById(seatId);
    ElementContainer.classList.remove('bg-[#F7F8F8]', 'hover:bg-[#d8dbdb]');
    ElementContainer.classList.add('bg-[#1DD100]');
    const seat = ElementContainer.innerText;
    // Number of available seat updated
    const SeatCountContainer = document.getElementById('AvailableSeat');
    const SeatCount = SeatCountContainer.innerText;
    let SeatCountInt = parseInt(SeatCount);
    --SeatCountInt;
    SeatCountContainer.innerText = SeatCountInt;

    // Selected Seat update
    const selectedSeatContainer = document.getElementById('selectedSeat');
    const selectedSeatCount = selectedSeatContainer.innerText;
    let selectedSeatCountInt = parseInt(selectedSeatCount);
    ++selectedSeatCountInt;
    selectedSeatContainer.innerText = selectedSeatCountInt;

    // Seat number & value add into card
    const seatTableContainer = document.getElementById('seatTable');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    // Enter the innertext
    td1.innerText = seat;
    td2.innerText = 'Economy';
    td3.innerText = '550';
    // Append all td into tr
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    // Add class into td
    td1.classList.add('p-3');
    td2.classList.add('p-3');
    td3.classList.add('p-3');
    // Set id for tr and append into table
    const trID = seat.toLocaleLowerCase();
    tr.id = trID;
    seatTableContainer.appendChild(tr);

    // Total Price count & Show
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = totalPriceElement.innerText;
    let totalPriceFloat = parseFloat(totalPrice);
    totalPriceFloat+=500.00;
    totalPriceElement.innerText=totalPriceFloat;
}

// Seat deslection function
function deSlectSeat(seatId) {
    const ElementContainer = document.getElementById(seatId);
    ElementContainer.classList.remove('bg-[#1DD100]');
    ElementContainer.classList.add('bg-[#F7F8F8]', 'hover:bg-[#d8dbdb]');

    // Number of available seat updated
    const SeatCountContainer = document.getElementById('AvailableSeat');
    const SeatCount = SeatCountContainer.innerText;
    let SeatCountInt = parseInt(SeatCount);
    ++SeatCountInt;
    SeatCountContainer.innerText = SeatCountInt;

    // Selected Seat update
    const selectedSeatContainer = document.getElementById('selectedSeat');
    const selectedSeatCount = selectedSeatContainer.innerText;
    let selectedSeatCountInt = parseInt(selectedSeatCount);
    selectedSeatCountInt--;
    selectedSeatContainer.innerText = selectedSeatCountInt;

    // Seat number & value remove into card
    const seat = ElementContainer.innerText;
    const trID = seat.toLocaleLowerCase();
    const seatTableContainer = document.getElementById('seatTable');
    const romoveRow = document.getElementById(trID);
    seatTableContainer.removeChild(romoveRow);

}
