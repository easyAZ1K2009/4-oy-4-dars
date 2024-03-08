//*------kop ishlatiladigon metodlar

// let email = ' boburweb@gmail.com'

//LastIndeof()

// let result = email.lastIndexOf('a')
// console.log(result);

// //indexOf

// let result = email.indexOf('a')
// console.log(result);

//silce()

// 'efdfef6ea565@gmail.com'
// let result = email.slice(5,6)
// console.log(result);

//substr()

// let result = email.substr(4,10)
// console.log(result);

//replace()

// let result = email.replace('a', 'd')
// console.log(result);

// charAt()
// let result = email.charAt()
// console.log(result);

//callback function /*
//  const myFunc =(callbackFunc) => {
//     let number= 50
//     callbackFunc(number)
//  }

//  myFunc(function(value){
//     console.log(value);
//  })

// const mehmon1 = 'Azizbek'
// const mehmon2 = 'Muhsmmadsaid'
// const mehmon3 = 'Asror'
// const mehmon4 = 'Diyorbek'

//array => massive
// const mehmonlar = ['Azizbek','MuhammadSaid','Asror','Diyorbek']

//mehmonlar[0] = 'Bobur'
// console.log(mehmonlar)

// let numbers = [1,2,3,4,5,6,123]

//proerty
//  const result = numbers.length
//  console.log(result);

// let result = mehmonlar.concat(numbers)
// console.log(result);

// mehmonlar.pop('Diyorbek')
// console.log(mehmonlar);

const ism = prompt("Ismingizni kiriting");
const yosh = +prompt("Yoshingizni kiriting");
const result = `Qadirli ${ism}.Siz${2024 - yosh} yilda tugilgansiz.Va siz ${
  yosh * 12
}
oy,${(yosh * 365) / 7} hafta,${yosh * 365} kun,${yosh * 365 * 24} soat,${
  yosh * 365 * 24 * 60
} daqiqa,${yosh * 365 * 24 * 60 * 60} soniya yashagansiz.😉`;
alert(result);
//*2) ismlar array ichidan prompdan soralyotkan
//ism bolsa unda ha bunday ism bor agar bolmasa bunday ism yoq deydi
const ismlar = ["Ahror", "Sardor", "Doniyor"];

// const boy = +prompt('Boyingizni kiriting')
// const vazn = +prompt("vazin kirintn")
// BMI = vazn / boy **2

// if (BMI <= 18.5) {
//     console.log('siz ozginsiz semirishga harakat qilin');
// } else if (BMI > 18.8 && BMI <= 24.9){
//     console.log('siz nor,al holdasiz');
// } else if (BMI >= 25 && BMI <=29.9 ) {
//     console.log('siz ortiqcha semizsiz siz ozishga harakat qilin');
// }else  {
//     console.log('siz kasalsiz');
// }
