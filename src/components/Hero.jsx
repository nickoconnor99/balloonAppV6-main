import { Link } from "react-router-dom";
import hero1 from '../assets/397492507_267421149586508_6988846565487064728_n.jpg'
import hero2 from '../assets/397526804_263713576623932_2944288645324919698_n.jpg'
import hero3 from '../assets/20231213_170002.jpg'
import hero4 from '../assets/istockphoto-1463458517-2048x2048.jpg'
const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-24 items-center'>
            <div>
                <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
                    We are changing the way people shop
                </h1>
                <p className='mt-8 max-w-xl text-lg leading-8'>
                    🎈PowPow balloons by Paulina
                    🎈Any occasion, big or small
                    🎈 Limerck and surrounding areas
                    🎈 DM for availability
                </p>
                <div className='mt-10'>
                    <Link to='/product' className='btn btn-primary'>
                        Our Products
                    </Link>
                </div>
            </div>
            <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box '>
                {carouselImages.map((image) => {
                    return (
                        <div key={image} className='carousel-item'>
                            <img
                                src={image}
                                className='rounded-box h-full w-80 object-cover'
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Hero;
