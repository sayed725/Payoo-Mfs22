document.getElementById('show-add-money-form').addEventListener('click',function(){

    showBtnPrimary('show-add-money-form')

    showSectionById('add-money-form')
})


document.getElementById('show-cash-out-form').addEventListener('click',function(){

    showBtnPrimary('show-cash-out-form')
    // document.getElementById('show-cash-out-form').classList.add('btn-primary')
    // document.getElementById('show-add-money-form').classList.remove('btn-primary')

    showSectionById('cash-out-form')
})

document.getElementById('show-transaction-history').addEventListener('click',function(){

    showBtnPrimary('show-transaction-history')

    showSectionById('transaction-section')
})

