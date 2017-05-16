console.log('hi')

$('.material-icons, .startBtn').css('cursor', 'pointer')

$('.hack').keydown(function(event){
	if(event.keyCode == '13'){
		$('.submitHack').click();
		}
});

// start page


// $('.startBtn').on('click',function(e){ 
// 	$('.gif').show();
// 	$('.audio').prop('volume','.05');
// 	$('.audio').trigger('play');
// setTimeout(function(e){
// 	$('.gif').css('display', 'none');
// 	},3000); 
// 	$('.gamePage').css('display','block');
// 	$('.pageOne').css('display', 'none')
// });

// end transistion



var numberCounter = 60;
function setTimer(){
var countdown = setInterval(function(){
	numberCounter --;
	if(numberCounter > 0){
	$('.timeBox').css('visibility', 'visible')
	$('.time').text(numberCounter);
	}
	else{
		numberCounter === 0;
		endGame();
		};
	},1000);
};


function warning(){
$(function(){
		$(".firstMessage").typed({
			strings: ["Warning!!!!! ^2000 </br> You are attempting to access a secure system. </br> ^2000 Leave now to avoid prosecution!"],
			typeSpeed: 4
		});
	})
	setTimeout(function(){
        	setTimer();
        },8000);
	}


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
}


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
				$(".secondMessage").typed({
					strings: ['^2000 Hello RadioMan70.</br> You no longer have access to this project.</br>Triangulating...'],
			typeSpeed: 4
		});
	})
		},2000)
}



var counter = 0;
$('.submitHack').on('click',function(e){                
	if( $('.hack').val() === 'thesearchisover') {
		$('.accessText').show();
        $('.accessText').text('ACCESS GRANTED');
        $('.accessText').css('color','#17e561')
        setTimeout(function(){
        	 ending();
        },2000)
       
	}
    else{
    	counter++
    	$('.attempts').text('attempts: ' + counter + ' of 15');
    	$('.accessText').show();
        $('.accessText').text('ACCESS DENIED');
        if(counter === 1){
        	setTimeout(function(){
        	$('.accessText').hide();
        	$('.hack').val('')
        	},1000);
        	 }
 		}
 
 	if($('.hack').val()==='om7'){
 		time();
 	}













setTimeout(function(){
        	$('.accessText').hide();
        	$('.hack').val('')
        },1000);


})








