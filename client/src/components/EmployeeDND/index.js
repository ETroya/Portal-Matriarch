// //This page is for the employe Drag N Drop 
// import React, {useState} from "react"
// import { useDrag, useDrop} from "react-dnd"
// import List from "../List"
// import { Row } from "react-bootstrap";

// const eSelection= ()=>{
//     const[ employee, setEmployees]= useState (()=> List)
//     const[ days, setDays] =useState([]);

//     const [{ isOver }, addToWeek ]=useDrop({
//         accept: "employee",
//         collect: (monitor)=>({
//             isOver: !!monitor.isOver()
//         })
//     })
//     const [{ isOver: isEmployeeOver}, removeFromWeek ]=useDrop({
//         accept: "days",
//         collect: (monitor)=>({
//             isOver: !!monitor.isOver()
//         })
//     })

//     const moveEmployee =item =>{
// console.log (item)
// if(item && item.type !== "employee"){
//     //Employee slide
//     setDays((_days)=> [...item, days])
//     setEmployees( (_employee)=> _employee.filter)
// }else{
//     //removeEmployees
//     setEmployees((_employee)=>[...List, days])
//     setDays(_employee => _employee.filter)
// }
//     }

// const dragHoverEmployee =isOver ? "bg-warning" : "bg-light";
// const dragHoverdays = isEmployeeOver ? "bg-warning": "bg-light"


//     return(
// <>
// <Row>
//    <div className= "col text-center">
//    <h1>Work Week</h1>
//    <p>Please move the employees to their proper work shift</p>
//    <div className="row justify-contet-md-center">
//        <div className={`col-5 border m-2 ${dragHoverEmployee}`}>
//            <div className= "bg-info row text-white">
//                <div className ="col font-weight-bold"> Employee List </div>
//            </div>
//            <ul className ="list-group py-2 h-100" ref={removeFromWeek}>
//                {employee.map((employee)=>(
//                    <List
//                    {...employee}
//                    name={firstName}
//                    key={employee.id}
//                    onDropEmployee={moveEmployee}
//                    />
//                ))}
//            </ul>
//            </div>       
//        <div className={`col-5 boarder m-2${dragHoverdays}`}>
//             <div className ="bg-success row text-white">
//             <div className="col font-weight-bold">The Work Week</div>
//             <ul className ="list-group py-2 h-100" ref={addToWeek}>
//                {employee.map((employee)=>(
//                    <List
//                    {...employee}
//                    key={employee.id}
//                    name={firstName}
//                    onDropEmployee={moveEmployee}
//                    />
//                ))}
//            </ul>
//             </div>

//        </div>
//    </div>
//    </div>
// </Row>
// </>
//     )

// }

// const employee =({firstName, lastName}) => {

// const [{isDragging}, dragRef]= useDrag({
//     item:{
//         type: playerType,
//         index
//     },
//     end:( item,monitor)=>{
//         const dropResult =monitor.getDropResults();

//         if(item && dropResult){
//             onDropPlayer(item);
//         }
//     },
//     collect:(monitor)=>({
//         isDragging:monitor.isDragging()
//     })
// })

// return(
// <li className =" list-group-item my-1 p-2" ref={dragRef}>
//     <div className="card border-0">
//         <div className="row no-gutters">
//             <div className="col-md-1">
//               <div className ="col-md-9">
//                 <h5 className = "card-title d-inline">{firstName}</h5>
//                 <p className= "card-text d-line">,{lastName}</p>            
//               </div>  
//             </div>
//         </div>
//     </div>
// </li>
// );
// }

// export default eSelection;