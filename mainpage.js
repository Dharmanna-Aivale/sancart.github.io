
// sweetalert for all the product 
const sweetalert=()=>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'you have to login first to buy this product!'
      })
}

// sweetalert for login
const alertfor_login=()=>{
    Swal.fire({
        icon: 'error',
        title: 'login failed',
        text: 'please sign in first to login !'
      })

}   

// the validation for the login form started
const clearErr=(errid)=>{
  document.getElementById(errid).innerHTML="";
}

 const loginvalidate=()=>{
   const username=document.getElementById('fname').value;
  const password=document.getElementById('lname').value;

  if (username==""){
    document.getElementById('spanfname').innerHTML="** Please fill the user name ";
    return false;
  }

  if(username.length<=2){
    document.getElementById('spanfname').innerHTML="***username is too short ";
    return false;

  }

   if(username.length>20){
    document.getElementById('spanfname').innerHTML="***username is too long";
    return false;

  }
    if(!isNaN(username)){
    document.getElementById('spanfname').innerHTML="***  only characters are allowed";
    return false;

  }



  // for password

  if (password==""){
    document.getElementById('spanlname').innerHTML="** Please fill the user name ";
    return false;
  }

  if(password.length<=2){
    document.getElementById('spanlname').innerHTML="*** Weak password.. ";
    return false;

  }





  else {
    return true;
  }
 }