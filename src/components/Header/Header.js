import './Header.css'

export default function Header() {

    return(
        <header className="header">
            <div className='headerItem'>
                <img src='./phone.svg'/>
                <div className='phone'>
                    <div>+375 29 292-29-29 (VEL)</div>
                    <div>+375 33 333-33-33 (МТС)</div>
                </div>
            </div>
            <div className='headerItem'>
                <img src='./pin.svg'/>
                <div>ваш город</div>
                
            </div>
            <div className='headerItem'>
                <img src='./inst.svg'/>
                <div className='myInst'>посетите нашу страницу</div>
            </div>
        </header>
    )
}