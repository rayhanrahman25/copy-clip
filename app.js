"use strict";
const btn = document.querySelector('#copy');

btn.onclick = function(){
    input.select();
    document.execCommand('copy');
}


