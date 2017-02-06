//Ƕ�׻ص����࣬���벻��ά������ֱ�۵�����
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
                    resolve(data.msg)//���첽�����ɹ�ʱ����
                }else{
                    reject(data.msg);//���첽����ʧ��ʱ����
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
                    resolve(data.msg)//���첽�����ɹ�ʱ����
                }else{
                    reject(data.msg);//���첽����ʧ��ʱ����
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
                    resolve(data.msg)//���첽�����ɹ�ʱ����
                }else{
                    reject(data.msg);//���첽����ʧ��ʱ����
                }
            }
        });
    })
}
$("#promise").click(function(){
    promise_open()
    .then(promise_drop().then(function(data){console.log(data)}))
    .then(promise_close().then(function(data){console.log(data)}))
    //���ɹ��������,ͨ����Щ�ӿ�֮��û�й��������粻��Ҫǰһ���ӿڵ�������Ϊ��һ���ӿڵĲ����������ʱ�� Promise.all �����Ϳ��������ó���
    /*Promise.all([promise_open,promise_drop]).then(function([data1,data2]){
        console.log(data1);
        console.log(data2);
    })*/
});