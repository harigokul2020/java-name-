function handlesubmit(){
    let emails=document .getElementById("email");
    let emailvalue=emails.value;


    let resultvalue=document.getElementById("result");
    resultvalue.innerHTML= "<p> your email id is " + emailvalue + "</p>";

}