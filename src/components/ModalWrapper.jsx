const ModalWrapper = ({ show, onClose, children }) => {
    if (!show) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-[#1e1e1e] text-white p-6 rounded-2xl w-full max-w-md relative">
          <button onClick={onClose} className="absolute top-2 right-3 text-white text-xl font-bold">×</button>
          {children}
        </div>
      </div>
    );
  };
  
  export default ModalWrapper;
  