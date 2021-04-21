import React from 'react'
import Style from '../assets/styles/header.module.scss'

export function HeaderComponent(){

    // Header component with headline
    return(
        <header className={Style.header}>
            <h1>Star Wars Codex</h1>
        </header>
    )
}