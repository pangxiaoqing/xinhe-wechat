;
!function(){
    var url_host = '';
    /** @description 创建初始化*/
    function CreateObject(obj){
        var func = function(){};
        func.prototype = obj || {};
        func.constructor = func;
        return new func();
    }
    /** @description 数据层 */
    var ajaxService = {
        //发送
        send : function(obj){
            var url = obj.url,
            method = obj.method,
            data=obj.data,
            dataType=obj.dataType,
            retoken=obj.retoken,
            callback = obj.callback,
            jsonp = obj.jsonp ? obj.jsop : '',
            self = this,
            _ajax_obj = {
                url : url,
                type:method,
                data:data,          
                dataType:dataType,
                beforeSend: function(request){
                    if(retoken){
                        request.setRequestHeader("token", retoken);
                    }
                    
                }, 
                success : function(response){
                    callback.call(self,response); 
                },
                error : function(e,d){
                  console.log(e,d)
                }
            };
            if(jsonp){
              _ajax_obj['jsonp'] = 'callback';
            }
            $.ajax(_ajax_obj);
        },
        
        
        //调用接口
        
        PostService : function(){
            var self = this;
            return {
            /*接口格式 APIname : function(data,token,callback){
                          self.send({
                                 url:self.port+'XXXXX.do',
                                 retoken:token,
                                 method:'post',
                                 data:data,
                                 dataType:'json',
                                 callback:callback
                             })
                        },*/                
            }
        }
		
    };
    /** @description 公共方法层*/
    var publicService = {
        //加载数据
            loadData : function(arr,data){
                $(arr).each(function(index, element) {
                    var $element = $('#'+element);
                    if(($element[0].nodeName === 'INPUT' && $element[0].type === 'text') || $element[0].nodeName === 'TEXTAREA'){
                        $element.val(data[element]);
                    }else{
                        $element.text(data[element]);
                    }
                });
            },
		
          //引入json格式文件返回信息值
          popupErrorInfo : function(cardNo){
            var url = '../../scripts/service/config/config.json',
                self = this;
            $.getJSON(url,function(data){
               var error_info = data.error_info;
               self.sweetalert(error_info[cardNo]);
            })            
          },
          //报错
          sweetalert : function(msg){
            $(".alertshade").show();
            $(".alertshade").html(msg);
            var alertWidth='-'+$(".alertshade").width()/2+'px';
            $(".alertshade").css("margin-left",alertWidth);
            setTimeout(function(){
                $(".alertshade").hide();
            },3000)
          },
          //引入外部文件
          operatePlugins : function(url,callback){
             var self = this;
            $.get(url,function(response){
                var data = new Function(response)(),
                    _obj = $.extend({},data);
                $.extend(self,_obj);                                
                callback.call(self);
            })      
          },
          getScript : function(url,callback,nameSpace){
      			var doc = document,
      				  head = doc.getElementsByTagName('head')[0],
      				  script = doc.createElement('script'),
      				  self = this;
      			script.type = 'text/javascript';
      			script.onload = script.onreadystatechange = function(){
      				if(!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete' ){
      					if(callback){
      						nameSpace = nameSpace || {};
      						callback.call(self,nameSpace);
      					}
      					// Handle memory leak in IE
      					script.onload = script.onreadystatechange = null;
      				}
      			};
      			script.src = url;
      			head.appendChild(script);
  		},
      require : function(script_arr,callback){
        var self = this;
        if(script_arr.length){
          this.getScript(script_arr.shift(),function(){
            if(script_arr.length == 1){
              self.getScript(script_arr[0],callback);
            }else if(script_arr.length > 1){
              self.require(script_arr,callback);
            }
          });
        }
      }
           
        
		
    };
    //公共参数
    var commonParams = {
        toString : Object.prototype.toString,
        port : ''
    }
    //初始化
    var _public_obj = $.extend({},ajaxService,publicService,commonParams);
    this.hmd = CreateObject(_public_obj);

    
	
}();
/*var obj = [{'name':'haiyun','address' : 'sldjflskdjflksd'},{'name':'haiyan2','address2' : 'yyyyyyyyyyyyy'}]
hmd.console(obj);*/
//报错demo
//hmd.popupErrorInfo(15);

//调用外部方法
 // hmd.operatePlugins('/plugins/plugins.js',function(){
 //     console.log(hmd.address);
 // });
