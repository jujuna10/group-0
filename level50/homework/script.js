
    let ricxvi = document.getElementById("ricxvi")
    let btn = document.getElementById("shetana")
    let btn2 = document.getElementById("gamotana")
    let paragraph = document.getElementById("pelement")
    
    let balance = 0
    btn.addEventListener("click",function(){
        let plus = Number(ricxvi.value)
        balance = balance + plus
        paragraph.textContent = Number(paragraph.textContent) + plus
        ricxvi.value = ""
    })

    btn2.addEventListener("click", function() {
        let value = Number(ricxvi.value)
        let plus = Number(ricxvi.value)
        
        
        
        if (balance < value) {
            alert("Insufficient funds");
        } else {
            balance = balance - plus
        }
        ricxvi.value = ""

    });

    console.log("hello")
