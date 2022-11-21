$('input#enter').on('input', function() {
    $(this).val($(this).val().replace(/\,/g, '.'));
    $(this).val($(this).val().replace(/(?=(\d+\.\d{3})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
    $(this).val($(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '));
  })
  let block1 = document.querySelectorAll('.block1');
  let block2 = document.querySelectorAll('.block2');
  let buttons = document.querySelectorAll('.val');
  block1.forEach((item, k) =>{
    item.addEventListener('click',(event) => {
    item.style.backgroundColor = '#833AE0';
    for(let i = 0 ; i < 4; i++){
      if(i != k){
        block1[i].style.backgroundColor = 'white';
      }
    }
  })})
  block2.forEach((item, k) =>{
    item.addEventListener('click',(event) => {
    item.style.backgroundColor = '#833AE0';
    for(let i = 0 ; i < 4; i++){
      if(i != k){
        block2[i].style.backgroundColor = 'white';
      }
    }
  })})
