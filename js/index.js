	window.onload=function(){
	
	//左侧菜单模拟苹果菜单
		var left_memu=document.getElementById('left_memu');
		var web_left=document.getElementById('web_left');
		var aimg=left_memu.getElementsByTagName('img');
			
		web_left.onmousemove=function(ev){
			var ev=ev||event;
			for (var i=0;i<aimg.length;i++) {
				var x=aimg[i].offsetWidth/2+aimg[i].offsetLeft;
				var y=aimg[i].offsetHeight/2+aimg[i].offsetTop+web_left.offsetTop;
			
				var a = ev.clientX - x;
				
				var b = ev.clientY - y; 
				var c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
				var scale=1-c/150;
				if(scale<0.6){
					scale=0.6;
				}
				aimg[i].style.width = scale * 80 + 'px';
				aimg[i].style.height = scale * 80 + 'px';
			}
			document.onmouseover=function(){
				
				for (var i=0;i<aimg.length;i++) {
					aimg[i].style.width = 48 + 'px';
					aimg[i].style.height = 48 + 'px';
				}
			}
		}
//		隐藏登录菜单
		var enterMenu1=document.getElementById('enterMenu1');
		var enterMenu=document.getElementById('enterMenu');
		var off_btn=enterMenu.getElementsByClassName('off_btn')[0];
		
		var aui_outer=document.getElementById('aui_outer');
		var aui_head=aui_outer.getElementsByClassName('aui_head')[0];
		var spanS=aui_head.getElementsByTagName('span');
		
		var tool=document.getElementById('tool');
		var span5=tool.getElementsByClassName('span5')[0];
		var span4=tool.getElementsByClassName('span4')[0];
		span5.onclick=function(){
			mTween(enterMenu,{
				left:80
			},1000,'linear');
			mTween(enterMenu1,{
				left:80
			},1000,'linear')
		}
		
		off_btn.onclick=function(){
			
			mTween(enterMenu,{
				left:-250
			},1000,'linear');
			mTween(enterMenu1,{
				left:-250
			},1000,'linear')
			
//			enterMenu.style.left='-250px';
//			enterMenu1.style.left='-250px';
		}
		span4.onclick=function(){
			mTween(aui_outer,{
				top:60,
				width:700,
				height:500
			},1500,'linear');
			
			
		}
		spanS[1].onclick=function(){
			mTween(aui_outer,{
				top:-600,
				width:0,
				height:0
			},1500,'linear');
			
		}
		
		var myMessage=document.getElementById('myMessage');
		var fast_bg=document.getElementById('fast_bg');
		var myMessage_off=myMessage.getElementsByTagName('span')[0];
		var myMessage_boxs=myMessage.getElementsByTagName('div');
		var myMessage_h3=myMessage.getElementsByTagName('h3');
		
		
//		alert(myMessage_boxs.length)
		myMessage.onclick=function(){
			fast_bg.style.display='block';
			
			setTimeout(function(){
				myMessage_off.style.display='block';
			},1500)
			
			for (var i=0;i<myMessage_boxs.length;i++) {
				myMessage_boxs[i].style.display='block';
			}
			mTween(myMessage,{
					right:683,
					top:300
				},300,'linear',function(){
					mTween(myMessage_boxs[0],{
						opacity:1,
						width: 301
					},300,'linear',function(){
						mTween(myMessage_boxs[1],{
							opacity:1,
							width: 305
						},300,'linear',function(){
							mTween(myMessage_boxs[2],{
							opacity:1,
							height:190
							},300,'linear',function(){
								mTween(myMessage_boxs[3],{
								opacity:1,
								width: 301
							},300,'linear')}
						)}
					)}
				)}
			)}
			
		myMessage_off.onclick=function(ev){
			var ev=ev||event;
			//处理冒泡
			ev.cancelBubble=true;
			fast_bg.style.display='none';
			myMessage_off.style.display='none';
			
			mTween(myMessage_boxs[3],{
				opacity:0,
				width:0,
				
			},300,'linear',function(){
				mTween(myMessage_boxs[2],{
					opacity:0,
					height:0
				},300,'linear',function(){
					mTween(myMessage_boxs[1],{
						opacity:0,
						width:0
					},300,'linear',function(){
						mTween(myMessage_boxs[0],{
							opacity:0,
							width:0,
							
						},300,'linear',function(){
							mTween(myMessage,{
								right:80,
								top:60
							},300,'linear')
						})
					})
				})
			})
			setTimeout(function(){
				for (var i=0;i<myMessage_boxs.length;i++) {
					myMessage_boxs[i].style.display='none';
				}
			},1500)
			
		}
				//登录注册
		
		var enterMenu_li1_a=enterMenu.getElementsByClassName('enterMenu_li1_a');
		var login=document.getElementById('login');
		var q_login=document.getElementsByClassName('q_login');
		var login_main=document.getElementsByClassName('login_main');
		var q_off=q_login[0].getElementsByTagName('a');
		
//		var pass_ct=document.getElementsByClassName('pass_ct');
		var passd=document.getElementById('passd');
		var logind=document.getElementById('logind');
		var bS=document.getElementsByTagName('b');
		var man=document.getElementById('man');
		var woman=document.getElementById('woman');
			passd.onclick=function(){
				if(passd.className==''){
					passd.className='active';
				}else{
					passd.className='';
					logind.className='';
				}
				
			}
			logind.onclick=function(){
				if(logind.className==''){
					logind.className='active';
					passd.className='active';
				}else{
					logind.className='';
					passd.className='';
				}
				
			}
			for (var i=0;i<bS.length;i++) {
				bS[i].index=i;
				bS[i].onclick=function(){
					for (var i=0;i<bS.length;i++) {
						bS[i].className='';
					}
					this.className='active';
				}
				
			}
			
			
			
			
		enterMenu_li1_a[0].onclick=function(ev){
//			var ev=ev||event;
//			//处理冒泡
//			ev.cancelBubble=true;
			q_login[0].style.display='block';
			qs_login[0].style.display='none';
			mTween(login_main[0],{
				height:320,
				opacity:1
			},500,'linear');
			//点击完登录之后，登录框显示，列表框隐藏
			mTween(enterMenu,{
				left:-250
			},1000,'linear');
			mTween(enterMenu1,{
				left:-250
			},1000,'linear')
		}
		q_off[0].onclick=function(ev){
			var ev=ev||event;
			//处理冒泡
			ev.cancelBubble=true;
//			q_login[0].style.display='none';
			mTween(login_main[0],{
				height:0,
				opacity:0
			},500,'linear');
			
		}
		/*
		 *   注  ******* 册
		 *
		 */
		var qs_login=document.getElementsByClassName('qs_login');
		var q_right=document.getElementsByClassName('q_right');
		//取消按钮
		var qs_cancel=document.getElementById('qs_cancel');
		q_right[0].onclick=function(){
			qs_login[0].style.display='block';
			q_login[0].style.display='none';
			mTween(login_main[0],{
				height:0,
				opacity:0
			},500,'linear',function(){
				mTween(login_main[0],{
				height:320,
				opacity:1
				},500,'linear')
			});
		}
		qs_cancel.onclick=function(){
			mTween(login_main[0],{
				height:0,
				opacity:0
				},500,'linear')
		}
		
//时钟
	var clock=document.getElementById('clock');
	var clock_ul=document.getElementById("clock_ul");
//	var oCss=document.getElementById("css");
	var oHour=document.getElementById("hour");
	var oMin=document.getElementById("min");
	var oSec=document.getElementById("sec");
	var aLi="";
	var time=document.getElementById('time');
	
	drag2(clock);

	
	for(var i=0;i<60;i++)
	{	
		aLi += '<li style="transform: rotate('+i*6+'deg);"></li>';
	}
	clock_ul.innerHTML=aLi;
	var kdli = clock_ul.getElementsByTagName('li');
	
	for (var i=5;i<60;i+=5) {
		kdli[i].innerHTML='<span style="position: absolute;left: -2px;top: 15px;font-size:14px;color: white; transform: rotate('+(-i*6)+'deg);font-size:14px">'+i/5+'</span>';
	}
	
	kdli[0].innerHTML = '<span style="position: absolute;left: -5px;top: 15px;color: white;font-size:14px">12</span>';
//	kdli[5].innerHTML = '<span style="position: absolute;left: -5px;top: 5px;transform: rotate(-30deg);">1</span>';
	
	toTime();
	setInterval(toTime,1000);
	function toTime()
	{
		var oDate=new Date();
		var iSec=oDate.getSeconds();
		var iMin=oDate.getMinutes()+iSec/60;
		var iHour=oDate.getHours()+iMin/60;
		oSec.style.WebkitTransform="rotate("+iSec*6+"deg)";
		oMin.style.WebkitTransform="rotate("+iMin*6+"deg)";
		oHour.style.WebkitTransform="rotate("+iHour*30+"deg)";
	};	
///////////////////切换背景自定义滚动条
		
		var trolley=aui_outer.getElementsByClassName('trolley')[0];
		
		var btn=trolley.getElementsByTagName('span');
		
		var aui_wrip=aui_outer.getElementsByClassName('aui_wrip')[0];
			
		var divS=aui_wrip.getElementsByTagName('div');
		
		var aui_wrip_spanS=divS[0].getElementsByTagName('span');
		
		var aui_wrip_ul=divS[1].getElementsByTagName('ul');
		var arr2=[];
		var zindex=1;
		var liS=divS[1].getElementsByTagName('li');
		var wep = document.getElementById('wep');
		var wep_bg = wep.getElementsByClassName('wep_bg')[0];
		
		trolleyFn(aui_wrip_ul[0]);
		aui_wrip_spanS[0].style.background='url(./img/images/tab_background.gif) repeat-x scroll left top white';
		aui_wrip_ul[0].style.display='block';
		for(var i=0;i<aui_wrip_spanS.length;i++){
			aui_wrip_spanS[i].index=i;
			aui_wrip_spanS[i].onclick=function(){
				btn[0].style.top = '0px';
				for (var i=0;i<aui_wrip_spanS.length;i++ ) {
					aui_wrip_spanS[i].style.background='#f7f7f7';
					aui_wrip_ul[i].style.opacity='0';
					aui_wrip_ul[i].style.display='none';
				}
				mTween(aui_wrip_ul[this.index],{
					opacity:1
				},500,'linear');
				aui_wrip_ul[this.index].style.display='block';
				trolleyFn(aui_wrip_ul[this.index]);
				aui_wrip_spanS[this.index].style.background='url(./img/images/tab_background.gif) repeat-x scroll left top white';
			}
			
		}
		
		for (var i=0;i<liS.length;i++) {
			liS[i].index=i;
			arr2.push( {left: liS[i].offsetLeft, top: liS[i].offsetTop} );
			liS[i].onclick=function(){
				wep_bg.src='img/bg.img/qq_'+(this.index+1)+'.jpg';
			}
		}
		
		for (var i=0;i<liS.length;i++) {
			liS[i].index=i;
			liS[i].style.position='absolute';
			liS[i].style.margin='0px';
			liS[i].style.left=arr2[i].left+'px';
			liS[i].style.top=arr2[i].top+'px';
			liS[i].onmouseover=function(){
				this.style.zIndex=zindex++;
				mTween(this,{
					width : 200,
					height : 200,
					left : arr2[this.index].left - 20,
					top : arr2[this.index].top - 35
				},500,'linear');
			}
			liS[i].onmouseout=function(){
				this.style.zIndex=zindex++;
				mTween(this,{
					width : 160,
					height : 130,
					left : arr2[this.index].left,
					top : arr2[this.index].top
				},500,'linear');
			}
		}
		
		
		function trolleyFn(obj){
			btn[0].onmousedown=function(ev){
				var ev=ev||event;
				var disY=ev.clientY-btn[0].offsetTop;
				//获取可移动的最大距离
				var maxTop=trolley.offsetHeight-this.offsetHeight
				//disY
				
				document.onmousemove=function(ev){
					var ev=ev||event;
					//此时需要移动距离就是当前鼠标到顶部的距离减去鼠标到按钮自身TOP的距离
					var T = ev.clientY - disY;
					//为了不使按钮脱离滚动区域此时要限制按钮移动的距离
					if(T<0){
						T=0;
					}else if(T>maxTop) {
						T=maxTop;
					}
					var a=T/maxTop;
					btn[0].style.top = T + 'px';
					obj.style.top = -(aui_wrip.clientHeight - obj.offsetHeight-40) * a + 'px';
				}
				
				document.onmouseup=function(){
					document.onmousemove=document.onmouseup=null;
				}
				return false;
			}
		}
			
//		<!--头部标题-->
		var head=document.getElementById('head');
		var table=head.getElementsByClassName('table');
		var spanS=head.getElementsByTagName('span');
		var off=true;
			
			spanS[0].onclick=function(){
					spanS[1].style.backgroundPosition='0 -210px';
					spanS[0].style.backgroundPosition='0 -301px';
					spanS[2].style.backgroundPosition='0 -155px';
			}
			
			spanS[1].onclick=function(){
					this.style.backgroundPosition='0 -236px';
					spanS[0].style.backgroundPosition='0 -265px';
					spanS[2].style.backgroundPosition='0 -155px';
			}
			spanS[2].onclick=function(){
					this.style.backgroundPosition='0 -330px';
					spanS[0].style.backgroundPosition='0 -265px';
					spanS[1].style.backgroundPosition='0 -210px';
			}
///////////////标题头部结束
				timer();
				setInterval(timer,1000)
				function timer(){
				var head_time=document.getElementById('head_time');
				var myTime=new Date();
				var iYear = myTime.getFullYear();
				var iMonth= myTime.getMonth()+1;     	   
				var iDate = myTime.getDate();    
				var iWeek = myTime.getDay();
				var iHoures = myTime.getHours();
				var iMin = myTime.getMinutes();  	  
				var iSec = myTime.getSeconds();  	   
				var iMilli = myTime.getMilliseconds();
				
					if(iWeek===0)iWeek='星期日';
					if(iWeek===1)iWeek='星期一';
					if(iWeek===2)iWeek='星期二';
					if(iWeek===3)iWeek='星期三';
					if(iWeek===4)iWeek='星期四';
					if(iWeek===5)iWeek='星期五';
					if(iWeek===6)iWeek='星期六';
				var str='';
				var str2='';
				str =iYear+'年'+ iMonth+'月'+ iDate+'日'+iWeek +toNbuber(iHoures)+' : '+toNbuber(iMin) +' : '+toNbuber(iSec)  
				str2=toNbuber(iHoures)+' : '+toNbuber(iMin) +' : '+toNbuber(iSec);
				time.innerHTML=str2;
				head_time.innerHTML=str;
				
				};
				
				//不满足10的数组补0
				function toNbuber(v){
				return v<10 ?'0'+v :''+v;
				}



//桌面导航条	

		var top_mume=document.getElementById('top_mume');
		var top_mumelis=top_mume.getElementsByTagName('li');
		
		
		var desk_center=document.getElementById('desk_center');
		var desk_ul=document.getElementById('desk_ul');
	
		var lis= desk_ul.getElementsByTagName('li');
		var num=0;
		var off=true;
		
		for (var i=0;i<lis.length;i++) {
			getli(lis[i],4);
		}
		var w=lis[0].offsetWidth;
		lis[0].style.left=0;
		lis[0].style.opacity=1;
		for (var i=0;i<top_mumelis.length;i++) {
			top_mumelis[i].index=i;
			top_mumelis[i].onclick=function(){
				num=this.index;
				for (var i=0;i<lis.length;i++) {
					mTween(lis[i],{
						left:1400,
						opacity:0.3
					},500,'linear');
				}
				mTween(lis[this.index],{
					left:0,
					opacity:1
				},500,'linear');
				for (var i=0;i<top_mumelis.length;i++) {
					top_mumelis[i].style.backgroundImage=''
				}
				top_mumelis[this.index].style.backgroundImage='url(./img/images/top_mume.png)';
			}
		}
		function getli(obj,n){
		  	var divS=obj.getElementsByTagName('div');
		  	for (var i=0;i<divS.length;i++) {
		  		divS[i].style.position='absolute';
		  		divS[i].style.top=(i%n)*130+'px';
		  		divS[i].style.left = Math.floor(i/n)*100 + 'px';
		  		darg(divS[i]);
		  	}
		}
		var zIndex=1;
		function darg(obj){
			obj.onmousedown=function(ev){
				
				var ev=ev||event;
				obj.style.zIndex = zIndex++;
				var pos1=obj.getBoundingClientRect();
				var disX=ev.clientX-pos1.left;
				var disY=ev.clientY-pos1.top;
				var pos2=obj.parentNode.getBoundingClientRect();
				var adiv=obj.parentNode.children;
				var arr=[];
				for(var i=0;i<adiv.length;i++){
					adiv[i].index=i;
					arr.push( [ adiv[i].offsetLeft , adiv[i].offsetTop ] );
				}
				document.onmousemove = function(ev){
					var ev = ev || window.event;
				
					obj.style.left = ev.clientX -pos2.left- disX + 'px';
					obj.style.top = ev.clientY -pos2.top-disY + 'px';

				}
				document.onmouseup = function(){
					document.onmousemove = null;
					document.onmouseup = null;
					var nD = neardiv(obj);
					var tmp = 0;
					if(nD){
						mTween( nD , { left : arr[obj.index][0] , top : arr[obj.index][1] },300,'linear' );
						mTween( obj , { left : arr[nD.index][0] , top : arr[nD.index][1] },300,'linear');
						nD.style.border = '';
						
						tmp = obj.index;
						obj.index = nD.index;
						nD.index = tmp;
					}
					else{
						mTween( obj , { left : arr[obj.index][0] , top : arr[obj.index][1] },300,'linear' );
					}
				}
				return false;
				
				function neardiv(obj){
					var value = 9999;
					var index = -1;
					for(var i=0;i<adiv.length;i++){
						if( pz(obj,adiv[i]) && obj!=adiv[i]){
							
							var c = jl(obj,adiv[i]);
							
							if( c < value ){
								value = c;
								
								index = i;
							}
						}	
					}		
					if(index != -1){
						return adiv[index];
					}
					else{
						return false;
					}	
				}
			}
		}
	
		function jl(obj1,obj2){
			var a = obj1.getBoundingClientRect().left - obj2.getBoundingClientRect().left;
			var b = obj2.getBoundingClientRect().top - obj2.getBoundingClientRect().top
			return Math.sqrt(a*a + b*b);
		}
		//封装碰撞函数
		function pz(obj1,obj2){
			var l1=obj1.offsetLeft;
			var t1=obj1.offsetTop;
			var r1=obj1.offsetLeft+obj1.offsetWidth;
			var b1=obj1.offsetTop+obj1.offsetHeight;
			var l2=obj2.offsetLeft;
			var t2=obj2.offsetTop;
			var r2=obj2.offsetLeft+obj2.offsetWidth;
			var b2=obj2.offsetTop+obj2.offsetHeight;
			
			if(r1<l2||b1<t2||l1>r2||t1>b2){
				return false;
			}else{
				return true;
			}
		}

		window.onresize = function (){
			var divS=lis[num].getElementsByTagName('div');
			getli(lis[num],4);
			if(window.innerHeight < divS[3].getBoundingClientRect().bottom){
				
				getli(lis[num],3);
			}
			if(window.innerHeight < divS[2].getBoundingClientRect().bottom){
				
				getli(lis[num],2);
			}
			if(window.innerHeight < divS[1].getBoundingClientRect().bottom){
				
				getli(lis[num],1);
			}
		}

		
	}	