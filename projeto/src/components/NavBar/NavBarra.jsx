import React from 'react'
import './NavBarra.css'

const NavBarra = () => {

    return (
        <header className="header">

            <nav class="menu">
                <div class="logo_img">
                <img src="/img/Designer2.png" alt="Logo" className="imgLogo" />
                </div>

                <ul class="nav-links">
                    <li><a href="#">Roupas</a></li>
                    <li><a href="#">Acessórios</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBarra


