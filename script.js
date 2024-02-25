let input1=document.getElementById('fname');
let input2=document.getElementById('lname');
let input3=document.getElementById('no');
let input4=document.getElementById('email');
let button=document.getElementById('btn');

function myFunction(){
	alert(
        "First Name: " + input1.value + "  " +
        "Last Name: " + input2.value + "  " +
        "Phone Number: " + input3.value + "  " +
        "Email ID: " + input4.value
    );
}