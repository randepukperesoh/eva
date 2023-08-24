
import './Eva.css'

export default function Eva({ setModal}) {
    return(
        <>
            <div className='eva'>
                <img className='logo' src='./Vector.svg'/>
                <div className='flex navigation'>
                    <div className='name' >EVARGUS</div>
                    <div className='flex navmenu'>
                        <div className='navItem'>отзывы</div>
                        <div className='navItem'>что это?</div>
                        <div className='navItem'>контакты</div>
                    </div>
                </div>
                <div className='evaDecsription'>
                    <span className='bigText'>Инновационные коврики для автомобиля</span>
                    <span className='smallText'>в вашем городе</span>
                    <button onClick={() => setModal(true)} className='orderBtn'>ЗАКАЗАТЬ</button>
                </div>
                <img className='cover' src='./cover.svg'/>
                <img width={319} className='undercover'src='./undercover.svg'/>
            </div>
        </>
    )
}
