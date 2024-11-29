// function max(a, b){
//     if(a>b){
//         return a;
//     }
//     return b;
// }

// console.log(max(100, 100));

// function isfizzBuzz(arg) {
//   if (typeof arg !== "number") {
//     return "Vui lòng nhập số!";
//   }

//   if (arg % 3 === 0 && arg % 5 === 0) {
//     return "FizzBuzz";
//   }

//   if (arg % 3 === 0) {
//     return "Fizz";
//   }

//   if (arg % 5 === 0) {
//     return "Buzz";
//   } else {
//     return arg;
//   }
// }

// const checkFizzBuzz1 = isfizzBuzz("one");
// console.log(checkFizzBuzz1); // Vui lòng nhập số!

// const checkFizzBuzz2 = isfizzBuzz(true);
// console.log(checkFizzBuzz2); // Vui lòng nhập số!

// const checkFizzBuzz3 = isfizzBuzz(9);
// console.log(checkFizzBuzz3); // Fizz

// const checkFizzBuzz4 = isfizzBuzz(10);
// console.log(checkFizzBuzz4); // Buzz

// const checkFizzBuzz5 = isfizzBuzz(30);
// console.log(checkFizzBuzz5); // FizzBuzz

// const checkFizzBuzz6 = isfizzBuzz(11);
// console.log(checkFizzBuzz6); // 11

// function ticket(x){
//     if(x <= 70){
//         return "Van toc an toan";
//     }

//     if(x>99){
//         return "Ban bi tuoc giay phep lai xe";
//     }else{
//         var tmp=(x-70)/5;
//         return "Ban bi phat: "+ (Math.floor(tmp)*30000);
//     }
// }

// console.log(ticket(40));
// console.log(ticket(70));
// console.log(ticket(75));
// console.log(ticket(99));
// console.log(ticket(120));

// const SPEEDLIMIT = 70;
// const KMPERPOINT = 5;
// const MONEY = 30000;

// function checkSpeedLimit(curSpeed) {
//   if (curSpeed <= SPEEDLIMIT) {
//     return "Vận tốc an toàn";
//   } else {
//     const penaltyPoint = Math.floor((curSpeed - SPEEDLIMIT) / KMPERPOINT);
//     // Math.floor để làm tròn xuống

//     if (penaltyPoint < 10) {
//       return "Bạn đã bị phạt: " + penaltyPoint * MONEY + "đ";
//     } else {
//       return "Bạn đã bị tước giấy phép lái xe";
//     }
//   }
// }

// const checkPoin1 = checkSpeedLimit(40);
// console.log(checkPoin1); // Vận tốc an toàn

// const checkPoin2 = checkSpeedLimit(70);
// console.log(checkPoin2); // Vận tốc an toàn

// const checkPoin3 = checkSpeedLimit(75);
// console.log(checkPoin3); // Bạn đã bị phạt: 30000đ

// const checkPoin4 = checkSpeedLimit(99);
// console.log(checkPoin4); // Bạn đã bị phạt: 150000đ

// const checkPoin5 = checkSpeedLimit(120);
// console.log(checkPoin5); // Bạn đã bị tước giấy phép lái xe

// const person = {
//     name: "Le Van A",
//     age: 40,
//     height: 175,
//     country: "Viet Nam",
//     designation: "UI Developer",
// };

// const technology = {
//     name: "JavaScript",
//     version: 6,
//     purpose: "Scripting language for web",
//     developer: "Netscape Corporation",
// };

// function showkeyvaluestring(curObj){
//     for(let key in curObj){
//         if(typeof curObj[key] === "string"){
//             console.log(key, ":", curObj[key]);
//         }
//     }
// }

// showkeyvaluestring(person);
// console.log("--------------");
// showkeyvaluestring(technology);

// function isprimenumber(number){
//     for(let factor = 2; factor <number; factor++){
//         if(number %factor === 0){
//             return false;
//         }
//     }
//     return true;
// }

// function show(numberlimit){
//     for(let i=2; i<numberlimit; i++){
//         if(isprimenumber(i)){
//             console.log("so nguyen to: " + i);
//         }
//     }
// }

// console.log(show(20));

// function convertTime(string){
//     const time = string.slice(0, -2);//cat chuoi thoi gian
//     const ampm = string.slice(-2);//can chuoi sang toi
//     const unit = time.split(":");//chuyen chuoi thanh mang

//     let hours = unit[0];
//     const minutes = unit[1];
//     const second = unit[2];

//    if(hours==="12"){
//     hours="00";
//    }

//    if(ampm === "PM"){
//     hours = parseInt(hours) +12;
//    }

//    const newstring = [hours, minutes, second].join(":");
//    return newstring;
// }

// 	var test1 = convertTime("07:05:45PM");
// 	console.log(test1); // 19:05:45

// 	var test2 = convertTime("12:40:22AM");
// 	console.log(test2); // 00:40:22

// 	var test3 = convertTime("12:45:54PM");
// 	console.log(test3); // 12:45:54

// function leapYear(year) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       return true;
//     }else{
//         return false;
//     }
//   } else {
//     if (year % 4 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(leapYear(2016));
// console.log(leapYear(2000));
// console.log(leapYear(1700));
// console.log(leapYear(1800));
// console.log(leapYear(100));

// function check(file){
//     if(file.includes(".")){
//         return file.split(".").pop();
//     }
//     return "khong phai ten file";
// }

// const input = prompt("nhap ten file");
// if(input.length>0){
//     const res = check(input);
//     console.log(res);
// }
// Trong đó: hàm includes() để check xem trong string đó có tồn tại ký tự nào đó hay không? Nếu có trả về true, nếu không trả về false.

// let price = 100;
// const discount = true;
// const discountAmount = 30;
// const country = "Viet Nam";

// if(discount === true){
//     price -= discountAmount;
// }else if(country === "Thai Lan"){
//     price -=40;
// }else if(country ==="han quoc"){
//     price -= 50;
// }else{
//     price -=10;
// }
// console.log(price);

//ông
//ông- Đăng phuong nam
//ông-đang phuong nam
//chư được phéo uống

// const fullname = "Dang phuong nam";
// const gender = "nam";
// const age = 17;
// const vocative = gender === "nam" ? "ong" : "ba";
// console.log(vocative);
// console.log(`xin chao ${gender === "nam" ? "ông" : "bà"} ${fullname}`);

// console.log(`xin chao ${vocative} ${fullname}`);

// const drinkAlcohol =
//   age < 18
//     ? "ban chua duoc phep uong"
//     : age >= 18 && age <= 60
//     ? "ban nen uong it rươu"
//     : age > 60
//     ? "ban khong nen uong rươu"
//     : "ban oi ban con do chu";
// console.log(drinkAlcohol);

// const myFriend = [1, 2, "nam", "hung", 3, 4, "hoa", 6, "long"];

// const newMyFriend = [];
// for(let i = 0; i<myFriend.length; i++){
//     if(typeof myFriend[i]==="string"){
//         newMyFriend.push(myFriend[i]);
//     }
// }

// console.log(newMyFriend);