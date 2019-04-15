$(document).ready(function() {



	var randomNumb = Math.floor(Math.random() * 102) + 19; 
		console.log("randomNumb: " + randomNumb); 
		$(".randomNumber").html(randomNumb); 


	var treadmillOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Treadmill 1: " + treadmillOne); 
		$("#img1").html("<img src=" + "../assets/images/image1.png" + " value=" + treadmillOne + ">"); 

	var treadmillTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Treadmill 2: " + treadmillTwo); 
		$("#img2").html("<img src=" + "../assets/images/image2.png" + " value=" + treadmillTwo + ">"); 

	var treadmillThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Treadmill 3: " + treadmillThree); 
		$("#img3").html("<img src=" + "../assets/images/image3.png" + " value=" + treadmillThree + ">");
	
	var treadmillFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Treadmill 4: " + treadmillFour); 
		$("#img4").html("<img src=" + "../assets/images/image4.png" + " value=" + treadmillFour + ">");
		
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
		console.log("score: " + score); 

	function reset () {
		randomNumb = Math.floor(Math.random() * 102) + 19; 
			console.log("compPick: " + randomNumb); 
		$(".randomNumber").html(randomNumb); 

		score = 0; 
		$(".scoreDisplay").html(score); 

		treadmillOne = Math.floor(Math.random() * 12) + 1;  
			console.log("Treadmill 1: " + treadmillOne); 
		$("#img1").html("<img src=" + "../assets/images/image1.png" + " value=" + treadmillOne + ">"); 

		treadmillTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("Treadmill 2: " + treadmillTwo); 
		$("#img2").html("<img src=" + "../assets/images/image2.png" + " value=" + treadmillTwo + ">"); 

		treadmillThree = Math.floor(Math.random() * 12) + 1; 
			console.log("Treadmill 3: " + treadmillThree); 
		$("#img3").html("<img src=" + "../assets/images/image3.png" + " value=" + treadmillThree + ">");
	
		treadmillFour = Math.floor(Math.random() * 12) + 1; 
			console.log("Treadmill 4: " + treadmillFour); 
		$("#img4").html("<img src=" + "../assets/images/image4.png" + " value=" + treadmillFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore); 

			if(newScore === randomNumb) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
			} 

			else if(newScore > randomNumb) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}

		}); 



	}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === randomNumb) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > randomNumb) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 
