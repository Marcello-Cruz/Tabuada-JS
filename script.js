const numero = Number(prompt('Digite um número para a sua tabuada', '0'));
if (Object.is(numero, NaN)){
    }else{
        let resultado = `Tabuada do ${numero}: \n`;
        for (let i = 0; i <= 10; i++){
            resultado = `${resultado}\n${numero} x ${i} = ${numero * i}`;
        }
alert(resultado);
    }

    /* s2*/ 