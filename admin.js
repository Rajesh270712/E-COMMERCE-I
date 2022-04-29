

document.querySelector("#sellerform").addEventListener("submit",addProduct);

var products= JSON.parse(localStorage.getItem("products")) || [];

function addProduct(){
    event.preventDefault();
    // console.log("DASF")
    function Product(name,category,image,price,gender,sold=false){
        this.name=name;
        this.category=category;
        this.image=image;
        this.price=price;
        this.gender=gender;
        this.sold=sold;
    }

    var name=document.querySelector("#name").value;
    var category=document.querySelector("#category").value;
    var image=document.querySelector("#image").value;
    var price=document.querySelector("#price").value;
    var gender=document.querySelector("#gender").value;
    var sold=document.querySelector("#sold").value;
    
    var product= new Product(name,category,image,price,gender,sold);

    products.push(product);

    localStorage.setItem("Products",JSON.stringify(products));

    alert("Product added!")

}