import './Modal.css'

export default function Modal({setModal}) {
    
    return(
        <div onClick={(e)=>setModal(false)} className="modal">
            <div onClick={(e)=> e.stopPropagation()} className='modalForm'>
                <h2 className='formLabel'>ФОРМА ЗАЯВКИ</h2>
                <div>
                    <input className='smallInput' type='text' placeholder='Ваше имя'></input>
                    <input className='smallInput' type='text' placeholder="Ваш e-mail"></input>
                </div>
                <input className='bigInput' type='text' placeholder="Ваше сообщение (марка автомобиля, цвет ковриков, номер телефона)"></input>
                <button className='sendBtn'>отправить</button>
            </div>
        </div>
    )
}