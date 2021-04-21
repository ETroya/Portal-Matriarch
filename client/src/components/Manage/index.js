import { useStateContext } from "../../utils/GlobalState";
import {useState, useEffect} from "react";
import API from "../../utils/api";
import EmployeeCard from "../EmployeeCard";
import EmployeeProfile from "../EmployeeProfile/index";

const Manage = () => {
const [ state, dispatch ] = useStateContext();
const [profile, openProfile] = useState(false);
const [currentEmployee, setEmployee] = useState({});
const [employeeState, setEmployeeState] = useState([]);


useEffect(() => {
  //mapping thru the all user array and setting the result to the total user
  API.getEmployee().then((allUsers) => {
    const totalUsers = allUsers.data.map((result) => {
      let employee = {
        id: result._id,
        first: result.first,
        last: result.last,
        username: result.username,
      };
      return employee;
    });
    setEmployeeState(totalUsers);
  });
}, []);

  return ( 
    <div className="manage-employee-list  row">
    <div className="employee-list container" className={profile ? "col-sm-6" : "col-sm-12"} >
    {employeeState.map((emp) => {
      return (<div key={emp._id} >
      <EmployeeCard
      emp={emp}
      first={emp.first}
      last={emp.last}
      name={emp.username}
      openProfile={openProfile}
      profile={profile}
      
      setEmployee={setEmployee}/>
      
      </div>)
      
    })}
    </div>
    <div className="employee-profile" className={profile ? "col-sm-6" : ""}>
      {profile ? <EmployeeProfile currentEmployee={currentEmployee}/> : null}
    </div>
  </div>
 )
};
export default Manage;
