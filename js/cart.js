var box=document.querySelector(".container"),cartList4=localStorage.getItem("cartList4"),name1=getCookie("name"),url;function show1(){var a;0<cartList4.length?(a=`
        <h2>这个是一个购物车页 <a href="./list.html" class="btn btn-success">返回列表页</a></h2>
        <div class="panel panel-default">
            <div class="panel-heading">
                <input type="checkbox" name="quan" ${cartList4.every(t=>1==t.is_select)?"checked":""}>全选
                商品种类：<span>${cartList4.length}</span>
                所选商品数量：<span>${total()[0]}</span>
                所选商品价格：￥<span>${total()[1]}</span>
                <button type="button" class="btn btn-xs btn-info">去结算</button>
                <button type="button" class="btn btn-xs btn-success">清空购物车</button>
            </div>
        <div class="panel-body">
        `,cartList4.forEach(t=>{a+=`
            <div class="media">
                <div class="media-left">
                <input type="checkbox" name="xuan" ${1==t.is_select?"checked":""} data-id=${t.goods_id}>
                <a href="#">
                    <img class="media-object" src="${t.goods_big_logo}" width="100" height="100">
                </a>
                </div>
                <div class="media-body width1">
                <h4 class="media-heading">${t.goods_name}</h4>
                <h3>￥${t.goods_price}</h3>
                <button type="button" class="btn btn-info" data-id=${t.goods_id}>我不要了</button>
                <div class="btn-group right1" role="group" aria-label="...">
                    <button type="button" class="btn btn-default"${t.cart_number<=1?"disabled":""} data-id=${t.goods_id}>-</button>
                    <button type="button" class="btn btn-default">${t.cart_number}</button>
                    <button type="button" class="btn btn-default" ${t.cart_number>=t.goods_number?"disabled":""} data-id=${t.goods_id}>+</button>
                </div>
                </div>
            </div>
            `}),a+=`
            </div>
        </div>
        `,box.innerHTML=a):box.innerHTML=`
        <h2>这个是一个购物车页 <a href="./list.html" class="btn btn-success">返回列表页</a></h2>
        <div class="jumbotron">
            <h1>您的购物车空空如也</h1>
            <p>点击下方按钮快去选购吧! ^_^</p>
            <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">赶紧去逛逛吧</a></p>
        </div>
        `}function total(){var a=0,s=0;return cartList4.forEach(t=>{1==t.is_select&&(a+=t.cart_number,s+=parseFloat(t.goods_price)*parseInt(t.cart_number))}),[a,s]}name1?(cartList4=eval("("+cartList4+")"),show1()):(alert("尚未登录，请登录"),url=location.href,location.href="./login.html?newUrl="+url),box.onclick=function(t){var a,s=(t=t||window.event).target||t.srcElement;"+"==s.innerHTML&&(a=s.getAttribute("data-id"),cartList4.forEach(t=>{t.goods_id==a&&t.cart_number++}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"-"==s.innerHTML&&(a=s.getAttribute("data-id"),cartList4.forEach(t=>{t.goods_id==a&&t.cart_number--}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"我不要了"==s.innerHTML&&(a=s.getAttribute("data-id"),cartList4=cartList4.filter(t=>t.goods_id!=a),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"quan"==s.name&&(cartList4.forEach(t=>{s.checked?t.is_select=1:t.is_select=0}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"xuan"==s.name&&(a=s.getAttribute("data-id"),cartList4.forEach(t=>{t.goods_id==a&&(1==t.is_select?t.is_select=0:t.is_select=1)}),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"去结算"==s.innerHTML&&(alert("你已支付："+total()[1]),cartList4=cartList4.filter(t=>1!=t.is_select),localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1()),"清空购物车"==s.innerHTML&&(cartList4=[],localStorage.setItem("cartList4",JSON.stringify(cartList4)),show1())};