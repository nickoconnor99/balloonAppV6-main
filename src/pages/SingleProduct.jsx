import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const SingleProduct = (props) => {
    const [image, setImage] = useState()
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    useEffect(() => {
        setImage(props.product.image)
        setTitle(props.product.title)
        setPrice(props.product.price)
    }, [])

    return (
        <div>
            <div className="text-center font-bold text-lg ">
                <h2 className='capitalize tracking-wider'>{title}</h2>
            </div>

            <figure className='px-8 pt-8'>
                <img
                    src={image}
                    alt='Elf'
                    className='rounded-xl w-full object-cover'
                />
            </figure>
            <div className='card-body items-center text-center'>
                <h2 className='card-title capitalize tracking-wider'>Price: {price}</h2>
            </div>
        </div>
    )
}

export default SingleProduct


// <div className='card-body items-center text-center'>
//                 <h2 className='card-title capitalize tracking-wider'>{prod.title}</h2>

//             </div>

// <figure className='px-4 pt-4'>
//                 <img
//                     src={image}
//                     alt='Elf'
//                     className='rounded-xl h-64 md:h-48 w-full object-cover'
//                 />
//             </figure>