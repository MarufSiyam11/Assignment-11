import img1 from '../../../assets/fitness-and-sports.jpg'
import img2 from '../../../assets/about/cotch.jpg'
import img3 from '../../../assets/about/cycle_14.jpg'
import img4 from '../../../assets/about/download.jfif'
import img5 from '../../../assets/about/fitness-sport-training-gym.jpg'
import img6 from '../../../assets/about/sport-science-.jpg'
import img7 from '../../../assets/about/weights-for-weight-lo.jpg'
const About = () => {
    return (
        <div>
            <div className="card w-full h-96 bg-base-100 shadow-xl image-full">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body items-center">
    <h2 className="text-white text-5xl font-bold text-center">ABOUT</h2>
    <p className='text-white text-3xl font-bold'>PERSONAL TRAINER & <br /> FITNESS  CERTIFICATIONS</p>
  </div>
</div>
            <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
<div className='pb-3 px-4'>
    <img src={img2} alt="" />
    <h3 className='text-center'>MASTER PERSONAL TRAINER CERTIFICATION</h3>
</div>
<div>
    <img src={img3} alt="" />
    <h3 className='text-center'>MASTER PERSONAL TRAINER CERTIFICATION</h3>
</div>
<div>
    <img src={img4} alt="" />
    <h3 className='text-center'>MASTER PERSONAL TRAINER CERTIFICATION</h3>
</div>
<div>
    <img src={img5} alt="" />
    <h3 className='text-center'>MASTER PERSONAL TRAINER CERTIFICATION</h3>
</div>
<div>
    <img src={img6} alt="" />
    <h3 className='text-center'>MASTER PERSONAL TRAINER CERTIFICATION</h3>
</div>
<div>
    <img src={img7} alt="" />
    <h3 className='text-center'>MASTER PERSONAL TRAINER CERTIFICATION</h3>
</div>
<div>
    <img src={img2} alt="" />
    <h3 className='text-center'>MASTER PERSONAL TRAINER CERTIFICATION</h3>
</div>
            </div>
        </div>
    );
};

export default About;