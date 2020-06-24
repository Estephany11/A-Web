$(document).ready(function(){

	if(window.location.href.indexOf('index') > -1){
	  $('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200,
	    pager: false
	  })
	}

	  // POST 
	if(window.location.href.indexOf('index') > -1){
		  var posts =[

		  	{
		  		title: 'Prueba de titulo 1',
		  		date: 'PUBLICADO EL DÍA '+ moment().date() + ' de ' + moment().format(" MMMM ") + " del " + moment().format("YYYY"),
		  		content: 'A sports car that changes every road. The BMW M2 Competition overwhelms with performance, agility and precision. The concentrated power of the new 410-hp Bi-turbo inline 6-cylinder petrol engine is a permanent guarantee of high performance and the aspiration to set new records. A genuine M automobile, built for winners'
		  	},
		  	{	
		  		title: 'Prueba de titulo 2',
		  		date: 'PUBLICADO EL DÍA '+ moment().date() + ' de ' + moment().format(" MMMM ") + " del " + moment().format("YYYY"),
		  		content: '1. Weight-optimised Bi-turbo for maximum power delivery <br> 2. Output 302 kW (410 hp) <br> 3. Maximum torque 550 Nm <br> 4. From 0 to 100 km/h in 4.2 s with M DKG <br> 5. Maximum engine speed 7,000 1/min'
		  	},

		  	{
		  		title: 'Prueba de titulo 3',
		  		date: 'PUBLICADO EL DÍA '+ moment().date() + ' de ' + moment().format(" MMMM ") + " del " + moment().format("YYYY"),
		  		content: 'A sports car that changes every road. The BMW M2 Competition overwhelms with performance, agility and precision. The concentrated power of the new 410-hp Bi-turbo inline 6-cylinder petrol engine is a permanent guarantee of high performance and the aspiration to set new records. A genuine M automobile, built for winners'
		  	},
		  	{
		  		title: 'Prueba de titulo 4',
		  		date: 'PUBLICADO EL DÍA '+ moment().date() + ' de ' + moment().format(" MMMM ") + " del " + moment().format("YYYY"),
		  		content: 'A sports car that changes every road. The BMW M2 Competition overwhelms with performance, agility and precision. The concentrated power of the new 410-hp Bi-turbo inline 6-cylinder petrol engine is a permanent guarantee of high performance and the aspiration to set new records. A genuine M automobile, built for winners'
		  	},

		   ]
		

	  	posts.forEach((item, index) =>{
	  		var post =  `

	  						<article class="post">
					 			<h2> ${item.title} </h2>
					 			<span class= "date"> ${item.date} </span>
					 			<p> 
					 				${item.content} 		 
					 			</p>
					 			<a href="#" class = "button-more"> Reed more </a>		

					 		</article>

	  				 `; 
	  				 $("#post").append(post)

	 	 })

	}

	  // SELECTOR DE TEMA 
	  	var theme= $("#theme")
	  	
	  	$("#to-pink").click(function(){
	  		theme.attr("href", "css/pink.css")
	  	})

	  	$("#to-blue").click(function(){
	  		theme.attr("href", "css/blue.css")				
	 	 })

	  	
	  	$("#to-purple").click(function(){ 
	  		theme.attr("href", "css/purple.css")

	  })

	 // BOTON DE SCROLL AUTOMATICO 

	 
	 $(".subir").click(function(e){
	 	e.preventDefault()

	 	$('html, body').animate({
	 		scrollTop: 0   // sube hacia el comienzo de la pagina
	 	}, 500)

	 	return false

	 })

	 // LOGIN FALSO 

	

	 	$("#login form").submit(function(){
	 		var form_name= $("#form_name").val(); 


	 		localStorage.setItem("form_name" , form_name)
	 	})


	 
	 	var form_name= localStorage.getItem("form_name")
	 		if(form_name != null && form_name != "undefined"){
	 			$("#about p").html("<br><strong> Bienvenido, " + form_name + "</strong>")
	 			$("#about p").append("<a href= '#' id= 'logout'> Close sesion </a>")
	 		
	 			$("#login").hide()
	 			$("#logout").click(function(){
	 			localStorage.clear()
	 			location.reload()
	 			})
	 		}	


	 		// ACORDEON: 
		if(window.location.href.indexOf('about') > -1){
			$("#acordeon").accordion()
		}

			//RELOJ 
		if(window.location.href.indexOf('reloj') > -1){
			setInterval(function(){

					var reloj = moment().format("hh:mm:ss")
					$("#reloj").html(reloj)
		
		},5000)
		} 



	if(window.location.href.indexOf('contact') >-1 ){

		$("form input[name= 'date']").datepicker({
			dateFormat: ' dd/mm/yy'
		})

		$.validate({
			lang : 'en'
		})
	}

})