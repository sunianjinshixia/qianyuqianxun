function play() {
//将轮播图换成向右切换图片
timer = setInterval(function () {
next.onclick();
}, 2000)
} 

window.onload = function () {
var container = document.getElementById('container');
var list = document.getElementById('list');
var buttons = document.getElementById('buttons').getElementsByTagName('span');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var index = 1;
var timer;
function animate(offset) {
//获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
//且style.left获取的是字符串，需要用parseInt()取整转化为数字。
var newLeft = parseInt(list.style.left) + offset;
list.style.left = newLeft + 'px';
//无限滚动判断
if (newLeft > -1920) {
list.style.left = -5760 + 'px';
}
if (newLeft < -5760) {
list.style.left = -1920 + 'px';
}
}
function play() {
//重复执行的定时器
timer = setInterval(function () {
next.onclick();
}, 2000)
}
function stop() {
clearInterval(timer);
}
function buttonsShow() {
//将之前的小圆点的样式清除
for (var i = 0; i < buttons.length; i++) {
if (buttons[i].className == "on") {
buttons[i].className = "";
}
}
//数组从0开始，故index需要-1
//循环遍历那些圆点,循环到的样式等于on
buttons[index - 1].className = "on";
}
prev.onclick = function () {
index -= 1;
if (index < 1) {
index = 3
}
buttonsShow();
animate(1920);
};
next.onclick = function () {
//由于上边定时器的作用，index会一直递增下去，我们只有3个小圆点，所以需要做出判断
index += 1;
if (index > 3) {
index = 1
}
animate(-1920);
buttonsShow();
};
for (var i = 0; i < buttons.length; i++) {
buttons[i].onclick = function () {
//优化，当前图片点击当前的小圆点不执行以下代码。
if (this.className == "on") {
return;
}
/* 这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法 */
/* 由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
var clickIndex = parseInt(this.getAttribute('index'));
var offset = 1920 * (clickIndex - index); //这个index是当前图片停留时的index
animate(offset);
index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
buttonsShow();
}
}
container.onmouseover = stop;
container.onmouseout = play;
play();
}


//这是今日推荐点击效果 我只放第二行
var btn = document.getElementById("btn");
var hotLi = document.getElementsByClassName('hot_Part');
    btn.onclick = function(){
        if(hotLi[0].style.display =='block'){
           hotLi[0].style.display="none";
           hotLi[1].style.display="none";
           hotLi[2].style.display="none";
        }else{
           hotLi[0].style.display="block";
           hotLi[1].style.display="block";
           hotLi[2].style.display="block";
        }
   };



//    var add = document.getElementById("content_nav");
//    var aLi =add.getElementsByTagName("li")
//    for(var i = 0 ; i <aLi.length; i++){
//        aLi[i].onclick =function(){
//            for (i = 0; i < aLi.length; i++) aLi[i].className = aLi[i].className.replace(/\s?cnli/,"");this.className += "cnli";
//        };
//        
//    }
//
//
//var aLi = document.getElementsByClassName("li_s")
//    for(var i = 0 ; i <aLi.length; i++){
//        aLi[i].onclick =function(){
//            for (i = 0; i < aLi.length; i++) aLi[i].className = aLi[i].className.replace(/\s?cnli/,"");this.className += " "+ "cnli";
//        };
//        
//    }原生就是坑,没功力深厚者不可挑战!
//这是书签切换效果
//
//var tab =  $(".content_nav li");
//$(tab).on("click",function(){
//    $(this).addClass("cnli").siblings().removeClass("cnli");
//});
 var tab =  $(".content_nav li");
 $(tab).hover(function(){
            $(this).addClass("cnli").siblings().removeClass("cnli");
        });
 
 
    function qiehuan(num){
    for( id = 1; id <= 5; id++){
        var conUl= "content_r" + id;
        if(id==num){
            document.getElementById(conUl).style.display="block";
        }else{
            document.getElementById(conUl).style.display="none";
        }
        if(num == 1){
            $(tab).className="li_a cnli"
        }
        if(num == 2){
            $(tab).className="li_a cnli"
        }
        if(num == 3){
            $(tab).className="li_a cnli"
        }
        if(num == 4){
            $(tab).className="li_a cnli"
        }
        if(num == 5){
            $(tab).className="li_a cnli"
        }
    }
    }
function tsa(all){
    for(var i = 0; i <=all; i++){
        $("tsa_"+i).mouseleave(qiehuan())
    }
}


$(".content_r li").hover(
    function(){
    $(this).addClass("bor_3");
    },function(){
    $(this).removeClass("bor_3");
});
