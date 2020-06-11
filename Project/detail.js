let hotelId = parseInt(localStorage.getItem(`selectedHotelId`));
let hotel = JSON.parse(localStorage.getItem(`hotel`));
let hotel1 = hotel.find(function(value){
    return value.Id === hotelId;
})
let sName = document.getElementById(`name`);
let address = document.getElementById(`address`);
let price = document.getElementById(`gia`);
let mota = document.getElementById(`mota`);
let image = document.getElementById(`image`);
sName.innerHTML = hotel1.Name;
address.innerHTML = hotel1.Address;
price.innerHTML = `<p style="font-size: 25px; font-family: MuseoSans,sans-serif; color: #f96d01">Giá phòng mỗi đêm từ ${hotel1.Price} VND</p>`
mota.innerHTML = `<p style="font-size: 15px;">Tiện nghi khách sạn: ${hotel1.Description}</p>`
image.innerHTML = `<div class="carousel-item active" >
<img src="${hotel1.Img[1]}" width="750px" height="350px">
</div>
<div class="carousel-item">
<img src="${hotel1.Img[2]}" width="750px"  height="350px">
</div>
<div class="carousel-item">
<img src="${hotel1.Img[3]}" width="750px"  height="350px">
</div>
<div class="carousel-item">
<img src="${hotel1.Img[4]}" width="750px"  height="350px">
</div>
`
let priceHotel = hotel1.Price;
let nameHotel = hotel1.Name;
function showInfo(){
    localStorage.setItem(`price1`, priceHotel);
    localStorage.setItem(`name1`, nameHotel);
    window.location.href = "info.html"
}




