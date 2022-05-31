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
      console.log("ok")
    });
    // listItemをクリックするとlistクラスに移動する ここまで

  });
})


