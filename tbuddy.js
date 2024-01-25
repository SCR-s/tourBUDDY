function openlog() {
    document.getElementById("logform").style.display = 'block';
}
function opensign() {
    document.getElementById("signform").style.display = 'block';
}
function logalert() {
    let phone = document.getElementById("phone1");
    let phn = /^\d{10}$/;
    if (phn.test(phone.value)) {
        
        alert("Thank you for log in.Welcome to tourbuddy");
        document.getElementById("logform").style.display = 'none';
    }
    else {
        alert("Enter the correct mobile number");
    }
}
function signalert() {
    
    let phone = document.getElementById("phone2");
    let phn = /^\d{10}$/;
    if (phn.test(phone.value)) {
       alert(" Welcome to tourBUDDY");
      }
        
    else {
       
            alert("provide correct phone");
        
    }

}