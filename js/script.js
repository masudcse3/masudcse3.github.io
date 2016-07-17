//Responsive header when scrolling........
function scrollHeader(){
    var topPosition = document.getElementById("headerLogo");
    var logoImg = document.getElementById("headerLogoImg");
    var ypos = window.pageYOffset;
    if(ypos>120){
      topPosition.style.height= "100px";
      topPosition.style.borderTopLeftRadius = "0px";
      topPosition.style.borderTopRightRadius = "0px";
      logoImg.style.height = "100px";
      logoImg.style.width = "100px";
    }else{
       topPosition.style.height= "120px";
       topPosition.style.borderTopLeftRadius = "20px";
       topPosition.style.borderTopRightRadius = "20px";
       logoImg.style.height = "120px";
       logoImg.style.width = "120px";
    }
}
  window.addEventListener("scroll",scrollHeader);
  //Form validation
  function validation(){
      var fname = document.myForm.fname.value;
      var lname = document.myForm.lname.value;
      var sub = document.myForm.sub.value;
      var email = document.myForm.email.value;
      var mss = document.myForm.text.value;
      var status = false;

      if(mss.length > 160 || mss == null || mss == " "){
          var mssValue = document.getElementById("alertTextArea");
           mssValue.innerHTML = "&#10007 Please fill the right way";
           mssValue.style.border = "1px solid red";
            mssValue.style.opacity = "1";
              mssValue.style.transition = "all 1s";
         status = false;
      } else{
         status = true;
      }



      return status;
  }
