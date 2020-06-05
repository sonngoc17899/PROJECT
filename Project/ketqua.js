// let hotelID = parseInt(localStorage.getItem("selectedHotel"));
let hotel = JSON.parse(localStorage.getItem(`hotel`));
// console.log(hotelID);
function show(hotel){
    let tboby = document.getElementById("show");
    tboby.innerHTML = "";
    for(let i=0;i<hotel.length;i++)
    {
        let html = `<tr>
        <td>
        <img src="${hotel[i].Img[2]}" alt="" width="200px" height="150px">
        </td>
        <td><br><h5>${hotel[i].Name}</h5>
        <br><p style="color: blue;">${hotel[i].Address}</p></td>
        <td><p style="color: red;">Giá mỗi đêm từ ${hotel[i].Price}đ</p></td>
        <td>
            <button onclick="showDetail(${hotel[i].Id});" class="link">Xem thông tin và đặt phòng!</button>
        </td>
        </tr>
        `
        tboby.innerHTML += html;
    }
}
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
    window.location.href = "info.html";
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


