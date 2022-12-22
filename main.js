
// Isim ve Soyismi birlestiren js kodu

document.write(`Ad ve Soyadi birlestirme islemi <br><br>`)

var name1 = 'Furkan';
var surname = 'KILICER';

document.write(name1 + ' ' + surname + '<br>');

document.write(`${name1} ${surname} `); // 2015'te gelen ozellik.


document.write('<br><br>************************************************** <br>');

// 1'den 100'e kadar cift olan sayilar(100. sayi dahil)

document.writeln("<br> 1'den 100'e kadar olan cift sayiliar" + '<br>');

let count = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        document.write(i + ', ');
        count = count + 1;
    }
    if (count % 10 == 0) {
        document.write('<br>')
    }


}