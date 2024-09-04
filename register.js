function register(){
    var uname=username.value
   
     var pswd=password.value

     var Account=acno.value

     console.log(Account);
     


     bank={
         Acno:Account,
         Pswd:pswd,
         Uname:uname,
         balance:0
     }
   
  console.log(bank);
     
if(bank.Acno in localStorage){
alert("already exists")
}else{

localStorage.setItem(bank.Acno,JSON.stringify(bank))
alert("registered")

window.location='login.html'
}

  
  
  

 }