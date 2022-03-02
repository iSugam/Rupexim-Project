
var cartRemove = document.querySelectorAll(".cart_quantity_delete");
var cartImage = document.querySelectorAll(".cart_product");
var cartDescription = document.querySelectorAll(".cart_description");
var cartPrice = document.querySelectorAll(".cart_price");   
var cartQuantity = document.querySelectorAll(".cart_quantity");
var carttotal = document.querySelectorAll(".cart_total");


        cartRemove[0].addEventListener('click', function(){           
            cartImage[0].style.display = "none";
            cartDescription[0].style.display = "none";
            cartPrice[0].style.display = "none";
            cartQuantity[0].style.display="none";
            carttotal[0].style.display="none";
            cartRemove[0].style.display="none";
	    });   

        cartRemove[1].addEventListener('click', function(){           
            cartImage[1].style.display = "none";
            cartDescription[1].style.display = "none";
            cartPrice[1].style.display = "none";
            cartQuantity[1].style.display="none";
            carttotal[1].style.display="none";
            cartRemove[1].style.display="none";
        });  

        cartRemove[2].addEventListener('click', function(){           
            cartImage[2].style.display = "none";
            cartDescription[2].style.display = "none";
            cartPrice[2].style.display = "none";
            cartQuantity[2].style.display="none";
            carttotal[2].style.display="none";
            cartRemove[2].style.display="none";
        });  


// var addToCart = document.querySelectorAll(".add-to-cart");
// var cartItems= document.querySelectorAll(".productinfo");

// for(var i=0; i <= addToCart.length; i++){
//     addToCart[i].addEventListener("click", function(){

//         console.log(i++);
        
//         for(var x=0; x<= cartItems.length; x++){
//             if (i===x){
//                 cartDescription.appendChild(cartItems);
//             }
//         }
//     });
// }