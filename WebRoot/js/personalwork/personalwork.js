
$(function() {
	$('table tbody tr').contextMenu('personalwork_rightMenu', {
      bindings: {
    	'add': function(tr) {//获取到tr元素
    		alert("add");
    		$.ajax({  //后台处理，前台显示当前时间; 
  		  	   url: "allPres.action",
  		  	   type: "POST",
  		  	   dataType: "json",   
  		  	   data:{
  		  	   }
    		});
        },
        'edit': function(tr) {
        	var s=tr.innerHTML
        	var s0=s.split('\n');
        	var s1=s0[2].split('>');
        	var s2=s1[1].split('<');
        	var ss=s2[0];
        	window.location="getrule.action?id="+ss;
        },
        'delete': function(t) {
        	var s=t.innerHTML
        	var s0=s.split('\n');
        	var s1=s0[2].split('>');
        	var s2=s1[1].split('<');
        	var ss=s2[0];
        	window.location="deleterule.action?rule_id="+ss;
         }
      }
	});
	
	//绑定事件
	$('table tbody ').on('dblclick','tr',function(){
		var s=this.innerHTML
    	var s0=s.split('\n');
    	var s1=s0[2].split('>');
    	var s2=s1[1].split('<');
    	var ss=s2[0];
    	window.location="getrule.action?id="+ss;
	});
	
});

$(function() {
	$('table thead tr').contextMenu('personalwork_rightMenuAdd', {
      bindings: {
    	'add': function(tr) {//获取到tr元素
    		alert("add");
    		$.ajax({  //后台处理，前台显示当前时间; 
  		  	   url: "allPres.action",
  		  	   type: "POST",
    		});
    		
    	}
      }});
 
	

	
});


