var  count = 0;
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
    else{
        alert("Warning : You can't buy more than 4 ticket.");
    }
}
