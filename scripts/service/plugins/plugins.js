$.extend(hmd,{
	   //公共方法
        alertmsg: function(msg){
            alert(msg)
        },
        //menu导航跳转

        operateEvent: function(){
           /*$("#box").tap(function(){
                $(".menu_li").hide();
            })*/
            $('.index_cont').css('height','');
        	$(document.body).tap(function(e){
        		var target = e.target;
        		if($(target).hasClass('menu')){
                    /*var mask_div = $('#mask_div')*/
                     $(".menu_li").toggle();   
                    if($(".menu_li").css('display') === 'block'){
                        $('#super_mask_layer').show();                      
                        $('#super_mask_layer').tap(function(){
                            $(".menu_li").hide();
                            setTimeout(function(){
                                $('#super_mask_layer').hide();
                            },500);
                        })                 
                    }else{
                        setTimeout(function(){
                            $('#super_mask_layer').hide();
                        },500);
                        
                    }                           			
        		}
        		if(target.nodeName === 'LI' && $(target).closest('ul').hasClass('menu_li')){
        			var _linkto= $(target).attr('_linkto'),
					    linktourl={
				    	    'xhcf':'newsDetails.html',
				    	    'news':'#page_top',
	                'app':'/xinhe_wechat/views/xwdt.html#download_app',
                  'xwdt':'/xinhe_wechat/views/xwdt.html',
                  'app_caifu':'/xinhe_wechat/views/caifu_xwdt.html#cf_download_app',
                  'app_huijin':'/xinhe_wechat/views/huijin_xwdt.html#hj_download_app'
				           };  
                           setTimeout(function(){
                               $('#super_mask_layer').hide();
                           },500); 
                        
                          // alert(linktourl[_linkto]);
                    if(linktourl[_linkto] == ''){
                        window.location.reload();
                    }else{

                         window.location.href=linktourl[_linkto];
                    }
				   

                    $(".menu_li").toggle();
        		}
                if($(target).closest('h2').hasClass('logo')){
                    window.location.href="xwdt.html";
                }
        	});
        },
        //获取存放sessionstorage
        getSessionst : function(sename){
             var sevalue = sessionStorage.getItem(sename);
             return sevalue;
        },
        setSessionst : function(sename,sevalue){
             sessionStorage.setItem(sename,sevalue);
        },
        //获取存放localststorage
        getlocalst : function(loname){
             var lovalue = localStorage.getItem(loname);
             return lovalue;
        },
        setlocalst : function(loname,lovalue){
             localStorage.setItem(loname,lovalue);
        }
});
