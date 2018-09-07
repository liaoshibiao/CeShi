var URL = address.biaodan;
	    console.log(URL)
	    console.log(userId)
		var a_fh=[];
		var b_fh=[];
		var c_fh=[];
		var d_fh=[];
		var e_fh=[];
		var f_fh=[];
		var g_fh=[];
		var h_fh=[];
		var i_fh=[];
		var j_fh=[];
		var k_fh=[];
		var l_fh=[];
		var m_fh=[];
		var n_fh=[];
        var o_fh=[];
        var p_fh=[];
        //总值
        var aa_fh=[];
		var bb_fh=[];
		var cc_fh=[];
		var dd_fh=[];
		var ee_fh=[];
		var ff_fh=[];
		var gg_fh=[];
		var hh_fh=[];
		var ii_fh=[];
		var jj_fh=[];
		var kk_fh=[];
		var ll_fh=[];
		var mm_fh=[];
		var nn_fh=[];
        var oo_fh=[];
        var pp_fh=[];
	   	var str=1;
	   	var mouth=5;
	   	var mou=1;
		var ctrr1=[];
		var brightnessarray1=[];
		var atrr1=[];
		console.log(userId+"pp")
	 $("#anniu").click(function(){
		 str+=1;
		 if(str==1){
		 	mou=1;
			str=1;
		 }
		 if(str!=1){
		 	mou=0;
			str=0;
		 }
		 
		 var params = {
		 	"userId":userId,
		 	"va_months": mouth,
			"local_send_flag": mou,
			"areacode1": brightnessarray1.length!=0?brightnessarray1:'',
			"org_level_id": atrr1.length!=0?atrr1:'',
			"org_brd_id":ctrr1.length!=0?ctrr1:'',
			
		};
       first(params);
	 })
	 $("#nav li").bind("click",function aa() {
		data_id = $(this).attr("data-id");
						$("#nav li").removeClass('active');
						$("#nav li[data-id = '" + data_id + "']").addClass('active');
					let index = $(this).index() + 1;
					if(index==1){
					mouth=1;
						var list = []
						 	var sum = "";
					}
					else if(index==2){ 
					mouth=2
					}
					else if(index==3){ 
					mouth=3
					}
					else if(index==4){ 
					mouth=4
					}
					else if(index==5){ 
					mouth=5
					}
					else if(index==6){ 
					mouth=6
					}
					var params = {
						"userId":userId,
						"va_months": mouth,
						"local_send_flag":mou,
						"areacode1": brightnessarray1,
						"org_level_id": atrr1,
						"org_brd_id": ctrr1
					};
		           first(params);
				})
	 	 function first(params){
					console.log("调用first");
					console.log("调用first参数mouth："+params.va_months+";mou:"+params.local_send_flag);
					if(brightnessarray1.length==0){
						console.log("调用first参数brightnessarray1为空");
						params.areacode1='';
					}else{
						var bValue='';
						for(var i=0;i<brightnessarray1.length;i++){
							bValue=bValue+brightnessarray1[i]+",";
						}
						if(bValue!='')bValue=bValue.substring(0,bValue.length-1);
						console.log('bValue:'+bValue);
						params.areacode1=bValue;
					}
					if(atrr1.length==0){
						params.org_level_id='';
						console.log("调用first参数atrr1为空");
					}else{
						var atrr1Value='';
						for(var i=0;i<atrr1.length;i++){
							atrr1Value=atrr1Value+atrr1[i]+",";
						}
						if(atrr1Value!='')atrr1Value=atrr1Value.substring(0,atrr1Value.length-1);
						console.log('atrr1Value:'+atrr1Value);
						params.org_level_id=atrr1Value;
					}
					if(ctrr1.length==0){
						params.org_brd_id='';
						console.log("调用first参数ctrr1为空");
					}else{
						var ctrr1Value='';
						for(var i=0;i<ctrr1.length;i++){
							ctrr1Value=ctrr1Value+ctrr1[i]+",";
						}
						if(ctrr1Value!='')ctrr1Value=ctrr1Value.substring(0,ctrr1Value.length-1);
						console.log('ctrr1Value:'+ctrr1Value);
						params.org_brd_id=ctrr1Value;
					}
					console.log("调用first参数brightnessarray1："+brightnessarray1+";atrr1:"+params.org_level_id+";ctrr1:"+params.org_brd_id);
					 //params.org_brd_id='AD';
					//params.org_brd_id='AD,NK';
					$.ajax({ 
					url: URL,
					type: 'POST',
					data:params,
					headers : {
						"Access-Control-Allow-Origin":'*',
						"AuthId":params.userId
					},
					dataType: 'json',
					success: function(obj){
						console.log(obj)
							list = obj.data.list;
							sum = obj.data.summary;
							a_fh=[]; b_fh=[]; c_fh=[]; d_fh=[]; e_fh=[]; f_fh=[]; g_fh=[]; h_fh=[];
							i_fh=[]; j_fh=[]; k_fh=[]; l_fh=[]; m_fh=[]; n_fh=[]; o_fh=[];
							aa_fh=[];
							
							bb_fh=[]; cc_fh=[]; dd_fh=[]; ee_fh=[]; ff_fh=[]; gg_fh=[]; hh_fh=[];
							ii_fh=[]; jj_fh=[]; kk_fh=[]; ll_fh=[]; mm_fh=[]; nn_fh=[]; oo_fh=[];
							for (var i = 0; i < list.length; i++) {
								a_fh = a_fh.concat(list[i].cross_org_num)
								b_fh = b_fh.concat(list[i].cross_zero_org_nm)
								c_fh = c_fh.concat(list[i].cross_sal_amt)
								d_fh = d_fh.concat(list[i].cross_sal_amt_ratio)
								e_fh = e_fh.concat(list[i].cross_sal_qty)
								f_fh = f_fh.concat(list[i].wareh_send_qty)
								g_fh = g_fh.concat(list[i].store_send_qty)
								h_fh = h_fh.concat(list[i].cross_sal_nos)
								i_fh = i_fh.concat(list[i].cross_upt)
								j_fh = j_fh.concat(list[i].cross_atv)
								k_fh = k_fh.concat(list[i].no_sku_sal_amt)
								l_fh = l_fh.concat(list[i].no_sku_sal_amt_ratio)
								m_fh = m_fh.concat(list[i].no_size_sal_amt)
								n_fh = n_fh.concat(list[i].no_size_sal_amt_ratio)
								o_fh = o_fh.concat(list[i].org_brd_id)
								}
								console.log(a_fh)
							//合计值
								aa_fh = sum[0].cross_org_num
								bb_fh = sum[0].cross_zero_org_nm
								cc_fh = sum[0].cross_sal_amt
								dd_fh = sum[0].cross_sal_amt_ratio
								ee_fh = sum[0].cross_sal_qty
								ff_fh = sum[0].wareh_send_qty
								gg_fh = sum[0].store_send_qty
								hh_fh = sum[0].cross_sal_nos
								ii_fh = sum[0].cross_upt
								jj_fh = sum[0].cross_atv
								kk_fh = sum[0].no_sku_sal_amt
								ll_fh = sum[0].no_sku_sal_amt_ratio
								mm_fh = sum[0].no_size_sal_amt
								nn_fh = sum[0].no_size_sal_amt_ratio
								oo_fh = sum[0].org_brd_id
								console.log(gg_fh)
	                          //合计值 千分位
	                            var sum_cc =0;
								if(cc_fh!=null)sum_cc=cc_fh.toFixed(0)+"";//保留两位小数
                                var text8_sum_cc =0;
								if(sum_cc !=0)text8_sum_cc=sum_cc.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                                console.log("text8_sum_cc:"+text8_sum_cc);
								
                                var sum_hh =0;
								if(hh_fh!=null)sum_hh=hh_fh.toFixed(0)+"";//保留两位小数
                                var text8_sum_hh =0;
								if(sum_hh !=0)text8_sum_hh=sum_hh.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                                
                                var sum_gg =0;
								if(gg_fh!=null)sum_gg=gg_fh.toFixed(0)+"";//保留两位小数
                                var text8_sum_gg = 0;
								if(sum_gg !=0)text8_sum_gg=sum_gg.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                                
                                var sum_ee =0;
								if(ee_fh!=null)sum_ee=ee_fh.toFixed(0)+"";//保留两位小数
								var text8_sum_ee=0;
                                if(sum_ee!=0)text8_sum_ee= sum_ee.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                                
                                var sum_jj =0;
								if(jj_fh!=null)sum_jj=jj_fh.toFixed(0)+"";//保留两位小数
                                var sum_ii =0;
								if(ii_fh!=null)sum_ii=ii_fh.toFixed(1)+"";//保留两位小数
                                
                                var sum_aa =0;
								if(aa_fh!=null)sum_aa=aa_fh.toFixed(0)+"";//保留两位小数
                                var text8_sum_aa =0;
								if(sum_aa!=0)text8_sum_aa=sum_aa.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                                
								
                                var sum_bb =0;
								if(bb_fh!=null)sum_bb=bb_fh.toFixed(0)+"";//保留两位小数
                                var text8_sum_bb =0;
								if(sum_bb!=0)text8_sum_bb=sum_bb.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                                
								
                                var sum_jj =0;
								if(jj_fh!=null)sum_jj=jj_fh.toFixed(0)+"";//保留两位小数
                                var text8_sum_jj =0;
								if(sum_jj!=0)text8_sum_jj=sum_jj.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                                
								
								
                                var sum_kk =0;
								if(kk_fh!=null)sum_kk=kk_fh.toFixed(0)+"";//保留两位小数
                                var text8_sum_kk =0;
								if(sum_kk!=0)text8_sum_kk=sum_kk.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                                
								
                                var sum_mm =0;
								if(mm_fh!=null)sum_mm=mm_fh.toFixed(0)+"";//保留两位小数
                                var text8_sum_mm =0;
								if(sum_mm!=0)text8_sum_mm=sum_mm.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
								
								var sum_ff =0;
								if(ff_fh!=null)sum_ff=ff_fh.toFixed(0)+"";//保留两位小数
                                var text8_sum_ff =0;
								if(sum_ff!=0)text8_sum_ff=sum_ff.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
								
                             $('#area_rist').empty();
                                $('#area_rist').append('<tr class="oo"><th style="text-align: left;">指标</th><th>合计</th></tr>')
                                $('#area_rist').append('<tr class="aa"><td style="text-align: left;">已实施跨店零售店数</td><td class="aaa">合计</td></tr>')
                                $('#area_rist').append('<tr class="bb"><td style="text-align: left;">已实施但无零售店数</td><td class="bbb">合计</td></tr>')
                                $('#area_rist').append('<tr class="cc"><td style="text-align: left;">跨店零售金额</td><td class="ccc">合计</td></tr>')
                                $('#area_rist').append('<tr class="dd"><td style="text-align: left;">跨店零售额占比</td><td class="ddd">合计</td></tr>')
                                $('#area_rist').append('<tr class="ee"><td style="text-align: left;">跨店零售商品数量</td><td class="eee">合计</td></tr>')
                                $('#area_rist').append('<tr class="ff"><td style="text-align: left;">仓库发货件数</td><td class="fff">合计</td></tr>')
                                $('#area_rist').append('<tr class="gg"><td style="text-align: left;">店铺发货件数</td><td class="ggg">合计</td></tr>')
                                $('#area_rist').append('<tr class="hh"><td style="text-align: left;">跨店零售单数</td><td class="hhh">合计</td></tr>')
                                $('#area_rist').append('<tr class="ii"><td style="text-align: left;">跨店零售客单量</td><td class="iii">合计</td></tr>')
                                $('#area_rist').append('<tr class="jj"><td style="text-align: left;">跨店零售客单价</td><td class="jjj">合计</td></tr>')
                                $('#area_rist').append('<tr class="kk"><td style="text-align: left;">店无款的零售金额</td><td class="kkk">合计</td></tr>')
                                $('#area_rist').append('<tr class="ll"><td style="text-align: left;">店无款的零售金额占比</td><td class="lll">合计</td></tr>')
                                $('#area_rist').append('<tr class="mm"><td style="text-align: left;">店缺码的零售金额</td><td class="mmm">合计</td></tr>')
                                $('#area_rist').append('<tr class="nn"><td style="text-align: left;">店缺码的零售金额占比</td><td class="nnn">合计</td></tr>')
                             for(var i=0;i<a_fh.length;i++){
                             	var qw_a = a_fh[i].toFixed(0)+"";//保留两位小数
                                 var qe_g_a = qw_a.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                         	 $('#area_rist .aa').append('<td>'+qe_g_a+'</td>')
	                         }  
	                         for(var i=0;i<b_fh.length;i++){
	                         	var qw_b = b_fh[i].toFixed(0)+"";//保留两位小数
                                 var qe_g_b = qw_b.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	                         	 $('#area_rist .bb').append('<td>'+qe_g_b+'</td>')
	                         
	                         }
	                         for(var i=0;i<c_fh.length;i++){
	                         	 var qw = c_fh[i].toFixed(0)+"";//保留两位小数
                                var qe = qw.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	                         	 $('#area_rist .cc').append('<td>'+qe+'</td>')
	                         }
	                         for(var i=0;i<d_fh.length;i++){
	                         	 $('#area_rist .dd').append('<td>'+d_fh[i]+'%</td>')
	                         }
	                         for(var i=0;i<e_fh.length;i++){
	                         	var qw_e = e_fh[i].toFixed(0)+"";//保留两位小数
                                var qe_e_l = qw_e.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	                         	 $('#area_rist .ee').append('<td>'+qe_e_l+'</td>')
	                         }
	                         for(var i=0;i<f_fh.length;i++){
	                         	  var qw_f = f_fh[i].toFixed(0)+"";//保留两位小数
                                 var qe_f_l = qw_f.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	                         	 $('#area_rist .ff').append('<td>'+qe_f_l+'</td>')
	                         }
	                         for(var i=0;i<g_fh.length;i++){
	                         	 var qw_g = g_fh[i].toFixed(0)+"";//保留两位小数
                                 var qe_g_l = qw_g.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	                         	 $('#area_rist .gg').append('<td>'+qe_g_l+'</td>')
	                         }
	                         for(var i=0;i<h_fh.length;i++){
	                         	 var qw_h = h_fh[i].toFixed(0)+"";//保留两位小数
                                 var qe_g_h = qw_h.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	                         	 $('#area_rist .hh').append('<td>'+qe_g_h+'</td>')
	                         }
	                         for(var i=0;i<i_fh.length;i++){
	                         	var qw_i = i_fh[i].toFixed(1)+"";//保留两位小数
	                         	 $('#area_rist .ii').append('<td>'+qw_i+'</td>')
	                         }
	                         for(var i=0;i<j_fh.length;i++){
	                         	 var qw_j = j_fh[i].toFixed(0)+"";//保留两位小数
                                 var qe_g_j = qw_j.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	                         	 $('#area_rist .jj').append('<td>'+qe_g_j+'</td>')
	                         }
	                         for(var i=0;i<k_fh.length;i++){
	                         	 var qw_k = k_fh[i].toFixed(0)+"";//保留两位小数
                                 var qe_g_k = qw_k.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	                         	 $('#area_rist .kk').append('<td>'+qe_g_k+'</td>')
	                         }
	                         for(var i=0;i<l_fh.length;i++){
	                         	 $('#area_rist .ll').append('<td>'+l_fh[i]+'%</td>')
	                         }
	                         for(var i=0;i<m_fh.length;i++){
	                         	var qw_m = m_fh[i].toFixed(0)+"";//保留两位小数
                                 var qe_g_m = qw_m.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	                         	 $('#area_rist .mm').append('<td>'+qe_g_m+'</td>')
	                         }
	                         for(var i=0;i<n_fh.length;i++){
	                         	 $('#area_rist .nn').append('<td>'+n_fh[i]+'%</td>')
	                         }
	                         for(var i=0;i<o_fh.length;i++){
	                         	 $('#area_rist .oo').append('<th>'+o_fh[i]+'</th>')
	                         }
					         $('#area_rist .aaa').html(text8_sum_aa)
					         $('#area_rist .bbb').html(text8_sum_bb)
					         $('#area_rist .ccc').html(text8_sum_cc)
					         $('#area_rist .ddd').html(dd_fh+"%")
					         $('#area_rist .eee').html(text8_sum_ee)
					         $('#area_rist .fff').html(text8_sum_ff)
					         $('#area_rist .ggg').html(text8_sum_gg)
					         $('#area_rist .hhh').html(text8_sum_hh)
					         $('#area_rist .iii').html(sum_ii)
					         $('#area_rist .jjj').html(text8_sum_jj)
					         $('#area_rist .kkk').html(text8_sum_kk)
					         $('#area_rist .lll').html(ll_fh+"%")
					         $('#area_rist .mmm').html(text8_sum_mm)
					         $('#area_rist .nnn').html(nn_fh+"%")			
                              var ss=((list.length)*85)+160+85+1
					          $("#area_rist").width(ss)
					}
						});
		 }
	 	  var params = {
						"userId":userId,
						"va_months": 5,
						"local_send_flag": 1,
						"areacode1": brightnessarray1,
						"org_level_id": atrr1,
						"org_brd_id": ctrr1
					};
      first(params);
	 //侧滑
	 $('#CH').click(function(){
	$("#cehua").show(500)
	$("#div1").hide()
	 })
	$('.wc').click(function(){//完成 触发2
		$("#cehua").hide()
		$("#div1").show()
		console.log("完成按钮点击");
	})
	$('.cz').click(function(){
			$("#managementmiddle .pinpai").removeClass('mypinpai');
			$("#managementup .pinpai").removeClass('mypinpai');
			$("#managementdown .pinpai").removeClass('mypinpai');
            $("#store .pinpai").removeClass('mypinpai');
			$("#brand .pinpai").removeClass('mypinpai');
		})
		
		var div1 = document.querySelector('#div1');
