let whois = document.getElementById('whois');
let str = whois.innerHTML;
str = str.replace( /w/g, "<div class='w'></div>");
str = str.replace( /r/g, "<div class='r'></div>");
str = str.replace( /b/g, "<div class='b'></div>");
str = str.replace( /o/g, "<div class='o'></div>");
str = str.replace( /y/g, "<div class='y'></div>");
str = str.replace( /j/g, "<br>");
whois.innerHTML = str;

let bowser = document.getElementById('bowser');
let txt = bowser.innerHTML;
txt = txt.replace( /w/g, "<div class='w'></div>");
txt = txt.replace( /r/g, "<div class='r'></div>");
txt = txt.replace( /b/g, "<div class='b'></div>");
txt = txt.replace( /o/g, "<div class='o'></div>");
txt = txt.replace( /y/g, "<div class='y'></div>");
txt = txt.replace( /j/g, "<br>");
bowser.innerHTML = txt;