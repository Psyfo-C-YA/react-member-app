// src/components/Home.js
import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import '../css/App.css';
import '../css/index.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [data, setData] = useState([]);
  // const history = useHistory();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from local storage and update the 'data' state
    const storedData = JSON.parse(localStorage.getItem('crudData') || '[]');
    setData(storedData);
  }, []);

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem('crudData', JSON.stringify(updatedData));
  };

  return (
    <div className="container">
      <button className="AddMember__Btn" onClick={() => navigate('/add')}>
        Add Member
      </button>
      <div>
        <ul>
          {data.map((item, index) => (
            <li key={index} className={'Member__Container'}>
              <img className="Member__Img" src={item.image} alt={item.name} />
              <div className="Member__Text">
                <p> {item.name}</p>
                <p> {item.job}</p>
              </div>
              <div className="Member__Icons">
                <FontAwesomeIcon
                  icon={faPencil}
                  size="lg"
                  className="Member__Icon"
                  onClick={() => navigate(`/edit/${index}`)}
                />

                <FontAwesomeIcon
                  icon={faTrashCan}
                  size="lg"
                  className="Member__Icon"
                  onClick={() => {
                    handleDelete(index);
                    window.location.reload();
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
