const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}

var paragraph = document.getElementById('myParagraph');

setTimeout(function() {
    paragraph.style.opacity = '0';
    setTimeout(function() {
        paragraph.style.opacity = '1';
    }, 5000); // segundos
}, 1000); // 5 segundos

var counterElement = document.getElementById('counter');
var count = 95000;
var maxCount = 95181; // Define o valor máximo da contagem

// Função para atualizar a contagem
function updateCounter() {
    count++;
    counterElement.textContent = count;

    if (count >= maxCount) {
        count = 95000; // Reseta a contagem quando alcançar o máximo
    }
}

// Inicia a contagem automática quando a página carrega
setInterval(updateCounter, 10); // Intervalo de 10 milissegundos

/*  */
