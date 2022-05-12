// 获取各级菜单UL节点
var $out_a=$(".out_ul");
var $in_a=$(".content");
// 添加事件委托
$out_a.on("click","a",function(event){
	var target=$(event.currentTarget);
	//判断点击a标签中span标签数量，若数量==1则进行切换操作，若不为0则返回，不进行操作
	if(target.find('span').length==1){
		console.log("test2");
		//判断菜单是否打开，若打开则收起菜单并将span标签转为+
		if(target.siblings().is(":visible")){
			target.siblings().slideUp();
			target.find('span').html('+');
		}else{
		//若菜单未打开，则开启当前菜单并关闭其余兄弟二级菜单	
			target.siblings().slideDown();
			target.parent().siblings().find('.content').slideUp();
			target.parent().siblings().find('span').html('+');
			target.find('span').html('-');
			}		
	}else{
		return;
	}
})


		