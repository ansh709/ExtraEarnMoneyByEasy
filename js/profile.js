 class Profile{
	 constructor(photo){
		 this.photo = photo;
	 }
 }
var  myPro = new Profile('images/userDefaulticon.png'); 
 
myprofile = ()=>{
	profilePage.innerHTML+=`
	  <div class="container">
	       <div class="row">
		        <div class="col-md-12">
				    <div class="profileInsert">
					    <a id="backfromprofile">Back</a>
					    <h3>Profile</h3>
						<img src="${myPro.photo}">
					</div>
					<div class="profiledata">
					    <h2 id="myname"></h2>
						<h4 id="email">Email - </h4>
						<h4 id="phone">Phone - </h4>
						<h4 id="password">Pass  - </h4>
					</div>
					<div class="taskPoits">
					    <h3 id="points">Points  - 0</h3>
					</div>
				</div>
		   </div>
	  </div>
	`;
}
myprofile();