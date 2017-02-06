//嵌套回调过多，代码不好维护，不直观的问题
$.ajax({
    url:'../scripts/promise_open.json',
    success:function(data){
        console.log('callback:'+data.msg)
        if(data.code==1){
            $.ajax({
                url:'../scripts/promise_drop.json',
                success:function(data){
                    console.log('callback:'+data.msg)
                    if(data.code==1){
                        $.ajax({
                            url:'../scripts/promise_close.json',
                            success:function(data){
                                console.log('callback:'+data.msg)
                            }
                        });
                    }
                }
            });
        }
    },
    error:function(){
    }
});
function promise_open(){
    return new Promise(function(resolve,reject){
        $.ajax({
            url:'../scripts/promise_open.json',
            success:function(data){
                if(data.code==1){
                    resolve(data.msg)//在异步操作成功时调用
                }else{
                    reject(data.msg);//在异步操作失败时调用
                }
            }
        });
    })
}
function promise_drop(){
    return new Promise(function(resolve,reject){
        $.ajax({
            url:'../scripts/promise_drop.json',
            success:function(data){
                if(data.code==1){
                    resolve(data.msg)//在异步操作成功时调用
                }else{
                    reject(data.msg);//在异步操作失败时调用
                }
            }
        });
    })
}
function promise_close(){
    return new Promise(function(resolve,reject){
        $.ajax({
            url:'../scripts/promise_close.json',
            success:function(data){
                if(data.code==1){
                    resolve(data.msg)//在异步操作成功时调用
                }else{
                    reject(data.msg);//在异步操作失败时调用
                }
            }
        });
    })
}
$("#promise").click(function(){
    promise_open()
    .then(promise_drop().then(function(data){console.log(data)}))
    .then(promise_close().then(function(data){console.log(data)}))
    //都成功的情况下,通常这些接口之间没有关联（例如不需要前一个接口的数据作为后一个接口的参数），这个时候 Promise.all 方法就可以派上用场了
    /*Promise.all([promise_open,promise_drop]).then(function([data1,data2]){
        console.log(data1);
        console.log(data2);
    })*/
});