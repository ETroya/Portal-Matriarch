import React from "react";

// creating list for workers to pull from api and show on site
function List({ firstName, lastName, id}) {
  return (
    <tr
      // className="drag-item"
      value={id}
      // draggable
      // ondragstart="event.dataTransfer.setData('text/plain',null)"
    >
<<<<<<< HEAD
      {/* <td className="user-name text-light">{username}</td> */}
      <td className="first-name text-light">{firstName}</td>
      <td className="last-name text-light">{lastName}</td>
=======
      <td className="first-name text-light">{firstName}</td>
      <td className="last-name text-light">{lastName}</td>
    
>>>>>>> 3a9f68d4cbdd083a944e7cb4324b82670a1ff351
    </tr>
  );
}

export default List;
