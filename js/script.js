function productDeploys() {
    let container_Cards = document.querySelector(".cardContainer");
    let costs = [13000, 16000, 28000, 16000, 32000, 30000, 34000, 15000, 22000, 36000, 19000, 32000]
    let burgers = [
        "Chili Burger","Cheese Burger", "Hamburger", "Double Burger"
    ]
    let drinks = [
        "Coca Cola", "Fanta", "Sprite"
    ]
    let pitsa = [
        "Mexica", "Chili Pizza", "Fransisko","Olive"
    ]
    let n = 4,o=3;
    for (let i = 1; i <= n; i++){
        let zakaz = Math.floor(Math.random() * 96)
        container_Cards.innerHTML += `<div class="card">
        <div class="imgBox" id="burgerlar"><img src="./picts/burger${i}.jpg"></div>
        <div class="contentBox">
            <p>${burgers[i-1]}</p>
            <p>Narxi: <b>${costs[i-1]}</b> <i>so'm</i></p>
            <p>Buyurtmalar berilgan: <b>${zakaz}</b> ta</p>
            <button>Savatga</button>
        </div>
    </div>`
    }
    for (let i = 1; i <= o; i++){
        let zakaz = Math.floor(Math.random() * 96)
        container_Cards.innerHTML += `<div class="card">
        <div class="imgBox" id="drinks"><img src="./picts/drink${i}.jpg" alt="gul beraymi"></div>
        <div class="contentBox">
            <p>${drinks[i-1]}</p>
            <p>Narxi: <b>${costs[i-1]}</b> <i>so'm</i></p>
            <p>Buyurtmalar berilgan: <b>${zakaz}</b> ta</p>
            <button>Savatga</button>
        </div>
    </div>`
    }
    let a = 0;
    for (let i = 1; i <= o; i++){
        let zakaz = Math.floor(Math.random() * 96)
        container_Cards.innerHTML += `<div class="card">
        <div class="imgBox" id="pitsalar"><img src="./picts/pitsa${i}.jpg" alt="gul beraymi"></div>
        <div class="contentBox">
            <p>${pitsa[i-1]}</p>
            <p>Narxi: <b>${costs[i-1]}</b> <i>so'm</i></p>
            <p>Buyurtmalar berilgan: <b>${zakaz}</b> ta</p>
            <button onclick='addtocart(" + (a++) + ")'>Savatga</button>
        </div>
    </div>`
    }























    
    let rek = document.createElement("h2");
            rek.style.fontSize = "48px";
            rek.style.textAlign = "center";
            rek.style.margin = "0 auto";
            rek.style.position = "absolute";
            rek.style.left = "50%";
    rek.style.top = "50%";
    rek.style.transform = "translate(-50%,-50%)";
    rek.style.display = "none";
     container_Cards.appendChild(rek);
    let all = document.querySelector("#all")
    let pitsaId = document.querySelector("#pitsa")
    let burgerId = document.querySelector("#burger")
    let lavashId = document.querySelector("#lavash")
    let salatId = document.querySelector("#salat")
    let drinkId = document.querySelector("#drink")
    let shirinlikId = document.querySelector("#shirinlik")
    let cards = container_Cards.querySelectorAll(".card")
    
    all.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "flex";
            
    rek.style.display = "none";
        })
    }
    pitsaId.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "none"
            if (e.querySelector(".imgBox").id == "pitsalar") {
                e.style.display = "flex";
                
    rek.style.display = "none";
                
            }
        })
    }
    drinkId.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "none"
            if (e.querySelector(".imgBox").id == "drinks") {
                e.style.display = "flex";
                rek.style.display = "none";
            }
        })
    }
    burgerId.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "none"
            if (e.querySelector(".imgBox").id == "burgerlar") {
                e.style.display = "flex";
                rek.style.display = "none";
            }
        })
    }
    lavashId.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "none";
            
            
            if (!(e.querySelector(".imgBox").id == "lavashlar")) {
                rek.innerText = "Bizda lavash mavjud emas!";
                rek.style.display = "block";
               
            } 
        })
    }
    salatId.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "none"
            if (!(e.querySelector(".imgBox").id == "salatlar")) {
                // e.style.display = "flex";
                rek.innerText = "Bizda salat mavjud emas!";
                rek.style.display = "block";
            }
        })
    }
    shirinlikId.onclick = () => {
        cards.forEach((e, i) => {
            e.style.display = "none"
            if (!(e.querySelector(".imgBox").id == "shirinliklar")) {
                // e.style.display = "flex";
                rek.innerText = "Bizda shirinliklar mavjud emas!";
                rek.style.display = "block";
            }
        })
    }
    // middle.onclick = () => {
    //     cards.forEach((e, i) => {            
    //         e.style.display = "block"
    //         if (e.querySelector("b").innerHTML < 20000 || e.querySelector("b").innerHTML >30000) {
    //             e.style.display = "none"
    //         }
    //     })
    // }
    // expensive.onclick = () => {
    //     cards.forEach((e, i) => {
    //         e.style.display = "block"
    //         if (e.querySelector("b").innerHTML < 30000) {
    //             e.style.display = "none"
    //         }
    //     })
    // }
}

productDeploys()



// var cart = [];

// function addtocart(a) {
//     cart.push({ ...categories[a] });
//     displaycart()
// }

// function delElement(a) {
//     cart.splice(a, 1);
//     displaycart()
// }
// function displaycart() {
//     let j = 0, total = 0;
//     document.getElementById("count").innerHTML = cart.length;
//     if (cart.length == 0) {
//         document.getElementById('cartItem').innerHTML = "Your cart is empty";
//         document.getElementById('total').innerHTML = +0+ "so'm"
//     } else {
//         document.getElementById('cartItem').innerHTML = cart.map((item) => {
//             var { image, title, price } = item;
//             total = total + price;
//             document.getElementById('total').innerHTML = total + "so'm " + `<br> <p>CashBack ${total / 100 * 2} so'm</p> `;
//             return (
//                 `
//                 <div class="cart-item">
//                 <div class="row-img">
//                 <img class="rowimg" src=${image}>
//                 </div>
//                 <p style='font-size=12px';>${title}</p>
//                 <h2 style='font-size=15px';>${price} so'm</h2>
            
//             `+
//                 "<i class='fa fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
//             );
//         }).join('');

//     }

// }