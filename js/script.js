var btnPlus2=document.getElementById("btnPlus2")
// var btnMinus2=document.getElementById("btnMinus2")

// btnPlus2.addEventListener("click",function(){
//     var item2 =getInputNumber("item2")
//     var item2Price =getSpanNumber("item2Price")
//     item2++
//     updateInputNumber("item2",item2)
//     updateSpan("item2Price",item2*59)
// })
// btnMinus2.addEventListener("click",function(){
//     var item2 =getInputNumber("item2")
//     var item2Price =getSpanNumber("item2Price")
//     if(item2<=1){alert("Sorry! cant add 0 item ");return;}
//     item2--
//     updateInputNumber("item2",item2)
//     console.log(item2);
//     updateSpan("item2Price",item2*59)
// })

cartIn("btnPlus1","item1","item1Price", 1219)
cartOut("btnMinus1","item1","item1Price", 1219 )
cartIn("btnPlus2","item2","item2Price", 59)
cartOut("btnMinus2","item2","item2Price", 59)

function cartIn(btnPlus,item,itemPrice,unitPrice){
    var plusBtn=document.getElementById(btnPlus)
    plusBtn.addEventListener("click",function(){
        var itemNum =getInputNumber(item)
        itemNum++
        updateInputNumber(item,itemNum)
        updateSpan(itemPrice,itemNum*unitPrice)
    })
}
function cartOut(btnMinus,item,itemPrice,unitPrice){
    var minusBtn=document.getElementById(btnMinus)
    minusBtn.addEventListener("click",function(){
        var itemNum =getInputNumber(item)
        if(itemNum<=0){alert("Sorry! cant add 0 item ");return;}
        itemNum--
        updateInputNumber(item,itemNum)
        updateSpan(itemPrice,itemNum*unitPrice) 
    })
}

function getInputNumber(id){
    var inputNumber= document.getElementById(id).value
    return inputNumber
}
function updateInputNumber(id,value){
    document.getElementById(id).value=value   
}
function getSpanNumber(id){
    var inputSpanNumber= document.getElementById(id).innerText
    inputSpanNumber=parseFloat(inputSpanNumber)
    return inputSpanNumber
}
function updateSpan(id,value){
    document.getElementById(id).innerText=value
    updateSubtotal()
}
function updateSubtotal(){
    var item1total= getSpanNumber("item1Price")
    var item2total =getSpanNumber("item2Price")
    var newSubTotal =item1total+item2total
    var taxTotal =Math.round((item1total+item2total)*.01)
    var newTotalAmount =newSubTotal+taxTotal
    document.getElementById("subTotal").innerText=item1total+item2total
    document.getElementById("tax").innerText=taxTotal
    document.getElementById("total").innerText=newTotalAmount
    console.log(newSubTotal,newTotalAmount); 
}