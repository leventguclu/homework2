//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. 

function asalSayiMi(...numbers) {  
    for (let i = 0; i < numbers.length; i++) {
        let primeNumber = true
        
        let sayi = false;
        sayi = numbers[i]

        for (let j =2; j<sayi;j++ ){
            if (sayi % j == 0) {
                primeNumber = false
                break
            }
        }
        if(primeNumber) {
            console.log(`${sayi} asal sayıdır.`)
        }
        else{
            console.log(`${sayi} asal sayı değildir.`)
        }
    }
}
asalSayiMi(3,13,17,23,25,30,31,37,43,45)

// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
// arkadaş sayı: İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.

function arkadasSayi(number1,number2) { 
    let sum1=0
    let sum2=0

    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            sum1 += i  
        }
    }
    for (let i = 0; i < number2; i++) {
        if (number2 % i == 0) {
            sum2 += i 
        }
    }
    if ((sum1 == number2) && (sum2 == number1)) {
        console.log(number1+ " ve "+ number2 +" Arkadaş sayılardır.") 
    }
    else{
        console.log(number1+ " ve "+ number2 +" Arkadaş sayı değillerdir.")
    }
}
arkadasSayi(16,61)
arkadasSayi(284,220)
arkadasSayi(1184,1210)
arkadasSayi(17296,18416)

// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
// mükemmel sayı: Kendisi hariç bütün pozitif bölenlerinin toplamı kendisine eşit olan sayılara 
// mükemmel sayı denir.

function mukemmelSayi() {
   
    for (let i=1; i<1001; i++) {
        let sum=0
        for (let k= 1; k<i; k++) {
          if (i % k == 0) {
              sum += k
          }  
        }
        if (sum == i) {
            console.log(i + " mükemmel sayıdır.")
        } 
    }
}
mukemmelSayi()


function asalSayilar() {

    let counter=0
    for (let i = 2; i < 1000; i++) {
        for (let j = 1; j<= i; j++) {
            if (i%j == 0) {
                counter++
            }
        }
        if (counter == 2) {
            console.log(i +" Asaldır")
            counter=0
        }
       else{
        counter=0
           
       }   
    }
}asalSayilar()

