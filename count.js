window.onload = function(){
    // var computer= "0";
    var num = document.getElementById("num");
    var cR = document.getElementById("countResult");
    var Abutton = new Array();
    Abutton = document.getElementsByTagName('button');
    for(var a=0;a<Abutton.length;a++){
        let j=a;
        //0为开机 1为关机 2为取余 3为清除 7为加 11为减 15为乘 18为等于 19为除
        /*思路： 每当点击运算符按钮时就要执行 先把id为num的标签的内容计算后，
        再通过innertext方法赋值并覆盖一次num标签的内容
        */
        if(a=="0"){
            
        }else if(a=="1"){
            
        }else if(a=="2"){
            Abutton[a].onclick = function(){
                doCount();
                num.innerHTML=num.innerText+Abutton[j].value;
            };
        }else if(a=="3"){
            Abutton[a].onclick =function(){
                firstDo();
                num.innerHTML="0";
                secondDo();
            };
        }else if(a=="7"){
            Abutton[a].onclick = function(){
                doCount();
                num.innerHTML=num.innerText+Abutton[j].value;
            };
        }else if(a=="11"){
            Abutton[a].onclick = function(){
                doCount();
                num.innerHTML=num.innerText+Abutton[j].value;
            };
        }else if(a=="15"){
            Abutton[a].onclick = function(){
                doCount();
                num.innerHTML=num.innerText+Abutton[j].value;
            };
        }else if(a=="18"){
            Abutton[a].onclick = function (){
                doCount();
                var getResult = num.innerText;
                firstDo();
                cR.innerHTML = getResult;
            };
        }else if(a=="19"){
            Abutton[a].onclick = function(){
                doCount();
                num.innerHTML=num.innerText+Abutton[j].value;
            };
        }else{
            Abutton[a].onclick =function(){
                if(num.innerText=="0"){
                    firstDo();
                }
                num.innerHTML=num.innerText+Abutton[j].value;
                secondDo();
            };
        }
    }
};
function firstDo(){
    num.innerHTML="";
}
function secondDo(){
    var cR = document.getElementById("countResult");
    cR.innerHTML="";
}
//    \uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。
// U+002B + 加号 
// U+002D - 连字号/减号 
// U+002A * 星号 
// U+002F / 由右上至左下的斜线 
// U+0025 % 百分比符号 
/**
 * substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
 const name =[{1:"张三"},{2:"李四哥"},{3:"王二哥哥"}];
返回， 三 、四哥 、哥哥，这样的效果就ok
第一种：
"王二弟弟".match(/.+(.{1,2})$/);
第二种：
'啥名字呵呵'.substr(1).substr(-2);
 */
// 因为学习正则表达式原因，此处计划运用 \u 和直接反斜杠加符号
//设置一个判断符号是否为结尾的正则表达式函数 当匹配到结尾为符号时，如果点击
//doCount函数，就替换符号
// (x|y)	查找任何以 | 分隔的选项。
// var patt = /e/;
// patt.test("The best things in life are free!");
function ifExist(){
    var sourceProblem = num.innerText;
    console.log("sourceproblem的值为："+sourceProblem);
    var patt = /[\+\-\u002A\u002f\%]$/;
    if(patt.test(sourceProblem)){
        sourceProblem = sourceProblem.replace(patt,"");
        num.innerHTML=sourceProblem;
    }
}
function doCount(){
    ifExist();
    if(num.innerText==""){
        var cR = document.getElementById("countResult");
        var cRsource = cR.innerText;
        num.innerHTML= cRsource;
    }
    var sourceProblem = num.innerText;
    var newValue=eval(sourceProblem);
    num.innerHTML=newValue;
    secondDo();
}
function show(t){
    num.innerHTML=num.innerText+t;
}

// function dector(){
//     var computer="0";
//     if(computer=="0"){
//         alert("pls open the computer");
//     }
// };
// function open(){
//     var computer = "1";
// };
// function turnOff(){
//     var computer = "0";
// };