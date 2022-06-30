window.addEventListener('load', function(){ 
  var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search_bar');
    input.addEventListener("input", () => {
    filter = input.value.toUpperCase();
    ul = document.getElementById("menu");
    li = ul.getElementsByTagName('li');
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
  })
});
