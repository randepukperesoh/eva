import './Reviews.css'
import { useEffect, useState } from 'react'

export default function Reviews() {
    const [slider, setSlider] = useState(true)
    const [transX, setTransX] = useState(338)
    const [ transitionDuration, setTransitionDuration] = useState(300)

    let [currentCard, setCurrentCard] = useState(1);
    let [prevCurrentCard, setPrevCurrentCard] = useState(0);

    const cardsObj =[
        {
            text: 'Коврики супер!!! Качество на высшем уровне!!!Удачи и побольше заказов вам!!! Большое спасибо!',
            img: 'R2.jpg',
            name: 'Константин В.'
        },
        {
            text: 'Покупала у ребят коврики для Хундай солярис в подарок молодому человеку. Все очень понравилось. Буду советовать только вас.',
            img: 'R1.jpg',
            name: 'Мария Т.'
        },
        {
            text: 'Спасибо, все приехало, поставил. Результатом доволен, в машине супер! Заказывал на Ниссан.',
            img: 'R3.png',
            name: 'Николай П.'
        },
        {
            text: 'Покупала у ребят коврики для Хундай солярис в подарок молодому человеку. Все очень понравилось. Буду советовать только вас.',
            img: 'R1.jpg',
            name: 'Вера К.'
        },
        {
            text: 'Спасибо, все приехало, поставил. Результатом доволен, в машине супер! Заказывал на Ниссан.',
            img: 'R3.png',
            name: 'Александр Е.'
        }
        
    ]
    window.addEventListener('resize', () => {
        if(window.innerWidth > 1400){
            setSlider(true)
        }else{
            setSlider(false)
        }
    })
    let arrCard = cardsObj.map( (elem, id) => {
        return(
            <div key={'cardReviews' + id} className='ReviewsCard' style={currentCard === id ? {opacity:1} : prevCurrentCard === id ? {opacity:1} : null}>
                    <div className='textWrapper'>
                    <div className='hexagon'><img className='photoPeople' src={'./'+ elem.img}/></div>
                        <div className='textBlock'>{elem.text} </div>
                        <div className='border'></div>
                        <div className='author'>{elem.name}</div>
                    </div>
                </div>
        )
    })

    function nextSlide(){
        setTransitionDuration(300)
        currentCard != arrCard.length - 1 ? setCurrentCard(currentCard + 1) : setCurrentCard(0)
        currentCard != 4 ? setPrevCurrentCard(currentCard ) : setPrevCurrentCard(4)
        setTransX(transX + 676)
        if(transX > 2500) {
            setTransX(transX + 676)
            setTimeout(()=> {
                setTransitionDuration(0)
                setTransX(338)
            },300)
                
        }
    }

    useEffect(()=>{
        setInterval(()=>{
            nextSlide()
    }, 3000)
    })
    
    if(slider) {
        return(<>
            
            <div className="Reviews">
                <div className='ReviewsWrapperSlider'>
                    <div className='allCardsWrapper' style={{transform: `translateX(-${transX}px)`, transitionDuration: transitionDuration + 'ms'}}>
                        {arrCard[arrCard.length-1]}
                        {arrCard}
                        {arrCard.map((e, i) => 
                        i < 2 ? e : null)}
                    </div>
                </div>
            </div><div onClick={()=>nextSlide()}>next</div>
            </>
        )
        }
    return(
        <div className="Reviews">
            <div className='ReviewsWrapper'>
                {arrCard.map((elem, i) => {
                    return i < 3 ? elem : null
                })}
            </div>
        </div>
    )
}