const firstVal = document.querySelector('.amount1');
const secondVal = document.querySelector('.amount2');
const firstDiv = document.querySelector('.firstDiv');
const secondDiv = document.querySelector('.secondDiv');
const enter = document.querySelector('input');
const firstCurrency = document.querySelector('.currencies1');
const secondCurrency = document.querySelector('.currencies2');
const in1 = document.getElementById('in1');
const in2 = document.getElementById('in2');
document.getElementById('in1').value = 1;
fetch(`https://api.exchangerate.host/latest?base=${firstCurrency.value}`)
.then((res) => res.json())
.then((data) => {
    console.log(data);
    const res = data.rates[secondCurrency.value];
    firstDiv.innerText = `1 ${firstCurrency.value} = ${res.toFixed(4)} ${secondCurrency.value}`;
    secondDiv.innerText = `1 ${secondCurrency.value} = ${(1/res).toFixed(4)} ${firstCurrency.value}`;
    secondVal.value = (firstVal.value * res).toFixed(4);
  });
  function numberWithSpaces(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }
//   document.getElementById("sel").onchange = function(){
//     if (this.prev) this.prev.style.color = "black";
//     this.prev = this.options[this.selectedIndex];
//     this.prev.style.backgroundColor = "#833AE0";
//     // this.prev.style.color = "white";
// }
// function sselect(j) //переменная - номер выделенного опшна
// {
// window.document.getElementById("sel").selectedIndex=-1; //отменяет системное выделение - для системы больше нет выделенных елементов!
// for (var i=(window.document.getElementById("sel").options.length-1); i>=0; i--) //идем по всем опшнам
//  {
//   window.document.getElementById("sel").options[i].style.cssText="background-color:inherit"; //убираем стиль фона который был
//   if (i==j) //если тот елемент что выбран
//   {
//    window.document.getElementById("sel").options[i].style.cssText="background-color:red"; //то ставим наш фон
//   }
//  }
// }
// $(document).ready(function(){
//   $('select').on('change',function(){
//     $(this).css({color: $(this).find('option:selected').data('#833AE0')});
//   });
// });
          
          
 $('input#in1').on('input', function() {
 $(this).val($(this).val().replace(/\,/g, '.'))
 $(this).val($(this).val().replace(/(?=(\d+\.\d{4})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'))
  // $(this).val($(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '))
  })
  $('input#in2').on('input', function() {
  $(this).val($(this).val().replace(/\,/g, '.'))
  $(this).val($(this).val().replace(/(?=(\d+\.\d{4})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'))
  // $(this).val($(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '))
  })
          
    function currencyExchange(firstCurrency, secondCurrency, firstVal, secondVal) {
      if ((firstVal.value) =='') return
      // firstVal.value = numberWithSpaces(firstVal.value);
    fetch(`https://api.exchangerate.host/latest?base=${firstCurrency.value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        const res = data.rates[secondCurrency.value];
        firstDiv.innerText = `1 ${firstCurrency.value} = ${res.toFixed(4)} ${secondCurrency.value}`;
        secondDiv.innerText = `1 ${secondCurrency.value} = ${(1/res).toFixed(4)} ${firstCurrency.value}`;
        secondVal.value = numberWithSpaces((firstVal.value * res).toFixed(4));
      })
      // .catch(() => alert('sms ob owibke'))
  } 
  firstCurrency.addEventListener('change', () => {
    currencyExchange(firstCurrency, secondCurrency, firstVal, secondVal)
  });
  firstVal.addEventListener('input', () => {
    currencyExchange(firstCurrency, secondCurrency, firstVal, secondVal)
  });
  secondCurrency.addEventListener('change', () => {
    currencyExchange(secondCurrency, firstCurrency, secondVal, firstVal)
  });
  secondVal.addEventListener('input', () => {
    currencyExchange(secondCurrency, firstCurrency, secondVal, firstVal)
  });
  currencyExchange()