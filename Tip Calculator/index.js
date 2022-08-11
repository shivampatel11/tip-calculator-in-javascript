function calculateTip() {
    var bill = document.getElementById("bill").value;
    var service = document.getElementById("service").value;
    var numOfPeople = document.getElementById("people").value;
    
    //console.log(bill,service,numOfPeople)
  
    if (bill === "" & service == 0) {
      alert(" Enter Some Values");
    }
  
    if (numOfPeople === "" && numOfPeople<=1) {
      numOfPeople = 1;
      document.getElementById("each").innerText = "";
    }
      else {
      document.getElementById("each").style.display = "block";
    }
  
    var total = (bill * service) / numOfPeople;
   // console.log(total)
    total = total.toFixed(2);
  
    document.getElementById("tip").style.display = "block";
    document.getElementById("total").innerHTML = total;
  
  }
  
  document.getElementById("tip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  document.getElementById("click").onclick = function () {
    calculateTip();
  
  };
  


