



//var url = "http://report.offline.qingger.com:8188/bi_yhj/REALLY/bi/report/crossAreaRank/query";
//var url = "http://report.offline.qingger.com:8188/bi_yhj/"+corpId+"/bi/report/crossAreaRank/query";
var url = address.quyu;
var Nd = document.getElementsByClassName('nav-d');
var MdId = document.getElementsByClassName('mendianId');
var Lwidth = document.getElementById("L-wid").getElementsByTagName("li")
var Rwidth = document.getElementById("R-wid").getElementsByTagName("li")
var sum = 0;
var m = 5;
var counter = 0;
var x = 1;
var ctrr1=[];
var brightnessarray1=[];
var atrr1=[];
var par = {
		"areacode1": brightnessarray1,
		"org_level_id": atrr1,
		"org_brd_id": ctrr1,
		"local_send_flag":x,		//0表示包含本店销发数据;默认值1
		"userId":userId,			//123456表示分别代表时间段,
		"va_months":m,
		"sortField":"cross_sal_amt",
		"sortType":0,
		"pageRow":3000
		
};
fengzhuang(par)
function fengzhuang(par){
					console.log("调用first");
					console.log("调用first参数mouth："+par.va_months+";mou:"+par.local_send_flag);
					if(brightnessarray1.length==0){
						console.log("调用first参数brightnessarray1为空");
						par.areacode1='';
					}else{
						var bValue='';
						for(var i=0;i<brightnessarray1.length;i++){
							bValue=bValue+brightnessarray1[i]+",";
						}
						if(bValue!='')bValue=bValue.substring(0,bValue.length-1);
						console.log('bValue:'+bValue);
						par.areacode1=bValue;
					}
					if(atrr1.length==0){
						par.org_level_id='';
						console.log("调用first参数atrr1为空");
					}else{
						var atrr1Value='';
						for(var i=0;i<atrr1.length;i++){
							atrr1Value=atrr1Value+atrr1[i]+",";
						}
						if(atrr1Value!='')atrr1Value=atrr1Value.substring(0,atrr1Value.length-1);
						console.log('atrr1Value:'+atrr1Value);
						par.org_level_id=atrr1Value;
					}
					if(ctrr1.length==0){
						par.org_brd_id='';
						console.log("调用first参数ctrr1为空");
					}else{
						var ctrr1Value='';
						for(var i=0;i<ctrr1.length;i++){
							ctrr1Value=ctrr1Value+ctrr1[i]+",";
						}
						if(ctrr1Value!='')ctrr1Value=ctrr1Value.substring(0,ctrr1Value.length-1);
						console.log('ctrr1Value:'+ctrr1Value);
						par.org_brd_id=ctrr1Value;
					}
					console.log("调用first参数brightnessarray1："+brightnessarray1+";atrr1:"+par.org_level_id+";ctrr1:"+par.org_brd_id);
					 //par.org_brd_id='AD';
					//par.org_brd_id='AD,NK';
	a_rr = [];
	brr = [];
	crr = [];
	drr = [];
	err = [];
	frr = [];
	grr = [];
	hrr = [];
	jrr = [];
	b_rr =[];
	c_rr =[];
	d_rr =[];
	e_rr = [];
	f_rr = [];
	g_rr =[];
	h_rr =[];
	i_rr =[];
	j_rr =[];
	k_rr =[];
	w_rr =[];
	t_rr =[];
	u_rr =[]
	o_rr = [];
	p_rr =[];
	z_rr =[];
	v_rr = [];
	l_rr = [];
	name_r = [];
	zong_salr = [];
	shu_name_r = []; //数量的name
	zongshu_r = []
	danshu_name_r = [] //单数的name
	zongdanshu_r = []
  	$.ajax({
		type: 'POST',
		url: url,
		dataType: 'json',
		data: par,
		headers : {
		"Access-Control-Allow-Origin":'*',
		"AuthId":par.userId
		},
		success:function(obj){
			console.log(obj)
			var list = obj.data.list
			var erst = obj.data.list
			sum =  obj.data.summary;
			
			for (var i = 0; i < list.length; i++) {
				a_rr.push(list[i].cross_sal_amt)//金额
				brr.push(list[i].areaname1)//店铺
				crr.push(list[i].cross_sal_amt_ratio)//占比
				drr.push(list[i].cross_sal_qty_ratio)//数量占比
				err.push(list[i].cross_sal_qty)
				frr.push(list[i].areaname1);//恢复初始
				grr.push(list[i].cross_sal_nos_ratio)//左边单数
				hrr.push(list[i].areaname1);//再次恢复
				jrr.push(list[i].cross_sal_nos);//右边单数
				
				b_rr.push(list[i].cross_sal_amt_area_ratio);
				c_rr.push(list[i].sal_amt);
				d_rr.push(list[i].sal_amt_area_ratio);
				e_rr.push(list[i].cross_sal_amt)//金额
				f_rr.push(list[i].areaname1)//店铺
				
				//数量
				w_rr.push(list[i].cross_sal_qty)//金额
				t_rr.push(list[i].sal_qty);
				g_rr.push(list[i].cross_sal_qty_area_ratio);
				h_rr.push(list[i].sal_qty);
				i_rr.push(list[i].sal_qty_area_ratio);
				j_rr.push(list[i].cross_sal_qty)//金额
				k_rr.push(list[i].areaname1)//店铺
				
				//单数
				u_rr.push(list[i].cross_sal_nos)//金额
				o_rr.push(list[i].sal_nos);
				p_rr.push(list[i].cross_sal_nos_area_ratio);
				z_rr.push(list[i].sal_nos);
				v_rr.push(list[i].sal_nos_area_ratio);
				l_rr.push(list[i].cross_sal_nos)//金额\
				//1
				name_r.push(list[i].areacode1) //店铺名字
				zong_salr.push(list[i].sal_amt) //总零售额
				//2
				shu_name_r.push(list[i].areacode1)
				zongshu_r.push(list[i].sal_qty) //总零售数量
				//3
				danshu_name_r.push(list[i].areacode1)
				zongdanshu_r.push(list[i].sal_nos)
			}
			
			
			
					


			
			//console.log(a_rr);
			var nav = document.getElementById("daohang").getElementsByTagName("li")
				
				if(nav[0].classList.contains('active')){
					quyufo()
				}else if(nav[1].classList.contains('active')){
					quyufo()
				}else if(nav[2].classList.contains('active')){
					quyufo()
				}else if(nav[3].classList.contains('active')){
					quyufo()
				}else if(nav[4].classList.contains('active')){
					quyufo()
				}else if(nav[5].classList.contains('active')){
					quyufo()
				}
			
			 $("#pull-money").html(format(sum[0].sal_amt))
			 $('#tanchu').on('click',function(){
			 	 $(".hr").remove()
					$(".hb").remove()
			 	if($(".mui-poppicker").length > 0){
							$(".mui-poppicker").remove()
							$(".mui-backdrop").remove()
						}else{
							//不存在
							
						}
				var picker = new mui.PopPicker();
						picker.setData([{
						index:1,
					    text: "零售金额",
					    jinqian:sum[0].sal_amt,						//零售金额选择框上的价钱
					    zongzhanbi:sum[0].cross_sal_amt_ratio,		//零售金额的总占比
					    zongjinqian:sum[0].cross_sal_amt,			//零售总金额
					    ziti_l:"对区域总零售占比",
					    ziti_r:"跨店零售金额",
					    jinelist:a_rr,
					    dianpu:brr,
					    Zzhanbi:crr
					}, {
						index:2,
					    text: "零售数量",
					    jinqian:sum[0].sal_qty,						//零售数量选择框上的价钱
					    zongzhanbi:sum[0].cross_sal_qty_ratio,		//零售数量的总占比
					    zongjinqian:sum[0].cross_sal_qty,			//零售总数量
					    ziti_l:"对区域总数量占比",
					    ziti_r:"跨店零售数量",
					}, {
						index:3,
					    text: "零售单数",
					    jinqian:sum[0].sal_nos,						 //零售单数选择框上的价钱
					    zongzhanbi:sum[0].cross_sal_nos_ratio,		//零售单数的总占比
					    zongjinqian:sum[0].cross_sal_nos,			//零售总单数
					    ziti_l:"对区域总单数占比",
					    ziti_r:"跨店零售单数",
					}])
					picker.pickers[0].setSelectedIndex(0);
					picker.show(function(SelectedItem) {
						$("#j").html(SelectedItem[0].ziti_r)
						$("#z").html(SelectedItem[0].ziti_l)
						  $("#jine").html(format(SelectedItem[0].zongjinqian))
						  $("#zhanbi").html(toPercent(SelectedItem[0].zongzhanbi/100))
					      $("#pull-money").html(format(SelectedItem[0].jinqian))
					      $("#Pull-text").html(SelectedItem[0].text)
					      if(SelectedItem[0].index==1){
					      	  $("body").find("#L-wid li").remove()
							  $("body").find("#M-wid li").remove()
							  $("body").find("#R-wid li").remove()
						      $("#r_top").remove()
						      $("#l_top").remove()
						      $("#r_dow").remove()
						      $("#l_dow").remove()
						      $("#youbianjine").append("<span id='r_top'>▲</span><span id='r_dow'>▼</span>")
						      $("#zuobianzhanbi").append("<span id='l_top'>▲</span><span id='l_dow'>▼</span>")
						      $(".index-content").find("#area_list td").remove()
								$(".index-content").find("#area_list th").remove()
								$(".index-content").find("#ace td").remove()
					      	firstList_jine()
					      	jinqian();
					      	firstList_zhanbi();		
					      	biao_dan()
					      	biaodan_zongshu()
					      }else if(SelectedItem[0].index==2){
					      	 $(".data_list_r ul").children().remove()
						     $(".data_list_m ul").children().remove()
						     $(".data_list_l ul").children().remove()
						     $("#r_top").remove()
						     $("#l_top").remove()
						     $("#r_dow").remove()
						     $("#l_dow").remove()
						      $("#youbianjine").append("<span id='r_top'>▲</span><span id='r_dow'>▼</span>")
						     $("#zuobianzhanbi").append("<span id='l_top'>▲</span><span id='l_dow'>▼</span>")
						     $(".index-content").find("#area_list td").remove()
							$(".index-content").find("#area_list th").remove()
							$(".index-content").find("#ace td").remove()
						     shuliang();
						     biao_danshu()
						     biaodan_zongshuliang()
//							 firstList_shuliangzhanbi()
							// firstList_shuliang()
					      }else{
					       	$(".data_list_r ul").children().remove()
						     $(".data_list_m ul").children().remove()
						     $(".data_list_l ul").children().remove()
						     $("#r_top").remove()
						     $("#l_top").remove()
						     $("#r_dow").remove()
						     $("#l_dow").remove()
						    $("#youbianjine").append("<span id='r_top'>▲</span><span id='r_dow'>▼</span>")
						     $("#zuobianzhanbi").append("<span id='l_top'>▲</span><span id='l_dow'>▼</span>")
						      $(".index-content").find("#area_list td").remove()
							$(".index-content").find("#area_list th").remove()
							$(".index-content").find("#ace td").remove()
						      danshu();
						      biaodan_zongdanshu()
						      biao_danshul()
						    //  firstList_danshuzhanbi()
						    //  firstList_danshu();
					      }
					      
					})
				})
		
//			jinqian();
//			firstList_zhanbi();
//			firstList_jine()
//			biao_dan()
//			biaodan_zongshu()
		}
})
	
		

	}
 var ke = 0;  	
  var je = 0;
 var t=setTimeout(function(){
		$(".hr").hide()
		$(".hb").hide()
	},5000)
