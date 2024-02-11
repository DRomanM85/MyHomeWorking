function showProduct(){
    let productsContainer = document.getElementById("products-container");

    if (productsContainer) {
        for (var i = 0; i < products.length; i++) {
            var productCard = document.createElement("div");
            productCard.classList.add("product-card");

            var productName = document.createElement("h2");
            productName.textContent = products[i].name;

            var productPrice = document.createElement("p");
            productPrice.textContent = "Ціна: $" + products[i].price.toFixed(2);

            var productAvailability = document.createElement("p");
            productAvailability.textContent = "Доступність: " + products[i].availability + " шт.";

            var productDescription = document.createElement("p");
            productDescription.textContent = products[i].discribe;

            let buttonCart = document.createElement("button");
            buttonCart.textContent = "Додати в кошик";
            buttonCart.addEventListener('click', function(index) {
                return function() {
                    addCartProduct(products[index]);
                };
            }(i));

            if (products[i].availability > 3) {
                productCard.classList.add("availability-green");
            } else if (products[i].availability > 0) {
                productCard.classList.add("availability-orange");
            } else {
                productCard.classList.add("availability-red");
            }

            productCard.appendChild(productName);
            productCard.appendChild(productPrice);
            productCard.appendChild(productAvailability);
            productCard.appendChild(productDescription);
            productCard.appendChild(buttonCart);

            productsContainer.appendChild(productCard);
        }
    }
    showCart();
}

function showCart(){
    
    document.getElementById('orderSummary').innerHTML = `<p>В корзині товарів ${order.quentity} шт.</p>
    <p>На суму: $${order.amount}</p>
    <p>Застосована знижка ${order.discount}%</p>
    <p>До сплати: $${order.finalPrice}</p>`;
}

let messageError;

function addCartProduct(product) {
    messageError = "";
    let quentity;
   
    do{
        quentity = 0;
       let userQuentity = prompt(`${messageError} \nВкажіть кількість:`);
       if(userQuentity === null){
        break;
       }
       let result = checkUserQuentyti(userQuentity, product.availability);
        if(result !== NaN && result !== null){
            quentity = result;
        }   
        if(quentity > 0){
            break;
        }
    }while(true);

    if(quentity === 0){
        
        return;
    }
    order.quentity += quentity;
    order.amount += product.price * quentity;
    order.discount = chechDiscount(order.amount) ? 10 : 0;
    order.finalPrice = order.amount - (order.amount * (order.discount / 100));
    showCart();
}

function checkUserQuentyti(userQuentity,availability){
    
    let quentity = NaN;
    if(userQuentity === null){
        return null;
    }

     quentity = parseFloat(userQuentity);

     messageError = "Задано не коректну кількість";

     if(quentity !== NaN && quentity > availability){
         quentity = NaN;
         messageError = "Задана кількість відсутня на складі. Спробуйте меншу.";
     }
     
     

    return quentity;
}

function chechDiscount(amount){
    return amount > 10000
}
