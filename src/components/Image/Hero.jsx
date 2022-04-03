import axios from 'axios'
import React, { useState } from 'react'
import { ChromePicker } from 'react-color'
import { API } from '../../Backend'
import Modal from '../Modal'
import Svg from '../Svg'

const Hero = () => {

    const [primaryColor, setPrimaryColor] = useState("#445EE6")
    const [showColorPicker1, setShowColorPicker1] = useState(false)

    const handelColorPicker1 = () => {
        setShowColorPicker1(!showColorPicker1)
    }


  return (
    <section className='bg-secondary pt-5'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-8 col-sm-12 p-0 svg-container">
                    <Svg color={primaryColor} />
                    <img src="/assets/images/1.jpg" className='svg-image' alt="" />
                </div>
                <div className="col-lg-4 col-sm-12 px-3 px-lg-3 mt-3 mt-lg-0" style={{minHeight:"70vh"}}>
                    <h3 className='mb-3'>Please choose your colors</h3>
                    <div className="d-flex">
                        <div className='me-5'>
                            <h6>Primary</h6>
                            <div
                            className='hello rounded position-relative' 
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