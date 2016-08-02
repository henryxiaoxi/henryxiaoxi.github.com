
window.onload = function(){
    onepage();
}


//页面的索引
var indexz;

var mySwiper = new Swiper('.swiper-container',{
    mode : 'vertical',//设置页面上下滚动

    loop:true,
    grabCursor: true,
    paginationClickable: true
})


//当页面滚动时，触发事件，获得活动页面的索引
mySwiper.addCallback('SlideChangeStart', function(swiper){
    indexz = mySwiper.activeIndex;//返回当前活动块的索引
    indexzs = mySwiper.previousIndex;//返回上一个活动块的索引

    if(indexz == 1){

        //onepage();//第2页的文字出现
    }
    if(indexz == 2){   //这个索引是在第一页往第二页切换的时候，产生效果

        towpage();//第2页的文字出现
    }

	if(indexz == 3){
		threepage();
	}
	
	if(indexz == 4){
		fourpage();
	}
	
	if(indexz == 5){
		fivepage();		
	}
	
	if(indexz == 6){
		sixpage();
	}
//   if(indexz == 0){
	
//       fourpage();//第8页的文字出现

//   }


});

//第一页打开的时候执行
function onepage(){
    $('.ta1').animate({"opacity":"1"},500,function(){tan()
        $('.w1').animate({"opacity":"1","top":"5%"},1000,function(){
            $('.ta2').animate({"opacity":"1"},1000,function(){
                $('.w2').animate({"opacity":"1","top":"85%"},1000,function(){
                    $('.ta3').animate({"opacity":"1"},1000,function(){
                        $('.w3').animate({"opacity":"1","left":"31%"},1000,function(){
                            $('.t1').animate({"opacity":"1","left":"20%","width":"40%","bottom":"3%"},3000);
                        });
                    });
                });
            });
        });
    });
}

        function tan(){
            //注意，最后面的方法叫回调函数，意思是前面的动画执行完，才去执行回调函数
            $('.ta1').animate({top:'95%',"opacity":"1"},{queue:false, duration:1000, easing: "easeInOutCirc"});
            setTimeout(function(){
                $('.ta1').css({top:'93%',"opacity":"0.1"});
            },2000);

            setTimeout(tan,1000);

        }



//当页面切换到第2页时，第2页的动画效果
function towpage(){
	
        $('.ni1').animate({"opacity":"1"},1000,function(){
            $('.w4').animate({"opacity":"1"},1000,function(){
                $('.ni2').animate({"opacity":"1","left":"5%"},500,function(){
                    $('.w5').animate({"opacity":"1","left":"58%"},500,function(){
                        $('.ni3').animate({"opacity":"1","left":"5%"},500,function(){
                            $('.w6').animate({"opacity":"1","left":"58%"},500,function(){
                                $('.t2').animate({"opacity":"1","left":"31%","width":"40%","bottom":"25%"},2000,function(){
                               		 $('.w7').animate({bottom:'8%',"opacity":"1"},500,function(){
                               		 	 $('.w8').animate({bottom:'8%',"opacity":"1"},500,function(){
                               		 	 	$('.w9').animate({bottom:'8%',"opacity":"1"},500,function(){
                               		 	 		$('.w10').animate({bottom:'8%',"opacity":"1"},500,function(){
                               		 	 			$('.w11').animate({bottom:'8%',"opacity":"1"},500);
                               		 	 		});
                               		 	 	});
                               		 	 });
                               		 });
                                });
                            });
                        });
                    });
                });
            });
        });
        

        
        //setTimeout(function(){ $('.w4').animate({"opacity":"1","left":"22%"},2000);},1000);
        //setTimeout(function(){ $('.ni2').animate({"opacity":"1"},1000);},3000);
        //setTimeout(function(){ $('.w4').animate({"opacity":"1","left":"22%"},2000);},1000);
	
}

function threepage(){
	$('.ex').animate({"opacity":"1"},1000,function(){
		$('.web').animate({"opacity":"1","width":"35%","left":"5%","top":"19%"},300,function(){
			$('.font').animate({"opacity":"1","width":"35%","left":"55%","top":"19%"},300,function(){
				$('.code').animate({"opacity":"1","width":"35%","left":"30%","top":"38%"},300,function(){
					$('.font1').animate({"opacity":"1","left":"5%",},500,function(){
						$('.font2').animate({"opacity":"1","left":"5%"},500,function(){
							$('.font3').animate({"opacity":"1","left":"5%"},500);
						});
					});
				});
			});
		});
	});
}

function fourpage(){
	$('.work').animate({"opacity":"1"},1000,function(){
		$('.gang').animate({"opacity":"1","top":"20%" ,"left":"17%" },1000,function(){
			$('.meng').animate({"opacity":"1","top":"48%" ,"left":"20%" },1000,function(){
				$('.mei').animate({"opacity":"1","top":"76%" ,"left":"26%" },1000);
			});
		});
	});
}

function fivepage(){
	$('.work').animate({"opacity":"1"},1000,function(){
		$('.zuop1').animate({"opacity":"1","top":"23%" },500,function(){
			$('.zuop2').animate({"opacity":"1","top":"57%" },500);
		});
	});
}

function sixpage(){
	$('.xuez').animate({"opacity":"1"},1000,function(){
		$('.chou').animate({"opacity":"1","top":"46%"},1000,function(){
			$('.guang').animate({"opacity":"1"},{queue:false, duration:1000, easing: "easeInOutCirc"});
		});
		
	});
}
