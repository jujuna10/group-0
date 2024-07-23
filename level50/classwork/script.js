let inputBox = document.getElementById("check")
let btn = document.getElementById("btn")
btn.addEventListener("click",function(){

    let result = inputBox.checked
    if(result == true){
        alert("წარმატებით ჩაიარა")
    }else{
        alert("თავიდან ცადე")
    }
})