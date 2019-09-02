let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'], // 扑克牌的花色
  cards: Array(52), // 扑克牌的点数
  createCardPicker: function () {
    // return function () {
    //   let pickedCard = Math.floor(Math.random() * 52) // 获取随机一张扑克牌的点数
    //   let pickedSuit = Math.floor(pickedCard / 13) // 我们可以随机获取一个 0 - 3 之间的一个数值，通过这个数值来获取扑克牌的花色

    //   return {
    //     suit: this.suits[pickedSuit], // 扑克牌的花色
    //     card: pickedCard % 13 // 扑克牌的点数
    //   }
    // }
    return () => {
      let pickedCard = Math.floor(Math.random() * 52) // 获取随机一张扑克牌的点数
      let pickedSuit = Math.floor(pickedCard / 13) // 我们可以随机获取一个 0 - 3 之间的一个数值，通过这个数值来获取扑克牌的花色

      return {
        suit: this.suits[pickedSuit], // 扑克牌的花色
        card: pickedCard % 13 // 扑克牌的点数
      }
    }
  }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)

/**
 * 上面的代码会报错: 
 * suit: this.suits[pickedSuit]
 * TypeError: Cannot read property '2' of undefined
 * 
 * 使用箭头函数可以修改这个错误，但是这时我们的 this 是 any 的，this.suits 访问任何属性他都不会报错，
 */
