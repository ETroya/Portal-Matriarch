import React from "react";
// creating list for workers to pull from api and show on site
function List({ firstName, lastName }) {
  return (
    <tr>
      <td className="first-name" key="1">
        {firstName}
      </td>
      <td className="last-name" key="2">
        {lastName}
      </td>
    </tr>
  );
}

export default List;
