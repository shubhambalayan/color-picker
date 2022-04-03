import axios from 'axios'
import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import { API } from '../../Backend'
import Modal from '../Modal'

const Hero = () => {

    const [primaryColor, setPrimaryColor] = useState("#ee8f69")
    const [secondaryColor, setSecondaryColor] = useState("#4f6486")
    const [showColorPicker1, setShowColorPicker1] = useState(false)
    const [showColorPicker2, setShowColorPicker2] = useState(false)
    const [name, setName] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handelColorPicker1 = () => {
        setShowColorPicker2(false)
        setShowColorPicker1(!showColorPicker1)
    }

    const handelColorPicker2 = () => {
        setShowColorPicker1(false)
        setShowColorPicker2(!showColorPicker2)
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setError("Please enter your name")
            setTimeout(() => {
                setError("")
            }, 5000);
        } else {
            setLoading(true)
            setError("")
            const config = {
                header: {
                  "Content-Type": "application/json",
                },
              };
            const data = {
                name,
                primaryColor,
                secondaryColor,
            }
            try {
                axios.post(`${API}/createorder`, {name, primaryColor, secondaryColor}, config)
                .then(res=>{
                    console.log("Order Successful", res)
                    setLoading(false)
                    document.getElementById("modal").click()
                })
            } catch (error) {
                setError("Some error occured, please try again later")
                setTimeout(() => {
                    setError("")
                }, 5000);
            }
        }
    }

  return (
    <section className='bg-secondary pt-5' style={{paddingBottom:"10rem"}}>
        <div className="container">
            <div className="row" style={{minHeight:"300px"}}>
                <div className="col-lg-8 col-sm-12">
                    <img src="https://demo.bootstrapious.com/varkala/2-0-1/img/product/detail-3-gray.jpg" className='w-100 rounded' alt="" />
                </div>
                <div className="col-lg-4 col-sm-12 px-3 px-lg-3 mt-3 mt-lg-0">
                    <h3 className='mb-3'>Please choose your colors</h3>
                    <div className="d-flex">
                        <div className='me-5'>
                            <h6>T-shirt</h6>
                            <div
                            className='rounded position-relative' 
                            style={{width:"100px", height:"100px", backgroundColor:`${primaryColor}`}}
                            onClick={handelColorPicker1}
                            ></div>
                            <ChromePicker 
                            color={primaryColor}
                            onChange={color=>setPrimaryColor(color.hex)}
                            disableAlpha={true}
                            className={showColorPicker1 ? 'd-block position-absolute mobile-color-picker' : 'd-none'}
                            />
                        </div>
                        <div>
                            <h6>Jeans</h6>
                            <div
                            className='rounded position-relative' 
                            style={{width:"100px", height:"100px", backgroundColor:`${secondaryColor}`}}
                            onClick={handelColorPicker2}
                            ></div>
                            <ChromePicker 
                            color={secondaryColor}
                            onChange={color=>setSecondaryColor(color.hex)}
                            disableAlpha={true} 
                            className={showColorPicker2 ? 'd-block position-absolute' : 'd-none'}
                            />
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className="col-12">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" className='form-control form-control-lg' required value={name} onChange={(e)=> setName(e.target.value)}  autoComplete="off" />
                        </div>
                        <div className="col-12">
                            <button onClick={handelSubmit} className='btn btn-primary mt-3'>{loading ? "Processing" : "Place Order"}</button>
                            {error && <p className='mt-3 text-danger'>{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal>
            Order Placed Successfully
        </Modal>
        <button type="button" class="d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" id='modal'>
        Launch modal
        </button>
    </section>
  )
}

export default Hero