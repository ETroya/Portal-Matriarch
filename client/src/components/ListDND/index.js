import React from "react";
// import interactionPlugin, {Draggable} from "@fullcalendar/interaction"

//creating list for workers to pull from api and show on site 
function ListDND({username, _id}) {
    return (
      <tr
        className="drag-item"
        value={_id}
        draggable
        ondragstart="event.dataTransfer.setData('text/plain',null)"
      >
        <td className="user-name">{username}</td>
        <td className="id">{_id}</td>
      </tr>
    );
  }

var dragged;

document.addEventListener("drag", function (event) {}, false);

document.addEventListener(
  "dragstart",
  function (event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function (event) {
    // reset the transparency
    event.target.style.opacity = "";
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  "dragover",
  function (event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function (event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className === "dropzone") {
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className === "dropzone") {
    }
  },
  false
);

document.addEventListener(
  "drop",
  function (event) {
    console.log(event.target.outerText);
    console.log(event.target.childNodes.nodeValue);
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className === "fc-daygrid-day-events") {
      event.target.style.background = "";
      // dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  },
  false
);

export default ListDND;
