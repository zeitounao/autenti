


const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formObj = {};

    for (const [fieldName] of formData) {
        const fieldValue = formData.getAll(fieldName);
        formObj[fieldName] = fieldValue.length == 1 ? fieldValue.toString() : fieldValue
    }
    console.log('formObj',formObj)
}

/*as pessoas vao digitar em um campo especifico as letras e vamos transformar a letra e no numero 5*/

/*
document.addEventListener('keydown', function(event){
    const apertou_e = event.key === 'e';
    console.log('entrou no evento');
    
    if (apertou_e) { 

        const value2 = document.getElementById('email1').value;
        const texto2 = value2.replace(/e/g, '3');
        console.log(texto2);
*/
        /*pegar o valor com o query selector ou getElementById pelo id para depois usar o replace*/        
/*e        
    }
})
*/

function getValue() {
    const value1 = document.querySelector('input').value ;
    const text = value1.replace(/e/g, '5');
    console.log(text);
    return text;
    
}

function getText() {
    const value2 = document.getElementById('email1').value;
    const text2 = value2.replace(/e/g, '3');
    console.log(text2);

}

