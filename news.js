/**
 * Created by Administrator on 2016/9/5 0005.
 */
function news() {
    var oSwap = document.getElementById('swap');
    var interval = 3000;
    var animated = false;

    function animate(offset) {
        var time = 300;
        var interval = 10;
        var speed = offset/(time/interval);
        var top = parseInt(oSwap.style.top) + offset;
        animated = true;

        function go(){
            if (speed < 0 && top < parseInt(oSwap.style.top) || speed > 0 && top > parseInt(oSwap.style.top)){
                oSwap.style.top = parseInt(oSwap.style.top) + speed +'px';
                setTimeout(go,interval)
            }
            else {
                animated = false;
                oSwap.style.top = top + 'px';
                if (top < -255){
                    oSwap.style.top = 85 + 'px';
                }
                if (top >0){
                    oSwap.style.top = -255 + 'px';
                }
            }
        }
        go();
    }

    function play() {
        setInterval(function () {
                if (!animated) {
                    animate(85);
                }
            }
            , interval);
    }

    play();
}