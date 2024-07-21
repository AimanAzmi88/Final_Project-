import { useState } from 'react';

const CreateSlot = () => {
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
        body: JSON.stringify({ position: position, description: desc }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error posting to API:', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-screen-lg w-full h-full overflow-hidden p-4">
        <form className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <label className="block text-white text-lg mb-2">Description:</label>
            <input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              className="w-full p-2 text-black rounded"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-white text-lg mb-2">
              <input
                type="radio"
                value="pos1"
                checked={position === 'pos1'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Pos 1
            </label>
            <label className="block text-white text-lg mb-2">
              <input
                type="radio"
                value="pos2"
                checked={position === 'pos2'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Pos 2
            </label>
            <label className="block text-white text-lg mb-2">
              <input
                type="radio"
                value="pos3"
                checked={position === 'pos3'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Pos 3
            </label>
            <label className="block text-white text-lg mb-2">
              <input
                type="radio"
                value="pos4"
                checked={position === 'pos4'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Pos 4
            </label>
            <label className="block text-white text-lg mb-2">
              <input
                type="radio"
                value="pos5"
                checked={position === 'pos5'}
                onChange={handleOptionChange}
                className="mr-2"
              />
              Pos 5
            </label>
          </div>
          <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSlot;
