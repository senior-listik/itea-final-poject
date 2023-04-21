// jQuery(document).ready(function () {
     
//      $(".phone").mask("+380 (99) 999-99-99"); 
    
   
    jQuery('.form__btn').click( function() {
    	let form = jQuery(this)
    	
    	if ( form.valid() ) {
    		
    		let actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function() {
                    alert('Successfully sent!');
    			},
    			error:function() {
    			     alert('E R R O R');
    			}
    		});
    	}
    });


// });