import './Footer.css'

export default function Footer() {

    return(
        <div className="footer">
            <div className='socialBlock'>
                <div>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</div>
                <img src='./inst.png'/>
            </div>
            <div className='phoneBlock'>
                <div>КОНТАКТНЫЕ ТЕЛЕФОНЫ</div>
                <div className='phoneText'>
                    <div>+375 29 292-29-29 (VEL)</div>
                    <div>+375 33 333-33-33 (МТС)</div>
                </div>
            </div>
            <div className='aboutBlock'>
                О НАС 
                <div className='aboutText'>
                    Индивидуальное изготовление EVA ковриков для вашего автомобиля
                </div>
            </div>
        </div>
    )
}