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
