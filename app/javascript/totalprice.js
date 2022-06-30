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
      var clones = target.cloneNode(true);
      boxes.appendChild(clones);
      clones.classList.add("item");
    var div_price = document.querySelectorAll('.listItem.item #price');
      div_price.forEach(function(priceTarget) {
        priceTarget.classList.add('prices');
      });
    var div_item = document.querySelectorAll('.listItem.item #item');
      div_item.forEach(function(itemTarget) {
        itemTarget.classList.add('itemName');
      });
    // listItemをクリックするとlistクラスに移動する ここまで
    // 合計金額を自動計算する  ここから
    var totalPriceCash = document.getElementById("total_price");
    var total = 0 ;
    var prices = document.getElementsByClassName('prices');
    for (i = 0; i < prices.length; i++) {
      total += parseFloat(prices[i].innerHTML);
      totalPriceCash.innerHTML = total.toLocaleString();
      var addTaxDom = document.getElementById("add-tax-price");
        addTaxDom.innerHTML = Math.round(total / 1.1 * 0.1 ).toLocaleString();
    }
    // 合計金額を自動計算する  ここまで
    // 購入個数を算出  ここから
    var totalItem = document.querySelectorAll(".listItem.item");
    var itemThings = document.getElementById('item-things');
      itemThings.innerHTML = totalItem.length; 
    // 購入個数を算出  ここまで
      });
    });
  });