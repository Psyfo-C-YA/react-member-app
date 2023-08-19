// src/components/EditItem.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/App.css';
import '../css/index.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeftLong,
  faImages,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  useEffect(() => {
    // Fetch data from local storage and find the item with the given id
    const storedData = JSON.parse(localStorage.getItem('crudData') || '[]');
    const itemToEdit = storedData.find((item) => item.id === id);

    if (itemToEdit) {
      setImage(itemToEdit.image);
      setName(itemToEdit.name);
      setJob(itemToEdit.job);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the edited item in local storage
    const storedData = JSON.parse(localStorage.getItem('crudData') || '[]');
    const updatedData = storedData.map((item) =>
      item.id === id ? { ...item, image, name, job } : item
    );
    localStorage.setItem('crudData', JSON.stringify(updatedData));

    // Navigate back to the home page
    navigate('/');
  };

  return (
    <div>
      <form className="add-form " onSubmit={handleSubmit}>
        <div className="form-control-img">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            size="lg"
            className="Member__Icon"
            onClick={() => navigate('/')}
          />
          <div className="Member-Upload__Img">
            <FontAwesomeIcon
              icon={faImages}
              size="xl"
              className="Member__Img-icon"
            />
            {image && (
              <img className="Member-Uploaded-Img" src={image} alt="" />
            )}
          </div>
          <div className="Member__AddImage-Box">
            <FontAwesomeIcon
              icon={faPlus}
              size="lg"
              className="Member-Upload__Img__icon"
            />
            <input
              className="Member_Choose-File-Input"
              type="file"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>

        <div className="form-control">
          <input
            type="text"
            placeholder="Full Names"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Job Title"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>

        <button type="submit" className="center-button">
          Edit Member
        </button>
      </form>
    </div>
  );
};

export default EditItem;
