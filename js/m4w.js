(function($){
	
	$.fn.m4w = function(){
		var zoomFactor 	= 1.1;
		var defautFontSize = parseInt( $("html").css("font-size") );
		var currentZoom = defautFontSize;
		
		this.click(function(e){
			var data = $(this).data("action");
			if( data == "zoomout" ){
				currentZoom = parseFloat( currentZoom ) / zoomFactor;
				$("html").css("font-size", currentZoom + "px");
			}else if( data == "normal" ){
				currentZoom = defautFontSize;
				$("html").css("font-size", defautFontSize + "px" );
			}else if( data == "zoom" ){
				currentZoom = parseFloat( currentZoom ) * zoomFactor;
				$("html").css("font-size", currentZoom + "px");
			}
		});
		
		return this;
	}
	
	$("#" + m4w_target_id + " a").m4w();
	
})(jQuery);