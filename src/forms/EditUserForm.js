import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
    const initUser = { id: null, title: "", breakfast: "", lunch:"", snack:"", dinner:""};
  const [user, setUser] = useState(props.currentUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.title && user.breakfast && user.lunch && user.snack && user.dinner) props.updateUser(user);
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form>
       <label>Title</label>
      <input
        className="u-full-width"
         type="text"
        value={user.title}
        name="title"
        onChange={handleChange}
      />
      <label>Breakfast</label>
      <input
        className="u-full-width"
        type="text"
        value={user.breakfast}
        name="breakfast"
        onChange={handleChange}
      />
       <label>Lunch</label>
      <input
        className="u-full-width"
        type="text"
        value={user.lunch}
        name="lunch"
        onChange={handleChange}
      />
      <label>Snack</label>
      <input
        className="u-full-width"
        type="text"
        value={user.snack}
        name="snack"
        onChange={handleChange}
      />
      <label>Dinner</label>
      <input
        className="u-full-width"
        type="text"
        value={user.dinner}
        name="dinner"
        onChange={handleChange}
      />
       
     
      
      <button className="button-primary" type="submit" onClick={handleSubmit}>
        Edit user
      </button>
      <button type="submit" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
