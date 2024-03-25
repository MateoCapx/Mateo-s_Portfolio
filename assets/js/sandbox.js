 

function sendMail(){
    let params = {
      nameInputField : document.getElementById("name").value,
      emailAddress : document.getElementById("email").value,
      subjectField : document.getElementById("subject").value,
      messageBox : document.getElementById("text").value,
    }
    emailjs.send("Mateo_Dev_Portfolio", "template_7q4ewcj", params)
    .then(function(res){
      alert("Successfully Sent" + res.status);
    }).catch(error)

    console.log( params)
  } 


console.log("SANDBOX WORKS!!!!!!")