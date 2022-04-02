import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API } from '../Backend'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Listing = () => {

  const [orders, setOrders] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllOrders()
  }, [])
  

  const getAllOrders = () => {
    try {
      axios.get(`${API}/getorders`)
      .then(res=>{
        setOrders(res.data.allOrders.reverse())
        setLoading(false)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const data = [
    {primaryColor:"#445EE6", secondaryColor:"#EC256B", name:"Shubham Balayan"},
    {primaryColor:"#445EE6", secondaryColor:"#EC256B", name:"Shubham Balayan"},
    {primaryColor:"#445EE6", secondaryColor:"#EC256B", name:"Shubham Balayan"},
    {primaryColor:"#445EE6", secondaryColor:"#EC256B", name:"Shubham Balayan"},
  ]

  return (
      <div className='bg-secondary text-dark position-relative overflow-hidden' style={{minHeight:"100vh"}}>
        <Navbar/>
        <section className='bg-secondary pt-5' style={{paddingBottom:"7rem"}}>
          <div className="container">
            <div className="row px-3">
              <h2>All Orders</h2>
              {loading ? <div className='d-flex justify-content-center align-items-center' style={{height:"60vh"}}>
                <div class="spinner-border text-dark" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div> 
              : orders.length!==0 ? <div>
              {orders.map((item, index)=>(
                <div className="col-12 bg-white shado-3 px-5 py-4 py-lg-3 d-lg-flex d-block align-items-center justify-content-between flex-wrap mt-4 border-hover" key={index} style={{borderRadius:".75rem"}}>
                  <h6 className='mb-0 text-center'>{item.name}</h6>
                  <div className='d-flex justify-content-lg-end justify-content-center mt-3 mt-lg-0'>
                    <div className='me-4 rounded-circle' style={{height:"50px", width:"50px", backgroundColor:`${item.primaryColor}`}}></div>
                    <div className='rounded-circle' style={{height:"50px", width:"50px", backgroundColor:`${item.secondaryColor}`}}></div>
                  </div>
                </div>
              ))}
            </div>
            : <div>No orders yet</div>
            }
            </div>
          </div>
        </section>
        <Footer/>
      </div>
  )
}

export default Listing