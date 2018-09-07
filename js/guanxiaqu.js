

var alldata = [];
var mydata;
var myid;
var firstAreaThis;
var erji = [];
var abc = address.guanxiaqu;
var params = {
	"userId": userId
};
var resultSelect=[];
var cealldatathis;
var cx_a = [];
var cx_b = [];
var cx_c = [];
var cx_d = []
asser(params);
function asser(params) {
	$.ajax({
		type: 'POST',
		url: abc,
		dataType: 'json',
		data: params,
		headers: {
			"Access-Control-Allow-Origin": '*',
			"AuthId": params.userId
		},
		success: function (obj) {
			console.log(obj)
			for (var i = 0; i < obj.data.list.length; i++) {
				erji[i] = obj.data.list[i].areacode2;
			}
			alldata = obj.data.list;
			var list = obj.data.list;
			for (var i = 0; i < list.length; i++) {
				cx_a = cx_a.concat(list[i].areaname1)
				cx_b = cx_b.concat(list[i].areaname2)
				cx_d = cx_d.concat(list[i].areacode1)
			}
			chaxun_one()
			arr = cx_a
			unique(arr)
			unique_r(cx_c)
			//管辖区域第一层
			var gxq_one = cx_a.length;
			//里面三角形属性
			var aa = cx_d.length;

			var str = 1;
			var d_j = 0;
			//管辖区域第一层
			$("#managementup div").bind("click", function () {
				var _self=firstAreaThis=this
				// 当前index
				let index = $(this).index();
				// 当前name
				myid = $(this).attr('data-name')
				if (myid) {
					erji = [];
					for (var i = 0; i < alldata.length; i++) {
						if (alldata[i].areaname1 == myid) {
							erji.push(alldata[i].areacode2)
						}
					}
				}
				// 添加选择结果
				var has=false;
				if(resultSelect.length>0){
					for(var i=0;i<resultSelect.length;i++){
						if(myid==resultSelect[i].name){
							has=true;
							break;
						}
					}
				}

				if(!has){
					resultSelect.push({"name":myid,"codes":erji})
				}
				console.log(resultSelect+'结果是')
				// 显示二级
				$(".jibieda-top").show()
				$("#managementmiddle").show()
				
				var _thisSelectImg=$(this).find('.qu_yu').css('background-image');
				if(_thisSelectImg){
					// 选择一级
					if(_thisSelectImg.indexOf('sjx_s.png')==-1){
						$(this).find('.qu_yu').css("background-image","url(./images/sjx_s.png)")
						$(this).find('.qu_yu').css("display","block")
						$(this).addClass('mypinpai');
						$(this).siblings().find('.qu_yu').css('background-image','url(./images/sjx_k.png)')
					}else{
						// 去掉一级选择
						$(this).removeClass('mypinpai');
						$(this).find('.qu_yu').css("display","none")
						$(this).find('.qu_yu').css("background-image", "url(./images/sjx_k.png)")
						$('#managementmiddle').empty()
						
						if(resultSelect.length>0){
							var namess=$(firstAreaThis).attr('data-name')
							for(var i=0;resultSelect.length;i++){
								console.log(resultSelect[i])
								if(resultSelect[i].name==namess){
									resultSelect.splice(i,1) //去掉去掉选择的结果
									break
								}
							}
						}
					}

				}
				if (index == 0) {
					// 取消全选
					if ($("#managementup .pinpai").eq(0).hasClass('mypinpai')) {
						resultSelect=[]
						$("#managementup .pinpai").removeClass('mypinpai');
						$(this).siblings('div').find('.qu_yu').hide()
						$('#managementmiddle div').removeClass('mypinpai')
						
						$('#managementmiddle').empty()
						
					}else {
						// 全选
						
						resultSelect=[]	
						for(var i=0;i<alldata.length;i++){
							resultSelect.push({
								"name":alldata[i].areaname1,
								"codes":alldata[i].areacode2
							})
						}
						$("#managementup .pinpai").addClass('mypinpai');
						$('#managementmiddle div').addClass('mypinpai')
						$(this).siblings('div').find('.qu_yu').show()

					}
				}
				var istrue = false;
				var isfalse = false;
				var j = 1;
				for (j = 1; j < gxq_one; j++) {
					if (!($("#managementup .pinpai").eq(j).hasClass('mypinpai'))) {
						istrue = true;
					}
				}
				if (istrue == false && j == gxq_one) {
					$("#managementup .pinpai").eq(0).addClass('mypinpai');
				}
				
				var alldatathis = [];;
				console.log(alldatathis)
				var k = 0;
				if (index != 0 && $("#managementup .pinpai").eq(index).hasClass('mypinpai')) {
					
					$('html #managementmiddle').html("");
					$('html #managementmiddle').append('<div class="pinpai mypinpai"  onclick="clicks(' + -1 + ')"><span>全选<p class="qu_yu"></p></span></div>')
					for (var i = 0; i < alldata.length; i++) {
						if ($("#managementup .pinpai").eq(index).text() == alldata[i].areaname1) {
							alldatathis[k] = alldata[i].areaname2;
							k++;
						}
					}
					cealldatathis=alldatathis
					unique_l(alldatathis);
					var _thisName2=$(firstAreaThis).attr('data-name')
					var _arr=[];
					var _has=false;
					var thisResult=[];
					if(resultSelect.length>0){
						for(var i=0;i<resultSelect.length;i++){
							if(resultSelect[i].name==_thisName2){
								thisResult=resultSelect[i].codes;
								_has=true;
							}
						}
					}
					if(_has){
						for(var i=1;i<$('#managementmiddle .pinpai').length;i++){
							var _thisCodes=$('#managementmiddle .pinpai').eq(i).attr('data-id')
							var _not=true;
							for(var j=0;j<thisResult.length;j++){
								if(_thisCodes==thisResult[j]){
									_not=false
								}
							}
							if(_not){
								$('#managementmiddle .pinpai').eq(i).removeClass('mypinpai')
							}
						}
					}
				}
			})
		}
	})
}
var isSameArray = function (array1, array2) {
    array1 = array1.sort().join('');
    array2 = array2.sort().join('');
    return array1 === array2;
  };
