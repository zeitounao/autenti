
/*input type text*/

function getValue() {
    const value = document.querySelector('input').value;
    console.log(value);
    const texto = value.replace(/e/g, '5');
    console.log(texto);
    return texto;
}


/*input type checkbox*/
function getChecked() {
    const caixa_selecao = document.getElementById('check1').checked;
    if (caixa_selecao === true) {
        console.log(true);
    } else {
        console.log(false);
    }
}
