
function carregar() {
  const msg = window.document.getElementById('msg')
  const img = window.document.getElementById('imagem')

  const data = new Date()
  const hora = 9
  const horadia = document.getElementById('hora-dia')

  msg.innerHTML = `São exatamente ${hora} horas`
  horadia.innerHTML = 0

  if (hora >= 0 && hora < 12) {
    if (hora < 10) {
      horadia.innerHTML = 'Bom dia, ja tomou café?'
    } else {
      horadia.innerHTML = 'Bom dia!'
    }
    img.src = 'manha.jpg'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.jpg'
    document.body.style.background = '#b9846f'
    horadia.innerHTML = 'Boa tarde!'
  } else {
    img.src = 'noite.jpg'
    document.body.style.background = '#515154'
    horadia.innerHTML = 'Boa noite!'
  }
}




