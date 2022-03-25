/*const  CartButton =({product,onAddClick})=>{
 return product.inStock ?
  <button disabled={!product.instock} className="btn btn-danger btn-sm" onClick={onAddClick}  >
      add to cart
  <i className="fa fa-shopping-cart"></i>
   </button>:null
}*/

import ShouldRender from "./utils/ShouldRender";
  import IfElse from "./utils/ifElse"
const  CartButton =({product,onAddClick})=>
  product.inStock &&
   <button disabled={!product.instock} className="btn btn-danger btn-sm" onClick={onAddClick}>
       add to cart
   <i className="fa fa-shopping-cart"></i>
    </button>
 
     

const ProductItem=({product,onAdd})=>{

   const  onAddClick=()=>{
    onAdd(product);
  }

return <div className="col-md-3">
    <div className="card">

        <img className="card-img-top" src={product.img}/>
        <div className="card-body">
            <h4 className="card-title">{product.brand}  {product.model}</h4>
            <b>${product.price}</b>
            <h6>
            <label>In stock?</label>
            <input disabled type="checkbox" checked={product.instock}/>
            </h6>
                
          </div>
              <div className="card-footer">
                <IfElse cond={product.inStock} >
                    <button className="btn btn-danger btn-sm" onClick={onAddClick}>
                      add to cart
                      <i className="fa fa-shopping-cart"/>
                    </button> 
                  <button  className="btn btn-danger btn-sm" onClick={onAddClick}>
                    notify
                    <i className="fa fa-bell"/>
                  </button> 
               </IfElse>
                
                
    
              </div>
            </div>
            </div>

}
export default ProductItem;


