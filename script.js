
const name1 = document.getElementById("namePart");
const price = document.getElementById("pricePart");
const category = document.getElementById("categoryPart");
const link = document.getElementById("linkPart");
const add = document.getElementById("addPart");
const list = document.getElementById("cards_parts");

add.addEventListener("click", function () {
    const div = document.createElement("div"); 
    const nameP = document.createElement("h2");
    const priceP = document.createElement("h3");
    const categoryP = document.createElement("h3");
    const imgP = document.createElement("img");
    const btnDel = document.createElement("button");

    div.style.border = "1.5px solid black";
    div.style.width = "220px";
    div.style.height = "180px";
    div.style.margin = "5px";
    div.style.display = "inline-block";
    nameP.textContent = name1.value;
    nameP.style.textAlign = "center";
    priceP.textContent =  "$" + price.value;
    priceP.style.textAlign = "center";
    categoryP.textContent = category.value;
    categoryP.style.textAlign = "center";
    imgP.src = link.value;
    imgP.style.width = "150px";
    imgP.style.height = "80px";
    imgP.style.marginLeft = "30px";
    btnDel.style.width = "40px";
    btnDel.style.height = "20px";
    btnDel.textContent = "X";
    // btnDel.style.MarginBottom = "225px";

    btnDel.addEventListener("click", function (e) {
        e.target.parentElement.remove();
    })
 
    if(name1.value == "" || price.value == "" || category.value == "" || link.value == ""){
        alert("Fields are required");
    }
    else{
        div.appendChild(btnDel);
        div.appendChild(nameP);
        div.appendChild(priceP);
        div.appendChild(categoryP);
        div.appendChild(imgP);
        list.appendChild(div);
    
        name1.value = "";
        price.value =  "";
        category.value = "";
        link.value = "";
    }
})

