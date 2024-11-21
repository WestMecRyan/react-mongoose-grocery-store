import styles from '../styles/modal.module.css';

function Modal({ children, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
