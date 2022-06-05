window.onload = function () {
    //rem适配
    (function () {
        var styleNode = document.createElement("style");
        var w = document.documentElement.clientWidth / 16;
        styleNode.innerHTML = "html{font-size" + w + "px!important}";
        document.head.appendChild(styleNode);
    })();

    const shift = document.getElementById("shift")
    const titles = document.querySelectorAll("#title")
    const lis = document.querySelectorAll('li')
    const rights=document.querySelectorAll('.right')
    shift.onclick = function () {
        window.location.href = 'home.html';
    }
    const instance = axios.create({
        baseURL: 'http://124.221.249.219:8000/api',
        timeout: 1000,

    });

    // instance({
    //     url: '/ranking'
    // }).then(response => {
    //     title.innerHTML = response.data[0].title
    // })
    instance({
        url: '/ranking'
    }).then(response => {
        console.log(response.data)
    })
    instance({
        url: '/ranking'
    }).then(response => {
        for (let i = 0,cnt=0; i < 10; i++) {
            //title
            titles[i].innerHTML = response.data[i].title
            rights[i].innerHTML="<img src='"+response.data[i].cover+"'>"
            for (let j = 0; j < 3; j++,cnt++) {
                lis[cnt].innerHTML = response.data[i].top3[j].title + "-"
                for (let k = 0; k < response.data[i].top3[j].artist.length; k++) {
                    var txt = document.createTextNode(response.data[i].top3[j].artist[k]+" ");
                    lis[cnt].appendChild(txt);

                    //lis[j].innerHTML = response.data[i].top3[j].title + "-" + response.data[i].top3[j].artist[]
                }
            }
        }
        
    })
    

}