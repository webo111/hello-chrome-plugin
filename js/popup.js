$(function () {
    $('#su').click(function () {
        //$('#kw').val('av');
    });
    var now_time_text = $('#now_time').text();
    var myDate = new Date();//获取系统当前时间
    //alert('hello baidu');
	setTimeout(removeAdvForBD,2000);
});

function getNowDate(){
    var myDate = new Date();//获取系统当前时间
    $('#now_time').text(myDate);
}
//去掉百度搜索的广告
function removeAdvForBD(){
//alert('hello 广告'+$('#content_left').children('div').children('div').length);
	$('#content_left').children().children().each(function(index,val){
		console.info('index:'+index);
		var adv = $(this).find('div>font>a>span').text();
		if(adv == '广告'){
			//$(this).height('0px');
			$(this).remove();
		}
	})
}
