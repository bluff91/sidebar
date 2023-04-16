import { FaTimes } from 'react-icons/fa'
import { useAppContext } from './Context'

const Modal = () => {
  const { toggleModal, closeModal } = useAppContext()

  return (
    <div
      className={`${
        toggleModal ? `modal-overlay show-modal` : 'modal-overlay'
      }`}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}
export default Modal
