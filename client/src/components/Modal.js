import React, { useState } from 'react';

const Modal = ({mode , setShowModal}) => {
  const editMode = mode === 'edit';

  const initialData = {
    user_email: '',
    title: '',
    progress: '',
    date: editMode ? '' : new Date()
  };
  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('changing!',e)

    setData((prevState) => ({
      ...prevState,
      [name]: value
    }));

   
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task</h3>
          <button onClick={()=> setShowModal(false)}>X</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="Your task goes here"
            value={data.title}
            name="title"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="range">Drag to select your current progress</label>
          <input
            type="range"
            id="range"
            required
            min="0"
            max="100"
            name="progress"
            value={data.progress}
            onChange={handleChange}
          />
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
