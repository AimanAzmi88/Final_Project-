import PropTypes from 'prop-types'

const ProfileEdit = ({ editFormData, onFormChange, onFormSubmit }) => {
  return (
    <div className='max-w-screen-lg h-screen w-full justify-between bg-slate-400'>
      <h1>Updating your Dota profile: like recalibrating MMR, but with more cosmetic flair.</h1>
      <form onSubmit={onFormSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">MMR:</label>
          <input
            type="text"
            name="mmr"
            value={editFormData.mmr}
            onChange={onFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Bio:</label>
          <input
            type="text"
            name="bio"
            value={editFormData.bio}
            onChange={onFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            name="username"
            value={editFormData.username}
            onChange={onFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">IGN:</label>
          <input
            type="text"
            name="ign"
            value={editFormData.ign}
            onChange={onFormChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};


ProfileEdit.propTypes = {
    editFormData: PropTypes.shape({
      mmr: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      ign: PropTypes.string.isRequired
    }).isRequired,
    onFormChange: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired
  };
export default ProfileEdit;
