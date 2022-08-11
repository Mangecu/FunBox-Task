const items = [
   {
      id: 1,
      preTitle: "Сказочное заморское яство",
      preTitleSelectedHover: "Котэ не одобряет?",
      title: "Нямушка",
      add: "с фуа-гра",
      count: 10,
      gift: "мышь в подарок",
      weightCount: "0,5",
      itemMessageSelected: "Печень утки разварная с артишоками.",
      itemMessageDisable: "Печалька, с фуа-гра закончился.",
      quantity: 1
   },
   {
      id: 2,
      preTitle: "Сказочное заморское яство",
      preTitleSelectedHover: "Котэ не одобряет?",
      title: "Нямушка",
      add: "с рыбой",
      count: 40,
      gift: "2 мыши в подарок",
      weightCount: "2",
      itemMessageSelected: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      itemMessageDisable: "Печалька, с рыбой закончился.",
      quantity: 1
   },
   {
      id: 3,
      preTitle: "Сказочное заморское яство",
      preTitleSelectedHover: "Котэ не одобряет?",
      title: "Нямушка",
      add: "с курой",
      count: 100,
      gift: "5 мышей в подарок\n" +
              "заказчик доволен",
      weightCount: "5",
      itemMessageSelected: "Филе из цыплят с трюфелями в бульоне.",
      itemMessageDisable: "Печалька, с курой закончился.",
      quantity: 0
   }
]


class ProductList {
   constructor(items) {
      this.goods = items
      this.render()
      this.disable()
      this.hover()
      this.select()
   }
   render() {
      for (let item of this.goods) {
         const prod = new ProductItem(item);
         document.querySelector('.items').insertAdjacentHTML("beforeend", prod.render());
      }
   }
   hover() {
      let covers = document.querySelectorAll('.item')
      covers.forEach(item => {
         item.addEventListener('mouseover', el => {
            let cover = el.currentTarget
            if (cover.dataset.condition === "default") {
               cover.querySelector('.item__wrap').classList.toggle('item__wrap-hover')
               cover.querySelector('.item__weight').classList.toggle('item__weight-hover')
               cover.querySelector('.item__btn').classList.toggle('item__btn-hover')
            } else if (cover.dataset.condition === "select") {

            }
         })
      })
   }
   select() {
      let covers = document.querySelectorAll('.item')
      covers.forEach(item => {
         item.addEventListener('click', el => {
            let cover = el.currentTarget
            cover.querySelector('.item__wrap').classList.toggle('item__wrap-select', )
            cover.querySelector('.item__weight').classList.toggle('item__weight-select')
            if (cover.dataset.condition === "default") {
               cover.dataset.condition = "select"
               this.changeContentSelect(cover)
            } else if (cover.dataset.condition === "select") {
               cover.dataset.condition = "default"
               cover.querySelector('.item__massage').innerHTML = `Чего сидишь? Порадуй котэ, <button class="item__btn" id="${cover.getAttribute('id')}">купи.`
            }
         })
      })
   }
   changeContentSelect(item) {
      for (let cover of this.goods) {
         if (cover.id.toString() === item.getAttribute('id')) {
            item.querySelector('.item__massage').textContent = `${cover.itemMessageSelected}`
         }
      }
   }
   disable() {

   }
}

class ProductItem {
   constructor(items) {
      this.id = items.id
      this.preTitle = items.preTitle
      this.title = items.title
      this.add = items.add
      this.count = items.count
      this.gift = items.gift
      this.weightCount = items.weightCount
   }
   render() {
      return `
         <div class="item" id="${this.id}" data-condition = "default">
            <div class="item__wrap">
               <div class="item__info" id="${this.id}">
                  <img src="https://raw.githubusercontent.com/Mangecu/FunBox-Task/gh-pages/assets/img/cat.png" alt="cat">
                  <p class="item__preTitle">${this.preTitle}</p>
                  <h2 class="item__title">${this.title}</h2>
                  <h4 class="item__add">${this.add}</h4>
                  <p class="item__count">${this.count} порций</p>
                  <pre class="item__gift">${this.gift}</pre>
                  <div class="item__weight">
                     <span class="weight__count">${this.weightCount}</span> кг
                  </div>
               </div>
            </div>
            <p class="item__massage">Чего сидишь? Порадуй котэ, <button class="item__btn" id="${this.id}">купи.</button></p>
         </div>`
   }
}

new ProductList(items);

