var box=document.querySelector(".gwc1"),cartList4=localStorage.getItem("cartList4"),name1=getCookie("name"),url;function show1(){var t,i;0<cartList4.length?(t=cartList4.every(t=>1==t.is_select),i=`
        <div class="floot1">
        <p class="p2">已选商品</p>
        <p class="p1">￥<span class="span1">${total()[1]}</span></p> 
        </div>
        <ul>
        <li id="quan">
        <input type="checkbox" name="quan" ${t?"checked":""}>全选</li>
        <li class='li2' id="li2">商品信息</li> 
        <li class="li3" id='li3'>单价</li>
        <li class="li4">数量</li>
        
        <li>操作</li>
    </ul>
    <div class='clear'></div>

<div class='content'>
    
    
        `,cartList4.forEach(t=>{i+=`
            <ul id="ul">
            <li id="xuan"><input type="checkbox" name="xuan" ${1==t.is_select?"checked":""} data-id=${t.id}></li>
            <li id="li2-1">
                <img src="${t.pic}" class="pic-1">
                <p>${t.jj}</p>
            
            </li>
            <li>
               ￥<span class="">${t.jg}</span>
            </li>        
            <li id="jj">
               <button ${t.cart_number<=1?"disabled":""} data-id=${t.id}>-</button>
               <button>${t.cart_number}</button>
               <button ${t.cart_number>=t.goods_number?"disabled":""} data-id=${t.id}>+</button>
            </li>
            
            <li data-id=${t.id}>删除</li>
        </ul>
        
        
            `}),i+=`
        <div class="floot2">
        <ul>
            <li><input type="checkbox" name="quan" ${t?"checked":""}>全选</li>
            <li>清空购物车</li>
            <li>已选择<span>${total()[0]}</span>件商品</li>
            <li>总计 :&nbsp;&nbsp;&nbsp;<span class="span1">${total()[1]}</span></li>
            <li><span class="span2-1">结算</span></li>
        </ul>
     </div>
        `,box.innerHTML=i):box.innerHTML=`
        
        <div class="jumbotron">

        <img src="../img/空购物车.png" class="kgwc">
            <h1>您的购物车空空如也</h1>
            <p>点击下方按钮快去选购吧! ^_^</p>
            <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">赶紧去逛逛吧</a></p>
        </div>
        `}function total(){var i=0,a=0;return cartList4.forEach(t=>{1==t.is_select&&(i+=t.cart_number,a+=parseFloat(t.jg)*parseInt(t.cart_number))}),[i,a]}name1?(cartList4=eval("("+cartList4+")"),show1()):(alert("尚未登录，请登录"),url=location.href,location.href="../pages/01.denglu.html?newUrl="+url),box.onclick=function(t){var i,a=(t=t||window.event).target||t.srcElement;"+"==a.innerHTML&&(i=a.getAttribute("data-id"),cartList4.forEach(t=>{t.id==i&&t.cart_number++}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"-"==a.innerHTML&&(i=a.getAttribute("data-id"),cartList4.forEach(t=>{t.id==i&&t.cart_number--}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"删除"==a.innerHTML&&(i=a.getAttribute("data-id"),cartList4=cartList4.filter(t=>t.id!=i),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"quan"==a.name&&(cartList4.forEach(t=>{a.checked?t.is_select=1:t.is_select=0}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"xuan"==a.name&&(i=a.getAttribute("data-id"),cartList4.forEach(t=>{t.id==i&&(1==t.is_select?t.is_select=0:t.is_select=1)}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"结算"==a.innerHTML&&(alert("您已支付："+total()[1]+"元"),cartList4=cartList4.filter(t=>1!=t.is_select),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"清空购物车"==a.innerHTML&&(cartList4=[],localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1())};