function jinqian() {
	var max;
	var maxmiddle;
	for(var i = 0; i < a_rr.length; i++) {
		for(var j = i; j < a_rr.length; j++) {
			if(a_rr[i] < a_rr[j]) {　　　　　　　　　
				max = a_rr[j];
				a_rr[j] = a_rr[i];
				a_rr[i] = max;
				maxmiddle = brr[j];
				brr[j] = brr[i];
				brr[i] = maxmiddle;
				maxmiddle = crr[j];
				crr[j] = crr[i];
				crr[i] = maxmiddle;
				maxmiddle = name_r[j];
				name_r[j] = name_r[i];
				name_r[i] = maxmiddle;
				maxmiddle = zong_salr[j];
				zong_salr[j] = zong_salr[i];
				zong_salr[i] = maxmiddle;
			}
		}

		$(".data_list_m ul").append(" <li>" + brr[i] + "</li>");
		var zb = crr[i] / 100;
		$(".data_list_l ul").append(" <li><span>" + toPercent(zb) + "</span></li>");

	}

	for(var i = 0; i < a_rr.length; i++) {
		$(".data_list_r ul").append(" <li><span>" + format(a_rr[i]) + "</span></li>");
	}
	for(var i = 0; i < Lwidth.length; i++) {
		var n = Math.max.apply(null, crr); //最大值
		ke = crr[i] / n
		Lwidth[i].style.width = toPercent(ke)
		Lwidth[i].addEventListener('tap', function() {
			$(".hb").remove()
			num = $(this).index();
			//			console.log(num)	
			var hr = document.createElement("div")
			hr.className = "hr"
			hr.id = "HR"
			var self = this
			$(".hr").remove()
			self.appendChild(hr)
			$('.hr').append("<p>区域代号：<label>" + name_r[num] + "</label></p><p>区域名称：<label>" + brr[num] + "</label></p><p>总零售额：<label>" + format(zong_salr[num]) + "</label></p><p>跨店零售额：<label>" + format(a_rr[num]) + "</label></p><p>跨店零售额占比：<label>" + crr[num] + "%</label></p>")
			quyuyingcang()
		}, false)
	}
	for(var i = 0; i < Rwidth.length; i++) {
		var x = Math.max.apply(null, a_rr); //最大值
		je = a_rr[i] / x
		Rwidth[i].style.width = toPercent(je)
		Rwidth[i].addEventListener('tap', function() {
			$(".hr").remove()
			num = $(this).index();
			console.log(num)
			var hb = document.createElement("div")
			hb.className = "hb"
			var self = this
			$(".hb").remove()
			self.appendChild(hb)
			$('.hb').append("<p>区域代号：<label>" + name_r[num] + "</label></p><p>区域名称：<label>" + brr[num] + "</label></p><p>总零售额：<label>" + format(zong_salr[num]) + "</label></p><p>跨店零售额：<label>" + format(a_rr[num]) + "</label></p><p>跨店零售额占比：<label>" + crr[num] + "%</label></p>")
			quyuyingcang()
		}, false)
	}
}

