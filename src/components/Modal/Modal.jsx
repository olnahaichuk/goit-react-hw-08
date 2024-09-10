import css from './Modal.module.css'
import ReactDOM from 'react-dom'

const Modal = ({ onClose, onConfirm }) => {
    const handleClose = evt => {
        if( evt.target === evt.currentTarget){
            onClose();
        }
}
    return ReactDOM.createPortal (
    <div className={css.overlay} onClick={handleClose}>
            <div className={css.modal}>
                <p>Ви впевнені?</p>
                <div className={css.buttons}
                >
                    <button onClick={onConfirm}
                    className={css.ConfirmBtn}>Так</button>
                    <button onClick={onClose}
                    className={css.CloseBtn}>Ні</button>
                </div>
                
      </div>
    </div>, document.body
  )
}

export default Modal
