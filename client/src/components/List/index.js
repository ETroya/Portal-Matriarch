import React from "react";

// creating list for workers to pull from api and show on site
function List({ firstName, lastName }) {
  return (
    <tr>
      <td className="first-name text-light">{firstName}</td>
      <td className="last-name text-light">{lastName}</td>
    </tr>
  );
}
export default List;
