var clear = false;
var num = 0
function myFunction(elem , input) {
    if(event.key === 'Enter'){
        if(input != ''){
            if(!clear){
                var dv = document.getElementById("div1");
                var l = document.createElement("UL");
                dv.appendChild(l);
                l.setAttribute("id" , "list");
                var h1 = document.createElement("H3");
                l.appendChild(h1);
                h1.innerHTML = "Tasks:";
                var btn = document.createElement("BUTTON");
                btn.innerHTML = "Clear";
                btn.setAttribute("onclick" , "cls()");
                btn.style.cursor = 'pointer';
                clear = true;
                dv.appendChild(btn);
                btn.setAttribute("class" , "touch");
                btn.setAttribute("id" , "btn");
                var st = document.getElementsByClassName("touch");
                if(mkbhd){
                    vw = document.getElementById('input').offsetWidth;
                    dv.style.width = vw + 'px';
                    l.style.width = "90%";
                    h1.style.fontSize = '4.8vw'
                } else {
                    for(var i = 0; i < st.length; ++i){
                        st[i].style.fontSize = "3vw"
                    }
                }

            }
            var node = document.createElement("LI");
            ++num;
            node.setAttribute("id", "task" + num);
            node.setAttribute("class", "tasken");
            if(mkbhd){
                node.style.fontSize = '4.8vw';
            }
            var textnode = document.createTextNode(input);
            node.appendChild(textnode);
            document.getElementById("list").appendChild(node);
            document.getElementById("input").value = '';
            node.setAttribute("onclick" , "done(this.id)");
        }
    }
}

function done(id){
    document.getElementById(id).style.backgroundColor = 'green';
}

function cls(){
    let element = document.getElementById("div1");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    clear = false;
    document.getElementById('input').style.fontSize = '4.8vw';
}
