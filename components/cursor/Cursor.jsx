"use client"
import React from 'react'
import { useEffect } from 'react'
import { gsap } from 'gsap'

const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor')
        const cursorText = document.querySelector('.cursor-text') 
        const links = document.querySelectorAll('a')
        
        console.log(links);
        
        const handleMouseMove = (e) => {
           const { clientX, clientY } = e
           gsap.to(cursor, { x: clientX, y: clientY })
        }

        const onMouseEnterLink = (e) => {
            const link = e.target
            if (link.classList.contains('view')) {
                gsap.to(cursor, {scale: 2})
                cursorText.style.display = 'block'
            }else{
                gsap.to(cursor, {scale: 2})
            }
        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {scale: 1})
            cursorText.style.display = 'none'
        }


        document.addEventListener('mousemove', handleMouseMove)
        links.forEach(link => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })
    })
  return (
    <div id="custom-cursor" className='custom-cursor'>
        <span className='cursor-text'></span>
    </div>
  )
}

export default Cursor