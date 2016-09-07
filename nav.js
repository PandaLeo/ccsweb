/**
 * Created by Administrator on 2016/9/4 0004.
 */
function nav() {
    var oMenu = document.getElementsByClassName('channel');
    var oUla = document.getElementsByClassName('ula');
    var oLia = document.getElementsByClassName('lia');
    var len= oMenu.length;
    var timer = null;

    function menu() {
        for (var i= 0; i < len; oMenu[i].id = i, oLia[i].id=i,i++) {
            oMenu[i].onmouseover = function () {
                if (!(this.className == 'channel hovered')) {
                    this.className = 'channel hover';
                }
                for (var i = 0; i < len; i++){
                        oUla[i].style.display = 'none';
                    }
            };


            oMenu[i].onmouseout = function () {
                if (!(this.className == 'channel hovered')) {
                    this.className = 'channel hover1';
                }
            };

            oLia[i].onmouseover = function () {
                var that = this;
                if(timer){
                    clearTimeout(timer);
                }
                timer=setTimeout(function () {
                    oUla[that.id].style.display = 'block';
                },500);
            };

            oLia[i].onmouseout = function () {
                var that = this;
                if(timer) {
                    clearTimeout(timer);
                    timer=setTimeout(function () {
                        oUla[that.id].style.display = 'none';
                    },500);
                }
            };

            oMenu[i].onclick = function () {
                if (!(this.className == 'channel hovered')) {
                    for (var j = 0; j < len; j++) {
                        oMenu[j].className = 'channel hover1';
                    }
                }
                this.className = 'channel hovered';
            };
        }
    }
    menu();
}

