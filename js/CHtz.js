var flag = false;
    var cur = {
        x:0,
        y:0
    } 
    var nx,ny,dx,dy,x,y ;
    function down(){
        flag = true;
        var touch ;
        if(event.touches){
            touch = event.touches[0];
        }else {
            touch = event;
        }
        cur.x = touch.clientX;
        cur.y = touch.clientY;
        dx = someElm.offsetLeft;
        dy = someElm.offsetTop;
        $("#someElm").css("background",'url(images/ic_condition_hover.png)no-repeat')
         $("#someElm").css("background-size","100%")
    }
    function move(){
    	  
    	  $("#someElm").css("background",'url(images/ic_condition_hover.png)no-repeat')
    	  $("#someElm").css("background-size","100%")
    	  $("html").css("overflow","hidden")
        if(flag){
            var touch ;
            if(event.touches){
                touch = event.touches[0];
            }else {
                touch = event;
            }
            nx = touch.clientX - cur.x;
            ny = touch.clientY - cur.y;
            x = dx+nx;
            y = dy+ny;
            someElm.style.left = x+"px";
            someElm.style.top = y +"px";
        }       
   }
    function end(){
    	var Y = $("#someElm").offset().top;
		var X = $('#someElm').offset().left;
		var X_width = $("#someElm").width();
		var Y_height = $("#someElm").height();
		if( X >= document.body.clientWidth-X_width){
			$("#someElm").css({"left":document.body.clientWidth-X_width+"px"})
		}else if(X <= 0){
			$("#someElm").css({"left":0})
		}else if(Y<= 0){
			$("#someElm").css({"top":0})
		}
		  
    	  $("#someElm").css('background',"url(images/ic_condition.png)no-repeat")
    	  $("#someElm").css("background-size","100%")
    	  $("html").css("overflow","auto")
         flag = false;
    }
    var someElm = document.getElementById("someElm");
    someElm.addEventListener("mousedown",function(){
        down();
    },false);
    someElm.addEventListener("touchstart",function(){
        down();
    },false)
    someElm.addEventListener("mousemove",function(){
        move();
    },false);
    someElm.addEventListener("touchmove",function(e){
    	e.preventDefault();
        move();
    },false)
    document.body.addEventListener("mouseup",function(){
        end();
    },false);
    someElm.addEventListener("touchend",function(){
        end();
    },false);
    