function jinqianDao() {
	var max;
	var maxmiddle;
	for(var i = 0; i < a_rr.length; i++) {
		for(var j = i; j < a_rr.length; j++) {
			if(a_rr[i] > a_rr[j]) {　　　　　　　　　
				max = a_rr[j];
				a_rr[j] = a_rr[i];
				a_rr[i] = max;
				maxmiddle = brr[j];
				brr[j] = brr[i];
				brr[i] = maxmiddle;
				maxmiddle = crr[j];
				crr[j] = crr[i];
				crr[i] = maxmiddle;
				maxmiddle = name_r[j];
				name_r[j] = name_r[i];
				name_r[i] = maxmiddle;
				maxmiddle = zong_salr[j];
				zong_salr[j] = zong_salr[i];
				zong_salr[i] = maxmiddle;
			}
		}

		$(".data_list_m ul").append(" <li>" + brr[i] + "</li>");
		var zb = crr[i] / 100;
		$(".data_list_l ul").append(" <li><span>" + toPercent(zb) + "</span></li>");
	}
	for(var i = 0; i < a_rr.length; i++) {
		$(".data_list_r ul").append(" <li><span>" + format(a_rr[i]) + "</span></li>");
	}

		for(var i = 0; i < Lwidth.length; i++) {
		var n = Math.max.apply(null, crr); //最大值
		ke = crr[i] / n
		Lwidth[i].style.width = toPercent(ke)
		Lwidth[i].addEventListener('tap', function() {
			$(".hb").remove()
			num = $(this).index();
			//			console.log(num)	
			var hr = document.createElement("div")
			hr.className = "hr"
			hr.id = "HR"
			var self = this
			$(".hr").remove()
			self.appendChild(hr)
			$('.hr').append("<p>区域代号：<label>" + name_r[num] + "</label></p><p>区域名称：<label>" + brr[num] + "</label></p><p>总零售额：<label>" + format(zong_salr[num]) + "</label></p><p>跨店零售额：<label>" + format(a_rr[num]) + "</label></p><p>跨店零售额占比：<label>" + crr[num] + "%</label></p>")
			quyuyingcang()
		}, false)
	}
	for(var i = 0; i < Rwidth.length; i++) {
		var x = Math.max.apply(null, a_rr); //最大值
		je = a_rr[i] / x
		Rwidth[i].style.width = toPercent(je)
		Rwidth[i].addEventListener('tap', function() {
			$(".hr").remove()
			num = $(this).index();
			console.log(num)
			var hb = document.createElement("div")
			hb.className = "hb"
			var self = this
			$(".hb").remove()
			self.appendChild(hb)
			$('.hb').append("<p>区域代号：<label>" + name_r[num] + "</label></p><p>区域名称：<label>" + brr[num] + "</label></p><p>总零售额：<label>" + format(zong_salr[num]) + "</label></p><p>跨店零售额：<label>" + format(a_rr[num]) + "</label></p><p>跨店零售额占比：<label>" + crr[num] + "%</label></p>")
			quyuyingcang()
		}, false)
	}
	$("#jine").html(format(sum[0].cross_sal_amt))
	$("#zhanbi").html(toPercent(sum[0].cross_sal_amt_ratio / 100))
}

function zhanbi() {
	var max;
	var maxmiddle;

	for(var i = 0; i < crr.length; i++) {
		for(var j = i; j < crr.length; j++) {
			if(crr[i] < crr[j]) {　　　　　　　　　
				max = crr[j];
				crr[j] = crr[i];
				crr[i] = max;
				maxmiddle = brr[j];
				brr[j] = brr[i];
				brr[i] = maxmiddle;
				maxmiddle = a_rr[j];
				a_rr[j] = a_rr[i];
				a_rr[i] = maxmiddle;
				maxmiddle = name_r[j];
				name_r[j] = name_r[i];
				name_r[i] = maxmiddle;
				maxmiddle = zong_salr[j];
				zong_salr[j] = zong_salr[i];
				zong_salr[i] = maxmiddle;
			}
		}
		$(".data_list_r ul").append(" <li><span>" + format(a_rr[i]) + "</span></li>");
		$(".data_list_m ul").append(" <li>" + brr[i] + "</li>");
		var zb = crr[i] / 100;
		$(".data_list_l ul").append(" <li><span>" + toPercent(zb) + "</span></li>");
	}
	var ke = 0;
	for(var i = 0; i < Lwidth.length; i++) {
		var n = Math.max.apply(null, crr); //最大值
		ke = crr[i] / n
		Lwidth[i].style.width = toPercent(ke)
		Lwidth[i].addEventListener('tap', function() {
			$(".hb").remove()
			num = $(this).index();
			//			console.log(num)	
			var hr = document.createElement("div")
			hr.className = "hr"
			hr.id = "HR"
			var self = this
			$(".hr").remove()
			self.appendChild(hr)
			$('.hr').append("<p>区域代号：<label>" + name_r[num] + "</label></p><p>区域名称：<label>" + brr[num] + "</label></p><p>总零售额：<label>" + format(zong_salr[num]) + "</label></p><p>跨店零售额：<label>" + format(a_rr[num]) + "</label></p><p>跨店零售额占比：<label>" + crr[num] + "%</label></p>")
			quyuyingcang()
		}, false)
	}
	for(var i = 0; i < Rwidth.length; i++) {
		var x = Math.max.apply(null, a_rr); //最大值
		je = a_rr[i] / x
		Rwidth[i].style.width = toPercent(je)
		Rwidth[i].addEventListener('tap', function() {
			$(".hr").remove()
			num = $(this).index();
			console.log(num)
			var hb = document.createElement("div")
			hb.className = "hb"
			var self = this
			$(".hb").remove()
			self.appendChild(hb)
			$('.hb').append("<p>区域代号：<label>" + name_r[num]+ "</label></p><p>区域名称：<label>" + brr[num] + "</label></p><p>总零售额：<label>" + format(zong_salr[num]) + "</label></p><p>跨店零售额：<label>" + format(a_rr[num]) + "</label></p><p>跨店零售额占比：<label>" + crr[num] + "%</label></p>")
			quyuyingcang()
		}, false)
	}
}

