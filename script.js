$('input#enter').on('input', function() {
    $(this).val($(this).val().replace(/\,/g, '.'));
    $(this).val($(this).val().replace(
        /(?=(\d+\.\d{3})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
        $(this).val($(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '))
  })
  let enter= document.querySelectorAll('#enter');
  