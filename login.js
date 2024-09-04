function login(){

    var Account=acno.value

    var pswd=password.value

    if(Account in localStorage){
     
     var bank= JSON.parse(localStorage.getItem(Account))

     if(pswd==bank.Pswd){ 
        
     alert("login succesfull")

      window.location='main.html'

    }else{
        alert("incorrect password")
    }
    

}else{
    alert("account not registered")
}

} 