function zhanbiDao() {
	var max;
	var maxmiddle;
	for(var i = 0; i < crr.length; i++) {
		for(var j = i; j < crr.length; j++) {
			if(crr[i] > crr[j]) {　　　　　　　　　
				max = crr[j];
				crr[j] = crr[i];
				crr[i] = max;
				maxmiddle = brr[j];
				brr[j] = brr[i];
				brr[i] = maxmiddle;
				maxmiddle = a_rr[j];
				a_rr[j] = a_rr[i];
				a_rr[i] = maxmiddle;
				maxmiddle = name_r[j];
				name_r[j] = name_r[i];
				name_r[i] = maxmiddle;
				maxmiddle = zong_salr[j];
				zong_salr[j] = zong_salr[i];
				zong_salr[i] = maxmiddle;
			}
		}
		$(".data_list_r ul").append(" <li><span>" + format(a_rr[i]) + "</span></li>");
		$(".data_list_m ul").append(" <li>" + brr[i] + "</li>");
		var zb = crr[i] / 100;
		$(".data_list_l ul").append(" <li><span>" + toPercent(zb) + "</span></li>");
	}
	var ke = 0;
	for(var i = 0; i < Lwidth.length; i++) {
		var n = Math.max.apply(null, crr); //最大值
		ke = crr[i] / n
		Lwidth[i].style.width = toPercent(ke)
		Lwidth[i].addEventListener('tap', function() {
			$(".hb").remove()
			num = $(this).index();
			//			console.log(num)	
			var hr = document.createElement("div")
			hr.className = "hr"
			hr.id = "HR"
			var self = this
			$(".hr").remove()
			self.appendChild(hr)
			$('.hr').append("<p>区域代号：<label>" + name_r[num] + "</label></p><p>区域名称：<label>" + brr[num] + "</label></p><p>总零售额：<label>" + format(zong_salr[num]) + "</label></p><p>跨店零售额：<label>" + format(a_rr[num]) + "</label></p><p>跨店零售额占比：<label>" + crr[num] + "%</label></p>")
			quyuyingcang()
		}, false)
	}
	for(var i = 0; i < Rwidth.length; i++) {
		var x = Math.max.apply(null, a_rr); //最大值
		je = a_rr[i] / x
		Rwidth[i].style.width = toPercent(je)
		Rwidth[i].addEventListener('tap', function() {
			$(".hr").remove()
			num = $(this).index();
			console.log(num)
			var hb = document.createElement("div")
			hb.className = "hb"
			var self = this
			$(".hb").remove()
			self.appendChild(hb)
			$('.hb').append("<p>区域代号：<label>" + name_r[num]+ "</label></p><p>区域名称：<label>" + brr[num] + "</label></p><p>总零售额：<label>" + format(zong_salr[num]) + "</label></p><p>跨店零售额：<label>" + format(a_rr[num]) + "</label></p><p>跨店零售额占比：<label>" + crr[num] + "%</label></p>")
			quyuyingcang()
		}, false)
	}
}
function toPercent(point){
    var str=Number(point*100).toFixed(1);//换百分比
    str+="%";
    return str;
}

//1
	function firstList_zhanbi(){
		
			$('#zuobianzhanbi').bind("click", function() {
			counter++ % 2 ? 
				(function(){ 
					$("#r_top").css("color", "#5d6c77")
					$("#l_top").css("color", "#5d6c77")
					$("#l_dow").css("color", "#b5b8c1")
					$("#r_dow").css("color", "#5d6c77")
				    $("body").find("#L-wid li").remove()
					$("body").find("#M-wid li").remove()
					$("body").find("#R-wid li").remove()
					if($("#Pull-text").html()=="零售金额"){
						$("#r_top").css("color", "#5d6c77")
					$("#l_top").css("color", "#5d6c77")
					$("#l_dow").css("color", "#b5b8c1")
					$("#r_dow").css("color", "#5d6c77")
						$("body").find("#L-wid li").remove()
						$("body").find("#M-wid li").remove()
						$("body").find("#R-wid li").remove()
						zhanbiDao()
					}else if($("#Pull-text").html()=="零售数量"){
						$("#r_top").css("color", "#5d6c77")
					$("#l_top").css("color", "#5d6c77")
					$("#l_dow").css("color", "#b5b8c1")
					$("#r_dow").css("color", "#5d6c77")
						$("body").find("#L-wid li").remove()
						$("body").find("#M-wid li").remove()
						$("body").find("#R-wid li").remove()
						shuliangzhanbiDao()
					}else{
						$("#r_top").css("color", "#5d6c77")
					$("#l_top").css("color", "#5d6c77")
					$("#l_dow").css("color", "#b5b8c1")
					$("#r_dow").css("color", "#5d6c77")
						$("body").find("#L-wid li").remove()
						$("body").find("#M-wid li").remove()
						$("body").find("#R-wid li").remove()
						danshuzhanbiDao()
					}
				}()) :
				(function(){
				
					$("#r_top").css("color", "#5d6c77")
					$("#l_top").css("color", "#b5b8c1")
					$("#l_dow").css("color", "#5d6c77")
					$("#r_dow").css("color", "#5d6c77")
				    $("body").find("#L-wid li").remove()
					$("body").find("#M-wid li").remove()
					$("body").find("#R-wid li").remove()
					if($("#Pull-text").html()=="零售金额"){
						$("#r_top").css("color", "#5d6c77")
						$("#l_top").css("color", "#b5b8c1")
						$("#l_dow").css("color", "#5d6c77")
						$("#r_dow").css("color", "#5d6c77")
							$("body").find("#L-wid li").remove()
							$("body").find("#M-wid li").remove()
							$("body").find("#R-wid li").remove()
						zhanbi()
					}else if($("#Pull-text").html()=="零售数量"){
							$("#r_top").css("color", "#5d6c77")
						$("#l_top").css("color", "#b5b8c1")
						$("#l_dow").css("color", "#5d6c77")
						$("#r_dow").css("color", "#5d6c77")
							$("body").find("#L-wid li").remove()
							$("body").find("#M-wid li").remove()
							$("body").find("#R-wid li").remove()
						shuliangzhanbi()
					}else{
						$("#r_top").css("color", "#5d6c77")
						$("#l_top").css("color", "#b5b8c1")
						$("#l_dow").css("color", "#5d6c77")
						$("#r_dow").css("color", "#5d6c77")
						$("body").find("#L-wid li").remove()
						$("body").find("#M-wid li").remove()
						$("body").find("#R-wid li").remove()
						danshuzhanbi()
					}
				}());
		});
	
	}
	function firstList_jine(){
			$('#youbianjine').bind("click", function() {
			counter++ % 2 ? 
				(function(){ 
					$("#r_top").css("color","#b5b8c1")
					$("#l_top").css("color","#5d6c77")
					$("#l_dow").css("color","#5d6c77")
					$("#r_dow").css("color","#5d6c77")
				    $("body").find("#L-wid li").remove()
					$("body").find("#M-wid li").remove()
					$("body").find("#R-wid li").remove()
					if($("#Pull-text").html()=="零售金额"){
						$("body").find("#L-wid li").remove()
						$("body").find("#M-wid li").remove()
						$("body").find("#R-wid li").remove()
						jinqian()
					}else if($("#Pull-text").html()=="零售数量"){
						$("body").find("#L-wid li").remove()
						$("body").find("#M-wid li").remove()
						$("body").find("#R-wid li").remove()
						shuliang()
					}else{
						$("body").find("#L-wid li").remove()
						$("body").find("#M-wid li").remove()
						$("body").find("#R-wid li").remove()
						danshu()
					}
				}()) :
				(function(){
					$("#r_top").css("color","#5d6c77")
					$("#l_top").css("color","#5d6c77")
					$("#l_dow").css("color","#5d6c77")
					$("#r_dow").css("color","#b5b8c1")
				    $("body").find("#L-wid li").remove()
					$("body").find("#M-wid li").remove()
					$("body").find("#R-wid li").remove()
					if($("#Pull-text").html()=="零售金额"){
						$("body").find("#L-wid li").remove()
						$("body").find("#M-wid li").remove()
						$("body").find("#R-wid li").remove()
						jinqianDao()
					}else if($("#Pull-text").html()=="零售数量"){
						$("body").find("#L-wid li").remove()
						$("body").find("#M-wid li").remove()
						$("body").find("#R-wid li").remove()
						shuliangDao()
					}else{
						$("body").find("#L-wid li").remove()
						$("body").find("#M-wid li").remove()
						$("body").find("#R-wid li").remove()
						danshuDao()
					}
				}());
		});
	}
