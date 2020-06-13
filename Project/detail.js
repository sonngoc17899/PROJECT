let hotelId = parseInt(localStorage.getItem(`selectedHotelId`));
let hotel = JSON.parse(localStorage.getItem(`hotel`));
let hotel1 = hotel.find(function(value){
    return value.Id === hotelId;
})
let comment = localStorage.getItem(`comment`);
let comment1 = comment.split(`,`);

let sName = document.getElementById(`name`);
let address = document.getElementById(`address`);
let price = document.getElementById(`gia`);
let mota = document.getElementById(`mota`);
let image = document.getElementById(`image`);
let div = document.getElementById(`comment`);
let user = document.getElementById(`users`);

sName.innerHTML = hotel1.Name;
address.innerHTML = hotel1.Address;
price.innerHTML = `<p style="font-size: 25px; font-height: 30px; font-family: MuseoSans,sans-serif; color: #f96d01">Giá phòng mỗi đêm từ ${vnd(hotel1.Price.toString())} VND</p>`
mota.innerHTML = `<p style="font-size: 15px;">Tiện nghi khách sạn: ${hotel1.Description}</p>`
image.innerHTML = `<div class="carousel-item active" >
<img src="${hotel1.Img[1]}" width="750px" height="250px">
</div>
<div class="carousel-item">
<img src="${hotel1.Img[2]}" width="750px"  height="250px">
</div>
<div class="carousel-item">
<img src="${hotel1.Img[2]}" width="750px"  height="250px">
</div>
<div class="carousel-item">
<img src="${hotel1.Img[4]}" width="750px"  height="250px">
</div>
`
div.innerHTML = `<div style="margin-right: 40%;"><h2>Bài đánh giá ${hotel1.Name} từ khách hàng
</h2></div>`
user.innerHTML = `<h6>Người dùng ẩn danh</h6>
<p>
<i>${comment1[(Math.floor(Math.random()*2))]}</i>
</p>
<h6>Người dùng ẩn danh</h6>
<p>
<i>${comment1[(Math.floor(Math.random()*6)+2)]}</i>
</p>
<h6>Người dùng ẩn danh</h6>
<p>
<i>${comment1[(Math.floor(Math.random()*2))]}</i>
</p>
<h6>Người dùng ẩn danh</h6>
<p>
<i>${comment1[(Math.floor(Math.random()*8))]}</i>
</p>
<h6>Người dùng ẩn danh</h6>
<p>
<i>${comment1[(Math.floor(Math.random()*14))]}</i>
</p>
`
let priceHotel = hotel1.Price;
let nameHotel = hotel1.Name;
function showInfo(){
    localStorage.setItem(`price1`, priceHotel);
    localStorage.setItem(`name1`, nameHotel);
    window.location.href = "info.html"
}

function send(){
    let commentUser = document.getElementById(`comment-user`);
    let star = document.getElementById(`star`);
    if(commentUser.value !== ``)
    {
        comment1.push(commentUser.value);
        user.innerHTML += `<h6>Người dùng ẩn danh</h6>
        <p>
        <i>${commentUser.value}</i>
        </p>`
        // star.remove();
    }   
}
function vnd(a){
    let b = a.split(``);
    if(b.length >=4 && b.length <=6){
    b.splice(b.length-3, 0, `.`)
    }else if(b.length >=7 && b.length<=9)
    {
    b.splice(b.length-3, 0, `.`);
    b.splice(b.length-7, 0, `.`);
    }
    let c = b.join(``);
    return c;
}






