<?php
include "./datas.php";
$u=$_POST['zh'];
$p=$_POST['mm1'];
$m=$_POST['yx'];
//编写SQL语句
$sql="insert into shop1(name,pass,mail)values('$u','$p','$m')";
//执行SQL，并返回结果集
$result=mysqli_query($link,$sql);
//判断当前数据是否添加成功
if($result){
    header("location:../pages/01.denglu.html");
    echo "注册成功";
}else{
    echo"<script>alert('注册失败')；location.href='../pages/zhuce.html'</script>";
}
//关闭数据库连接
mysqli_close($link);

?>
