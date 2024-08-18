'use client'
import React, { useEffect } from 'react'

export default function DataBg() {
    useEffect(() => {
        const elements = document.querySelectorAll('[data-background]')

        elements.forEach((element) => {
            element.style.backgroundImage = `url(${element.getAttribute('data-background')})`
        })
    }, [])
    return (
        <>

        </>
    )
}