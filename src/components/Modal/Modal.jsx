import './_modal.scss'

const Modal = ({
  title,
  text,
  onClose // fonction setting state
}) => {
  return (
    <div className='blocker'>
      <div className="modal">
        <h2>{title}</h2>
        <p>{text}</p>
        <a href="#" onClick={onClose} className="close-modal" title='close modal'>x</a>
      </div>
    </div>
  )
}

export default Modal