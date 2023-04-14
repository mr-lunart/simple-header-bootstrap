let slider = document.getElementById("price-slider");
let toggle = document.getElementById("billing")
let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;


slider.addEventListener("input", function () {
    let sliderValue = document.getElementById("price-slider").value;
    let value = sliderValue * 25;
    document.getElementById("harga").innerText = updateValue(sliderValue)
    document.getElementById("pageview").innerText = pageViews[sliderValue]

    this.style.background = `linear-gradient(to right,
              hsl(174, 77%, 80%) 0%,
              hsl(174, 77%, 80%) ${value}%,
              hsl(224, 65%, 95%) 0%,
              hsl(224, 65%, 95%) 100%)`;
    this
});

toggle.addEventListener("change", function () {
    let sliderValue = document.getElementById("price-slider").value;
    if (isYearly == false) {
        isYearly = true;
      } else {
        isYearly = false;
    }
    updateValue(sliderValue)
});

function updateValue(sli) {
    if (isYearly) {
        document.getElementById("harga").innerText = perMonth[sli] * 0.75
        return(perMonth[sli] * 0.75)
    } 
    else {
        document.getElementById("harga").innerText = perMonth[sli]
        return(perMonth[sli])
    }
}