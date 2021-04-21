import React from 'react'
import Style from '../assets/styles/footer.module.scss'

export function FooterComponent(){

    // Footer component with names
    return(
        <footer className={Style.footer}>
            <p>Photo by 
                <a href="https://unsplash.com/@jeremyperkins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeremy Perkins</a> on <a href="https://unsplash.com/s/photos/stars?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> - Star Wars API by <a href="https://swapi.dev/">SWAPI</a> - Code by <a href="https://www.kasperfrydensberg.dk">Kasper Frydensberg</a>
            </p>
        </footer>
    )
}