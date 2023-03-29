import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'
import {GiArmoredBoomerang} from 'react-icons/gi'


const MyOrders = () => {
  const arr = [1,2,3,4,5];
  return (
    <section className='tableClass'>
      <main>
        <table>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Status</th>
                    <th>Item Qty</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>User</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                  arr.map((i)=>(
                <tr key={i}> 
                    <td>{i}</td>
                    <td>Processings{i}</td>
                    <td>22</td>
                    <td>₹{2000}</td>
                    <td>COD</td>
                    <td>Rahul</td>
                    <td>
                        <Link to={`/order/${1}`}>
                            <AiOutlineEye/>
                        </Link>
                        <button><GiArmoredBoomerang/></button>
                    </td>
                </tr>
                  ))
                  }
            </tbody>
        </table>
      </main>
    </section>
  )
}

export default MyOrders
