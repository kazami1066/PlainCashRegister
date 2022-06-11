window.addEventListener('load', function(){
  // listItemの全てに発火するコード ここから
  var menuList = document.querySelectorAll(".listItem");
    menuList.forEach(function(target) {
  // listItemの全てに発火するコード ここまで
    // listItemに乗ると色が変わるコード ここから
    target.addEventListener('mouseenter', function() {
      this.setAttribute("style", "background-color:lightgrey;")
    });
    // listItemに乗ると色が変わるコード ここまで
    // listItemから降りると色が戻るコード ここから
    target.addEventListener('mouseleave', function() {
      this.removeAttribute("style", "background-color:lightgrey;")
    });
    // listItemから降りると色が戻るコード ここまで
    // listItemをクリックするとlistクラスに移動する ここから
    target.addEventListener('click', function() {
      var boxes = document.getElementById('list');
      // var items = document.getElementById('item');
      // var prices = document.getElementById('price');
      // var clone = boxes.firstElementChild.cloneNode(true);
      // var cloneItem = items.firstChild.cloneNode(true);
      // var clonePrice = prices.firstChild.cloneNode(true);
      var clones = target.cloneNode(true);
      // clone.appendChild(cloneItem);
      // clone.appendChild(clonePrice);
      boxes.appendChild(clones);
      // boxes.appendChild(clone);
      clones.classList.add("item");

    var div_children = document.querySelectorAll('.listItem.item #price');
      div_children.forEach(function(targets) {
        targets.classList.add('prices');
      });
      
    var totalPriceCash = document.getElementById("total_price");
    total = 0 ;
    var prices = document.getElementsByClassName('prices');
    for (i = 0; i < prices.length; i++) {
      
      total += prices[i].innerHTML;
      totalPriceCash.innerHTML = total;
    }
      
    // let total = prices.reduce(function(sum, element){
    //   return sum + element.prices;
    // }, 0);

    // console.log(prices.innerHTML);
    
    // function keisan(){
    //   goukei=0;
    //   for(i=0;i<=2;i++){
    //   if(document.myform.elements[i].checked==true){
    //   goukei=goukei+plice[i];
      // }
    //   }

      // prices.forEach(function(totalPrice) {
      // totalPriceCash.innerHTML = totalPrice.innerHTML


      // listItemをクリックするとlistクラスに移動する ここまで

      // 合計金額を自動計算する  ここから
      
      // var clonesPrices = document.getElementById("prices")
      // var totalPriceCash = document.getElementById("total_price")
      // totalPriceCash = Math.round(clonesPrices);


      // const numbers = ('prices');
      // let total = 0;

      // for (let i = 0; i < numbers.length; i++) {
      //   total += numbers[i];
      // }
      // console.log(total);
            // 合計金額を自動計算する  ここまで
      });
    });
  });
// });