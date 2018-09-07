
function getUrlParms(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	   var r = window.location.search.substr(1).match(reg);
	   if(r!=null)
	   return unescape(r[2]);
	   return null;
   }
var userId = getUrlParms("userId");
var corpId = getUrlParms("corpId");
//var userId = newUri(window.location.href).getQueryParamValue('userId');
//if(!userId) {
//userId = localStorage.getItem('userId');
//} else {
//localStorage.setItem('userId',userId);
//}
// 获得URL上的corpId参数
//var corpId = newUri(window.location.href).getQueryParamValue('corpId');

console.log("这是userId"+userId)
console.log("这是corpId"+corpId)
var address = {
		dianpujibie:""+ceshi+"/bi_yhj/"+corpId+"/bi/report/params/queryOrgLevel/query",//店铺级别查询
		dianpupingpai:""+ceshi+"/bi_yhj/"+corpId+"/bi/report/params/queryOrgBrd/query",//店铺品牌查询
		guanxiaqu:""+ceshi+"/bi_yhj/"+corpId+"/bi/report/params/queryOrgInfo/query",//管辖区查询
		kuadianlingshou:""+ceshi+"/bi_yhj/"+corpId+"/bi/report/crossOrgRank/query",//跨店零售店铺数据
		quyu:""+ceshi+"/bi_yhj/"+corpId+"/bi/report/crossAreaRank/query",//跨店零售区域排行
		biaodan:""+ceshi+"/bi_yhj/"+corpId+"/bi/report/cross_sal/query"//表单页面数据
}