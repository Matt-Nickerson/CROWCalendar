'use client'
import React from "react"
import { useState } from 'react'

export default function Sidebar() {
    
    const [color, setColor] = useState<boolean>(false);

    function handleFilterOpen() {
        
    }
    
    return (
        <nav className="Sidebar">
            <header>Calendar Options</header>
            <button onClick={handleFilterOpen}>Filters</button>
        </nav>
    )
}