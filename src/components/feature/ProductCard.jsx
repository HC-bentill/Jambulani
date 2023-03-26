import React from 'react'
import productImage from '../../assets/images/product-medium.jpg'

const ProductCard = () => {
  return (
    <>
        <div className='hover:shadow-xl mr-3 pt-60' style={{backgroundImage: `url(${productImage})`}}>
            {/* <img src={productImage} alt="product image"/> */}
            <div className='border-[1px] border-slate-300 p-3 bg-white'>
                <p className='text-[#393A38] text-sm'>Manchester United 21-22 Home Shirt</p>
                <div className='mt-2'>
                    <small className='font-bold text-[18px]'>€30.00</small>
                    <small className='text-[#EE503E] line-through ml-1 text-[11px] font-light'>€89.95</small>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard