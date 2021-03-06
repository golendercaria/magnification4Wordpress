(function($){

	$.fn.m4w = function(){
		var zoomFactor 	= m4w_zoom_factor[0];
		var defautFontSize = parseInt( $("html").css("font-size") );
		var currentZoom = defautFontSize;
		
		this.click(function(e){
			
			$("#" + m4w_container_id + " a").removeClass("disable");
			
			var data = $(this).data("action");
			if( data == "zoomout" ){
				//limitation
				if( defautFontSize/2 > currentZoom ){
					$(e.currentTarget).addClass("disable");
				}else{
					currentZoom = parseFloat( currentZoom ) / zoomFactor;
					$("html").css("font-size", currentZoom + "px");
				}
			}else if( data == "normal" ){
				currentZoom = defautFontSize;
				$("html").css("font-size", defautFontSize + "px" );
			}else if( data == "zoom" ){
				//limitation
				if( defautFontSize*2 < currentZoom ){
					$(e.currentTarget).addClass("disable");
				}else{
					currentZoom = parseFloat( currentZoom ) * zoomFactor;
					$("html").css("font-size", currentZoom + "px");
				}
			}
		});
		
		return this;
	}
	
	$("#" + m4w_container_id + " a").m4w();
	
})(jQuery);