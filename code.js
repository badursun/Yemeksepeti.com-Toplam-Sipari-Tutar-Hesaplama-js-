
```javascript
let changed = true;
let itemLength = 0;
let oldLength = 0;
let tolerance = 0;
var totalP = 0;
var sleepTime = 1500;

function calculate() { var array = $(".amount-info > strong").text().split("TL");
    $.each(array, function(index, value) { let final = parseInt(totalP) + parseInt(value); if (String(final) != 'NaN') { totalP = totalP + parseInt(value) } });
    alert('TOPLAM HARCAMANIZ : ' + String(totalP) + "TL") }

function loadItems() { console.log('Yeni veriler yüklendi');
    itemLength = document.getElementsByClassName('order-item').length; if (itemLength == oldLength) { changed = false } oldLength = itemLength;
    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(function() { if (changed) { loadItems();
            tolerance = 0 } else { if (tolerance > 5) calculate();
            else { tolerance++;
                sleepTime = sleepTime - 200;
                loadItems() } } }, sleepTime) } console.log('Hesaplama yapılıyor lütfen bekleyin');
loadItems();
```
