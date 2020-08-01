let ids = ['email' , 'in' , 'ta' , 'insta'] 
let idl = ids.length

function what(idw, wt){
    let id = document.getElementById(idw)
    let og = id.getAttribute('src')
    let wt2

    if(wt == 'w'){
        wt2 = 'b'
    } else {
        wt2 = 'w'
    }

    id.setAttribute('src' , og.replace(wt , wt2))
    return
}

function loop(wt){
    for(let i = 0; i < idl; ++i){
        what(ids[i], wt)
    }
}

document.getElementById('dw_btn').addEventListener('click' , function () {

if(themed){
    loop('b')
} else {
    loop('w')
}

});


(function(){
    if(themed){
        loop('b')
    } else {
        loop('w')
    }
})(); 