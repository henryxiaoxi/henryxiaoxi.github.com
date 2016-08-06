//级联菜单
	$(".menu li a").each(//获取所有.menu li a
		function(){
			$(this).parents("li").hover(
				function(){//鼠标移入
					$(this).find(".hover_list").css("display","block");
				},
				function(){//鼠标移出
					$(this).find(".hover_list").css("display","none");
				}
			);
		}
	);
//tabs切换代码
		
$(function(){
	$('.tabs').find('li').click(function(){
		
		$('.tabs').find('a').attr('class','');

		$(this).find('a').attr('class','curCase');
		
		$('.case_div').css('display','none');
		
		$('.case_div').eq($(this).index()).css('display','block')//.eq($(this).index())只能识别父级子级里面子级元素不能超过2级
		})
	
	});
//hover展开代码
	$(".news_item li").each(//促发对应li
			function(){
				$(this).hover(//促发对应的li鼠标移入移出效果
						function(){//移入效果
							$(".news_item li").removeClass("current1");
							$(this).addClass("current1");
						},
						function(){
						}
					);
			}
		);
//回返顶部
	$(window).scroll(//窗口滚动事件
		function(){
			if($(window).scrollTop()==0)//$(window).scrollTop()代表页面上下的滚动值
			{
				$("#totop").fadeOut("slow");//fadeOut淡出效果，后面有一个值，代表淡出的速度
			}else if($(window).scrollTop()>100){
				$("#totop").fadeIn("slow");//fadeOut淡入效果，后面有一个值，代表淡入的速度
			}
			//$("#totop")	
		}
	);
	$("#totop").click(//点击#totop
		function(){
			$(window).scrollTop(0);//滚动顶上
		}
	);
//下拉框
	$(".btn_dl").toggle(//点击下拉
		function(){
			$(this).parents(".dl").find(".dl_list").fadeIn();//淡入	
		},
		function(){
			$(this).parents(".dl").find(".dl_list").fadeOut();//淡出
		}
	);	