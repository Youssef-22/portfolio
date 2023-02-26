import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constatnts'
import { useForm } from 'react-hook-form'
import "./contact.css"
function Contact() {
    const {
      register,
      trigger,
      formState : {errors}
    } = useForm();
    const onSubmit = async (e)=>{
      const isvalid = await trigger();
      if(!isvalid){
        e.preventDefault();
      }
    }
  return (
    <div className='contact' id='contact'>
     <motion.div 
      className='left'
      initial="hidden"
      whileInView="visible"
      viewport={{once:true,amount : 0.5}}
      transition={{delay : 0.2 ,duration:0.5}}
      variants={{
        hidden: {opacity:0,y:50},
        visible : {opacity:1,y:0}
      }}
      >
        <img src={images.contact}/>
      </motion.div>
      <div className='right'>
          
            <h1><span className="spn bg__color2">Contact me</span>{" "}To get started</h1>
            <div className='line-container'>
              <div className='line bg__color2'></div>.
              <motion.div 
              className='form' 
              initial="hidden"
              whileInView="visible"
              viewport={{once:true,amount : 0.5}}
              transition={{delay : 0.4 ,duration:0.5}}
              variants={{
                hidden: {opacity:0,y:50},
                visible : {opacity:1,y:0}
              }}
              >
                  <form 
                  target='_blank'
                  onSubmit={onSubmit}
                  action="https://formsubmit.co/c019927b6286dec95889c67025d52643"
                  method='POST'
                  >
                      <input className='inputs' type="text" placeholder='NAME' 
                      {...register("name",{
                        required:true,
                        maxLength:100,
                      })}
                      /> 
                      {errors.name && (
                        <p className='warning'>
                          {errors.name.type === "required" && "This field is required"}
                          {errors.name.type === "maxLength" && "max length is 100 char"}
                        </p>
                      )}
                    <input className='inputs' type="text" placeholder='EMAIL' 
                      {...register("email",{
                        required:true,
                        pattern : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                      /> 
                      {errors.email && (
                        <p className='warning'>
                          {errors.email.type === "required" && "This field is required"}
                          {errors.email.type === "pattern" && "Invalid email address"}
                        </p>
                      )}
                      <textarea className='inputs' type="text" placeholder='Message'
                      rows="4"
                      cols="50"
                      {...register("message",{
                        required:true,
                        maxLength:2000,
                      })}
                      /> 
                      {errors.message && (
                        <p className='warning'>
                          {errors.message.type === "required" && "This field is required"}
                          {errors.message.type === "maxLength" && "Max length is 200 char"}
                        </p>
                      )}

                      <button type='submit' className='btn bg__color2'>
                        Send me a meassage
                      </button>
                  </form>
                </motion.div>

            </div>
      </div>
    </div>
  )
}

export default Contact