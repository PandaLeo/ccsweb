/**
 * Created by Administrator on 2016/9/3 0003.
 */
function banner(){
    var oList = document.getElementById('list');
    var oHjs_imgCont = document.getElementById('hjs_imgCont');
    var oScorllBar = document.getElementById('scorllBar').getElementsByTagName('a');
    var oNext_bnt = document.getElementById('next_bnt');
    var oPrev_bnt = document.getElementById('prev_bnt');
    var index = 1;
    var animated = false;
    var interval = 3000;
    var timer;
  
    oNext_bnt.onclick = function () {
        if (!animated){
            animate(-100);
            if (index == 6) {
                index = 1;
            }
            else {
                index += 1;
            }
            showButton();
        }
    };
    oPrev_bnt.onclick = function () {
        if (!animated){
            animate(100);
            if (index == 1) {
                index = 6;
            }
            else {
                index -= 1;
            }
            showButton();
        }
    };
    function animate(offset) {
        animated = true;
        var left = parseInt(oList.style.left) + offset;
        var time = 300;
        var interval = 10;
        var speed = offset/(time/interval);

        function go() {
            if ((speed < 0 && parseInt(oList.style.left) > left) || (speed > 0 && parseInt(oList.style.left) < left)) {
                oList.style.left = parseInt(oList.style.left) + speed + '%';
                setTimeout(go,interval);
            }
            else {
                animated = false;
                oList.style.left = left + '%';
                if (left < -600) {
                    oList.style.left = -100 + '%';
                }
                if (left > -100) {
                    oList.style.left = -600 + '%';
                }
            }
        }
        go();
    }
    function showButton() {
        for (var i = 0; i < oScorllBar.length; i++)
            if (oScorllBar[i].className == 'active') {
                oScorllBar[i].className = '';
                break;
            }
        oScorllBar[index - 1].className = 'active';
    }
    function play() {
        timer = setInterval(function () {
            oNext_bnt.onclick();
        },interval);
    }
    function stop() {
        clearInterval(timer);
    }

    for (var i = 0; i < oScorllBar.length; i++) {
        oScorllBar[i].index=i+1;
        oScorllBar[i].onclick = function () {
            var myIndex = this.index;
            var offset = -100 * (myIndex-index);
            index = myIndex;
            showButton();
            if (!animated){
                animate(offset);
            }
        }
    }
    oHjs_imgCont.onmouseover = stop;
    oHjs_imgCont.onmouseout = play;
    play();
}
