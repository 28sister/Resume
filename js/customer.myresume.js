$(function(){
	$('.demo2').Tabs({
		event:'click'
	});
	
	$('#myinfor, #myexp, #whychangework, #mywebexp, #icandowhat, #ifmore, #lookresume, #getchat').click(function(){
		var inforlist = $(this).parent().find('div.inforlist');
		inforlist.slideToggle();
		var aa=$(this).find('i.isshowi');
		//alert (aa.attr('class'));
		if(aa.attr("class").indexOf('fa-angle-down') != -1){
			aa.attr('class', 'fa isshowi fa-angle-up');
		}else{
			aa.attr('class', 'fa isshowi fa-angle-down');
		}
	});
	
	$('#showexmore1, #showexmore2, #showexmore3, #showexmore4').click(function(){
		$(this).parent().find('div.expershow').slideToggle();
	});
	
});