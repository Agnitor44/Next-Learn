import React from 'react'
import Nav from './Nav'
import styles from '../styles/lay.module.css'
export default function Layaout({children}) {
    return (
        <>
        
          <Nav/>  
          <div className = {styles.page}>
              {children}
          </div>

        </>
    )
}
