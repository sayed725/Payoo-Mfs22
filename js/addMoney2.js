document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money')
    const pinNumber = getTextFieldValueById('input-pin-number')

    if(isNaN(addMoney)){
        alert('Failed to add money')
        return;
    }
})