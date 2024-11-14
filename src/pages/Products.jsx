import data from "../data"
import { Link, useLoaderData } from "react-router-dom";
import SingleProduct from './SingleProduct'
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {
    const data2 = useLoaderData()
    console.log(data2)
    const products = data;

    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
            {products.map((prod) => {
                return (
                    <Link to={`/product/${prod.id}`}>
                        <SingleProduct product={prod}></SingleProduct>
                    </Link>
                )
            })}
            <Link to='/home'></Link>
        </div>


    )
}

export default Products
