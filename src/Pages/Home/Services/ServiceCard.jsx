
const ServiceCard = ({ service }) => {
    const {title, img, price} = service;
    return (
        <div className="card card-side w-full bg-base-100 shadow-xl pt-10 p-5">
            <figure><img src={img} alt="Movie" className="w-2/4 rounded-lg" /></figure>
         <div className="justify-end ">
         <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p>{price}$</p>
                </div>
                <div className="card-actions justify-end">
                
                    <button className="btn btn-primary">View Detail</button>
                    </div>
         </div>
             
            
        </div>
    );
};

export default ServiceCard;