//第二个数据页面
function shuliang() {
	var max;
	var maxmiddle;
	for(var i = 0; i < err.length; i++) {
		for(var j = i; j < err.length; j++) {
			if(err[i] < err[j]) {　　　　　　　　　
				max = err[j];
				err[j] = err[i];
				err[i] = max;
				maxmiddle = frr[j];
				frr[j] = frr[i];
				frr[i] = maxmiddle;
				maxmiddle = drr[j];
				drr[j] = drr[i];
				drr[i] = maxmiddle;
				maxmiddle = shu_name_r[j];
				shu_name_r[j] = shu_name_r[i];
				shu_name_r[i] = maxmiddle;
				maxmiddle = zongshu_r[j];
				zongshu_r[j] = zongshu_r[i];
				zongshu_r[i] = maxmiddle;
			}
		}
		$(".data_list_r ul").append(" <li><span>" + format(err[i]) + "</span></li>");
		$(".data_list_m ul").append(" <li>" + frr[i] + "</li>");
		var zb = drr[i] / 100;
		$(".data_list_l ul").append(" <li><span>" + toPercent(zb) + "</span></li>");
	}
	var ke = 0;
	for(var i = 0; i < Lwidth.length; i++) {
		var n = Math.max.apply(null, drr); //最大值
		ke = drr[i] / n
		Lwidth[i].style.width = toPercent(ke)
	}
	$(".data_list_l ul li").each(function() {
		$(this).click(function(event) {
			$(".hb").remove()
			num = $(this).index();
			var hr = document.createElement("div")
			hr.className = "hr"
			hr.id = "HR"
			var self = this
			$(".hr").remove()
			self.appendChild(hr)
			$('.hr').append("<p>区域代号：<label>" + shu_name_r[num] + "</label></p><p>区域名称：<label>" + frr[num] + "</label></p><p>总零售额：<label>" + format(zongshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(err[num]) + "</label></p><p>跨店零售额占比：<label>" + drr[num] + "%</label></p>")
			quyuyingcang()
		})
	})
	$(".data_list_r ul li").each(function() {
		$(this).click(function() {
			$(".hr").remove()
			num = $(this).index();
			var hb = document.createElement("div")
			hb.className = "hb"
			hb.id = "HR"
			var self = this
			$(".hb").remove()
			self.appendChild(hb)
			$('.hb').append("<p>区域代号：<label>" + shu_name_r[num] + "</label></p><p>区域名称：<label>" + frr[num] + "</label></p><p>总零售额：<label>" + format(zongshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(err[num]) + "</label></p><p>跨店零售额占比：<label>" + drr[num] + "%</label></p>")
			quyuyingcang()
		})
	})
	var je = 0;
	for(var i = 0; i < Rwidth.length; i++) {
		var x = Math.max.apply(null, err); //最大值
		je = err[i] / x
		Rwidth[i].style.width = toPercent(je)

	}

	$("#jine").html(format(sum[0].cross_sal_qty))
	$("#zhanbi").html(toPercent(sum[0].cross_sal_qty_ratio / 100))

}

function shuliangDao() {
	var max;
	var maxmiddle;
	for(var i = 0; i < err.length; i++) {
		for(var j = i; j < err.length; j++) {
			if(err[i] > err[j]) {　　　　　　　　　
				max = err[j];
				err[j] = err[i];
				err[i] = max;
				maxmiddle = frr[j];
				frr[j] = frr[i];
				frr[i] = maxmiddle;
				maxmiddle = drr[j];
				drr[j] = drr[i];
				drr[i] = maxmiddle;
				maxmiddle = shu_name_r[j];
				shu_name_r[j] = shu_name_r[i];
				shu_name_r[i] = maxmiddle;
				maxmiddle = zongshu_r[j];
				zongshu_r[j] = zongshu_r[i];
				zongshu_r[i] = maxmiddle;
			}
		}
		$(".data_list_r ul").append(" <li><span>" + format(err[i]) + "</span></li>");
		$(".data_list_m ul").append(" <li>" + frr[i] + "</li>");
		var zb = drr[i] / 100;
		$(".data_list_l ul").append(" <li><span>" + toPercent(zb) + "</span></li>");

	}
	var ke = 0;
	for(var i = 0; i < Lwidth.length; i++) {

		var n = Math.max.apply(null, drr); //最大值
		ke = drr[i] / n
		console.log(ke)
		Lwidth[i].style.width = toPercent(ke)
	}
	$(".data_list_l ul li").each(function() {
		$(this).click(function() {
			$(".hb").remove()
			num = $(this).index();
			var hr = document.createElement("div")
			hr.className = "hr"
			hr.id = "HR"
			var self = this
			$(".hr").remove()
			self.appendChild(hr)
			$('.hr').append("<p>区域代号：<label>" + shu_name_r[num] + "</label></p><p>区域名称：<label>" + frr

				[num] + "</label></p><p>总零售额：<label>" + format(zongshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(err

					[num]) + "</label></p><p>跨店零售额占比：<label>" + drr[num] + "%</label></p>")
			quyuyingcang()
		})
	})
	$(".data_list_r ul li").each(function() {
		$(this).click(function() {
			$(".hr").remove()
			num = $(this).index();
			var hb = document.createElement("div")
			hb.className = "hb"
			hb.id = "HR"
			var self = this
			$(".hb").remove()
			self.appendChild(hb)
			$('.hb').append("<p>区域代号：<label>" + shu_name_r[num] + "</label></p><p>区域名称：<label>" + frr

				[num] + "</label></p><p>总零售额：<label>" + format(zongshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(err

					[num]) + "</label></p><p>跨店零售额占比：<label>" + drr[num] + "%</label></p>")
			quyuyingcang()
		})
	})
	var je = 0;
	for(var i = 0; i < Rwidth.length; i++) {
		var x = Math.max.apply(null, err); //最大值
		je = err[i] / x
		Rwidth[i].style.width = toPercent(je)
	}
	$("#jine").html(format(sum[0].cross_sal_qty))
	$("#zhanbi").html(toPercent(sum[0].cross_sal_qty_ratio / 100))

}

function shuliangzhanbi() {
	var max;
	var maxmiddle;
	for(var i = 0; i < drr.length; i++) {
		for(var j = i; j < drr.length; j++) {
			if(drr[i] < drr[j]) {　　　　　　　　　
				max = drr[j];
				drr[j] = drr[i];
				drr[i] = max;
				maxmiddle = frr[j];
				frr[j] = frr[i];
				frr[i] = maxmiddle;
				maxmiddle = err[j];
				err[j] = err[i];
				err[i] = maxmiddle;
				maxmiddle = shu_name_r[j];
				shu_name_r[j] = shu_name_r[i];
				shu_name_r[i] = maxmiddle;
				maxmiddle = zongshu_r[j];
				zongshu_r[j] = zongshu_r[i];
				zongshu_r[i] = maxmiddle;
			}
		}

		$(".data_list_r ul").append(" <li><span>" + format(err[i]) + "</span></li>");
		$(".data_list_m ul").append(" <li>" + frr[i] + "</li>");
		var zb = drr[i] / 100;
		$(".data_list_l ul").append(" <li><span>" + toPercent(zb) + "</span></li>");

	}
	for(var i = 0; i < Lwidth.length; i++) {
		var n = Math.max.apply(null, drr); //最大值
		ke = drr[i] / n
		console.log(ke)
		Lwidth[i].style.width = toPercent(ke)

	}
	$(".data_list_l ul li").each(function() {
		$(this).click(function() {
			$(".hb").remove()
			num = $(this).index();
			var hr = document.createElement("div")
			hr.className = "hr"
			hr.id = "HR"
			var self = this
			$(".hr").remove()
			self.appendChild(hr)
			$('.hr').append("<p>区域代号：<label>" + shu_name_r[num] + "</label></p><p>区域名称：<label>" + frr

				[num] + "</label></p><p>总零售额：<label>" + format(zongshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(err

					[num]) + "</label></p><p>跨店零售额占比：<label>" + drr[num] + "%</label></p>")
			quyuyingcang()
		})
	})
	$(".data_list_r ul li").each(function() {
		$(this).click(function() {
			$(".hr").remove()
			num = $(this).index();
			var hb = document.createElement("div")
			hb.className = "hb"
			hb.id = "HR"
			var self = this
			$(".hb").remove()
			self.appendChild(hb)
			$('.hb').append("<p>区域代号：<label>" + shu_name_r[num] + "</label></p><p>区域名称：<label>" + frr

				[num] + "</label></p><p>总零售额：<label>" + format(zongshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(err

					[num]) + "</label></p><p>跨店零售额占比：<label>" + drr[num] + "%</label></p>")
			quyuyingcang()
		})
	})
	var je = 0;
	for(var i = 0; i < Rwidth.length; i++) {
		var x = Math.max.apply(null, err); //最大值
		je = err[i] / x
		Rwidth[i].style.width = toPercent(je)
	}

}

function shuliangzhanbiDao() {
	var max;
	var maxmiddle;
	for(var i = 0; i < drr.length; i++) {
		for(var j = i; j < drr.length; j++) {
			if(drr[i] > drr[j]) {　　　　　　　　　
				max = drr[j];
				drr[j] = drr[i];
				drr[i] = max;
				maxmiddle = frr[j];
				frr[j] = frr[i];
				frr[i] = maxmiddle;
				maxmiddle = err[j];
				err[j] = err[i];
				err[i] = maxmiddle;
				maxmiddle = shu_name_r[j];
				shu_name_r[j] = shu_name_r[i];
				shu_name_r[i] = maxmiddle;
				maxmiddle = zongshu_r[j];
				zongshu_r[j] = zongshu_r[i];
				zongshu_r[i] = maxmiddle;
			}
		}

		$(".data_list_r ul").append(" <li><span>" + format(err[i]) + "</span></li>");
		$(".data_list_m ul").append(" <li>" + frr[i] + "</li>");
		var zb = drr[i] / 100;
		$(".data_list_l ul").append(" <li><span>" + toPercent(zb) + "</span></li>");

	}
	for(var i = 0; i < Lwidth.length; i++) {
		var n = Math.max.apply(null, drr); //最大值
		ke = drr[i] / n
		console.log(ke)
		Lwidth[i].style.width = toPercent(ke)

	}
	$(".data_list_l ul li").each(function() {
		$(this).click(function() {
			$(".hb").remove()
			num = $(this).index();
			var hr = document.createElement("div")
			hr.className = "hr"
			hr.id = "HR"
			var self = this
			$(".hr").remove()
			self.appendChild(hr)
			$('.hr').append("<p>区域代号：<label>" + shu_name_r[num] + "</label></p><p>区域名称：<label>" + frr

				[num] + "</label></p><p>总零售额：<label>" + format(zongshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(err

					[num]) + "</label></p><p>跨店零售额占比：<label>" + drr[num] + "%</label></p>")
			quyuyingcang()
			})
	})
	$(".data_list_r ul li").each(function() {
		$(this).click(function() {
			$(".hr").remove()
			num = $(this).index();
			var hb = document.createElement("div")
			hb.className = "hb"
			hb.id = "HR"
			var self = this
			$(".hb").remove()
			self.appendChild(hb)
			$('.hb').append("<p>区域代号：<label>" + shu_name_r[num] + "</label></p><p>区域名称：<label>" + frr

				[num] + "</label></p><p>总零售额：<label>" + format(zongshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(err

					[num]) + "</label></p><p>跨店零售额占比：<label>" + drr[num] + "%</label></p>")
			quyuyingcang()
		})
	})
	var je = 0;
	for(var i = 0; i < Rwidth.length; i++) {
		var x = Math.max.apply(null, err); //最大值
		je = err[i] / x
		Rwidth[i].style.width = toPercent(je)
	}

}
	//第三个数据页面
function danshu() {
	var max;
	var maxmiddle;
	for(var i = 0; i < jrr.length; i++) {
		for(var j = i; j < jrr.length; j++) {
			if(jrr[i] < jrr[j]) {　　　　　　　　　
				max = jrr[j];
				jrr[j] = jrr[i];
				jrr[i] = max;
				maxmiddle = hrr[j];
				hrr[j] = hrr[i];
				hrr[i] = maxmiddle;
				maxmiddle = grr[j];
				grr[j] = grr[i];
				grr[i] = maxmiddle;
				maxmiddle = shu_name_r[j];
				danshu_name_r[j] = danshu_name_r[i];
				danshu_name_r[i] = maxmiddle;
				maxmiddle = zongdanshu_r[j];
				zongdanshu_r[j] = zongdanshu_r[i];
				zongdanshu_r[i] = maxmiddle;

			}
		}
		console.log(danshu_name_r[i])
		$(".data_list_r ul").append(" <li><span>" + format(jrr[i]) + "</span></li>");
		$(".data_list_m ul").append(" <li>" + hrr[i] + "</li>");
		var zb = grr[i] / 100;
		$(".data_list_l ul").append(" <li><span>" + toPercent(zb) + "</span></li>");

	}
	$(".data_list_l ul li").each(function() {
		$(this).click(function() {
			$(".hb").remove()
			num = $(this).index();
			var hr = document.createElement("div")
			hr.className = "hr"
			hr.id = "HR"
			var self = this
			$(".hr").remove()
			self.appendChild(hr)
			$('.hr').append("<p>区域代号：<label>" + danshu_name_r[num] + "</label></p><p>区域名称：<label>" + hrr

				[num] + "</label></p><p>总零售额：<label>" + format(zongdanshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(jrr

					[num]) + "</label></p><p>跨店零售额占比：<label>" + grr[num] + "%</label></p>")
			quyuyingcang()
			})
		
	})

	$(".data_list_r ul li").each(function() {
		$(this).click(function() {
			$(".hr").remove()
			num = $(this).index();
			var hb = document.createElement("div")
			hb.className = "hb"
			hb.id = "HR"
			var self = this
			$(".hb").remove()
			self.appendChild(hb)
			
			$('.hb').append("<p>区域代号：<label>" + danshu_name_r[num] + "</label></p><p>区域名称：<label>" + hrr

				[num] + "</label></p><p>总零售额：<label>" + format(zongdanshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(jrr

					[num]) + "</label></p><p>跨店零售额占比：<label>" + grr[num] + "%</label></p>")
			quyuyingcang()
		})
	})
	for(var i = 0; i < Lwidth.length; i++) {

		var n = Math.max.apply(null, grr); //最大值
		ke = grr[i] / n
		Lwidth[i].style.width = toPercent(ke)
	}

	var je = 0;
	for(var i = 0; i < Rwidth.length; i++) {
		var x = Math.max.apply(null, jrr); //最大值
		je = jrr[i] / x
		Rwidth[i].style.width = toPercent(je)
	}
	$("#jine").html(format(sum[0].cross_sal_nos))
	$("#zhanbi").html(toPercent(sum[0].cross_sal_nos_ratio / 100))
}

function danshuDao() {
	var max;
	var maxmiddle;
	for(var i = 0; i < jrr.length; i++) {
		for(var j = i; j < jrr.length; j++) {
			if(jrr[i] > jrr[j]) {　　　　　　　　　
				max = jrr[j];
				jrr[j] = jrr[i];
				jrr[i] = max;
				maxmiddle = hrr[j];
				hrr[j] = hrr[i];
				hrr[i] = maxmiddle;
				maxmiddle = grr[j];
				grr[j] = grr[i];
				grr[i] = maxmiddle;
				maxmiddle = shu_name_r[j];
				danshu_name_r[j] = danshu_name_r[i];
				danshu_name_r[i] = maxmiddle;
				maxmiddle = zongdanshu_r[j];
				zongdanshu_r[j] = zongdanshu_r[i];
				zongdanshu_r[i] = maxmiddle;
			}
		}
		$(".data_list_r ul").append(" <li><span>" + format(jrr[i]) + "</span></li>");
		$(".data_list_m ul").append(" <li>" + hrr[i] + "</li>");
		var zb = grr[i] / 100;
		$(".data_list_l ul").append(" <li><span>" + toPercent(zb) + "</span></li>");

	}
	for(var i = 0; i < Lwidth.length; i++) {
		var n = Math.max.apply(null, grr); //最大值
		ke = grr[i] / n

		Lwidth[i].style.width = toPercent(ke)
	}
		$(".data_list_l ul li").each(function() {
		$(this).click(function() {
			$(".hb").remove()
			num = $(this).index();
			var hr = document.createElement("div")
			hr.className = "hr"
			hr.id = "HR"
			var self = this
			$(".hr").remove()
			self.appendChild(hr)
			$('.hr').append("<p>区域代号：<label>" + danshu_name_r[num] + "</label></p><p>区域名称：<label>" + hrr

				[num] + "</label></p><p>总零售额：<label>" + format(zongdanshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(jrr

					[num]) + "</label></p><p>跨店零售额占比：<label>" + grr[num] + "%</label></p>")
			quyuyingcang()
		})
	})

	$(".data_list_r ul li").each(function() {
		$(this).click(function() {
			$(".hr").remove()
			num = $(this).index();
			var hb = document.createElement("div")
			hb.className = "hb"
			hb.id = "HR"
			var self = this
			$(".hb").remove()
			self.appendChild(hb)
			$('.hb').append("<p>区域代号：<label>" + danshu_name_r[num] + "</label></p><p>区域名称：<label>" + hrr

				[num] + "</label></p><p>总零售额：<label>" + format(zongdanshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(jrr

					[num]) + "</label></p><p>跨店零售额占比：<label>" + grr[num] + "%</label></p>")
			quyuyingcang()
		})
	})
	var je = 0;
	for(var i = 0; i < Rwidth.length; i++) {
		var x = Math.max.apply(null, jrr); //最大值
		je = jrr[i] / x
		Rwidth[i].style.width = toPercent(je)
	}
	$("#jine").html(format(sum[0].cross_sal_nos))
	$("#zhanbi").html(toPercent(sum[0].cross_sal_nos_ratio / 100))
}

function danshuzhanbi() {
	var max;
	var maxmiddle;
	for(var i = 0; i < grr.length; i++) {
		for(var j = i; j < grr.length; j++) {
			if(grr[i] < grr[j]) {　　　　　　　　　
				max = grr[j];
				grr[j] = grr[i];
				grr[i] = max;
				maxmiddle = hrr[j];
				hrr[j] = hrr[i];
				hrr[i] = maxmiddle;
				maxmiddle = jrr[j];
				jrr[j] = jrr[i];
				jrr[i] = maxmiddle;
				maxmiddle = shu_name_r[j];
				danshu_name_r[j] = danshu_name_r[i];
				danshu_name_r[i] = maxmiddle;
				maxmiddle = zongdanshu_r[j];
				zongdanshu_r[j] = zongdanshu_r[i];
				zongdanshu_r[i] = maxmiddle;
			}
		}
		$(".data_list_r ul").append(" <li><span>" + format(jrr[i]) + "</span></li>");
		$(".data_list_m ul").append(" <li>" + hrr[i] + "</li>");
		var zb = grr[i] / 100;
		$(".data_list_l ul").append(" <li><span>" + toPercent(zb) + "</span></li>");
	}
	for(var i = 0; i < Lwidth.length; i++) {
		var n = Math.max.apply(null, grr); //最大值
		ke = grr[i] / n
		console.log(ke)
		Lwidth[i].style.width = toPercent(ke)
	}
		$(".data_list_l ul li").each(function() {
		$(this).click(function() {
			$(".hb").remove()
			num = $(this).index();
			var hr = document.createElement("div")
			hr.className = "hr"
			hr.id = "HR"
			var self = this
			$(".hr").remove()
			self.appendChild(hr)
			$('.hr').append("<p>区域代号：<label>" + danshu_name_r[num] + "</label></p><p>区域名称：<label>" + hrr

				[num] + "</label></p><p>总零售额：<label>" + format(zongdanshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(jrr

					[num]) + "</label></p><p>跨店零售额占比：<label>" + grr[num] + "%</label></p>")
			quyuyingcang()
		})
	})

	$(".data_list_r ul li").each(function() {
		$(this).click(function() {
			$(".hr").remove()
			num = $(this).index();
			var hb = document.createElement("div")
			hb.className = "hb"
			hb.id = "HR"
			var self = this
			$(".hb").remove()
			self.appendChild(hb)
			$('.hb').append("<p>区域代号：<label>" + danshu_name_r[num] + "</label></p><p>区域名称：<label>" + hrr

				[num] + "</label></p><p>总零售额：<label>" + format(zongdanshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(jrr

					[num]) + "</label></p><p>跨店零售额占比：<label>" + grr[num] + "%</label></p>")
			quyuyingcang()
		})
	})
	var je = 0;
	for(var i = 0; i < Rwidth.length; i++) {
		var x = Math.max.apply(null, jrr); //最大值
		je = jrr[i] / x
		Rwidth[i].style.width = toPercent(je)
	}

}

function danshuzhanbiDao() {
	var max;
	var maxmiddle;
	for(var i = 0; i < grr.length; i++) {
		for(var j = i; j < grr.length; j++) {
			if(grr[i] > grr[j]) {　　　　　　　　　
				max = grr[j];
				grr[j] = grr[i];
				grr[i] = max;
				maxmiddle = hrr[j];
				hrr[j] = hrr[i];
				hrr[i] = maxmiddle;
				maxmiddle = jrr[j];
				jrr[j] = jrr[i];
				jrr[i] = maxmiddle;
				maxmiddle = shu_name_r[j];
				danshu_name_r[j] = danshu_name_r[i];
				danshu_name_r[i] = maxmiddle;
				maxmiddle = zongdanshu_r[j];
				zongdanshu_r[j] = zongdanshu_r[i];
				zongdanshu_r[i] = maxmiddle;
			}
		}
		$(".data_list_r ul").append(" <li><span>" + format(jrr[i]) + "</span></li>");
		$(".data_list_m ul").append(" <li>" + hrr[i] + "</li>");
		var zb = grr[i] / 100;
		$(".data_list_l ul").append(" <li><span>" + toPercent(zb) + "</span></li>");
	}
	for(var i = 0; i < Lwidth.length; i++) {
		var n = Math.max.apply(null, grr); //最大值
		ke = grr[i] / n
		console.log(ke)
		Lwidth[i].style.width = toPercent(ke)
	}
		$(".data_list_l ul li").each(function() {
		$(this).click(function() {
			$(".hb").remove()
			num = $(this).index();
			var hr = document.createElement("div")
			hr.className = "hr"
			hr.id = "HR"
			var self = this
			$(".hr").remove()
			self.appendChild(hr)
			$('.hr').append("<p>区域代号：<label>" + danshu_name_r[num] + "</label></p><p>区域名称：<label>" + hrr

				[num] + "</label></p><p>总零售额：<label>" + format(zongdanshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(jrr

					[num]) + "</label></p><p>跨店零售额占比：<label>" + grr[num] + "%</label></p>")
			quyuyingcang()
		})
	})

	$(".data_list_r ul li").each(function() {
		$(this).click(function() {
			$(".hr").remove()
			num = $(this).index();
			var hb = document.createElement("div")
			hb.className = "hb"
			hb.id = "HR"
			var self = this
			$(".hb").remove()
			self.appendChild(hb)
			$('.hb').append("<p>区域代号：<label>" + danshu_name_r[num] + "</label></p><p>区域名称：<label>" + hrr

				[num] + "</label></p><p>总零售额：<label>" + format(zongdanshu_r[num]) + "</label></p><p>跨店零售额：<label>" + format(jrr

					[num]) + "</label></p><p>跨店零售额占比：<label>" + grr[num] + "%</label></p>")
			quyuyingcang()
			})
	})
	var je = 0;
	for(var i = 0; i < Rwidth.length; i++) {
		var x = Math.max.apply(null, jrr); //最大值
		je = jrr[i] / x
		Rwidth[i].style.width = toPercent(je)
	}

}
 
function format (num) {
    return (num.toFixed(0) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');//千分位转换
}
function  biao_dan(){
$('#area_list').append('<tr><th>区域</th><th>跨店零售额</th><th>跨店零售额</br>区域占比</th><th>零售金额</th><th>零售金额</br>区域占比</th></tr>')//表单 	
for (var i = 0; i < brr.length; i++) {
	$('#area_list').append('<tr><td>'+frr[i]+'</td><td>'+format(e_rr[i])+'</td><td>'+b_rr[i]+'%</td><td>'+format(c_rr[i])+'</td><td>'+d_rr[i]+'%</td></tr>')//表单  
 }
}

function biaodan_zongshu(){
var kd_zs=0;
var ls_zs=0;
	for (var i = 0; i < a_rr.length; i++) {
			kd_zs+=a_rr[i]
			ls_zs+=c_rr[i]
	};
$('#ace').append('<tr><td>合计:</td><td>'+format(kd_zs)+'</td><td>-</td><td>'+format(ls_zs)+'</td><td>-</td></tr>')
}

function biaodan_zongshuliang(){
			var kd_zs=0;
			var ls_zs=0;
			for (var i = 0; i < w_rr.length; i++) {
					kd_zs+=w_rr[i]
					ls_zs+=t_rr[i]
			};
	$('#ace').append('<tr><td>合计:</td><td>'+format(kd_zs)+'</td><td>-</td><td>'+format(ls_zs)+'</td><td>-</td></tr>')
}

function  biao_danshu(){
	$('#area_list').append('<tr><th>区域</th><th>跨店零售数量</th><th>跨店零售数</br>量区域占比</th><th>零售数量</th><th>零售数量</br>区域占比</th></tr>')//表单 	
	for (var i = 0; i < brr.length; i++) {
		$('#area_list').append('<tr><td>'+frr[i]+'</td><td>'+format(j_rr[i])+'</td><td>'+g_rr[i]+'%</td><td>'+format(h_rr[i])+'</td><td>'+i_rr[i]+'%</td></tr>')//表单  
	 }
}


function biaodan_zongdanshu(){
						var kd_zs=0;
						var ls_zs=0;
						for (var i = 0; i < w_rr.length; i++) {
								kd_zs+=u_rr[i]
								ls_zs+=o_rr[i]
			};
				$('#ace').append('<tr><td>合计:</td><td>'+format(kd_zs)+'</td><td>-</td><td>'+format(ls_zs)+'</td><td>-</td></tr>')
			}
			
	function  biao_danshul(){
		$('#area_list').append('<tr><th>区域</th><th>跨店零售单数</th><th>跨店零售单</br>数区域占比</th><th>零售单数</th><th>零售单数</br>区域占比</th></tr>')//表单 	
		for (var i = 0; i < brr.length; i++) {
			$('#area_list').append('<tr><td>'+frr[i]+'</td><td>'+format(l_rr[i])+'</td><td>'+p_rr[i]+'%</td><td>'+format(z_rr[i])+'</td><td>'+v_rr[i]+'%</td></tr>')//表单  
		 }
	}
function quyuyingcang(){
			clearTimeout(t)
			t=setTimeout(function(){
				$(".hr").hide()
				$(".hb").hide()
			},5000)
}
function quyufo(){
	if($("#Pull-text").html()=="零售金额"){
					      $("#jine").html("")
					      $("#zhanbi").html("")
			    	 	  $("#zhanbi").html(sum[0].cross_sal_amt_ratio +"%")
						  $("#jine").html(format(sum[0].cross_sal_amt))
						  $("#pull-money").html(format(sum[0].sal_amt))
						  $(".data_list_r ul").children().remove()
					      $(".data_list_m ul").children().remove()
					      $(".data_list_l ul").children().remove()
					      $("body").find("#L-wid li").remove()
						  $("body").find("#M-wid li").remove()
						  $("body").find("#R-wid li").remove()
						 	   jinqian();
								firstList_zhanbi();
								firstList_jine()
								biao_dan()
								biaodan_zongshu()
								
						
		      	  }else if($("#Pull-text").html()=="零售数量"){	   		   
		    			    $("#jine").html("")
					        $("#zhanbi").html("")
						    $("#zhanbi").html(sum[0].cross_sal_qty_ratio +"%")
						    $("#jine").html(format(sum[0].cross_sal_qty))
						    $("#pull-money").html(format(sum[0].sal_qty))
						     $(".data_list_r ul").children().remove()
						     $(".data_list_m ul").children().remove()
						     $(".data_list_l ul").children().remove()
						     $("body").find("#L-wid li").remove()
							 $("body").find("#M-wid li").remove()
							 $("body").find("#R-wid li").remove()
						     shuliang()
						 	 biao_danshu()
						 	 biaodan_zongshuliang()
		    		}else{
		    			     $("#jine").html("")
					         $("#zhanbi").html("")
		    			     $("#zhanbi").html(sum[0].cross_sal_nos_ratio +"%")
						     $("#jine").html(format(sum[0].cross_sal_nos))
						     $("#pull-money").html(format(sum[0].sal_nos))
						    $(".data_list_r ul").children().remove()
						     $(".data_list_m ul").children().remove()
						     $(".data_list_l ul").children().remove()
						     $("body").find("#L-wid li").remove()
							 $("body").find("#M-wid li").remove()
							 $("body").find("#R-wid li").remove()
						     danshu()
						    biao_danshul()
						    biaodan_zongdanshu()
					}
}
