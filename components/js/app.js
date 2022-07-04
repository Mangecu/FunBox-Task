const items = [
   {
      id: 1,
      title: "Нямушка",
      add: "с фуа-гра",
      count: 10,
      gift: "мышь в подарок",
      weightCount: "0,5"
   },
   {
      id: 2,
      title: "Нямушка",
      add: "с рыбой",
      count: 40,
      gift: "2 мыши в подарок",
      weightCount: "2"
   },
   {
      id: 3,
      title: "Нямушка",
      add: "с курой",
      count: 100,
      gift: "5 мышей в подарок\n" +
              "заказчик доволен",
      weightCount: "5"
   }
]

class ProductList {
   constructor(items) {
      this.goods = items;
      this.render();
      this.selected();
   }
   render() {
      for (let item of this.goods) {
         const prod = new ProductItem(item);
         document.querySelector('.items').insertAdjacentHTML("beforeend", prod.render());
      }
      let disable = document.getElementById("3")
      disable.querySelector('.item__info').classList.add("disable");
   }
   selected() {
      let item = document.querySelectorAll('.item');
      item.forEach(el => {
         let btnItem = el.querySelector('.item__btn');
         btnItem.addEventListener('click', event => {
            if(!event.target.classList.contains('item__btn')) {
               return;
            }
            //event.target.closest('.item').querySelector('.item__info').classList.add("selected");
            el.querySelector('.item__info').classList.add("selected");
         })
      })
   }
}

class ProductItem {
   constructor(items) {
      this.id = items.id
      this.title = items.title
      this.add = items.add
      this.count = items.count
      this.gift = items.gift
      this.weightCount = items.weightCount
   }
   render() {
      return `
         <div class="item" id="${this.id}">
            <div class="item__info" id="itemInfo">
               <div class="corner" id="corner"></div>
               <p class="item__preTitle">Сказочное заморское яство</p>
               <h2 class="item__title">${this.title}</h2>
               <h4 class="item__add">${this.add}</h4>
               <p class="item__count">${this.count} порций</p>
               <pre class="item__gift">${this.gift}</pre>
               <div class="item__weight">
                  <span class="weight__count">${this.weightCount}</span> кг
               </div>
            </div>
            <p class="item__massage">Чего сидишь? Порадуй котэ, <button class="item__btn" id="${this.id}">купи.</button></p>
         </div>`
   }
}

new ProductList(items);

