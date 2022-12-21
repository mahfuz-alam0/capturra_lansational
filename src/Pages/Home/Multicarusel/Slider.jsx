import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Slider = () => {

    const [images, setimages] = React.useState([]);

    React.useEffect(() => {
        fetch('https://capturra-lensational-server.vercel.app/examplse')
            .then(response => response.json())
            .then(json => setimages(json))
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='mb-16'>
            <Carousel responsive={responsive}>
                {
                    images.map((image) => <PhotoProvider key={image._id} speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                        <div className="foo px-3">
                            <PhotoView src={image.img}>
                                <img src={image.img} alt="" />
                            </PhotoView>
                        </div>
                    </PhotoProvider>
                    )
                }
            </Carousel>
        </div>
    );
};

export default Slider;