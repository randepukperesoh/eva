import './Header.css'

export default function Header() {

    return(
        <header className="header">
            <div className='headerItem'>
                <img src='./phone.svg'/>
                <div className='phone'>
                    <div>{'+375 29 292-29-29 (VEL)'}</div>
                    <div>{'+375 33 333-33-33 (МТС)'}</div>
                </div>
            </div>
            <div className='headerItem'>
                <img src='./pin.svg'/>
                ваш город
            </div>
            <div className='headerItem'>
                <img src='./inst.svg'/>
                <span>посетите нашу страницу</span>
            </div>
        </header>
    )
}