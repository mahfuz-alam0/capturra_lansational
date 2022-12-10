import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import ServiceItems from './ServiceItems';

const Services = () => {

    const [services, set_services]= React.useState([])

    React.useEffect(() => {
        fetch('https://capturra-lensational-server.vercel.app/services')
            .then(res => res.json())
            .then(json => set_services(json))
    }, [])
    

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-8'>
            {
                services.map(data => <ServiceItems key={data._id} data={data} />)
            }
        </div>
    );
};

export default Services;