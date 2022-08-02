import React from 'react'
import { motion } from "framer-motion";


function Project() {
  return (
    <div className='p-div'>
      <motion.h1
    className='project-left'
    animate={{ rotate: 270 }}>Projects</motion.h1>
    </div>
    
  )
}

export default Project