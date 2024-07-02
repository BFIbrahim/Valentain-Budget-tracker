const kitkatBuyBtn = document.getElementById('kitkat-buy-btn')
const roseBuyBtn = document.getElementById('rose-buy-btn')
const diaryButBtn = document.getElementById('diary-buy-btn')



kitkatBuyBtn.addEventListener('click', function(){
    const quantity = getInputValue('kitkat-quantity') 
    const price = parseFloat(document.getElementById('kitkat-price').innerText)

    const totalPrice = price*quantity;
    

    if(quantity === ''){
        alert('Please Enter quantity')
    }else{
        setInnerText('chocolate', totalPrice)
        total()
    }

})

roseBuyBtn.addEventListener('click', function(){
    const quantity = getInputValue('rose-quantity') 
    const price = parseFloat(document.getElementById('rose-price').innerText)

    const totalPrice = price*quantity;
    

    if(quantity === ''){
        alert('Please Enter quantity')
    }else{
        setInnerText('rose', totalPrice)
        total()
    }

})

diaryButBtn.addEventListener('click', function(){
    const quantity = getInputValue('diary-quantity') 
    const price = parseFloat(document.getElementById('diary-price').innerText)

    const totalPrice = price*quantity;
    

    if(quantity === ''){
        alert('Please Enter quantity')
    }else{
        setInnerText('diary', totalPrice)
        total()
    }

})

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function getInputValue(id){
    const value = document.getElementById(id).value
    return value
}

function getPrices(id){
    const price = document.getElementById(id).innerText;
    return parseInt(price)
}

function total(){
    const chocolate = getPrices('chocolate')
    const rose = getPrices('rose')
    const diary = getPrices('diary')

    const total = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
    
    setInnerText('total', total)
}


document.getElementById('applyPromoBtn').addEventListener('click', function(){
    const promoCode =  getInputValue('promo-code');
    const total = getPrices('total')

    if(promoCode == 101){
        const sum = total - parseInt(total) * 0.1;
        setInnerText('all-total', sum)
    }else{
        alert('Wrong Promo code. PLease Enter a valid promo code')
    }

    

})