//限制最大宽高，不让滑块出去
var maxW = document.body.clientWidth - div1.offsetWidth;
var maxH =690;
//手指触摸开始，记录div的初始位置
div1.addEventListener('touchstart', function(e) {
	 $(this).css("background","url(images/shen.png)no-repeat")
 var ev = e || window.event;
 var touch = ev.targetTouches[0];
 oL = touch.clientX - div1.offsetLeft;
 oT = touch.clientY - div1.offsetTop;
});
//触摸中的，.位置记录
div1.addEventListener('touchmove', function(e) {
 var ev = e || window.event;
 var touch = ev.targetTouches[0];
 var oLeft = touch.clientX - oL;
 var oTop = touch.clientY - oT;
 if(oLeft < 0) {
 oLeft = 0;
 } else if(oLeft >= maxW) {
 oLeft = maxW;
 }
 if(oTop < 0) {
 oTop = 0;
 } else if(oTop >= maxH) {
 oTop = maxH;
 }
 div1.style.left = oLeft + 'px';
 div1.style.top = oTop + 'px';
});
//触摸结束时的处理
div1.addEventListener('touchend', function() {
	$(this).css("background","url(images/qian.png)no-repeat")
 document.removeEventListener("touchmove", defaultEvent);
});
//阻止默认事件
function defaultEvent(e) {
 e.preventDefault();
}