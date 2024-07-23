// let form = document.getElementById("form");
// let accounts = [];

// const Account = function(name,email,password,repeatPassword){
//     this.name = name,
//     this.email = email,
//     this.password = password,
//     this.repeatPassword = repeatPassword
// }

// form.addEventListener("submit",function(e){
//     e.preventDefault()
//     const nameValue = form.elements.name.value;
//     const emailValue = form.elements.email.value;
//     const passwordValue = form.elements.password.value;
//     const repeatPasswordValue = form.elements.repeatpassword.value;

//     if(passwordValue === repeatPasswordValue){
//         const account = new Account(nameValue,emailValue,passwordValue,repeatPasswordValue);
//         accounts.push(account)
//     }else{
//         alert("try again")
//     }  



//     console.log(accounts)
// })


function positiveSum(arr) {
    let sum = 0
    for(let i = 0; i < arr.lenght; i ++){
      if (arr[i] > 0){
        new = new + arr[i]
      }
    }
    
    return sum
}
