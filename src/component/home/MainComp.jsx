
import Banner from "./Banner.jsx"
import Slider from "./Slide.jsx"
// import "./Slide.css"
export default function MainComp(){
         return(
                  <div className="home_section">
<div className="banner_part">
<Banner/>
</div>
<div className="slide_part">
         <div className="left_slide">
                  <Slider title="Deal Of The Day"/>
         </div>
         <div className="right_slide">
                  <h4>Festival Latest Launches</h4>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="festival" />
                  <a href="#">See More</a>
         </div>

</div>
<Slider title="Today's Deal of the day"/>
<div className="center_img">
         <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="center image" />
</div>
<Slider title="Holi best seller"/>
<Slider title="60% of Product"/>

                  </div>
         )
}