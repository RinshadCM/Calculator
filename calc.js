function display(num){
    result.value+=num
}
function allclear(){
    result.value=" "
}
function answer(){
    // currentResult=result.value
    // result.value=eval(currentResult)

    result.value=eval(result.value)
}
function backspace(){
    result.value=result.value.slice(0,-1)
}