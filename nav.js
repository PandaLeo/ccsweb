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
        for (var i= 0; i < len; oMenu[i].id = i,oLia[i].id=i, i++) {
            oMenu[i].onmouseover = function () {
                var that = this;
                if(timer){
                    clearTimeout(timer);
                }
                if (!(that.className == 'channel hovered')) {
                    that.className = 'channel hover';
                }
                timer=setTimeout(function () {
                    oUla[that.id].style.display = 'block';
                },500);
            };

            oMenu[i].onmouseout = function () {
                var that = this;
                if (!(that.className == 'channel hovered')) {
                    that.className = 'channel hover1';
                }
            };

            oLia[i].onmouseout = function () {
                var that = this;
                if(timer) {
                    clearTimeout(timer);
                    oUla[that.id].style.display = 'none';
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

