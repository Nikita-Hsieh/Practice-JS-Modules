const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = parseInt(movieSelect.value );
console.log(ticketPrice);


//update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeats);

    const selectedSeatsCount = selectedSeats.length;
    // console.log(selectedSeatsCount);
     count.innerText = selectedSeatsCount; 
     total.innerText = selectedSeatsCount * ticketPrice;
}

//Movie Selection
movieSelect.addEventListener('change', e => {
    ticketPrice = parseInt(e.target.value);
    updateSelectedCount();
})

container.addEventListener('click', e => {
    // console.log(e.target);
     if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});