import React from 'react'
import Link from 'next/link'
import styles from  '../styles/nav.module.css'
export default function Nav() {
    return (
        <nav className = {styles.navi}>
            <ul className = {styles.navUl}>
            <li className = {styles.navLi}> 
                <Link className = {styles.navLink} href = "/" >
                    <h4 className = {styles.navH4}>
                   home
                    </h4>
                </Link>
                </li>
                <li className = {styles.navLi}> 
                <Link className = {styles.navLink} href = "/about" >
                    <h4 className = {styles.navH4}>
                    about
                    </h4>
                </Link>
                </li>
                <li className = {styles.navLi}> 
                <Link className = {styles.navLink} href = "/buy" >
                    <h4 className = {styles.navH4}>
                   Buy
                    </h4>
                </Link>
                </li>
                <li className = {styles.navLi}> 
                <Link className = {styles.navLink} href = "/contact" >
                    <h4 className = {styles.navH4}>
                    Contact
                    </h4>
                </Link>
                </li>
             
            </ul>
               
        </nav>
    )
}
