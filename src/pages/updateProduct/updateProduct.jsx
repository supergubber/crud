import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { useContext } from 'react'

function UpdateProduct() {
  const context = useContext(myContext)
  const { products, setProducts, editProducts } = context

  return (
    <div>
      <div>
        <div className='flex items-center justify-center h-screen '>
          <div className='px-8 py-8 bg-gray-800 rounded-xl w-80 lg:w-96'>
            <div className='flex items-center mb-4 space-x-2'>
              <Link to={'/'}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </Link>

              <h1 className='text-xl font-bold text-center text-white'>
                Update Product
              </h1>
            </div>
            <div>
              <input
                value={products.title}
                onChange={(e) =>
                  setProducts({ ...products, title: e.target.value })
                }
                type='text'
                name='title'
                className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                placeholder='Product Title'
              />
            </div>
            <div>
              <input
                value={products.price}
                onChange={(e) =>
                  setProducts({ ...products, price: e.target.value })
                }
                type='text'
                name='price'
                className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                placeholder='Product Price'
              />
            </div>
            <div>
              <input
                value={products.imageUrl}
                onChange={(e) =>
                  setProducts({ ...products, imageUrl: e.target.value })
                }
                type='text'
                name='imageUrl'
                className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                placeholder='Product Image url'
              />
            </div>
            <div>
              <input
                value={products.category}
                onChange={(e) =>
                  setProducts({ ...products, category: e.target.value })
                }
                type='text'
                name='category'
                className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                placeholder='Product Category'
              />
            </div>
            <div className='flex justify-center mb-3 '>
              <button
                onClick={editProducts}
                className='w-full px-2 py-2 font-bold text-white bg-orange-500 rounded-lg '
              >
                Update Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct
