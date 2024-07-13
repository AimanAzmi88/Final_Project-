import { useState } from 'react';
import PropTypes from 'prop-types';

const Slot = ({ showModal, setShowModal, description, setDescription }) => {
  const [positions, setPositions] = useState({
    pos1: false,
    pos2: false,
    pos3: false,
    pos4: false,
    pos5: false,
  });
  const [date, setDate] = useState('');

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPositions((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Description: ${description}\nPositions: ${JSON.stringify(positions)}\nDate: ${date}`);
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-50 fixed inset-0"></div>
          <div className="bg-white p-6 rounded shadow-lg z-10 w-1/3">
            <h2 className="text-2xl mb-4">Enter Details</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full border border-gray-300 p-2 mb-4"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <div className="mb-4">
                <label className="block mb-2">Positions:</label>
                {['pos1', 'pos2', 'pos3', 'pos4', 'pos5'].map((pos) => (
                  <div key={pos} className="mb-2">
                    <input
                      type="checkbox"
                      name={pos}
                      checked={positions[pos]}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    <label>{pos}</label>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="block mb-2">Date:</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-gray-300 p-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

Slot.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default Slot;

