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
            <div id="slide1" className="carousel-item relative w-full pb-10">
    <img src={img1} className="w-full h-96 rounded-lg"/>
    <div className="absolute  justify-center space-y-7 transform -translate-y-1/2 left-5 right-5 top-1/2">
    <h2 className="text-black text-5xl font-bold text-center">ABOUT</h2>
    <p className='text-black text-3xl font-bold text-center'>PERSONAL TRAINER & <br /> FITNESS  CERTIFICATIONS</p>
   </div>
  </div> 
   
   <div className='pb-8'>
    <h3 className="text-white text-5xl font-bold text-center">TRENDING CERTIFICATIONS</h3>
   </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
<div className='pb-3 px-4'>
    <img src={img2} alt="" className='w-96 h-80 rounded-lg pb-4'  />
    <h3 className='text-center text-2xl pb-4'> Personal Trainer </h3>
</div>
<div>
    <img src={img3} alt="" className='w-96 h-80 rounded-lg pb-4' />
    <h3 className='text-center text-2xl pb-4'>Cycling Instructor</h3>
</div>
<div>
    <img src={img4} alt="" className='w-96 h-80 rounded-lg pb-4' />
    <h3 className='text-center text-2xl pb-4'>Master Personal Trainer</h3>
</div>
<div>
    <img src={img5} alt="" className='w-96 h-80 rounded-lg pb-4' />
    <h3 className='text-center text-2xl pb-4'>Group Fitness & Bootcamp Instructor</h3>
</div>
<div>
    <img src={img6} alt="" className='w-96 h-80 rounded-lg pb-4' />
    <h3 className='text-center text-2xl pb-4'>Master Group Fitness Instructor</h3>
</div>
<div>
    <img src={img7} alt="" className='w-96 h-80 rounded-lg pb-4' />
    <h3 className='text-center text-2xl pb-4'>Master Heath & Wellness Coach</h3>
</div>

            </div>
        </div>
    );
};

export default About;