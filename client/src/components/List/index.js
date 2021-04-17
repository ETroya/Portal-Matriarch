import React from "react";

// creating list for workers to pull from api and show on site
function List({ firstName, lastName, id ,username}) {
  return (
    <tr
      // className="drag-item"
      value={id}
      // draggable
      // ondragstart="event.dataTransfer.setData('text/plain',null)"
    >
      <td className="first-name">{firstName}</td>
      <td className="last-name">{lastName}</td>
      <td className="user-name">{username}</td>
    </tr>
  );
}

export default List;
