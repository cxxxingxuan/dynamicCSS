(function(){
      let duration = 20
      function writeCode(prefix, code, fn){
            let container = document.querySelector('#code')
            let styleTag = document.querySelector('#styleTag')
            let n = 0;
            setTimeout(function fn(){
                  n+=1
                  container.innerHTML = code.substring(0,n)
                  styleTag.innerHTML = code.substring(0,n)
                  container.scrollTop = (container.scrollHeight)
                  if(n<code.length){
                        setTimeout(fn,duration)
                  }
            },duration)
      }
      let code = `/*
      *你好，感谢你点开我的项目
      *这个小项目是动态的画出一直可爱的海绵宝宝
      *下面我们开始吧
      *首先，我们准备海绵宝宝的皮
      */
      .preview-wrapper{
    background: rgb(241, 219, 95);
}
.SpongeBob{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -160px;
    margin-top: -105px;
}
/*接着画出左右睫毛*/
.left-eyelash{
    width:5px;
    height:20px;
    background:black;
    position:absolute;
    left:100px;
}
.left-eyelash:before{
    content:'';
    display:block;
    width:4px;
    height:20px;
    background:black;
    position:absolute;
    left:-30px;
    top:8px;
    transform:rotate(-25deg)
}
.left-eyelash:after{
    content:'';
    display:block;
    width:4px;
    height:20px;
    background:black;
    position:absolute;
    left:30px;
    top:7px;
    transform:rotate(25deg)
}
.right-eyelash{
    width:4px;
    height:20px;
    background:black;
    position:absolute;
    left:215px;
}
.right-eyelash:before{
    content:'';
    display:block;
    width:4px;
    height:20px;
    background:black;
    position:absolute;
    left:-30px;
    top:8px;
    transform:rotate(-25deg)
}
.right-eyelash:after{
    content:'';
    display:block;
    width:4px;
    height:20px;
    background:black;
    position:absolute;
    left:30px;
    top:7px;
    transform:rotate(25deg)
}
/*睫毛画完然后就是左右眼*/
.left-eye{
    width:100px;
    height:100px;
    background:#fff;
    border-radius:50%;
    border:3px solid;
    position:absolute;
    left:50px;
    top:20px;
    z-index:1;
}
.left-eye:before{
    content:'';
    display:block;
    width:50px;
    height:50px;
    background:#4af;
    z-index:1;
    border-radius:50%;
    border:2px solid;
    position:absolute;
    left:40px;
    top:25px;
}
.left-eye:after{
    content:'';
    display:block;
    width:30px;
    height:30px;
    background:black;
    border-radius:50%;
    position:absolute;
    left:57px;
    top:38px;
    z-index:1;
}
.right-eye{
    width:100px;
    height:100px;
    background:#fff;
    border-radius:50%;
    border:3px solid;
    position:absolute;
    left:165px;
    top:20px;
    z-index:1;
}
.right-eye:before{
    content:'';
    display:block;
    width:50px;
    height:50px;
    background:#4af;
    z-index:1;
    border-radius:50%;
    border:2px solid;
    position:absolute;
    left:5px;
    top:25px;
}
.right-eye:after{
    content:'';
    display:block;
    width:30px;
    height:30px;
    background:black;
    border-radius:50%;
    position:absolute;
    left:13px;
    top:38px;
    z-index:1;

}
/*眼睛之后就是鼻子*/
.nose{
    width:50px;
    height:70px;
    border-radius: 50%;
    background:#000;
    transform: rotate(10deg);
    position:absolute;
    top:80px;
    left:135px;
    z-index:1;
}
.nose > .nose-content{
    width:44px;
    height:65px;
    background:#f1db5f;
    border-radius: 50%;
    position:relative;
    top:6px;
    left:3px;
    z-index:;
}
/*然后加上嘴巴*/
.mouth{
    width:280px;
    height:80px;
    background:#000;
    border-radius:50%;
    position:absolute;
    top:100px;
    left:24px;
    z-index：-1；
}
.mouth > .mouth-content{
    width:300px;
    height:80px;
    background:#f1db5f;
    border-radius:50%;
    position:absolute;
    top:-3px;
    left:-10px
}
/*最后补上牙齿*/
.left-tooth{
    width:25px;
    height:27px;
    background:#fff;
    border:2px solid;
    border-radius:5px;
    position:absolute;
    left:125px;
    top:178px;
    transform:rotate(2deg)
}
.right-tooth{
    width:25px;
    height:27px;
    background:#fff;
    border:2px solid;
    border-radius:5px;
    position:absolute;
    left:165px;
    top:178px;
}
/*好了，这样一只可爱的海绵宝宝就画完了*/`
      $('.speed-control > div').on("click",function (e) {
            let speed = $(e.currentTarget).attr('data-speed')
            $(e.currentTarget).addClass('active')
                              .siblings().removeClass('active')
            switch (speed){
                  case 'normal':
                        duration = 20
                        break
                  case 'fast':
                        duration = 10
                        break
            }
      })
      writeCode('',code)
})()