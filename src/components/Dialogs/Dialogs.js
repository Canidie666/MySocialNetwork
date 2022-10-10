import React from "react";
import s from "./Dialogs.module.css";
import DialogItems from "./DialogItems/DialogsItems";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements =
        props.state.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);

    let messagesElements =
        props.state.messages.map(m => <Message message={m.message} id={m.id}/>);

    let addMessageElements = React.createRef()

    let addMessage = () => {
        let text = addMessageElements.current.value
        alert(text)
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.b}>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div>
                    <textarea className={s.textArea} ref={addMessageElements}></textarea>
                    <button onClick={addMessage}>Write message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;