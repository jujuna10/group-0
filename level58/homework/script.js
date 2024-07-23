let form = document.getElementById("form")
let btn = document.getElementById("btn")


btn.addEventListener("click",function(){
    const namee = form.elements['name'].value;
    const emaill = form.elements['email'].value;
    const passwordd = form.elements['password'].value;

    

    function persons(Name,Email,Password){
        this.name = Name
        this.email = Email
        this.password = Password
    }
    let user1 = new persons(namee,emaill,passwordd)

    console.log(user1.name)

    document.getElementById("p1").innerText = user1.name
    document.getElementById("p2").innerText = user1.email
    document.getElementById("p3").innerText = user1.password
    
})



