
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import inageA from '../../../..../../../../../bistro-boss-restaurant-resources/assets/home/01.jpg'
import inageB from '../../../..../../../../../bistro-boss-restaurant-resources/assets/home/02.jpg'
import inageC from '../../../..../../../../../bistro-boss-restaurant-resources/assets/home/03.png'
import inageD from '../../../..../../../../../bistro-boss-restaurant-resources/assets/home/04.jpg'
import inageE from '../../../..../../../../../bistro-boss-restaurant-resources/assets/home/05.png'
import inageF from '../../../..../../../../../bistro-boss-restaurant-resources/assets/home/06.png'

const Banner = () => {
    return (
        <div data-aos="zoom-in-up " >
           <Carousel>
                <div>
                    <img src={inageA} />
                    
                </div>
                <div>
                    <img src={inageB} />
                    
                </div>
                <div>
                    <img src={inageC} />
                    
                </div>
                <div>
                    <img src={inageD} />
                    
                </div>
                <div>
                    <img src={inageE} />
                    
                </div>
                <div>
                    <img src={inageF} />
                    
                </div>
              
            </Carousel>
        </div>
    );
};

export default Banner;
