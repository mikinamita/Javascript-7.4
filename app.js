

			function outerFunc(x) {
			 
				  x();   
			   
			}

			var  t=function innerFunc(){
			  alert("Hello World From Inner Function");
			}	
			outerFunc(t); 
