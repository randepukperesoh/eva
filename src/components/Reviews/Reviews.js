import './Reviews.css'

export default function Reviews() {
    const cardsObj =[
        {
            text: 'Коврики супер!!! Качество на высшем уровне!!!Удачи и побольше заказов вам!!! Большое спасибо!',
            img: 'R2.jpg',
            name:'Константин В.'
        },
        {
            text: 'Покупала у ребят коврики для Хундай солярис в подарок молодому человеку. Все очень понравилось. Буду советовать только вас.',
            img: 'R1.jpg',
            name:'Вера К.'
        },
        {
            text: 'Спасибо, все приехало, поставил. Результатом доволен, в машине супер! Заказывал на Ниссан.',
            img: 'R3.png',
            name:'Николай П.'
        }
    ]

    let arrCard = cardsObj.map( (elem, id) => {
        return(
            <div key={'cardReviews' + id} className='ReviewsCard'>
                    <div className='textWrapper'>
                    <div className='hexagon'><img className='photoPeople' src={'./'+ elem.img}/></div>
                        <div className='textBlock'>{elem.text} </div>
                        <div className='border'></div>
                        <div className='author'>{elem.name}</div>
                    </div>
                </div>
        )
    })
    return(
        <div className="Reviews">
            <div className='ReviewsWrapper'>
                {arrCard}
            </div>
        </div>
    )
}