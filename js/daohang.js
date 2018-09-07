$(document).ready(function(){
	Dh()
	Kg()
})
function Dh(){
	$('#daohang li').each(function(){
		$(this).click(function(index){
			data_id = $(this).attr("data-id");
			$("#daohang li").removeClass('active');
			$("#daohang li[data-id = '" + data_id + "']").addClass('active');
			var index = $(this).index()+1
			var m = "";
			console.log(index)
			if(index==1){
				m=1;
			}else if(index==2){
				m=2;
			}else if(index==3){
				m=3;
			}else if(index==4){
				m=4;
			}else if(index==5){
				m=5;
			}else if(index==6){
				m=6;
			}
			$("body").find("#L-wid li").remove()
			$("body").find("#M-wid li").remove()
			$("body").find("#R-wid li").remove()
			$(".index-content").find("#area_list td").remove()
			$(".index-content").find("#area_list th").remove()
			$(".index-content").find("#ace td").remove()
			var par = {
						"areacode1":"",
						"local_send_flag":x,
						"org_brd_id":"",
						"org_level_id":"",
						"userId":userId,
						"va_months":m,
						"sortField":"cross_sal_amt",
						"sortType":0,
						"pageRow":3000
				};
				
		      fengzhuang(par)
		})
	})
}


function Kg(){
	document.getElementById("mySwitch").addEventListener("toggle",function(event){
	var daohang = document.getElementById("daohang").getElementsByTagName("li")
	  if(event.detail.isActive){
	  
	  	console.log(daohang)
	    for (var i = 0; i < daohang.length; i++) {	
				
				if(daohang[0].classList.contains('active')){
					x =1;
					m = 1
				}else if(daohang[1].classList.contains('active')){
					x =1;
					m = 2
				}else if(daohang[2].classList.contains('active')){
					x =1;
					m = 3
				}else if(daohang[3].classList.contains('active')){
					x =1;
					m = 4
				}else if(daohang[4].classList.contains('active')){
					x =1;
					m = 5
				}else if(daohang[5].classList.contains('active')){
					x =1;
					m = 6
				}
			}
//	    	firstList_jine()
//			firstList_zhanbi()
	    	
	  }else{
	      	 for (var i = 0; i < daohang.length; i++) {	
				
				if(daohang[0].classList.contains('active')){
					x =0;
					m = 1
				}else if(daohang[1].classList.contains('active')){
					x =0;
					m = 2
				}else if(daohang[2].classList.contains('active')){
					x =0;
					m = 3
				}else if(daohang[3].classList.contains('active')){
					x =0;
					m = 4
				}else if(daohang[4].classList.contains('active')){
					x =0;
					m = 5
				}else if(daohang[5].classList.contains('active')){
					x =0;
					m = 6
				}
			}
	  }
	  
	  		$("body").find("#L-wid li").remove()
			$("body").find("#M-wid li").remove()
			$("body").find("#R-wid li").remove()
			var par = {
					"areacode1":"",
					"local_send_flag":x,
					"org_brd_id":"",
					"org_level_id":"",
					"userId":userId,
					"va_months":m,
					"sortField":"cross_sal_amt",
					"sortType":0,
					"pageRow":3000
				};
				fengzhuang(par)
	  
	})
	
}
