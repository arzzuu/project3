const firstVal = document.querySelector('.amount1');
const secondVal = document.querySelector('.amount2');
const firstDiv = document.querySelector('.firstDiv');
const secondDiv = document.querySelector('.secondDiv');
const enter = document.querySelector('.amount1');
const enter1 = document.querySelector('.amount2');
const firstCurrency = document.querySelector('.currencies1');
const secondCurrency = document.querySelector('.currencies2');
const in1 = document.getElementById('in1');
const in2 = document.getElementById('in2');
document.getElementById('in1').value = 1;

fetch(`https://api.exchangerate.host/latest?base=${firstCurrency.value}`)
.then((response) => response.json())
.then((data) => {
    // console.log(data);
    const response = data.rates[secondCurrency.value];
    firstDiv.innerText = `1 ${firstCurrency.value} = ${response.toFixed(4)} ${secondCurrency.value}`;
    secondDiv.innerText = `1 ${secondCurrency.value} = ${Number(1/response).toFixed(4)} ${firstCurrency.value}`;
    secondVal.value = (firstVal.value * response).toFixed(4);
  })      .catch((error) => firstDiv.innerText = `Произошла ошибка: ${error.message}` );

  function numberWithSpaces(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  enter1.addEventListener('input', updateValue1);
  enter.addEventListener('input', updateValue);
  function updateValue1() {
    if(enter1.value[0] == '0' && enter1.value[1] == '0')
    enter1.value = '';
  }

  function updateValue() {
    if(enter.value[0] == '0' && enter.value[1] == '0')
    enter.value = '';
  }

  $('input#in1').on('input', function() {
  $(this).val($(this).val().replace(/\,/g, '.'))
  $(this).val($(this).val().replace(/(?=(\d+\.\d{100})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'))
  // $(this).val($(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '))
  })

  $('input#in2').on('input', function() {
  $(this).val($(this).val().replace(/\,/g, '.'))
  $(this).val($(this).val().replace(/(?=(\d+\.\d{100})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'))
  // $(this).val($(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '))
  });

    function currencyExchange(firstCurrency, secondCurrency, firstVal, secondVal) {
      if ((firstVal.value) == '' ) return
    firstVal.value = numberWithSpaces(firstVal.value);
    fetch(`https://api.exchangerate.host/latest?base=${firstCurrency.value}`)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        const response = data.rates[secondCurrency.value];
        firstDiv.innerText = `1 ${firstCurrency.value} = ${response.toFixed(4)} ${secondCurrency.value}`;
        secondDiv.innerText = `1 ${secondCurrency.value} = ${Number((1/response)).toFixed(4)} ${firstCurrency.value}`;
        secondVal.value = numberWithSpaces((firstVal.value.split(' ').join('') * response).toFixed(4));
      })
      .catch((error) => firstDiv.innerText = `Произошла ошибка: ${error.message}` );
    } 
 firstCurrency.addEventListener('change', function() {
  currencyExchange(firstCurrency, secondCurrency, firstVal, secondVal);
});
secondCurrency.addEventListener('change', function() {
    currencyExchange(firstCurrency, secondCurrency, secondVal, firstVal);
});
firstVal.addEventListener('input', function() {
  currencyExchange(firstCurrency, secondCurrency, firstVal, secondVal);
});
secondVal.addEventListener('input', function() {
  currencyExchange(secondCurrency, firstCurrency, secondVal, firstVal);
});
    //   document.getElementById("sel").onchange = function(){
    //     if (this.prev) this.prev.style.color = "black";
    //     this.prev = this.options[this.selectedIndex];
    //     this.prev.style.backgroundColor = "#833AE0";
    //     // this.prev.style.color = "white";
    // }
    
    // }
    // $(document).ready(function(){
    //   $('select').on('change',function(){
    //     $(this).css({color: $(this).find('option:selected').data('#833AE0')});
    //   });
    // });
                      