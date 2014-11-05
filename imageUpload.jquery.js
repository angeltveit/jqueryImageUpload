(function ($){
	$.fn.imageUpload = function(inputOptions) {
		

		var options = {
			id: null,
			requiredRatio: null,
			wrongRatio: null,
			done: null
		}

		$.each(inputOptions,function(key,val) {
			options[key] = val;
		});
		

		var input = $('<input type="file" style="display:none;" id="imageUpload-file-'+options.id+'" />').insertAfter($(this));

		$(this).click(function() {
			$("#imageUpload-file-"+options.id).click();
		})

		$(input).change(function() {
			if (this.files && this.files[0]) {
	            var reader = new FileReader();
	            var image  = new Image();


	            reader.onload = function (e) {
	            	image.src = e.target.result;
	            	image.onload = function() {
	            		if( (this.width / this.height) == options.requiredRatio || options.requiredRatio === null) {
	            			$('#'+options.id).attr('src', e.target.result);
	            			$("#imageUpload-file-"+options.id).val("");
	            		} else {
	            			options.wrongRatio({targetId:options.id,width:this.width,height:this.height,object:e.target.result,data:image.src});
	            			$("#imageUpload-file-"+options.id).val("");
	            		}
	            	}
	                
	            }
	            
	            reader.readAsDataURL(this.files[0]);
        	}
			
		})

	}

	
}(jQuery));