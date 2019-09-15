//es6的知识点

//Promise解决回调地狱的例子
function getData(path){
    return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest();
        xhr.open('get','http://localhost:3000/' + path);
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if(xhr.readyState != 4) return;
            if(xhr.readyState == 4 && xhr.status == 200) {
              // 获取后台数据
              var ret = xhr.responseText;
              // 成功的情况
              resolve(ret);
            } else {
              // 失败的情况
              reject('服务器错误');
            }
          }
    })
}

getData(path1)
.then(res=>{
    console.log(res);
    return getData(path2)
})
.then(res=>{
    console.log(res);
    return getData(path3)
})
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err)
})
.finally(res=>{
    console.log('完成')
})


//async 和 await
//伪代码 
async function test() {
    // 以下代码没有依赖性的话，完全可以使用 Promise.all 的方式
    // 如果有依赖性的话，其实就是解决回调地狱的例子了
    await fetch(url)
    await fetch(url1)
    await fetch(url2)
}

//例子
let a = 0
let b = async () => {
  a = a + await 10
  console.log('2', a) // -> '2' 10 ，因为b()比a++先执行，所以这里a还是0
}
b()
a++
console.log('1', a)  //-> '1' 1。这里是同步代码，先执行


//requestAnimationFrame实现setInterval

function setInterval(callback, interval) {
    let timer
    const now = Date.now
    let startTime = now()
    let endTime = startTime
    const loop = () => {
      timer = window.requestAnimationFrame(loop)
      endTime = now()
      if (endTime - startTime >= interval) {
        startTime = endTime = now()
        callback(timer)
      }
    }
    timer = window.requestAnimationFrame(loop)
    return timer
  }
  
  let a = 0;
  setInterval(timer => {
    console.log(1)
    a++
    if (a === 3) cancelAnimationFrame(timer)
  }, 1000)