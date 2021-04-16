import React from "react";

// creating list for workers to pull from api and show on site
function List({ firstName, lastName }) {
  return (
<<<<<<< HEAD
    <tr>
      <td className="first-name" key="1">
        {firstName}
      </td>
      <td className="last-name" key="2">
        {lastName}
      </td>
    </tr>
=======
      <tr className = "drag-item" draggable ondragstart="event.dataTransfer.setData('text/plain',null)">
        <td className="first-name">
          {firstName}
        </td>
        <td className="last-name">
          {lastName}
        </td>
      </tr>
>>>>>>> b7044ae2fc3870937a8cc188ff527702c53859da
  );
}

//drag and drop function
var dragged;

  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
      
  }, false);

  document.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";
  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "purple";
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
      }

  }, false);

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }
    
  }, false);
export default List;
