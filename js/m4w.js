(function($){

	$.fn.m4w = function(){
		var zoomFactor 	= m4w_zoom_factor[0];
		var defautFontSize = parseInt( $("html").css("font-size") );
		var currentZoom = defautFontSize;
		
		this.click(function(e){

			var data = $(this).data("action");
			if( data == "zoomout" ){
				currentZoom = parseFloat( currentZoom ) / zoomFactor;
				//limitation
				if( defautFontSize/2 > currentZoom ){
					$(e.currentTarget).addClass("disable");
				}else{
					$("html").css("font-size", currentZoom + "px");
					$(e.currentTarget).removeClass("disable");
				}
			}else if( data == "normal" ){
				currentZoom = defautFontSize;
				$("html").css("font-size", defautFontSize + "px" );
			}else if( data == "zoom" ){
				currentZoom = parseFloat( currentZoom ) * zoomFactor;
				//limitation
				if( defautFontSize*2 < currentZoom ){
					$(e.currentTarget).addClass("disable");
				}else{
					$("html").css("font-size", currentZoom + "px");
					$(e.currentTarget).removeClass("disable");
				}
			}
		});
		
		return this;
	}
	
	$("#" + m4w_container_id + " a").m4w();
	
})(jQuery);