function clicks(index) {
	index = index + 1;
	//管辖区域第二层

	var gxq_two = cx_b.length;
	if (index != 0) {
		if ($("#managementmiddle .pinpai").eq(index).hasClass('mypinpai')) {
			$("#managementmiddle .pinpai").eq(index).removeClass('mypinpai');
		}
		else {
			$("#managementmiddle .pinpai").eq(index).addClass('mypinpai');
		}
	} else {
		if ($("#managementmiddle .pinpai").eq(0).hasClass('mypinpai')) {
			$("#managementmiddle .pinpai").removeClass('mypinpai');
		}
		else {
			$("#managementmiddle .pinpai").addClass('mypinpai');
		}

	}
	var istrue = false;
	var isfalse = false;
	var j = 1;
	for (j = 1; j < gxq_two; j++) {
		if (!($("#managementmiddle .pinpai").eq(j).hasClass('mypinpai'))) {
			istrue = true;
		}

	}
	if (istrue == false && j == gxq_two) {
		$("#managementmiddle .pinpai").eq(0).addClass('mypinpai');
	}

	if (index != 0) {
		if ($("#store .pinpai").eq(index).hasClass('mypinpai') && $("#store .pinpai").eq(0).hasClass('mypinpai')) {
			$("#store .pinpai").eq(0).addClass('mypinpai')
		} else {
			$("#store .pinpai").eq(0).removeClass('mypinpai');
		}
	}
	
	// 二级选择数据处理
	var firstAreaName=$(firstAreaThis).attr('data-name');
	var _codes=[]
	if($('#managementmiddle .mypinpai').length>0){
		for(var i=1;i<$('#managementmiddle .mypinpai').length;i++){
			var thisCode=$('#managementmiddle .mypinpai').eq(i).attr('data-id');
			if(thisCode){
				_codes.push(thisCode)
			}
		}
	}
	if(resultSelect.length>0){
		for(var i=0;i<resultSelect.length;i++){
			if(resultSelect[i].name==firstAreaName){
				resultSelect[i].codes=_codes;	
			}
		}
		
	}
}
//增加全选
function chaxun_one() {
	$('html #managementup').append('<div class="pinpai"><span>全选</span></div>')
	$('html #managementmiddle').append('<div class="pinpai a_er" style="display:none"><span>全选</span></div>')
	$('html #managementdown').append('<div class="pinpai"><span>全选</span></div>')
}

