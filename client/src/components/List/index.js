import React from "react";
// creating list for workers to pull from api and show on site
function List({ firstName, lastName }) {
  return (
    <div>
      <tr>
        <td className="first-name" key="1" class="dropzone">
          {firstName}
        </td>
        <td className="last-name" key="2" class="dropzone">
          {lastName}
        </td>
      </tr>
    </div>
  );
}

export default List;
