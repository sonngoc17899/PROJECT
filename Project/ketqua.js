// let hotelID = parseInt(localStorage.getItem("selectedHotel"));
let hotel = JSON.parse(localStorage.getItem(`hotel`));
// console.log(hotelID);
console.log(hotel);

function show(hotel){
    let tboby = document.getElementById("show");
    tboby.innerHTML = "";
    for(let i=0;i<hotel.length;i++)
    {
        let html = `<tr>
        <td>
        <img src="${hotel[i].Img[2]}" alt="" width="100" height="100">
        </td>
        <td><br>${hotel[i].Name}
        <br>${hotel[i].Address}</td>
        <td>${hotel[i].Price}</td>
        <td>
            <button onclick="showDetail(${hotel[i].Id});" class="link">Xem thông tin và đặt phòng!</button>
        </td>
        </tr>
        `
        tboby.innerHTML += html;
    }
}
show(hotel);
