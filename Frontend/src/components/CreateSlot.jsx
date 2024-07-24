import { useState } from 'react';
import PropTypes from 'prop-types';

const CreateSlot = ({ onFormSubmit }) => {
  const [position, setPosition] = useState('');
  const [description, setDescription] = useState('');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setPosition(selectedValue);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postToApi(position, description);
    if (onFormSubmit) {
      onFormSubmit(position, description);
    }
  };

  const postToApi = async (option, desc) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/slot', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ position: option, description: desc }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();

    } catch (error) {
      console.error('Error posting to API:', error);
    }
  };

  return (
    <div className="fixed z-1 left-1/2 transform -translate-x-1/2 bottom-10 flex justify-center items-center min-h-screen">
      <div className="max-w-lg  bg-form p-6 shadow-bold">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Create a Slot</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">Description:</label>
            <input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter slot description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">Position:</label>
            {['Safelane', 'Midlane', 'Offlane', 'Support', 'Hard Support'].map((pos) => (
              <label key={pos} className=" text-gray-800 mb-2 flex items-center">
                <input
                  type="radio"
                  value={pos}
                  checked={position === pos}
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                <span>{pos}</span>
              </label>
            ))}
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

CreateSlot.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default CreateSlot;
