import { useContext } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'

function ProductTable() {
  const context = useContext(myContext)
  const { allProducts, deleteProduct, editProductHandle, search, setSearch } =
    context

  const allProductFilter = allProducts.filter((obj) =>
    obj.title.toLowerCase().includes(search)
  )
  console.log(allProducts)
  return (
    <div>
      <div className='flex items-center justify-center h-screen '>
        <div className='container mx-auto max-w-7xl'>
          <div className='relative overflow-x-auto shadow-md sm:rounded-xl'>
            <div className=' bg-[#2f3640] w-[50.1em] lg:w-full flex items-center justify-between p-2'>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type='text'
                className='w-80 py-1.5 rounded-md px-2 outline-none shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] text-white bg-gray-600 placeholder-gray-300'
                placeholder='Search here'
              />
              <div className='flex items-center space-x-2'>
                <img className='w-9' src='/img/react.png' alt='' />
                <h1 className='text-2xl font-semibold text-white'>
                  React Firebase CRUD{' '}
                </h1>
              </div>
              <Link to={'/addproduct'}>
                <button className=' bg-gray-600 shadow-md px-6 py-1.5 rounded-md font-bold text-white'>
                  Add Product
                </button>
              </Link>
            </div>

            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
              <thead className='text-xs text-gray-100 uppercase bg-[#353b48] '>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    S.No.
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Product Image
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Product name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Price
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Category
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Date
                  </th>

                  <th scope='col' className='px-6 py-3'>
                    Action
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Action
                  </th>
                </tr>
              </thead>

              {allProductFilter.length > 0 ? (
                allProductFilter.map((item, index) => {
                  const { title, price, imageUrl, category, date } = item
                  return (
                    <tbody key={index}>
                      <tr className='text-white bg-gray-700 border-b '>
                        <td className='px-6 py-4'>{index + 1}</td>
                        <td className='px-6 py-4'>
                          <img className='w-20' src={imageUrl} alt='' />
                        </td>
                        <td className='px-6 py-4'>{title}</td>
                        <td className='px-6 py-4'>₹{price}</td>
                        <td className='px-6 py-4'>{category}</td>
                        <td className='px-6 py-4'>{date}</td>
                        <td className='px-6 py-4'>
                          <a
                            className='px-4 py-1 font-medium text-black bg-red-300 rounded-lg cursor-pointer '
                            onClick={() => deleteProduct(item)}
                          >
                            Del
                          </a>
                        </td>
                        <td className='px-6 py-4'>
                          <Link
                            to={'/updateproduct'}
                            onClick={() => editProductHandle(item)}
                            className='px-4 py-1 font-medium text-black bg-green-300 rounded-lg cursor-pointer'
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  )
                })
              ) : (
                <h1 className=' font-bold text-white relative left-[260%]'>
                  {' '}
                  😂Product Not Found 🤪
                </h1>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTable
