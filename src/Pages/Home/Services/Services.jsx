import { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";
import Banner from "../Banner/Banner";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div>
            <Banner></Banner>
            <div className="text-center pt-12">
                <h3 className="text-5xl text-orange-600 pb-4">Our Services</h3>
                <h3 className="text-4xl pb-3">Partners on Board Supporting Our Mission and Yours</h3>
                <p className="text-2xl">Providing new revenue streams and business opportunities for AFS members.</p>
            </div>
            <div className="w-3/4 ">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;