document.addEventListener('DOMContentLoaded', function(){
    let tamanhoatualFonte= 1;
    const aumentaFonteBotao= document.getElementById('aumenta-fonte');

    aumentaFonteBotao addEventListener('click', funcional()(
        tamanhoatualFonte += 0.1;
        document.body.style.fontSize= '${tamanhoAtualFonte}rem';
    })
    const diminuirFonteBotao= Document.getElementById('dimunuir-fonte');
    
}