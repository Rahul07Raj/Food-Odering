import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'

const MyOrders = () => {
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
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#ID</td>
                    <td>Processings</td>
                    <td>22</td>
                    <td>₹{2000}</td>
                    <td>COD</td>
                    <td>
                        <Link to={`/order/${1}`}>
                            <AiOutlineEye/>
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
      </main>
    </section>
  )
}

export default MyOrders
