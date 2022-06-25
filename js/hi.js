// input
var chieudai = 5;
var chieurong = 3;
// output
var chuvi = 0;
var dientich= 0;


chuvi=(chieudai + chieurong)*2;
dientich=chieudai * chieurong


console.log('Chu vi = ',chuvi);
console.log('dien tich = ',dientich);


// input 
var so = 585 ;

//output
var tongkyso = 0;

//progress
var hangtram = 500/100
var hangchuc = 80/10
var hangdonvi = 5/1

tongkyso= hangtram + hangchuc + hangdonvi

console.log('tong ky so' , tongkyso)


//input
var tenphim = 'zero to hero';
var giavenguoilon = 50 ;
var giavetreem = 40 ;
var sovenguoilon = 200 ;
var sovetreem =  150   ;
var phantramlamtuthien =  10  ;
//output

var tongdoanhthu = 0 ;
var tientuthien = 0 ;
var tienconlai = 0 ;
var tongve = 0 ;
//progress

tongve = sovenguoilon + sovetreem ;

tongdoanhthu = ( giavenguoilon * sovenguoilon ) + ( giavetreem * sovetreem );
tientuthien= phantramlamtuthien/100 * tongdoanhthu
tienconlai = tongdoanhthu - tientuthien ;

console.log('tên phim' , tenphim)
console.log('phần trăm làm từ thiện',phantramlamtuthien  ) 
console.log('tổng vé', tongve)

console.log('tổng doanh thu' , tongdoanhthu)
console.log('tiền từ thiện', tientuthien)
console.log('tiền còn lại', tienconlai)


//input
var luong1ngay = 100000;
var songaylam =  28 ;

//output
var tongluong = 0 ;

//progress

tongluong=luong1ngay * songaylam

console.log('tong luong ',tongluong)


//input
var nhap5so= 'nhap vao 5 so thuc'
var stt1  =  5
var stt2  =  6 
var stt3  =  7
var stt4  =  8
var stt5  =  9

//output 

var giatritrungbinh  = 0 ;

//progress

giatritrungbinh = (stt1 + stt2 + stt3 + stt4 +stt5) / 5

console.log('gia tri trung binh', giatritrungbinh)


//input

var giaquydoiUSD = 23500
var sotienUSD    = 6

//output 

var quydoiraUSD = 0 ;

//progress

quydoiraUSD = giaquydoiUSD * sotienUSD 

console.log('quy doi ra usd ', quydoiraUSD)


// tính năng cơ bản trong js nói riêng cũng như lập trình nói chung
        // kiểu dữ liệu cơ bản(primitive value) : number , string , boolean , undefine , null
        // số number :lương , giờ làm , giá tiền ,.....
        var number =  1;   
        // chuỗi string :họ tên địa chỉ thông tin cá nhân 
        var title = 'ma duc luong';
        // giá trị true false mang tính đúng sai
        var result = true;
        // undefine
        var name1; 
        // null
        var info = null;

        // jv sẽ tự hiểu dữ liệu khi gáb giá trị cho nó
        console.log(typeof(number));
        console.log(typeof(title));
        console.log(typeof(result));
        console.log(typeof(name1));


        // hiển thị
        console.log(number);
        console.log(title);



        // toán tử 
        var sohang1 = 15;
        var sohang2 = 6 ;
        var tong = sohang1 + sohang2 ;
        var tich = sohang1 * sohang2 ;
        var hieu = sohang1 - sohang2 ;
        var thuong = sohang1 / sohang2 ;
        var du = sohang1 % sohang2;
        console.log('tổng = ',tong)
        console.log('tích = ',tich)
        console.log('hieu = ',hieu)
        console.log('thương = ',thuong)
        console.log('dư = ',du)

        var biena = '10' ;
        var bienb = '5'  ;
        console.log(biena + bienb)
      // kết luận
      //đối với các phép tính số học trong lập trính js xử lý như các phép toán thông thường
      // js hỗ trợ toán tử % để lấy kết quả số dư xử lý 
      // trong js đặc biệt đối với phép cộng thì js xử lý +2 số  (number ) thì ra giá trị tổng , tuy nhiên cộng 2 chuỗi thì sẽ nối 2 chuỗi lại với nhau
      

      var i = 0;
      i = i + 1;
      i++;
      i +=1;
      console.log('i=',i)

      var i = 6;
      i = i - 2;
      i--;
      i -=2;
      console.log('i=',i)

      var x = 5 ;
      var y = 6 ;
      x+=y
      x=x+y
      x-=y
      x*=y
      x=x*y
      x/=y
      x=x/y
      console.log('x=',x)
      y++
      y--
      y=x+y
      y+=x
      y*=x
      y=y/x
      
      console.log('y=',y)
    