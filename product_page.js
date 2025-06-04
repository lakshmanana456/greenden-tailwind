// select element
var menuicon=document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var closenav =document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// product search funtionality
var productcontainer=document.getElementById("productcontainer")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")
 
// console.log(productlist)
    search.addEventListener("keyup", function () {
        var enterdvalue = event.target.value.toUpperCase()
        // console.log(enterdvalue)
        for (count = 0; count < productlist.length; count = count + 1) {
            var productname=productlist[count].querySelector("h1").textContent

            if (productname.toUpperCase().indexOf(enterdvalue) < 0) {
                productlist[count].style.display = "none"
            } else {
                productlist[count].style.display = "block"

            }
        }
    })