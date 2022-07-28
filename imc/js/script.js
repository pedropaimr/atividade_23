function calcularImc() {
    // declaração de variáveis, a variável LET mantem seu valor

    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let result = document.getElementById('result');
    let imc = document.getElementById('imc');
    
    // substitui virgula por ponto
    altura = altura.replace(',','.');
    peso = peso.replace(',','.');

    // calculo imc
    let calculo = peso / (altura*altura);

    // arredondando valor
    calculo = calculo.toFixed(2);

    // mostrar na tela o imc do user
    result.innerHTML = calculo.replace('.',',') + '<br />'; 

    // mostra se user está nos parãmetros
    if(calculo < 18.5) 
    imc.innerHTML = 'abaixo do peso';
    else if (calculo >= 18.5 && calculo <24.9)
    imc.innerHTML = 'peso ideal';
    else if (calculo >= 25 && calculo <=29.9)
    imc.innerHTML = 'acima do peso';
    else if (calculo >= 30 && calculo <= 40)
    imc.innerHTML = 'obesidade';
    else imc.innerHTML = 'obesidade mórbida';
}