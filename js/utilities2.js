function getInputFieldValueById(id){
   const inputValue =  document.getElementById(id).value;
   
   const inputNumber = parseFloat (inputValue)

   return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;

    const textNumber = parseFloat (textValue);

    return textNumber;
}



function showSectionById(id){

    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden');

}

function showBtnPrimary(id){

    document.getElementById('show-add-money-form').classList.remove('btn-primary')
    document.getElementById('show-cash-out-form').classList.remove('btn-primary')
    document.getElementById('show-transaction-history').classList.remove('btn-primary')

    document.getElementById(id).classList.add('btn-primary')
}