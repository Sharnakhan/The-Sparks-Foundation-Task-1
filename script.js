let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
  
   if (enterAmount > 50000 ) {

      alert("Enter Amount exceed the Anount limit(₹10000).")
   } 
   else if(enterAmount >  parseInt(document.getElementById("myAccountBalance").innerText) ){
      alert(` Balance in account is   ₹${parseInt(document.getElementById("myAccountBalance").innerText)}.`)
   }
   else {
      var paymentAmount =enterAmount;
      var findUserBankAccount = enterName + "BankBalance";
      var findUserPayment = enterName +"Payment";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
      var PaymentAmount = parseInt(document.getElementById(findUserPayment).innerHTML) + paymentAmount;
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      document.getElementById(findUserPayment).innerHTML = PaymentAmount;
      alert(`Successful Transaction !!  
      ₹${enterAmount} is sent to ${enterName}@email.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(` ₹${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}