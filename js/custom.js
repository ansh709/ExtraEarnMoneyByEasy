window.addEventListener('load',function(){
	setTimeout(function(){
		document.querySelector('.add-to').style.display ="block";
		console.log("hello");
	},3000);
	document.querySelector('.later').addEventListener('click',function(){
		document.querySelector('.add-to').style.display ="none";
	})
    
	setTimeout(function(){
		document.querySelector('#signupForm').style.display ="block";
	},7000);


})

function prohold(){
	(profilePage.style.display ==="none")?profilePage.style.display = "block" : profilePage.style.display = "none"
	
}
backfromprofile.addEventListener('click',function(){
		profilePage.style.display ="none";
})

submit.addEventListener('click',function(){
	var s_name = document.querySelector("[name='fullname']").value;
	var s_email = document.querySelector("[name='email']").value;
	var s_phone = document.querySelector("[name='phone']").value;
	var s_pass = document.querySelector("[name='password']").value;
	console.log(s_name);
	
	myname.innerHTML= s_name;
	email.innerHTML += s_email;
	phone.innerHTML+= s_phone;
	password.innerHTML+= s_pass;
	profilePage.style.display = "block"
	signupForm.style.display="none";	
})


