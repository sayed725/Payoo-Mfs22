document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out')
    const pinNumber = getInputFieldValueById('input-cash-out-pin')

    if(isNaN(cashOut)){
        alert('Failed to cash out')
        return;
    }

    if(pinNumber === 1234){

        const balance = getTextFieldValueById('account-balance')

        if(cashOut>balance){
            alert('You do not have enough money to cash out')
            return;
        }

        const newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;


        const p = document.createElement('p')
        p.classList.add('bg-red-400')
        p.innerText = `Withdraw : ${cashOut} Tk New Balance : ${newBalance}`;

        document.getElementById('transaction-container').appendChild(p);

    }
    else {
        alert('Failed to cash out')
    }
    document.getElementById('input-cash-out').value = ''
    document.getElementById('input-cash-out-pin').value = ''
})