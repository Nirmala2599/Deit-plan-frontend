import React from "react";
const UserTable = (props) => {
  return (
    <table >
      <thead>
        <tr style={{backgroundColor:"gold"}}>
          <th>Deit plan</th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Snack</th>
          <th>Dinner</th>
        
          
         </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => {
            const { title, breakfast, lunch, snack, dinner} = user;
            // const id = user.id;
            // const name = user.name;
            // const username = user.username;
            return (
              <tr>
                <td style={{backgroundColor:"gold"}}>{title}</td>
                <td style={{backgroundColor:"lightgreen"}}>{breakfast}</td>
                <td style={{backgroundColor:"lightgreen"}}>{lunch}</td>
                <td style={{backgroundColor:"lightgreen"}}>{snack}</td>
                <td style={{backgroundColor:"lightgreen"}}>{dinner}</td>
                <td>
                  <button onClick={() => props.deleteUser(title)}>Delete</button>
                  <button onClick={() => props.editUser(title, user)}>Edit</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
