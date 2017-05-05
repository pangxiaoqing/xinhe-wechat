;!function(){
	var url_arr = [
        '../scripts/service/interface/interface.js',
        '../scripts/service/plugins/plugins.js'
    ];

	hmd.require(url_arr,function(){
		hmd.operateEvent();
		//汇金新闻接口
		var data = {'bu':'huijin'}
		hmd.huijinNews(data,function(response){
		    console.log(response);
		    var index_cont = $('ul.index_cont'),
		        arr = [];
		        $(response).each(function(index,element){                                   
		              arr.push('<li nid="'+element.nid+'">'+element.node_title+'</li>');
		         });
                $("#index_hg").hide();
		    index_cont.html(arr.join(''));//console.log(arr)
		});
		//汇金新闻数量
		hmd.huijinNewsAmount(data,function(response){
		    var art_num = response[0].articles_num;
		    if(art_num<10){
		        $('.more').hide();
		    }else{
		        var ceil_num = Math.ceil(art_num/10);
		        $('.more a').attr('_pageMax',ceil_num);
		    }
		})
		//更多资讯点击
		$(".more a").tap(function(){
                var pageMax=$(this).attr('_pageMax');
                var currentPage = $(this).attr("_currentPage")-0;
                pagenext = currentPage+1;
                if(pagenext<=pageMax){
                    data={'newstype_tid':1,'page':pagenext}
                    hmd.QiyeDongtai(data,function(response){
                        var index_cont = $('ul.index_cont'),
                        arr = [];
                        $(response).each(function(index,element){                                   
                          arr.push('<li nid="'+element.nid+'" field_newstype="'+element.field_newstype+'">'+element.node_title+'</li>');
                        });
                        index_cont.append(arr.join(''));
                    });
                    $(this).attr("_currentPage",pagenext)
                    if(pagenext==pageMax){
                        $('.more').hide();
                    }
                }
                
        })
        //ul下的li点击跳转到详情页
        $(".index_cont").tap(function(e){
        	var target = e.target;
        	if(target.nodeName === 'LI'){
        	    var _nid=$(target).attr('nid');
                hmd.setSessionst("nid",_nid);

        	   window.location.href="xwxxy.html";
               
        	}
        })
        //获取轮播图banner
        hmd.bannerPic('',function(response){
            //console.log(response);
            var oul = $('#slide_ul'),
                childNodes = oul[0].childNodes,
                temp = '',
                arr = [];
            for(var i=0,len=childNodes.length;i<len;i++){
                var element = childNodes[i];
                if(element.nodeType == 8){
                    temp = element.nodeValue;
                    break;
                }
            }
            $(response).each(function(index,element){
                var field_link_to_url = element.field_link_to_url;
                if(typeof field_link_to_url === 'object'){
                    field_link_to_url = 'javascript://';
                }
                arr.push(temp.replace(/\%s/,element.field_image).replace(/\%t/,field_link_to_url));
            });
            oul.html(arr.join(''));

            setTimeout(function(){
                TouchSlide({ 
                  slideCell:"#slideBox",
                  titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
                  mainCell:".bd ul", 
                  effect:"leftLoop", 
                  autoPage:true,//自动分页
                  autoPlay:true //自动播放
                });
            },100);
            
        });




	})
}()