window.addEventListener('load', () => {

  const priceInput = document.getElementById("item-price");
  priceInput.addEventListener("input", () => {
    
    const addTaxDom = document.getElementById("add-tax-price");
        addTaxDom.innerHTML = Math.round(priceInput.value / 1.1 * 0.1 );
  })
});
