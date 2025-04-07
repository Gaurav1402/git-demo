import React from "react";
import ProductDetails from "./ProductDetails";

function ProductList()
{
    const plist=[{name:"Titan",price:20000,img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS79JFzgiXBrDq4Teyfn-K0v7Fr2NErucEIysQlg7vpzoncODMJGMJTjPPWkhjg2BT6CeJUWrTPSQZg0-H_2UNJ0v-wC-DKXDOy2oUSYjJs3l27MX2BK8Nk&usqp=CAE",
        desc:"For the stylish men who love to stay atop their style game, this analog watch from the Maritime collection by Titan is crafted to suit their needs. Safeguarded by a minera"
    },
    {name:"FitVII",price:30000,img:"https://fitvii.com/cdn/shop/files/FitVII_-Fall-Detection-Smartwatch-With-Atrial-Fibrillation-Monitoring-_Free-V19-Fitness-Tracker-fitvii-237767881.jpg?v=1737452527&width=990",
        desc:"Style and performance perfectly combine together to form this men's analog watch that is brought to you by the Edge Ceramic collection from Titan. Functional on a quartz ..."
    },
    {name:"Fastrack",price:20000,img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTJbIPOCyB0frZUEZSGIYop9tWEfTb9st4avMce9n2MoS7tugDD5TsWLbSYoH8xLMdYKSyFAeKFA6usrM74w-HJR5ngKXqn8vD8LTDP2SnZwtETPlVjovKCtQ&usqp=CAE",
        desc:"For the stylish men who love to stay atop their style game, this analog watch from the Maritime collection by Titan is crafted to suit their needs. Safeguarded by a minera"
    },
    {name:"Pebble Royale",price:30000,img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcROb7X-QeORapS2G6_EhBkWnMNbfNmtmvBTsUSJnigiPm3FnHJtOzTjCJ_O_2yYDdEefweEU36oEO6FzmHNugTPoRi72m7XFMYFQrob7iec",
        desc:"Style and performance perfectly combine together to form this men's analog watch that is brought to you by the Edge Ceramic collection from Titan. Functional on a quartz ..."
    }   
]

function handleaddToCart(name)
    {
        alert(`Added to cart ${name}`)
    }
    return(
        <>
    
    {/* <div className="container">
            <div className="row">
                {plist.map(product => (
                    <div className="col-md-6">
                        <ProductDetails prdObj={product} and addToCart={handleaddToCart} />
                    </div>
                ))}
            </div>
        </div> */}
        <ProductDetails prdObj={plist} and addToCart={handleaddToCart} />
        </>
    )    
}
export default ProductList 