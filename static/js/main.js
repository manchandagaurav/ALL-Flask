(function($){
  $(function(){

    $('.button-collapse').sideNav();

  });

  var idarr = ['input-files','pass1','pass2','linker','simulator'];
  	for(i=0;i<idarr.length;i++)
  	{
  			$('#'+idarr[i]).hide();
  	}
  	
  $('.side-btn').click(function(){

  	var addressValue = $(this).attr("plink");
  	// alert(addressValue);
  	var idarr = ['input-files','pass1','pass2','linker','simulator'];
  	for(i=0;i<idarr.length;i++)
  	{
  		if(idarr[i]!=addressValue)
  			$('#'+idarr[i]).hide();
  		else
  			$('#'+idarr[i]).show();
  	}
  });

   // end of document ready
})(jQuery); // end of jQuery name space