let hotel = JSON.parse(localStorage.getItem(`hotel`));
let sName = localStorage.getItem(`name1`)
let price = localStorage.getItem(`price1`);
let startDay = localStorage.getItem(`startDay`);
let endDate = localStorage.getItem(`soDem`);
let people = localStorage.getItem(`people`);



let info = document.getElementById(`infor`);
let html = `<tr>
    <td>Số đêm nghỉ</td>
    <td>${endDate}</td>
</tr>
    <tr>
        <td>Ngày nhận phòng</td>
        <td>${startDay}</td>
    </tr>
    <tr>
        <td>Phòng kiểu</td>
        <td>${people}</td>
    </tr>
    <tr>
        <td>Giá tiền/đêm</td>
        <td>${price} VND</tr>
`
let name = document.getElementById(`name`);
let phone = document.getElementById(`phone`);
let email = document.getElementById(`email`);
let email1 = document.getElementById(`email1`);
info.innerHTML = html;
function datPhong(){
    if(name !== `` && phone !== `` && email1 !== `` && email !== `` && email===email1 )
    {
        alert(`Đặt phòng thành công, chúng tôi sẽ phản hồi bạn qua số điện thoại và email!`)
    }
    else alert("Rất tiếc đã xảy ra lỗi, mời bạn nhập lại phần thông tin cá nhân!")
}
