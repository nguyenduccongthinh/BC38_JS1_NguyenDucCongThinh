// BÀI 1:
// Sơ đồ 3 khối

/**
 * INPUT: lương 1 ngày , số ngày làm
 *
 * PROCESS: (pseudo code)
 *      1. lấy input (hardcode) lương 1 ngày  = 100; số ngày làm = 30;
 *      2. công thức tính tiền : lương 1 ngày * số ngày làm
 *      3. In kết quả
 *
 * OUTPUT: lương
 */

var workingDays = 20;
var salaryPerDay = 100000;

var totalSalary = salaryPerDay * workingDays;
console.log("Tổng lương là: " + totalSalary);


// BÀI 2:
// Sơ đồ 3 khối

/**
 * INPUT: 5 số thực
 *
 * PROCESS: (pseudo code)
 *      1. lấy input (hardcode) giá trị 5 số thực lần lượt: 5.4 ; 8.2 ; 7.9 ; 5 ; 8
 *      2. Tính tổng 5 số thực
 *      3. Công thức tính trung bình: tổng 5 số thực chia cho 5
 *      4. In kết quả
 *
 * OUTPUT: số trung bình
 */

var num1 = 5.4;
var num2 = 8.2;
var num3 = 7.9;
var num4 = 5;
var num5 = 8;
var sum;
var average;

sum = num1 + num2 + num3 + num4 + num5;
average = sum / 5;

console.log("Giá trị trung bình là:", average );


// BÀI 3:
// Sơ đồ 3 khối

/**
 * INPUT: Số tiền USD
 *
 * PROCESS: (pseudo code)
 *      1. lấy input (hardcode) số tiền USD là 5
 *      2. Số tiền sau quy đổi VND bằng số tiền USD * 23.500
 *      3. In kết quả
 *
 * OUTPUT: Số tiền sau quy đổi VND 
 */

 var soTienUSD = 5;
 var soTienVND;
 soTienVND = soTienUSD * 23500;
 console.log("Số tiền sau quy đổi VND là:", soTienVND, "VND");
 
 // BÀI 4:
// Sơ đồ 3 khối

/**
 * INPUT: Chiều dài và chiều rộng của hình chữ nhật
 *
 * PROCESS: (pseudo code)
 *      1. lấy input (hardcode) Chiều dài và chiều rộng của hình chữ nhật lần lượt: 8 ; 3
 *      2. Công thức tính diện tích hình chữ nhật: chiều dài * chiều rộng
 *      3. Công thức tính chu vi hình chữ nhật: (chiều dài + chiều rộng) * 2
 *      4. In kết quả
 *
 * OUTPUT: Diện tích và chu vi của hình chữ nhật
 */

var chieuDai = 8;
var chieuRong = 3;
var dienTich;
var chuVi;

dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong)*2

console.log("Diện tích hình chữ nhật là", dienTich );
console.log("Chu vi hình chữ nhật là", chuVi );

 // BÀI 5:
// Sơ đồ 3 khối

/**
 * INPUT: Nhập vào 1 số có 2 chữ số
 *
 * PROCESS: (pseudo code)
 *      1. lấy input (hardcode) Nhập vào 1 số có 2 chữ số là 15;
 *      2. Công thức rút ra chữ số hàng đơn vị: số đó chia cho 10 lấy phần dư
 *      3. Công thức rút ra chữ số hàng chục: số đó chia cho 10, lấy kết quả làm tròn xuống
 *      4. In kết quả
 *
 * OUTPUT: Tổng 2 ký số
 */

 var n = 55;
 var num1;
 var num2;
 var tong;

 num1 = n % 10;
 num2 = Math.floor(n / 10);
 tong = num1 + num2;

 console.log("Tổng 2 ký số là", tong );

