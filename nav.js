/**
 * Created by Administrator on 2016/9/4 0004.
 */
window.onload = function () {
    var oMenu = document.getElementById('menu').getElementsByTagName('a');

    function menu() {
        for (i = 1; i < (oMenu.length); i++){
            oMenu[i].onmouseover = function () {
                this.className = 'hover';
            };
            oMenu[i].onmouseout = function () {
                this.className = 'hover1';
            };
        }
    }
    menu();
};

