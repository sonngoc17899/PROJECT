let hotelId = parseInt(localStorage.getItem(`selectedHotelId`));
let hotel = JSON.parse(localStorage.getItem(`hotel`));
let hotel1 = hotel.find(function(value){
    return value.Id === hotelId;
})
console.log(hotel1);

