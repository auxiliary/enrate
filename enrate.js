/*
 * A very simple plugin for easier star rating markup using FontAwesome.io
 * https://github.com/auxiliary/enrate
 */
(function($){
	jQuery.fn.enrate = function() {
		$("[class^=enrate-]").each(function() {
	        var parsed_data = this.className.split(' ')[0].match(/enrate-(\d)-([a-z])-(\d)/);
			var num = parsed_data[1];
	        var has_half = parsed_data[2] == "h" ? true : false;
	        var total = parsed_data[3];
	        var replacement = "";
	        if (has_half == true)
	        {
	            total--;
	        }
	        for(var i = 0; i < num; i++)
	        {
	        	replacement += "<i class='fa fa-star'></i>";
	        }
	        if (has_half == true)
	        {
	        	replacement += "<i class='fa fa-star-half-o'></i>";
	        }
	        for(var i = 0; i < total - num; i++)
	        {
	        	replacement += "<i class='fa fa-star-o'></i>";
	        }
	        $(this).replaceWith(replacement);
		});
	}
}(jQuery));
