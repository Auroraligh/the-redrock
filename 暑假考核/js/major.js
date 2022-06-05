
window.onload=function(){
//rem适配
(function(){
    var styleNode=document.createElement("style");
    var w=document.documentElement.clientWidth/16;
    styleNode.innerHTML="html{font-size"+w+"px!important}";
    document.head.appendChild(styleNode);
})();
// function sendAjax(url) {

//     return new Promise((resolve, reject) => {
//         const x = new XMLHttpRequest();
//         x.open('GET', url);
//         x.send();
//         x.onreadystatechange = function () {
//             if (x.readyState === 4) {
//                 if (x.status >= 200 && x.status < 300) {
//                     resolve(x.response);
//                 }
//                 else {
//                     reject(x.status);
//                 }
//             }
//         }
//     })
// }
// async function main() {

//     let result = await sendAjax("http://124.221.249.219:8000/api/recommendations");
//     console.log(result)
// }
// //main();
const pics=document.querySelectorAll('div .pic')
const texts=document.querySelectorAll('div .text')
const bacs=document.querySelectorAll('div .bac')
const dess=document.querySelectorAll('div .des')
const shift=document.getElementById("shift")
const search=document.getElementById("search2")
const lis=document.querySelectorAll('#hot li')
const hot=document.getElementById("hot")
const songList=document.getElementById("songList")
const turn=document.getElementById("turn")
const lis2=document.querySelectorAll('#turn li')
shift.onclick=function(){
    window.location.href='racking.html';
}
const instance = axios.create({
    baseURL: 'http://124.221.249.219:8000/api',
    timeout: 1000,
    
  });

instance({
    url:'/recommendations'
}).then(response=>{
    for(let i=0;i<6;i++){
        pics[i].innerHTML="<img src='"+response.data.offical[i].cover+"'>"
    }
})
instance({
    url:'/recommendations'
}).then(response=>{
    for(let i=0;i<6;i++){
        texts[i].innerHTML=response.data.offical[i].title;
    }
})
instance({
    url:'/recommendations'
}).then(response=>{
    for(let i=6;i<12;i++){
        pics[i].innerHTML="<img src='"+response.data.tatsujin[i-6].cover+"'>"
    }
})
instance({
    url:'/recommendations'
}).then(response=>{
    for(let i=6;i<12;i++){
        texts[i].innerHTML=response.data.tatsujin[i-6].title;
    }

})
instance({
    url:'/recommendations'
}).then(response=>{
    for(let i=0;i<9;i++){
        bacs[i].innerHTML="<img src='"+response.data.column[i].background+"'>"
    }
console.log(response.data.column)
})
instance({
    url:'/recommendations'
}).then(response=>{
    for(let i=0;i<9;i++){
        dess[i].innerHTML=response.data.column[i].description;
    }
})
//search
search.onclick=function(){
    search.style.paddingLeft=0
    displayHot();
}
//键盘相应事件
document.onkeydown = keyDown;//回车
function keyDown(e) {
	var e =e||event;
	var key=e.keyCode||e.which||e.charCode;
 	if(key==0xD){ //判断是否按下回车键
	        doSearch();
            hot.style.display="none";
            songList.style.display="none";
            turn.style.display="block";

	}
}

function displayHot(){
    instance({
        url: '/hot'
    }).then(response => {
        for(let i=0;i<10;i++){
            lis[i].innerHTML=response.data[i]
        }
        songList.style.display="none";
        hot.style.display="block";

    })
}

function doSearch(){
    instance({
        url: '/search?keyword='+search.value,
    }).then(response => {
        for(let i=0;i<10;i++){
            for(let j=0;j<response.data[i].artist.length;j++){
                var txt = document.createTextNode(response.data[i].artist[j]+" ");
                    lis2[i].appendChild(txt);
            }
        }
        
    })
}
instance({
    url: '/search?keyword=gi',
}).then(response => {
    // for(let i=0;i<10;i++){
    //     for(let j=0;j<response.)
    // }
    console.log(response.data)
})
}
