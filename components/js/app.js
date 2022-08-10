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
      this.select()
      this.disable()
      this.hover()
   }
   render() {
      for (let item of this.goods) {
         const prod = new ProductItem(item);
         document.querySelector('.items').insertAdjacentHTML("beforeend", prod.render());
      }
   }

   hover() {
      let item = document.querySelectorAll(".item")
      item.forEach(el => {
         el.querySelector('.item__wrap').addEventListener("mouseover", elem => {
            elem.currentTarget.classList.toggle('item__wrap-hover')
            elem.currentTarget.querySelector(".item__weight").classList.toggle('item__weight-hover')
            el.querySelector('.item__btn').classList.add('item__btn-hover')
         })
         el.querySelector('.item__wrap').addEventListener("mouseout", elem => {
            elem.currentTarget.classList.toggle('item__wrap-hover')
            elem.currentTarget.querySelector(".item__weight").classList.toggle('item__weight-hover')
            el.querySelector('.item__btn').classList.toggle('item__btn-hover')
         })
      })
   }
   /*selected() {
      let item = document.querySelectorAll(".item")
      item.forEach(el => {
         el.querySelector('.item__wrap').addEventListener("click", elem => {
            elem.currentTarget.classList.toggle('item__wrap-select')
            elem.currentTarget.querySelector(".item__weight").classList.toggle('item__weight-select')
            this.changeTextSelect(el)
         })
      })
   }*/
   /*changeTextSelect(item) {
      if (item.querySelector('.item__wrap').classList.contains('item__wrap-select')) {
         item.querySelector('.item__massage').classList.toggle('hidden')
         for (let elem of this.goods) {
            if (elem.id == item.getAttribute("id")) {
               this.checkTextSelect(item, elem)
            }
         }
      } else {
         item.querySelector('.item__massage').classList.toggle('hidden')
         item.querySelector('.item__massage-select').classList.toggle('hidden')
      }

   }*/

   /*renderTextSelect(itemMessageSelected) {
      return `
         <p class="item__massage item__massage-select">${itemMessageSelected}</p>
      `
   }*/

   /*checkTextSelect(item, elem) {
      if (!item.querySelector(".item__massage").classList.contains('item__massage-select')) {
         item.insertAdjacentHTML('beforeend', this.renderTextSelect(elem.itemMessageSelected))
      }
   }*/
   select() {
      let item = document.querySelectorAll(".item")
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
         <div class="item" id="${this.id}">
            <div class="item__wrap item__wrap-default">
               <div class="item__info" id="${this.id}">
                  <img src="https://raw.githubusercontent.com/Mangecu/FunBox-Task/gh-pages/assets/img/cat.png" alt="cat">
                  <p class="item__preTitle">${this.preTitle}</p>
                  <h2 class="item__title">${this.title}</h2>
                  <h4 class="item__add">${this.add}</h4>
                  <p class="item__count">${this.count} порций</p>
                  <pre class="item__gift">${this.gift}</pre>
                  <div class="item__weight item__weight-default">
                     <span class="weight__count">${this.weightCount}</span> кг
                  </div>
               </div>
            </div>
            <p class="item__massage">Чего сидишь? Порадуй котэ, <button class="item__btn item__btn-default" id="${this.id}">купи.</button></p>
         </div>`
   }
}

new ProductList(items);

