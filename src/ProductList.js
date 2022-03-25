
import ProductItem from "./ProductItem";
import ShouldRender from "./utils/ShouldRender";

//import productList from './ProductList.css'
const productList =()=>{
const cart=[];
const onAddCartClick=(product)=>{
    cart.push(product)
    console.log(cart);
}

const product=[
    {id:1,brand:'apple',model:'Iphone13',inStock:true,price:1000,img:"https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg"},
    {id:2,brand:'apple',model:'Iphone12',inStock:false,price:900,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645552346275"},
    {id:3,brand:'apple',model:'Iphonex',price:1200,inStock:true,img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000"}
];
return <div>
<ShouldRender cond={product.inStock}>
    

</ShouldRender>


    {product.map(item=> <ProductItem key={item.id} product ={item} onAdd={onAddCartClick}/>)}
</div>
}

export default productList;