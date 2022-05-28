window.addEventListener('load', function(){

  const pullDownButton = document.getElementById("setting-logo")
  const pullDownParents = document.getElementById("pull-down")


  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:lightgrey;")
    pullDownParents.setAttribute("style", "display:block;")
  })

  pullDownButton.addEventListener('click', function() {
    this.removeAttribute("style", "background-color:lightgrey;")
    pullDownParents.removeAttribute("style", "display:block;")
  })

})