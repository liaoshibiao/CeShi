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
	console.log("xuanze wc 点击");
	var brightness = 0;
	var brightnessarray = [];
	var index = 0;
	var ctrr = [];
	var trr = 0;
	var hrr = 0;
	var atrr = [];
	var mrr = 0;
	var myid;
	for (var s = 0; s < $("#brand .pinpai").length; s++) {
		if ($("#brand .pinpai").eq(s).hasClass('mypinpai')) {
			ctrr[trr] = cx_n[s - 1];
			trr++;


		}
	};
	//			for(var s=1;s<$("#managementup .pinpai").length;s++){
	//			if($("#managementmiddle .pinpai").eq(s).hasClass('mypinpai'))
	//			{
	//				brightnessarray[hrr]=erji[s-1];
	//				hrr++;
	//				myid=$("#managementup .pinpai").eq(s).attr('data-id')
	//				console.log(myid+"rrr")
	//				console.log(brightnessarray)
	//			   
	//			}
	//		
	//		 };
	var code2Select = []
	var brightnessarray = []
	console.log('长度是：' + $("#managementmiddle .pinpai").length)
	for (var i = 1; i < $("#managementmiddle .pinpai").length; i++) {
		if ($("#managementmiddle .pinpai").eq(i).hasClass('mypinpai')) {
			code2Select.push(i)
			brightnessarray.push($("#managementmiddle .pinpai").eq(i).attr('data-id'))
		}

	}
	console.log(brightnessarray)






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
	console.log("mouth:" + mouth + ";mou:" + mou);
	console.log("brightnessarray1:" + brightnessarray1.length);
	//console.log("brightnessarray:"+brightnessarray.length);
	//console.log("atrr:"+atrr.length);
	console.log("atrr1:" + atrr1.length);
	//console.log("ctrr:"+ctrr.length);
	console.log("ctrr1:" + ctrr1.length);
	first(pra);
})