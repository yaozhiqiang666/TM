var box=document.querySelector(".tb3"),search1=location.search,dt,ar1,id;search1?(ar1=search1.split("="),"?id"==ar1[0]?(id=ar1[1],async function(){dt=await promiseAjax({url:"../php/xiangqing.php",data:"id="+id}),dt=eval("("+dt+")");var str=`
           
            <div class="leftBox tb3-l">

                <img src="${dt.pic}">

                <div class="mark">
                
                </div>
            </div>
            <div class="rightBox">
            <img src="${dt.pic}">
            </div>
            
            
            <div class="tb3-y">
                <h3>${dt.jj}</h3>
                <p class="juhuasuan"><span class="jhs">聚划算</span>&nbsp; &nbsp;此商品正在参加聚划算，1天8小时后结束，请尽快购买!</p>
                <p class="jiage">价格 &nbsp;  &nbsp;  &nbsp; <span class="jg-1">￥${dt.jg}</span></p>
                <p class="kd"> &nbsp;  &nbsp;  &nbsp; 运费 &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 北京至深圳宝安区 &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 快递包邮</p>
                <p class="yxl"> &nbsp;  &nbsp;  &nbsp; 月销量&nbsp;  &nbsp;<span class="jg-2">${dt.ycj}</span> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 累计评价&nbsp;  &nbsp;<span class="jg-2">${dt.pj}</span> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 送天猫积分：649 </p>
                <button class="ljgm">立即购买</button><button class="jrgwc">加入购物车</button>
           
            `;box.innerHTML=str;var leftBox=document.querySelector(".leftBox"),mark=document.querySelector(".mark"),rightBox=document.querySelector(".rightBox");leftBox.onmouseover=function(){mark.style.display="block",rightBox.style.display="block"},leftBox.onmouseout=function(){mark.style.display="none",rightBox.style.display="none"},leftBox.onmousemove=function(t){var s=(t=t||window.event).pageX-$(".leftBox").offset().left-$(".mark").width()/2,a=t.pageY-$(".leftBox").offset().top-$(".mark").height()/2,e=leftBox.offsetWidth-mark.offsetWidth,t=leftBox.offsetHeight-mark.offsetHeight,s=s<=0?(mark.style.left="0px",0):e<=s?(mark.style.left=e+"px",e):(mark.style.left=s+"px",s),t=a<=0?(mark.style.top="0px",0):t<=a?(mark.style.top=t+"px",t):(mark.style.top=a+"px",a),a=rightBox.querySelector("img");a.style.left=-2*s+"px",a.style.top=-2*t+"px"}}()):(alert("参数有误"),location.href="../pages/list.html")):(alert("非法进入，请选择商品"),location.href="../pages/list.html"),box.onclick=function(e){var e=e||window.event,target=e.target||e.srcElement,cartList4,bool,cartList4,bool;"加入购物车"==target.innerHTML&&(alert("商品成功添加至购物车"),cartList4=localStorage.getItem("cartList4")||[],0<cartList4.length?(cartList4=eval("("+cartList4+")"),bool=!0,cartList4.forEach(t=>{dt.id==t.id&&(bool=!1,t.cart_number++,localStorage.setItem("cartList4",JSON.stringify(cartList4)))}),bool&&(dt.cart_number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4)))):(dt.cart_number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4))),location.href="../pages/gouwuche.html"),"立即购买"==target.innerHTML&&(cartList4=localStorage.getItem("cartList4")||[],0<cartList4.length?(cartList4=eval("("+cartList4+")"),bool=!0,cartList4.forEach(t=>{dt.id==t.id&&(bool=!1,t.cart_number++,localStorage.setItem("cartList4",JSON.stringify(cartList4)))}),bool&&(dt.cart_number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4)))):(dt.cart_number=1,cartList4.push(dt),localStorage.setItem("cartList4",JSON.stringify(cartList4))),location.href="../pages/gouwuche.html")};