//清除重复数据
function unique(arr) {
	if (!Array.isArray(arr)) {
		return
	}
	var res = [];
	var ss = [];
	for (let i = 0; i < arr.length; i++) {
		if (res.indexOf(arr[i]) === -1) {
			res.push(arr[i])
		}
	}
	var ss = res;
	for (var i = 0; i < ss.length; i++) {
		$('html #managementup').append('<div class="pinpai" data-name=' + ss[i] + '><span>' + ss[i] + '<p class="qu_yu"></p></span></div>')//门店的代号
	}
	return res

}
function unique_l(arr) {
	if (!Array.isArray(arr)) {
		return
	}
	var res = [];
	var ss = [];
	for (let i = 0; i < arr.length; i++) {
		if (res.indexOf(arr[i]) === -1) {
			res.push(arr[i])
		}
	}
	var ss = res;
	for (var i = 0; i < ss.length; i++) {
		$('html #managementmiddle').append('<div class="pinpai mypinpai" data-id=' + erji[i] + ' onclick="clicks(' + i + ')"><span>' + ss[i] + '<p class="qu_yu"></p></span></div>')//门店的代号
	}
	return res

}
function unique_r(arr) {
	if (!Array.isArray(arr)) {
		return
	}
	var res = [];
	var ss = [];
	for (let i = 0; i < arr.length; i++) {
		if (res.indexOf(arr[i]) === -1) {
			res.push(arr[i])
		}
	}
	var ss = res;
	for (var i = 0; i < ss.length; i++) {
		$('html #managementdown').append('<div class="pinpai"><span>' + ss[i] + '<p class="qu_yu"></p></span></div>')//门店的代号
	}
	return res

}


// wancheng
$('#CH').click(function () {
	$("#cehua").show(500)
})
$('.cz').click(function () {
	$("#managementmiddle .pinpai").removeClass('mypinpai');
	$("#managementup .pinpai").removeClass('mypinpai');
	$("#managementdown .pinpai").removeClass('mypinpai');
	$("#store .pinpai").removeClass('mypinpai');
	$("#brand .pinpai").removeClass('mypinpai');
})
$('.wc').click(function () {
	console.log("xuanze wc 点击"+resultSelect+'结果是');
	var resultArr=[];
	for(var i=0;i<resultSelect.length;i++){
		if(resultSelect[i].codes.length>0){
			resultArr=resultArr.concat(resultSelect[i].codes)
		}
	}
	console.log('结果数据是-------------:::::::'+resultArr)
	var brightness = 0;
	var brightnessarray = resultArr;
	var index = 0;
	var ctrr = [];
	var trr = 0;
	var hrr = 0;
	var atrr = [];
	var mrr = 0;
	for (var s = 0; s < $("#brand .pinpai").length; s++) {
		if ($("#brand .pinpai").eq(s).hasClass('mypinpai')) {
			ctrr[trr] = cx_n[s - 1];
			trr++;


		}
	};

	// var code2Select = []
	// var brightnessarray = []
	// for (var i = 1; i < $("#managementmiddle .pinpai").length; i++) {
	// 	if ($("#managementmiddle .pinpai").eq(i).hasClass('mypinpai')) {
	// 		code2Select.push(i)
	// 		brightnessarray.push($("#managementmiddle .pinpai").eq(i).attr('data-id'))
	// 	}

	// }





	for (var s = 1; s < $("#store .pinpai").length; s++) {
		if ($("#store .pinpai").eq(s).hasClass('mypinpai')) {
			atrr[mrr] = mydata[s - 1];
			mrr++;
		}
	};
	$("#cehua").hide()
	var pra = {
		"userId": userId,
		"va_months": mouth,
		"local_send_flag": mou,
		"areacode1": brightnessarray,
		"org_level_id": atrr,
		"org_brd_id": ctrr,
	}
	brightnessarray1 = brightnessarray;
	atrr1 = atrr;
	ctrr1 = ctrr;
	if (trr = 0) ctrr1 = [];
	if (mrr = 0) atrr1 = [];
	if (index = 0) brightnessarray1 = [];
	first(pra);
})
