// window.addEventListener('load', function(){

//   // const pullDownButton = document.getElementById("menu")
//   // console.log(pullDownButton)
//   ('div.itemName').each(function(i){
//     (this).attr('id','item' + (i+1));
//   });

//   ('div.itemPrice').each(function(i){
//     (this).attr('id','price' + (i+1));
//   });

  
// })

(function(){
  ('div.itemName').each(function(i){
    (this).attr('id','item' + (i+1));
  });

  ('div.itemPrice').each(function(i){
    (this).attr('id','price' + (i+1));
  });
});