window.addEventListener('load',function(){
	setTimeout(function(){
		document.querySelector('.add-to').style.display ="block";
		console.log("hello");
	},3000);
	document.querySelector('.later').addEventListener('click',function(){
		document.querySelector('.add-to').style.display ="none";
	})
})