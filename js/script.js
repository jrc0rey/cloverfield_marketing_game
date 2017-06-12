console.log('You should not be here!')

$('.material-icons, .startBtn, .over').css('cursor', 'pointer')

$('.hack').keydown(function(event){
	if(event.keyCode == '13'){
		$('.submitHack').click();
		}
});

// start page

$('.startBtn').on('click',function(e){ 
	$('.gif').show();
	$('.audio').prop('volume','.05');
	$('.audio').trigger('play');
setTimeout(function(e){
	$('.gif').css('display', 'none');
	},3000); 
	$('.gamePage').show();
	$('.pageOne').css('display', 'none')
});

// end transistion

// end game function

function endGame(){
	$('.gamePage').hide();
	$('.gameOver').show();
	$('.siren').prop('volume','.05');
	$('.siren').trigger('play');
	$(function(){
		$('.over').typed({
			strings: ['Location triangulated. Goodbye.</br>^2000 Restart.'],
			typeSpeed: 4
		});
	})
	$('.over').on('click', function(){
		location.reload()
	})
}

// end

var moreTime = true;
var stopTimer = false;

var numberCounter = 30;
function setTimer(){
var countdown = setInterval(function(){
	numberCounter --;
	if(numberCounter > 0){
	$('.timeBox').css('visibility', 'visible')
	$('.time').text(numberCounter);
		if(stopTimer === true){
			clearInterval(countdown)
		}
	}
	else{
		numberCounter === 0;
		endGame();
		clearInterval(countdown)
		};
	},1000);
};

function warning(){
$(function(){
		$('.firstMessage').typed({
			strings: ['Warning!!!!! ^2000 </br> You are attempting to access a secure system. </br> ^2000 Leave now to avoid prosecution!'],
			typeSpeed: 4
		});
	})
	setTimeout(function(){
        	setTimer();
        },8000);
};

initialInput = true

function firstSubmit(){
$('.submitHack').on('click', function(e){
		if(initialInput === true){
        	warning();
        	initialInput = false;
        	tagruatoClue();
        	}
        });
};
firstSubmit();

function tagruatoClue(){
	setTimeout(function(){
		$('.box').on('click', function(e){
			$('.material-icons').css('visibility', 'visible').on('click', function(e){
				howardTN();
			})
		});
	},1000);
};

function howardTN(){
	$('.material-icons').css('visibility', 'hidden')
	$('.howardClue').show();
};

$('.howardClue').on('click', function(e){
	$.SimpleLightbox.open({
    	items: ['images/howard1.jpg','images/howard2.jpg']
	});
	$('.howardClue').remove();
	$('.material-icons').remove();
});

function time(){
	$('.time').text('100')
		numberCounter = 100
			setTimeout(function(){
			$(function(){
				$('.secondMessage').typed({
					strings: ['^2000 Hello RadioMan70.</br> You no longer have access to this project.</br>Triangulating location...'],
			typeSpeed: 4
		});
	})
		},2000)
	$('.finalClue3').css('visibility', 'visible')
};

// tagruato clues

function tagruatoFirst(){
	$('.tagruato1').css('visibility', 'visible')
	$('.tagruato1').on('click', function(e){
		$.SimpleLightbox.open({
    	items: ['images/tag1.jpg']
		});
		$('.grid').css('display', 'flex')
		$('.gridClue').on('click', function(e){
			$('.finalClue1').css('visibility', 'visible')
			$('.grid').hide()
			$('.tagruato1').off();
			$('.tagruato3').css('visibility', 'visible')
			tagruatoSecond();
		})
	})
};

function tagruatoSecond(){
	$('.tagruato3').on('click', function(e){
		$(function(){
				$('.thirdMessage').typed({
					strings: ['You have unsent messages </br> Would you like to send?'],
			typeSpeed: 4
		});
	})
})
	$('.submitHack').on('click', function(e){
	if($('.hack').val() === 'yes'){
			$.SimpleLightbox.open({
    		items: ['images/letter.jpg']
			});
		}
	$('.tagruato3').off()
	})
};

function tagruatoThird(){
	$('.tagruato2').css('visibility', 'visible')
	$('.tagruato2').on('click', function(e){
			$.SimpleLightbox.open({
    		items: ['images/tag4.jpg']
			});
	})
	$('.submitHack').on('click',function(e){                
		if( $('.hack').val() === '4707'){
			$('.finalClue2').css('visibility', 'visible')
			$('.tagruato2').off()
			$('.tagruato4').css('visibility', 'visible')
			$(function(){
				$('.fourthMessage').typed({
					strings: ['RadioMan70. </br> The core has become unstable. </br> If you continue the results could be CATASTROPHIC.'],
			typeSpeed: 4
			});
		})
			$('.tagruato4').on('click', function(e){
				$.SimpleLightbox.open({
    			items: ['images/cat.jpg']
				});
			})
	}
})
};

function ending(){
	stopTimer = true;
	$(function(){
			$('.fifthMessage').typed({
			strings: ['Project GOD PARTICLE initiated...'],
			typeSpeed: 4
		});
	setTimeout(function(){
			 $('.gamePage').hide()
        	 $('.youWon').show();
        },6000)
	})
};

var counter = 0;
$('.submitHack').on('click',function(e){                
	if( $('.hack').val() === 'thesearchisover') {
		$('.accessText').show();
        $('.accessText').text('ACCESS GRANTED');
        $('.accessText').css('color','#23CC6A')
        setTimeout(function(){
        	 ending();
        },2000)
       
	}
    else{
    	counter++
    	$('.attempts').text('attempts: ' + counter + ' of 10');
    	$('.accessText').show();
        $('.accessText').text('ACCESS DENIED');
        if(counter === 1){
        	setTimeout(function(){
        	$('.accessText').hide();
        	$('.hack').val('')
        	},1000);
        	 }
        if(counter > 10){
        	endGame();
        }
 	}
 
 	if($('.hack').val() === 'om7'){
 		if(moreTime === true){
 			time();
 			tagruatoFirst();
 			moreTime = false
 		}
 	}

 	if($('.hack').val() === 'end'){
			tagruatoThird()
 			
	}

	if($('.hack').val() === 'cat'){
			$('.finalClue4').css('visibility', 'visible')
 			
	}
 

setTimeout(function(){
        	$('.accessText').hide();
        	$('.hack').val('')
        },1000);

});








