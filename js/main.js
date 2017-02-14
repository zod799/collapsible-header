jQuery(function($){
	console.log('jquery ready...');

	var maxPad = 200;
	$("#contentContainer").on('scroll', function(e){


		var $this = $(this);
		$el = $('.topImageTitle');
		var pos = $el.offset(); //pos.top
		var heightRemaining = $(window).height() - $('header').height();

		if(pos.top + $el.innerHeight() <= $('header').height()){
			
			console.log("Freeze Buddy!!!");
			$el.css('padding-top', '0px');
			$this.css('overflow', 'hidden').scrollTop(0);
			$('.mainContent').css({
				'overflow': 'auto',
				'height': heightRemaining
			}).scrollTop(10);
		}

	});
	$('.mainContent').on('scroll', function(){
		var $this = $(this);
		if ($this.scrollTop() == 0) {
			$this.css({
				'overflow': '',
				'height': 'auto'
			})
			$('.topImageTitle').css({
				'padding-top': '200px'
			});
			$("#contentContainer").css({
				'overflow': 'auto'
			}).scrollTop(190);
			
			
			return false;
		}
	});
});