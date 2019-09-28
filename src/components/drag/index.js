import Vue from 'vue';
const drag = Vue.directive('drag', {
    bind: function (el) { },
    inserted: function (el) {
        el.onmousedown = function (e) {
            var disx = e.pageX - el.offsetLeft;
            var disy = e.pageY - el.offsetTop;
            document.onmousemove = function (e) {
                el.style.cursor = "move";
                el.style.left = e.pageX - disx + 'px';
                el.style.top = e.pageY - disy + 'px';
                if (parseInt(el.style.left) < 1) {
                    el.style.left = '1px'
                }
                if (parseInt(el.style.top) < 1) {
                    el.style.top = '1px'
                }
                if (parseInt(document.documentElement.clientWidth) - (parseInt(el.offsetWidth) + parseInt(el.style.left)) < 0) {
                    el.style.left = document.documentElement.clientWidth - el.offsetWidth + 'px';
                }
                if (parseInt(document.documentElement.clientHeight) - (parseInt(el.offsetHeight) + parseInt(el.style.top)) < 0) {
                    el.style.top = document.documentElement.clientHeight - el.offsetHeight + 'px';
                }
            }
            document.onmouseup = function () {
                document.onmousemove = document.onmouseup = null;
            }
        }
    },
    //当VNode更新的时候会执行updated，可以触发多次
    updated: function (el) { }
})
export default drag;