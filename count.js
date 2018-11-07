window.onload = function(){
    var computer= "0";
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
function doCount(){
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

function dector(){
    var computer="0";
    if(computer=="0"){
        alert("pls open the computer");
    }
};
function open(){
    var computer = "1";
};
function turnOff(){
    var computer = "0";
};
function show(t){
    num.innerHTML=num.innerText+t;
}