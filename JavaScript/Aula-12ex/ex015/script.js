function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                img.setAttribute('src', 'bebe.png')
                res.innerHTML = `Detectamos um lindo bebe com ${idade} ano(s).`
            } else if (idade < 10) {
                img.setAttribute('src', 'menino.png')
                res.innerHTML = `Detectamos um menino com ${idade} ano(s).`
            } else if (idade < 21) {
                img.setAttribute('src', 'moco.png')
                res.innerHTML = `Detectamos um jovem com ${idade} ano(s).`
            } else if (idade < 50) {
                img.setAttribute('src', 'homem.png')
                res.innerHTML = `Detectamos um homem com ${idade} ano(s).`
            } else if (idade < 90) {
                img.setAttribute('src', 'idoso.png')
                res.innerHTML = `Detectamos um idoso com ${idade} ano(s).`
            } else {
                img.setAttribute('src', 'esqueleto.png')
                res.innerHTML = `Detectamos um homem que teria ${idade} ano(s).`
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                img.setAttribute('src', 'bebe.png')
                res.innerHTML = `Detectamos um lindo bebe com ${idade} ano(s).`
            } else if (idade < 10) {
                img.setAttribute('src', 'menina.png')
                res.innerHTML = `Detectamos uma menina com ${idade} ano(s).`
            } else if (idade < 21) {
                img.setAttribute('src', 'moca.png')
                res.innerHTML = `Detectamos uma jovem com ${idade} ano(s).`
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.png')
                res.innerHTML = `Detectamos uma mulher com ${idade} ano(s).`
            } else if (idade < 90) {
                img.setAttribute('src', 'idosa.png')
                res.innerHTML = `Detectamos um idosa com ${idade} ano(s).`
            } else {
                img.setAttribute('src', 'esqueleto.png')
                res.innerHTML = `Detectamos uma mulher que teria ${idade} ano(s).`
            }
        }
        res.style.textAlign = 'center'
        // res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}