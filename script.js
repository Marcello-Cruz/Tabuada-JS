const numero = Number(prompt('Digite um número para a sua tabuada', '0'));
alert ('Digite um número para a sua tabuada')
if (Object.is(numero, NaN)){
    alert ('Digite somente números');
    }else{
        let resultado = `Tabuada do ${numero}: \n`;
        for (let i = 0; i <= 10; i++){
            resultado = `${resultado}\n${numero} x ${i} = ${numero * i}`;
        }
        alert(resultado);
    }