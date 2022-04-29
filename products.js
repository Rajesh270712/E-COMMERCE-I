
var products=JSON.parse(localStorage.getItem("Products"));

document.querySelector("#counter>h2").innerText="Total Products : "+products.length;

listProducts()
function listProducts(){

    products.forEach((product,index) => {
        var box= document.createElement("div");

        var img=document.createElement("img");
        img.setAttribute("src",product.image);

        var name=document.createElement("h3");
        name.innerText=product.name;
        
        var category=document.createElement("p");
        category.innerText=product.category;

        var price=document.createElement("p");
        price.innerText="Rs. "+product.price;

        var gender=document.createElement("p");
        gender.innerText=product.gender;

        var remove=document.createElement("button");
        remove.innerText="Remove"
        remove.addEventListener("click",function(){
            products.splice(index,1);
            localStorage.setItem("Products",JSON.stringify(products))
            window.location.reload();
        })
        remove.style.display="block"
        var sold=document.createElement("button");
        sold.style.display="block"
        if(product.sold=="true")
        {
            sold.style.backgroundColor="green"
            sold.innerText="Yes";
        }
        else{
            sold.style.backgroundColor="red"
            sold.innerText="No";
        }

        sold.addEventListener("click",function(){
            if(product.sold=="true"){
                product.sold="false";
                localStorage.setItem("Products",JSON.stringify(products))
                window.location.reload();
            }
            else
            {
                product.sold="true";
                localStorage.setItem("Products",JSON.stringify(products))
                window.location.reload();
            }
        })
        box.append(img,name,category,price,gender,sold,remove)

        document.querySelector("#list").append(box)
    });
}