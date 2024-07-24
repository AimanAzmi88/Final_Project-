import PropTypes from 'prop-types';

const PopupMessage = ({ isOpen, onClose, title, message, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md p-4 flex items-center justify-center">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{message}</p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              if (onConfirm) onConfirm();
              onClose();
            }}
            className="py-2 px-4 bg-button text-black font-bold hover:border-2 border-black rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

PopupMessage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func, // Optional
};

export default PopupMessage;
