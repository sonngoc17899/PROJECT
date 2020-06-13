// let hotelID = parseInt(localStorage.getItem("selectedHotel"));
let hotel = JSON.parse(localStorage.getItem(`hotel`));
let startDay = localStorage.getItem(`startDay`);
let people = localStorage.getItem(`people`);
let day = localStorage.getItem(`soDem`);
let name = localStorage.getItem(`name`);
// console.log(hotelID);
function show(hotel){
    let tboby = document.getElementById("show");
    tboby.innerHTML = "";
    let ketqua = document.getElementById(`ketqua`);
    let error = document.getElementById("error");
    let html1 = `<br><h2>Không tìm thấy kết quả</h2>
                <br><h3>Vui lòng kiểm tra lại lỗi chính tả, dấu cách và các ký tự đặc biệt khác</h3></br>
    `
    ketqua.innerHTML = `<h2>Kết quả tìm kiếm của bạn tại ${name}, Việt Nam</h2>`
    if(hotel.length === 0) error.innerHTML = html1;
    for(let i=0;i<hotel.length;i++)
    {
        let html = `<tr onclick="showDetail(${hotel[i].Id});">
        <td style="border: 1px soild black">
        <img src="${hotel[i].Img[2]}" alt="" width="200px" height="150px">
        </td>
        <td><label><h4 style="margin-left: 20px">${hotel[i].Name}</h4></label>
        <br><p style="color: #8f8f8f; margin-left: 20px"">${hotel[i].Address}</br></td>
        <td><p style="color: #1ba0e2; margin-left: 20px; font-size: 12px; font-weight: 700; font-family: MuseoSans,sans-serif;">Thanh toán khi nhận phòng</p>
        <p style="margin-left: 20px; margin-right: 10px; font-size: 18px; font-weight: 700; color: #f96d01; font-family: MuseoSans,sans-serif;">${vnd(hotel[i].Price.toString())} VND</p></td>
        </tr>
        <span class="hover" style="color: white; font-size: 0px; line-height: 0;">Khoảng trắng</span>
        `
        tboby.innerHTML += html;
    }
}
{/* <td>
<button onclick="showDetail(${hotel[i].Id});" class="link" style="background-color: coral; color: white; border: 0px; font-family: Arial, Helvetica, sans-serif;
width: 190px; font-size: 15px; height: 50px; border-radius: 4px;">Đặt phòng ngay!</button>
</td> */}
show(hotel);
function sortPriceDow(){
    hotel.sort(function(a, b){return b.Price - a.Price});
    show(hotel);
}
function sortPriceUp(){
    hotel.sort(function(a, b){return a.Price-b.Price});
    show(hotel);
}
function showDetail(id){
    localStorage.setItem(`selectedHotelId`, id);
    localStorage.setItem(`hotel`, JSON.stringify(hotel));
    setTimeout(function(){
        window.location.href = "detail.html";
    },500)
}
function Address(){
    let address = document.getElementById("address");
    let html = `
    <button class="dropdown-item" onclick="id1();" type="button">${hotel[0].District}</button>
    <button class="dropdown-item" onclick="id2();" type="button">${hotel[5].District}</button>
    <button class="dropdown-item" onclick="id3();" type="button">${hotel[8].District}</button>
    `
    address.innerHTML = html;
}
Address();
function id1(){
    let id = hotel.filter(function(value){
        return value.District === hotel[0].District;
    })
    show(id);
}
function id2(){
    let id = hotel.filter(function(value){
        return value.District === hotel[5].District;
    })
    show(id)
}
function id3(){
    let id = hotel.filter(function(value){
        return value.District === hotel[8].District;
    })
    show(id);
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
