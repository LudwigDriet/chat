import React, {useState , useEffect , useRef } from "react";
import socket from "./Socket";
import '../App.css'

const Chat = ({nombre}) =>{
    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes] = useState([]);

    console.log(mensajes)

    useEffect(() => {

       socket.emit('conectado',nombre)

    }, [nombre])

    useEffect(() => {

        socket.on('mensajes',mensaje =>{
            setMensajes([...mensajes,mensaje])
        })

        return ()=> {socket.off()}
     }, [mensajes])

     const divRef = useRef(null);
     useEffect(() => {
         divRef.current.scrollIntoView({dehavior:'smooth'})
     })


    const submit = (e) => {
        e.preventDefault();
        socket.emit('mensaje',nombre, mensaje)

        setMensaje('')

    }

    return (
        <div className='caja-chat'>
            <div className='chat'>
                {
                    mensajes.map((e,i)=> <div key={i}>{ !e.nombre? e.mensaje : e.nombre.charAt(0).toUpperCase() + e.nombre.slice(1) + ' : ' + e.mensaje}</div>)
                 }
               <div ref={divRef}></div>
            </div>
             <form onSubmit={submit} >
                 <input name="" id="" value={mensaje} onChange={e => setMensaje(e.target.value)} placeholder="Escriba su mensaje "></input>
                <button>Enviar</button>
            </form>
           
        </div>
    )
}

export default Chat;