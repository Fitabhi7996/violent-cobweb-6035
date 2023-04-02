import "./Cartpage.css";
import { CheckCircleIcon, TriangleDownIcon, DeleteIcon } from '@chakra-ui/icons';
import { Select } from '@chakra-ui/react';
const initdata=[
    {
      "id": 1,
      "title": "Hoppy Easter™",
      "price": 59.99,
      "price1": 79.99,
      "category": "Easter",
      "image": "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/192269x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
      "image1": "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/192269cbx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
      "createdAt": 1680002359958
    },
    {
      "id": 2,
      "title": "Easter Tulip Bouquet",
      "price": 54.99,
      "price1": 97.99,
      "category": "Easter",
      "image": "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/147130mprsv1ws6ck19x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
      "image1": "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/147130mprsv1ws6ck19x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
      "createdAt": 1680002536825
    },
    {
      "id": 3,
      "title": "Easter Egg-Stravaganza™",
      "price": 59.99,
      "price1": 79.99,
      "category": "Easter",
      "image": "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191304lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
      "image1": "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191304lx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
      "createdAt": 1680002859472
    },{
        "id": 4,
        "title": "Easter Egg-Stravaganza™",
        "price": 59.99,
        "price1": 79.99,
        "category": "Easter",
        "image": "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191304lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
        "image1": "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191304lx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        "createdAt": 1680002859472
      }]

function Cartpage(){

    return(
        <div className="cart1">
            <div className="cartdata">
            <div className="card1">
            <h1>Shopping Cart</h1>
            {
            initdata.map((item,index)=>{
                return(
                    <div className="cartcard" key={item.id}>
                        <p style={{height:"20px",margin:"0px"}}> <b> Item {index+1} of {initdata.length}</b></p>
                        <hr style={{color:"#696969"}} />
                        <div className="content">
                        <div className="Photu">
                        <img src={item.image} alt={item.title} width="100%" />
                        </div>

                        <div className="det">
                        <div className="title">
                        <p><b>{item.title}</b></p>
                        <DeleteIcon w={22} h={22} color="#5f3c86"/>
                        </div>
                        <p>Itemclass # : {item.category}</p>
                        <p>Sold by: 1800 Flowers</p>
                        <p>Price: <label htmlFor="" style={{color:"red"}}>${item.price}</label></p>
                        <div className="qty">
                            <p>Qty :</p>
                            <select size='md' className="size"  >
  <option value={1}> 1</option>
  <option value={2}> 2</option>
  <option value={3}> 3</option>
  <option value={4}> 4</option>
  <option value={5}> 5</option>
  <option value={6}> 6</option>
  <option value={7}> 7</option>
  <option value={8}> 8</option>
  <option value={9}> 9</option>
  <option value={10}> 10</option>
  <option value={11}> 11</option>
  <option value={12}> 12</option>
</select>
                        </div>
                        <p>Subtotal: $467.94</p>
                        <div className="duplicate">
                            <p><u style={{color:"indigo"}}>Duplicate Items</u></p>
                            <div>
                            <button className="ibutton1">i</button>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                )
            })    
            }
            <div className="checkout1">
                <p style={{height:"14px"}}> <b>Cart Items: <span style={{color:"indigo"}}>3 Items</span></b>  </p>
                <button className="gopro"> <b> PROCEED TO CHECKOUT</b></button>
            </div>
            </div>
            
            </div>

            <div className="paytm">
                <div className="gpay">
                <button className="gopro"> <b> PROCEED TO CHECKOUT</b></button>
                <div className="summary">
                <p><b>Order Summary</b></p>
                <div className="payment1">
                <p>3 Items</p>
                <TriangleDownIcon/>
                </div>
                <div className="payment1">
                <p>Merchandise:</p>
                <p>$987.83</p>
                </div>
                <div className="payment1">
                <p>Passport Shipping:</p>
                <p>$0.00</p>
                </div>
                <div className="payment1">
                <p>Total before tax:</p>
                <p>$987.83</p>
                </div>
                <div className="payment1">
                <p>Taxes:</p>
                <p>$7.18</p>
                </div>
                <hr />
                <div className="payment2">
                <p> <b>Order Total</b> </p>
                <p> <b> $1,029.83</b></p>
                </div>
                <div className="payment3">
                <img src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc723326dc66beda5/image-20220307-142252.png" alt="abc" height="30px" />
                <CheckCircleIcon w={70} h={24} color="#00C876"/>
                </div>
                <p style={{fontSize:"14px"}}>
                Has been added to your cart for $19.99 for your first year. Automatically renews, you can cancel any time. Enjoy FREE SHIPPING/NO SERVICE CHARGE* benefits and perks for a year.
                </p>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cartpage;