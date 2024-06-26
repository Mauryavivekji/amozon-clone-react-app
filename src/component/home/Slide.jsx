import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Divider from '@mui/material/Divider';
import { products } from "./productData";
import "./Slide.css"
const responsive = {
         desktop: {
           breakpoint: { max: 3000, min: 1024 },
           items: 3,
          
         },
         tablet: {
           breakpoint: { max: 1024, min: 464 },
           items: 2,
           
         },
         mobile: {
           breakpoint: { max: 464, min: 0 },
           items: 1,
          
         }
       };
export default function Slider({title}){
      
         return(
                  <div className="products_section">
<div className="products_deal">
<h3>{title}</h3>
<button className="view_btn">View All</button>
</div>
<Divider/>
<Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"

         >{ 
products.map((e)=>{
         return(
                  <div className="products_items">
                  <div className="product_img">
                      <img src={e.url} alt="productitem" />
                  </div>
                  <p className='products_name'>{e.title.shortTitle}</p>
                  <p className='products_offer'>{e.discount}</p>
                  <p className='products_explore'>{e.tagline}</p>
              </div>     
         )
}

)
}
</Carousel>
                  </div>
         )
}
