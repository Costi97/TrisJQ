$(document).ready( function(){


const SIZE = 3;
var x_Coord=0;
var y_Coord=0;
var tentativi =0;
var cont_giocatore=1;
var rosso;
var verde;
var griglia =[];


//  Questo è il modo esatto per creare una matrice

		for (var i=0; i<=SIZE; i++){
		griglia[i]=[];
		for (var j=0; j<=SIZE; j++){
			griglia[i][j]=0;
		}
	}
 
	// Costruiamo la griglia
	for (var i=0; i<SIZE; i++){
		for (var j=0; j<SIZE; j++){
			$("#Griglia").append('<input type="button" id="'+i+'_'+j+'" value=" ">');
			$("#"+i+'_'+j).css("background-color", "grey");
			$("#"+i+'_'+j).addClass("grey");
			$("#"+i+'_'+j).attr("disabled", true);
		}
		$("#Griglia").append('<br />');
	}
	
	
	function reset(){
		
		tentativi =0;
		cont_giocatore=1;
		
		
		for (var i=0; i<=SIZE; i++){
			griglia[i]=[];
			for (var j=0; j<=SIZE; j++){
				griglia[i][j]=0;
			}
		}
		
		for (var i=0; i<SIZE; i++)
			for (var j=0; j<SIZE; j++){	
				$("#"+i+'_'+j).attr("disabled", false);
				if ($("#"+i+'_'+j).hasClass("red")) {$("#"+i+'_'+j).toggleClass("red");$("#"+i+'_'+j).css("background-color", "grey");	$("#"+i+'_'+j).addClass("grey");}
				if ($("#"+i+'_'+j).hasClass("green")) {$("#"+i+'_'+j).toggleClass("green");$("#"+i+'_'+j).css("background-color", "grey");	$("#"+i+'_'+j).addClass("grey");}
				
			}
		
	}
		
		
	
	 function check(){
		 rosso= (((griglia[0][0]==2) && (griglia[0][1]==2) && (griglia[0][2]==2)) 	||// controllo righe
				   ((griglia[1][0]==2) && (griglia[1][1]==2) && (griglia[1][2]==2)) ||
				   ((griglia[2][0]==2) && (griglia[2][1]==2) && (griglia[2][2]==2)) ||
				   ((griglia[0][0]==2) && (griglia[1][1]==2) && (griglia[2][2]==2)) ||//controllo diagonali
				   ((griglia[0][2]==2) && (griglia[1][1]==2) && (griglia[2][0]==2)) ||
				   ((griglia[0][0]==2) && (griglia[1][0]==2) && (griglia[2][0]==2)) ||//controllo colonne
				   ((griglia[0][1]==2) && (griglia[1][1]==2) && (griglia[2][1]==2)) ||
				   ((griglia[0][2]==2) && (griglia[1][2]==2) && (griglia[2][2]==2)) );
				   
	    if (rosso) {alert("Rosso vince"); return}
		verde= (((griglia[0][0]==3) && (griglia[0][1]==3) && (griglia[0][2]==3)) 	|| // controllo righe
				   ((griglia[1][0]==3) && (griglia[1][1]==3) && (griglia[1][2]==3)) ||
				   ((griglia[2][0]==3) && (griglia[2][1]==3) && (griglia[2][2]==3))	||
				   ((griglia[0][0]==3) && (griglia[1][1]==3) && (griglia[2][2]==3)) || //controllo diagonali
				   ((griglia[0][2]==3) && (griglia[1][1]==3) && (griglia[2][0]==3))	||
				   ((griglia[0][0]==3) && (griglia[1][0]==3) && (griglia[2][0]==3)) ||//controllo colonne
				   ((griglia[0][1]==3) && (griglia[1][1]==3) && (griglia[2][1]==3)) ||
				   ((griglia[0][2]==3) && (griglia[1][2]==3) && (griglia[2][2]==3)) );
				   
		if (verde) {alert("verde vince"); return}
		return;	
	}
	   
	
		
  $("#gioca").click(function(){
	reset();
  });
  
  
  $("#fine").click(function(){
	$("#Griglia").hide();
	$("#gioca").hide();
	$("#fine").hide();
	alert("ARRIVEDERCI!!!");
	
  });
  
	
  $(":input").click(function(){
 
		coord=$(this).attr("id").split("_");
		x_Coord=parseInt(coord[0]);
		y_Coord=parseInt(coord[1]);
	 	  
		if (cont_giocatore==1 && tentativi<= 9){
			cont_giocatore=2;
			tentativi++;
			$("#"+x_Coord+'_'+y_Coord).toggleClass("grey");
			$("#"+x_Coord+'_'+y_Coord).addClass("red");
			$("#"+x_Coord+'_'+y_Coord).css("background-color", "red");
			$("#"+x_Coord+'_'+y_Coord).attr("disabled", true);
			griglia[x_Coord][y_Coord]=2;
		//	alert(x_Coord+" "+ y_Coord+" "+ griglia[x_Coord][y_Coord]);
			controllo = check();
			if (!(rosso)) alert("Tocca al giocatore verde!!!");
		}
		else if (cont_giocatore==2 && tentativi<= 9){
			cont_giocatore=1;
			tentativi++;
			$("#"+x_Coord+'_'+y_Coord).toggleClass("grey");
			$("#"+x_Coord+'_'+y_Coord).addClass("green");
			$("#"+x_Coord+'_'+y_Coord).css("background-color", "green");
			$("#"+x_Coord+'_'+y_Coord).attr("disabled", true);
			griglia[x_Coord][y_Coord]=3;
			controllo = check();
			if (!(verde)) alert("Tocca al giocatore rosso!!!");
		}
  
  });

});

	

     

	
	
	 
	 



