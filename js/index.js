/**
 * Created by wangbiaozy on 2017/12/1.
 */
(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);
$(function () {
    var $gameWrap = $('#gameWrap'),
        $firstPage = $('#firstPage'),
        $myPrize = $('#myPrize'),
        $goFirstPage = $('#goFirstPage'),
        $goMyPrize = $('#goMyPrize'),
        flag = 0,
        count = 0;

    function game() {
        var $this = $(this);
        if($gameWrap.find('.act').length <= 1 && $this.hasClass('act') === false){
            $this.addClass('act');
            count++;
            if($this.children().hasClass('girl')){
                flag++;
            }
            if(flag === 2 && count === 2){
                window.setTimeout(function () {
                    showTc_1();
                },1000);
            }else if(count === 2 && flag !== 2){
                window.setTimeout(function () {
                    showTc_2();
                },1000);
            }
        }
    }
    $gameWrap.on('click','li',game);

    //首页我的奖品按钮
    $goMyPrize.on('click',function () {
        $firstPage.hide();
        $myPrize.show();
    });
    //我的奖品页返回首页按钮
    $goFirstPage.on('click',function () {
        $myPrize.hide();
        $firstPage.show();
    })
    //中奖弹窗确定按钮
    $('.tcBtn').on('click',function () {
        hideTc_1();
    });
    //未中奖及提示弹窗确定按钮
    $('.tcBtn_2').on('click',function () {
        $(this).parent().parent().hide();
        hideMask();
    });
    //显示中奖弹窗
    function showTc_1() {
        $('.tc_1').show();
        showMask();
    }
    //关闭中奖弹窗
    function hideTc_1() {
        $('.tc_1').hide();
        hideMask();
    }
    //显示未中奖弹窗
    function showTc_2() {
        $('.tc_2').show();
        showMask();
    }
    //关闭未中奖弹窗
    function hideTc_2() {
        $('.tc_2').hide();
        hideMask();
    }
    //显示提示弹窗
    function showTc_3() {
        $('.tc_3').show();
        showMask();
    }
    //关闭提示弹窗
    function hideTc_3() {
        $('.tc_3').hide();
        hideMask();
    }
    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }
});
