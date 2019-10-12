interface Card { // 单张牌的接口
  suit: string
  card: number
}

interface Deck { // 一副牌的接口
  suits: string[]
  cards: number[]

  createCardPicker(this: Deck): () => Card // createCardPicker返回值是一个函数，函数的返回值是一个 card
}

let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'], // 扑克牌的花色
  cards: Array(52), // 扑克牌的点数
  createCardPicker: function (this: Deck) { // 为了解决this.suits是any类型的，我们在createCardPicker函数中传递this: Deck，这样在createCardPicker函数中 this指向了 D ECK对象
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

