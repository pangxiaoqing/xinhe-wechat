/*hmd.port = 'http://10.167.200.70'*/
hmd.port = 'http://www.creditharmony.cn/'
 
$.extend(hmd,{
	//新闻动态页接口
	QiyeDongtai: function(data,callback){
		  var url = this.port+'apiqiyedongtai/api-qiyedongtai';
	      this.send({
	         url:url,
	         method:'get',
	         data:data,
	         dataType:'jsonp',
	         callback:callback
	     })	    	   	     
	},
	//新闻详细页接口
	newsDetails: function(nid,callback){
	      var url = this.port+'/article/node/'+nid;
	      this.send({
	         url:url,
	         method:'get',
	         data:'',
	         dataType:'jsonp',
	         callback:callback
	     })	    	   	     
	},
	//新闻详细页轮播图接口
	bannerPic: function(data,callback){console.log(123);
		  var url = this.port+'/apibanner/micro-banner';
	      this.send({
	         url:url,
	         method:'get',
	         data:data,
	         dataType:'jsonp',
	         callback:callback
	     })	    	   	     
	},
	//新闻数量接口
	newsAmount: function(data,callback){
		  var url = this.port+'/apiqiyedongtai-num/api-qiyedongtai-num';
	      this.send({
	         url:url,
	         method:'get',
	         data:data,
	         dataType:'jsonp',
	         callback:callback
	     })	    	   	     
	},
	//信和财富静态页面接口
	staticPage: function(nid,callback){
		  var url = this.port+'/article/node/'+nid;
	      this.send({
	         url:url,
	         method:'get',
	         data:'',
	         dataType:'jsonp',
	         callback:callback
	     })	    	   	     
	},		
	//财富的新闻接口
	caifuNews: function(data,callback){
		  var url = this.port+'/api-micro-news/micro-news';
	      this.send({
	         url:url,
	         method:'get',
	         data:data,
	         dataType:'jsonp',
	         callback:callback
	     })	    	   	     
	},
	//财富的新闻数量接口
	caifuNewsAmount: function(data,callback){
		  var url = this.port+'/api-micro-news-num/micro-news-num';
	      this.send({
	         url:url,
	         method:'get',
	         data:data,
	         dataType:'jsonp',
	         callback:callback
	     })	    	   	     
	},
	//汇金的新闻接口
	huijinNews: function(data,callback){
		  var url = this.port+'/api-micro-news/micro-news';
	      this.send({
	         url:url,
	         method:'get',
	         data:data,
	         dataType:'jsonp',
	         callback:callback
	     })	    	   	     
	},
	//汇金的新闻数量接口
	huijinNewsAmount: function(data,callback){
		  var url = this.port+'/api-micro-news-num/micro-news-num';
	      this.send({
	         url:url,
	         method:'get',
	         data:data,
	         dataType:'jsonp',
	         callback:callback
	     })	    	   	     
	}
	
});


