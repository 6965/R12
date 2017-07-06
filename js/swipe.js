
//当文档加载完之后执行
$(document).ready(function(){

	var MUS=$('#music_bg').get(0);

	touch.on('.music_btn','tap',function(){
		if(	MUS.paused){


			MUS.play();	
		}else{
			

			MUS.pause();
		}
	})

	//上下滑屏效果
	
  	var curIndex = 0;

    var pageNum = $('.page').length-1;   
   
    touch.on('.main', 'swipeup', function(e){
        	
// 上滑加一
        
        if(curIndex < pageNum){

        		
                
            $('.page').eq(curIndex).addClass('pageUp'); 

            $('.page').eq(curIndex).find('.dh').addClass('hide'); 
            curIndex = curIndex + 1; 

	        if(curIndex == pageNum){
	            $('.arrow').hide();
	        }

	        	
            $('.page').eq(curIndex).removeClass('pageDown');  
           
            $('.page').eq(curIndex).find('.dh').removeClass('hide');
        }

           
    });

         //向下滑动事件
         // 下滑减一
        touch.on('.main', 'swipedown', function(e){
            $('.arrow').show(); //显示 箭头

            if(curIndex > 0){

                $('.page').eq(curIndex).addClass('pageDown'); 

                $('.page').eq(curIndex).find('.dh').addClass('hide');

                curIndex = curIndex - 1;  

                $('.page').eq(curIndex).removeClass('pageUp'); 
                
                 $('.page').eq(curIndex).find('.dh').removeClass('hide');
            }
       });

})