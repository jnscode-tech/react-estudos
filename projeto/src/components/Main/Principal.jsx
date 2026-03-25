import React from 'react'
import './Principal.css'

const Principal = () => {
    return (
        <main>

            <div className="LogoMain">
                <img src="/img/LogoMain.png" alt="lojinha" />
            </div>

            <div className="cards">

                {/* PRIMEIRO CARD */}
                <div className="card">
                    <h2>Blusa 1</h2>
                    <div className="img">
                        <img src="/img/blusa1.webp" alt="Blusa 1" className="b1" />
                    </div>
                    <p>Preta - Básica</p>
                    <p>Preço - R$89.90</p>
                </div>

                {/* SEGUNDO CARD */}
                <div className="card">
                    <h2>Blusa 2</h2>
                    <div className="img"></div>
                </div>

                {/* TERCEIRO CARD */}
                <div className="card">
                    <h2>Blusa 3</h2>
                    <div className="img"></div>
                </div>

                {/* QUARTO CARD */}
                <div className="card">
                    <h2>Blusa 4</h2>
                    <div className="img"></div>
                </div>

                {/* QUINTO CARD */}

                <div className="card">
                    <h2>Blusa 5</h2>
                    <div className="img"></div>
                </div>
            </div>

        </main>
    )
}

export default Principal