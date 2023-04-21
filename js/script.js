// jQuery(document).ready(function () {
     
//      $(".phone").mask("+380 (99) 999-99-99"); 
    
   
    jQuery('.form__btn').click( function() {
    	let form = jQuery(this)
    	
    	if ( form.valid() ) {
    		form.css('opacity','.5');
    		let actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
                    alert('hello');
    			},
    			error:function() {
    			     form.find('.status').html('серверная ошибка');
    			}
    		});
    	}
    });


// });