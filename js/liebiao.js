var row=document.querySelector(".bx1"),pagination=document.querySelector(".pagination");!async function(){var arr=await promiseAjax({url:"../php/list.php"}),arr=eval("("+arr+")");console.log(arr);var o1={pageInfo:{pagenum:1,pagesize:10,totalsize:arr.length,totalpage:Math.ceil(arr.length/10)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,o1,a=>{var a=arr.slice(10*(a-1),10*a),p="";a.forEach(a=>{p+=`
           <div class="sp">
           <a href="../pages/xiangqing.html?id=${a.id}"><img src="${a.pic}"></a>
           <p class="jg">￥${a.jg}</p>
           <p class="zs">${a.jj}</p>
           <p class="xmgf">${a.dp}</p>
           <p class="ycj">月成交 <span class="ycj-1">${a.ycj}</span>&nbsp; &nbsp; 评价 &nbsp;<span class="pj-1">${a.pj}</span></p>
       </div>
            `}),row.innerHTML=p})}();