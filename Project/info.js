let hotel = JSON.parse(localStorage.getItem(`hotel`));
let sName = localStorage.getItem(`name1`)
let price = localStorage.getItem(`price1`);
let startDay = localStorage.getItem(`startDay`);
let endDate = localStorage.getItem(`soDem`);
let people = localStorage.getItem(`people`);

let a = endDate.split(` `);
console.log(a[0]);

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
        <td>${vnd(price.toString())} VND</td>    
    </tr>
    <tr>
    <td>Tổng số tiền cần thanh toán(dự tính)</td>
    <td>${vnd((price*a[0]).toString())} VND</td>
    </tr>
`

info.innerHTML = html;
function datPhong(){
    let name = document.getElementById(`name`);
    let phone = document.getElementById(`phone`);
    let email = document.getElementById(`email`);
    let email1 = document.getElementById(`email1`);
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if(name.value.trim() === ``){ 
        alert("Nhập lại họ tên!");
        name.focus();
    }
    else if(!filter.test(email.value)){
        alert("Hãy nhập địa chỉ Email hợp lệ.\nExample@gmail.com");
        email.focus();
    }else if(phone.value.trim()===``)
    {
        alert("Nhập lại số điện thoại!")
        phone.focus();
    }else if(email.value !== email1.value)
    {
        alert("Địa chỉ Email không giống nhau!");
        email1.focus();
    }else window.location.href = "info1.html";
    
    // if(name !== `` && phone !== `` && email1 !== `` && email !== `` && email === email1)
    // {
    //     
    // }
    // else alert("Rất tiếc đã xảy ra lỗi, mời bạn nhập lại phần thông tin cá nhân!")
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
