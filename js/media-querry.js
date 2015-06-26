$(document).ready(function(){
	var width = $(window).width() * (.95);
  
  destijl(width);

  $( window ).resize(function() {
  	width = $(window).width() * (.95);
  	destijl(width);
	});
});

function destijl(width) {
	var height = width * (2/3);
	var margin = width * (.025);

	var width_one = width / 12;
	var width_two = width/6;
	var width_three = width / 4;
	var width_five = width * (5/12);
	var width_six = width / 2;
	var width_seven = width * (7/12);
	var width_eight = width * (2/3);
	var width_nine = width * (3/4);
	var width_ten = width * (5/6);
	var width_eleven = width * (11/12);

	var height_one = height / 8;
	var height_two = height / 4;
	var height_three = height * (3/8);
	var height_four = height / 2;
	var height_five = height * (5/8);
	var height_six = height * (3/4);
	var height_seven = height * (7/8);

	$('#destijl').css('height', height);
	$('#destijl').css('width', width);
	$('#destijl').css('margin', margin);

	$('.width_one').css({'width': width_one});
	$('.width_two').css({'width': width_two});
	$('.width_three').css({'width': width_three});
	$('.width_five').css({'width': width_five});
	$('.width_six').css({'width': width_six});
	$('.width_eight').css({'width': width_eight});

	$('.height_one').css({'height': height_one});
	$('.height_two').css({'height': height_two});
	$('.height_three').css({'height': height_three});
	$('.height_four').css({'height': height_four});

	$('.col_one').css({'left': margin});
	$('.col_two').css({'left': margin + width_one});  
	$('.col_three').css({'left': margin + width_two});
	$('.col_four').css({'left': margin + width_three});
	$('.col_six').css({'left': margin + width_five});

	$('.col_seven').css({'left': margin + width_six});
	$('.col_eight').css({'left': margin + width_seven});
	$('.col_nine').css({'left': margin + width_eight});
	$('.col_ten').css({'left': margin + width_nine});

	$('.col_eleven').css({'left': margin + width_ten});
	$('.col_twelve').css({'left': margin + width_eleven});

	$('.row_one').css({'top': margin });
	$('.row_two').css({'top': margin + height_one});
	$('.row_three').css({'top': margin + height_two});
	$('.row_four').css({'top': margin + height_three});
	$('.row_five').css({'top': margin + height_four});
	$('.row_six').css({'top': margin + height_five});
	$('.row_seven').css({'top': margin + height_six});
	$('.row_eight').css({'top': margin + height_seven});
};
  