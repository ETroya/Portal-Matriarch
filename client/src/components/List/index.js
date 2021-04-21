import React from "react";

// creating list for workers to pull from api and show on site
function List({ firstName, lastName }) {
  return (
    <tr>
      <td className="first-name">{firstName}</td>
      <td className="last-name">{lastName}</td>
    </tr>
  );
}
export default List;
