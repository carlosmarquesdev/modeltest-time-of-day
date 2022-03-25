
    function carregar(){
      var msg = window.document.getElementById('msg')
      var iamgem = window.document.getElementById('imagem')  

      var data = new Date()
      var hora = data.getHours()
      // var hora = 13

      msg.innerHTML = `São exatamente ${hora} horas`

      if (hora >= 0 && hora < 12){
           img.src = 'manha.jpg'
           document.body.style.background = '#e2cd9f'
      }else if (hora >= 12 && hora < 18){
          img.src = 'tarde.jpj'
          document.body.style.background = '#b9846f'
      }else{
          img.src = 'noite.jpg'
          document.body.style.background = '#515154'
      }    
}



      
