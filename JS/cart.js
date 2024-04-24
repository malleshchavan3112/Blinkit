let openShopping=document.querySelector('.shopping')
let closeShopping=document.querySelector('.closeShopping')
let list=document.querySelector('.list')
let listCard=document.querySelector('.listCard')
let body=document.querySelector('body')
let total=document.querySelector('.total')
let quantity=document.querySelector('.quantity')


openShopping.addEventListener('click',()=>{
    body.classList.add('active')
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active')
})

let products=[
    {
        id:1,
        name:'Bottle Gourd',
        image:'../image/image/Bottle Gourd (Dudhi Bhopla).jpg',
        weight:'1kg',
        price:100
    },
    {
        id:2,
        name:'Button Mushroom.jpg',
        image:'../image/image/Button Mushroom.jpg',
        weight:'1kg',
        price:200
    },
    {
        id:3,
        name:'Cabbage(Kobi)',
        image:'../image/image/Cabbage (Kobi).jpg',
        weight:'1kg',
        price:45
    },
    {
        id:4,
        name:'Green Peas',
        image:'../image/image/Green Peas (Matar).jpg',
        weight:'1kg',
        price:85
    },
    {
        id:5,
        name:'Green Capsicum',
        image:'../image/image/Green Capsicum (Shimla Mirch).jpg',
        weight:'1kg',
        price:245
    },
    {
        id:6,
        name:'English Cucumber(Kheera)',
        image:'../image/image/Ginger (Ale).jpg',
        weight:'1kg',
        price:45
    },
];
let listCards=[]
function initApp(){
    products.forEach((value,key)=>{
        let newDiv=document.createElement('div')
        newDiv.classList.add('item')
        newDiv.innerHTML=`
        <img src="image/${value.image}"/>
        <div class='title'>${value.name}</div>
        <div class="price"><i class="bi bi-currency-rupee"></i>${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})" class='btn btn-warning'>Add to Cart</button>
        `;
        list.appendChild(newDiv)
    })

}
initApp();

function addToCart(key){
    if(listCards[key]==null){
      listCards[key]={...products[key],quantity:1}
    }
    else{
        listCards[key].quantity++
    }  
    reloadCart()
}
function reloadCart(){
    listCard.innerHTML='';
    let count=0;
    let totalPrice=0;
    listCards.forEach((value,key)=>{
        totalPrice=totalPrice+value.price;
        count=count+value.quantity;

        if(value!=null){
            let newDiv=document.createElement('li')
            newDiv.innerHTML=`
            <div><img src="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
            <button class="btn btn-danger fw-bold " onclick="changequantity(${key},${value.quantity-1})">-</button>
            <div class="count">${value.quantity}</div>
            <button class="btn btn-success fw-bold" onclick="changequantity(${key},${value.quantity+1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv)
        }
    })
    total.innerText=totalPrice.toLocaleString();
    quantity.innerText=count;
}

function changequantity(key,quantity){
    if(quantity==0){
        delete listCards[key]
    }else{
        listCards[key].quantity=quantity
        listCards[key].price=quantity*products[key].price
    }
    reloadCart()
}