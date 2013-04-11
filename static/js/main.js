;(function() {
	var random_int = function(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1));
	};

	var random_sort = function() {
		return (Math.random() > 0.5);
	}

	$(document).ready(function(){
		$('#footer .ad').addClass('bottom-ad-' + random_int(1, 5));

		var side_ad_list = [ 'side-ad-1', 'side-ad-2', 'side-ad-3' ];
		side_ad_list.sort(random_sort);
		$('#side_ad li a').each(function(index, item){
			$(item).addClass(side_ad_list[index]);
		});
	});
}());