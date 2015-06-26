$(document).ready(function(){
	var box_six_flag = true;
	var box_six_width = parseFloat($('#box6').css('width'));
	var box_six_offset = parseFloat($('#box6').css('left'));

	var box_ten_flag = true;
	var box_ten_height = parseFloat($('#box10').css('height'));
	var box_ten_offset = parseFloat($('#box10').css('top'));

	var box_twenty_two_flag = true;
	var box_twenty_two_width = parseFloat($('#box22').css('width'));
	var box_twenty_two_offset = parseFloat($('#box22').css('left'));


	$('#box6').on('click', function() {
		var new_offset = box_six_offset - box_six_width;

		if (box_six_flag) {
			$('#box6').css({'left': new_offset});
			box_six_flag = false;
		} else {
			$('#box6').css({'left': box_six_offset});
			box_six_flag = true;
		}
	});

	$('#box10').on('click', function() {
		var new_offset = box_ten_offset - box_ten_height;

		if (box_ten_flag) {
			$('#box10').css({'top': new_offset});
			box_ten_flag = false;
		} else {
			$('#box10').css({'top': box_ten_offset});
			box_ten_flag = true;
		}
	});

	$('#box27').on('click', function() {
		console.log(box_six_flag);
		console.log(box_ten_flag);
		
		if (!box_ten_flag) {
			$('#box10').css({'top': box_ten_offset});
			box_ten_flag = true;
		}

		if (!box_six_flag) {
			$('#box6').css({'left': box_six_offset});
			box_six_flag = true;
		}

		if (!box_twenty_two_flag) {
		$('#box22').css({'left': box_twenty_two_offset});
		$('#box22').css({'border-left-width': 4});
		$('#box22').css({'border-right-width': 0});
			box_twenty_two_flag = true;
		}

	});

	$('#box26').on('click', function() {
		var new_offset = box_twenty_two_offset - box_twenty_two_width;

		if (box_twenty_two_flag) {
			$('#box22').css({'left': new_offset});
			$('#box22').css({'border-left-width': 0});
			$('#box22').css({'border-right-width': 4});
			box_twenty_two_flag = false;
		} else {
			$('#box22').css({'left': box_twenty_two_offset});
			$('#box22').css({'border-left-width': 4});
			$('#box22').css({'border-right-width': 0});
			box_twenty_two_flag = true;
		}
	});




});