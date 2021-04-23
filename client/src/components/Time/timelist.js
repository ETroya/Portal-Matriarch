import React from "react";

// creating list for workers to pull from api and show on site
function Timelist({ firstName, lastName, username }) {
  return (
    <tr>
      <td className="username text-light">{username}</td>
      <td className="first-name">{firstName}</td>
      <td className="last-name">{lastName}</td>
    </tr>
  );
}
export default Timelist;