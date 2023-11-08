import img1 from '../../../assets/fitnes.jfif'
import img2 from '../../../assets/img_1313.jfif'
import img3 from '../../../assets/giro-ditalia-202-2.jfif'
import img4 from '../../../assets/gaf_8796.jfif'


const Banner = () => {
    return (
        <div className="carousel h-96 w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-lg" />
    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
     <div className='text-white space-y-7 pl-4 w-1/3'>
     <h3 className='font-bold text-3xl '>Design your own gym</h3>
     <p className=''>Italian design meets superior equipment built for Olympic athletes. Your perfect home gym is served.</p>
     <button className="btn btn-success">View More</button>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
     <div className='text-white space-y-7 pl-4 w-1/3'>
     <h3 className='font-bold text-3xl '>Design your Football Club</h3>
     <p className=''>We partner with the most prestigious national and international football clubs, including the Italian and Brazilian National Football Teams, Juventus, Inter, Milan, and many others.</p>
     <button className="btn btn-success">View More</button>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide1" className="btn btn-circle mr-5 ">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
     <div className='text-white space-y-7 pl-4 w-1/3'>
     <h3 className='font-bold text-3xl '>Cycling</h3>
     <p className=''>Our experience in the world of cycling began with the historic MG TECHNOGYM team in the 1990s and continues today as Official Supplier to Jumbo Visma, which has chosen Technogym products and technology to support the training of its teams.</p>
     <button className="btn btn-success">View More</button>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
     <div className='text-white space-y-7 pl-4 w-1/3'>
     <h3 className='font-bold text-3xl '>Design your Basketball Club</h3>
     <p className=''>With the high-intensity effort all through the game, the importance of state-of-the-art athletic training is paramount. We partnered with the Olimpia Milano basketball team and Virtus Segafredo Bologna basketball team, empowering them with our products, technology and training solutions.</p>
     <button className="btn btn-success">View More</button>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;