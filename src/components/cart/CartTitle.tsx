const CartTitle = ({productsLength = 0}) => {
  return (
    <div className='flex-ic gap-2'>
        <p className='text-lg font-bold text-slate-700'>
            <strong>Your Shopping Cart</strong>
        </p>
        <p className='text-slate-600 '>
            {` ${productsLength.toLocaleString()} products`}
        </p>
    </div>
  )
}

export default CartTitle;