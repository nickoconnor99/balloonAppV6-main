import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const SingleProduct = (props) => {
    const [image, setImage] = useState()
    const [title, setTitle] = useState()
    useEffect(() => {
        setImage(props.product.image)
        setTitle(props.product.title)
    }, [])

    return (
        <div>
            <div className='card-body items-center text-center'>
                <h2 className='card-title capitalize tracking-wider'>{title}</h2>
            </div>

            <figure className='px-4 pt-4'>
                <img
                    src={image}
                    alt='Elf'
                    className='rounded-xl w-full object-cover'
                />
            </figure>
            <Link to='/'>Home</Link>
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