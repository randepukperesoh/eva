import './About.css'

export default function About() {
    
    return(
        <div className='About'>
            <h2> Что такое <span>EVA</span> коврики?</h2>
            <img className='fon' src='fon.svg'/>
            <div className='cardWraper'>
                <div className='cardAbout'>
                    <img src='./about1.jpg'/>
                    <div className='cardLabel'>МАТЕРИАЛ</div>
                    <div className='cardText'>
                        Коврики EVA всесезонные и отличаются уникальной поверхностью материала с ячейками ромбовидной формы. Из-за чего вода не проливается при изъятии ковра и не плещется при езде. Коврики воду не пропускают.
                    </div>
                </div>
                <div className='cardAbout'>
                    <img src='./about2.jpg'/>
                    <div className='cardLabel'>ОТЛИЧИЯ</div>
                    <div className='cardText'>
                        Резиновые коврики загибаются и лезут на педали. EVA коврики такого не допустят! Специальные липучки держат его в одном положении. При желании, для водителя устанавливается подпятник из рельефного алюминия.
                    </div>
                </div>
                <div className='cardAbout'>
                    <img src='./about3.jpg'/>
                    <div className='cardLabel'>РАСЦВЕТКА</div>
                    <div className='cardText'>
                        Автомобильные коврики EVA можно заказать и в индивидуальных размерах и в разных цветах, которые комбинируется на выбор покупателя с такими же цветами окантовочной полипропиленовой ременной ленты.
                    </div>
                </div>
            </div>
        </div>
    )
}