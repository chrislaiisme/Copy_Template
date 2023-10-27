console.clear();

function copyText(dom) {
  dom.select();
  document.execCommand('copy');
}

btn1 = document.querySelector('#btn1');
code1 = document.querySelector('#code1');
btn1.addEventListener('click', function() { copyText(code1)});

btn2 = document.querySelector('#btn2');
code2 = document.querySelector('#code2');
btn2.addEventListener('click', function() { copyText(code2)});

btn3 = document.querySelector('#btn3');
code3 = document.querySelector('#code3');
btn3.addEventListener('click', function() { copyText(code3)});

btn4 = document.querySelector('#btn4');
code4 = document.querySelector('#code4');
btn4.addEventListener('click', function() { copyText(code4)});

btn5 = document.querySelector('#btn5');
code5 = document.querySelector('#code5');
btn5.addEventListener('click', function() { copyText(code5)});

btn6 = document.querySelector('#btn6');
code6 = document.querySelector('#code6');
btn6.addEventListener('click', function() { copyText(code6)});
