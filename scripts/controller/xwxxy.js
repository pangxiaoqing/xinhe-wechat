;!function(){
	var url_arr = [
        '../scripts/service/interface/interface.js',
        '../scripts/service/plugins/plugins.js'
    ];
    hmd.require(url_arr,function(){
            hmd.operateEvent();
            $(".loading").hide();
            var nid = hmd.getSessionst('nid');
            hmd.newsDetails(nid,function(response){
                console.log(response)
                var title=response.title;
                var bodyt=response.body.und[0].safe_value;
                $("div[name='title']").html(title);
                //$("div[name='textbody']").html(body.replace(/src="/g,'src="'+hmd.port));
                //替换内容中img路径 /g全局查，charAt返回位置
                $("div[name='textbody']").html(bodyt.replace(/src="/g,function(){
                    var _str = '';
                    /*console.log(arguments);*/
                    if(bodyt.charAt(arguments[1]+5) === '/'){
                        _str = 'src="'+hmd.port;
                    }else{
                        _str = 'src="';  
                    }
                    
                    return _str;
                }));
            });
    });	
	
    
  
   
}()