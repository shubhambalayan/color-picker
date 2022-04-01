import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import Modal from '../Modal'

const Hero = () => {

    const [priamryColor, setPrimaryColor] = useState("#445EE6")
    const [secondaryColor, setSecondaryColor] = useState("#EC256B")
    const [showColorPicker1, setShowColorPicker1] = useState(false)
    const [showColorPicker2, setShowColorPicker2] = useState(false)
    const [name, setName] = useState("")
    const [error, setError] = useState("")

    const handelColorPicker1 = () => {
        setShowColorPicker2(false)
        setShowColorPicker1(!showColorPicker1)
    }

    const handelColorPicker2 = () => {
        setShowColorPicker1(false)
        setShowColorPicker2(!showColorPicker2)
    }

    const handelSubmit = () => {
        if (!name) {
            setError("Please enter your name")
            setTimeout(() => {
                setError("")
            }, 5000);
        } else {
            setError("")
            const data = {
                priamryColor: priamryColor,
                secondaryColor: secondaryColor,
                name:name
            }
            console.log("Submititng request", data)
            document.getElementById("modal").click()
        }
    }

  return (
    <section className='bg-secondary pt-5' style={{paddingBottom:"7rem"}}>
        <div className="container">
            <div className="row" style={{minHeight:"300px"}}>
                <div className="col-lg-6 col-sm-12">
                    <img src="https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-100 rounded' alt="" />
                </div>
                <div className="col-lg-6 col-sm-12 px-3 px-lg-3 mt-3 mt-lg-0">
                    <h3 className='mb-3'>Please choose your colors</h3>
                    <div className="d-flex">
                        <div className='me-5'>
                            <h6>Primary</h6>
                            <div
                            className='rounded position-relative' 
                            style={{width:"100px", height:"100px", backgroundColor:`${priamryColor}`}}
                            onClick={handelColorPicker1}
                            ></div>
                            <ChromePicker 
                            color={priamryColor}
                            onChange={color=>setPrimaryColor(color.hex)}
                            disableAlpha={true}
                            className={showColorPicker1 ? 'd-block position-absolute mobile-color-picker' : 'd-none'}
                            />
                        </div>
                        <div>
                            <h6>Secondary</h6>
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
                        <div className="col-md-6 col-sm-12">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" className='form-control form-control-lg' required value={name} onChange={(e)=> setName(e.target.value)}  autoComplete="off" />
                        </div>
                        <div className="col-12">
                            <button onClick={handelSubmit} className='btn btn-primary mt-3'>Place Order</button>
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