import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import ServiceItems from './ServiceItems';

const Allservices = () => {
    useTitle('All Services')

    const [services, set_services] = React.useState([])

    React.useEffect(() => {
        fetch('https://capturra-lensational-server.vercel.app/all_services')
            .then(res => res.json())
            .then(json => set_services(json))
    }, [])

    console.log(services);

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-16 max-w-screen-xl mx-auto'>
            {
                services.map(data => <ServiceItems key={data._id} data={data} />)
            }
        </div>
    );
};

export default Allservices;