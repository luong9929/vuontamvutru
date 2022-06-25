
var tagh3 = document.getElementById('title');

//.innerHTML: phần nội dung ở giữa 2 thẻ đóng mở html
tagh3.innerHTML = 'may ngu nhu cho';

//value là phần nội dung của thẻ input thường chứa giá trị người dùng nhập vào
var tagInput = document.getElementById('txt');

tagInput.value = 'hello';

//truy suất đến giá trị value của thẻ
var tagInputNumber = document.getElementById('number')
console.log(tagInputNumber.value) ;
// alert(tagInputNumber.value);


//src là nội dung hình ảnh của thẻ img
var tagIMG = document.getElementById('hinhanh')

tagIMG.src = './img/pic3.jpg'

function sayhello () {
  alert('hello every body !');
}


//viết chương trình nhập vào 1 giá trị khi người dùng nhập vào giá ấn nút thì giá trị sẽ in ra span
// handleEvent: xử lý sự kiện
function hienthithongtin () {
  var input = document.getElementById('giatrinhap')

  var output = input.value

  var tagSpan = document.getElementById('hienthiketqua')
  tagSpan.innerHTML = output
}


function hienthitienluong () {
  var tienluong = document.getElementById('tienluong1h').value;
  var sogiolam = document.getElementById('sogiolam').value;

  var tongluong = 0;

  tongluong = tienluong * sogiolam ;
  

  document.getElementById('tongluong').innerHTML = tongluong.toLocaleString();
}




 var btndangnhap = document.getElementById('btndangnhap')
 btndangnhap.onclick =  function xulydangnhap () {
   
  var taikhoan = document.getElementById('taikhoan').value;
  var matkhau = document.getElementById('matkhau').value;

  var thongbao = '';

  thongbao = 'Tài khoản : ' + taikhoan + ' -  Mật Khẩu : ' + matkhau;
  var tagketqua = document.getElementById('ketquadangnhap');
  
  tagketqua.innerHTML = thongbao ;

  tagketqua.style.backgroundColor = 'blue';
  tagketqua.style.color =  '#ffff ';
  tagketqua.style.padding = '15px';
  tagketqua.style.margin = '10px 30px '
}

 var btntinhtientip = document.getElementById('btntinhtientip').onclick = function () {
    var tienthanhtoan = document.getElementById('tienthanhtoan').value;
    var phantramtip  = document.getElementById ('phantramtip').value;
    var songuoitip   =  document.getElementById ('songuoitip').value;

    var tinhtien = 0 ;

    tinhtien = tienthanhtoan *  phantramtip / 100 / songuoitip  ;

    var tientiptrennguoi = document.getElementById('tientiptrennguoi')
    tientiptrennguoi.innerHTML = tinhtien +('$') ;

 }