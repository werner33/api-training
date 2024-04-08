import { useEffect, useState } from 'react'
import './App.css'

import { getUsers } from './backend';
import UserCard from './UserCard';
import UserContainer from './UserContainer';

function App() {
  const [users, setUsers] = useState([]);
  const [includeAlumni, setIncludeAlumni] = useState(false);
  // const [userTypeFilter, setUserTypeFilter] = useState(null);

  useEffect(() => {

    const getData = async () => {
      const data = await getUsers();
      console.log(data);
      setUsers(data);
    }

    getData();
  }, [])

  const includeAlumniWithStudents = () => {
    // setUserTypeFilter("alumni");
    setIncludeAlumni(!includeAlumni);
  }

  let filterFunc = (user) => user.role === "student";
  if(includeAlumni) {
    filterFunc = (user) => user.role === "student" || user.role === "alumni";
  }

  let usersToRender = users.filter(filterFunc);

  const staff = users.filter(user => user.role === 'staff');

  return (
    <div>
      <div className="student-list" id="students">
        <h1>Student List</h1>
        
        <button className="alumni-btn" onClick={includeAlumniWithStudents}>
          { includeAlumni ? "Exclude Alumni" : "Include Alumni"}
        </button>
        <div className="student-list__container">
          {usersToRender.map(user => {
            return (
              <UserCard user={user} key={user.id} />
            )
          })}
        </div>
      </div>

      <div className="staff-list" id="staff">
        <h1>Staff List</h1>
        <div className="staff-list__container">
          {staff.map(staff => {
            return (
              <UserCard user={staff} key={staff.id} />
            )
          })}
        </div>
      </div>
</div>
  )
}

export default App
