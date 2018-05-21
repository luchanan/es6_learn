var gookChildaction = {
  watchHand(flag) {
    console.log('孩子开始洗手');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (flag) {
          console.log('1、洗完手了')
          resolve('洗完手了');//返回resolev给eat()中的message
        } else {
          reject('没洗');
        }
      }, 2000)
    })
  },
  eat(message) {
    console.log("爸爸：我确定孩子"+message)
    console.log('开始吃饭吧')
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('2、吃完饭了')
        resolve('吃完饭了');
      }, 5000)
    })
  },
  allFinish(message) {
    console.log("爸爸：我确定孩子"+message)
    setTimeout(()=>{
      console.log('3、可以出去玩了');
    }, 3000)
  }
}

gookChildaction.watchHand(true)
  .then(gookChildaction.eat)
  .then(gookChildaction.allFinish)
  .catch(e => {
    console.log(e)
    return
  })
