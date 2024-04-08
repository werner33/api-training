import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [students, setStudents] = useState([]);
  const [staff, setStaff] = useState([]);

  useEffect(() => {

    fetch('http://localhost:9000/students')
    .then(res => res.json())
    .then(data => {

      const usersWhoAreStaff = data.filter(user => user.role === 'staff');
      setStaff(usersWhoAreStaff);

      const usersWhoAreStudents = data.filter(user => ['student'].includes(user.role));
      setStudents(usersWhoAreStudents);
    })
  }, [])

  const includeAlumniWithStudents = () => {
    fetch('http://localhost:9000/students')
    .then(res => res.json())
    .then(data => {
      const alumni = data.filter(user => user.role === 'alumni');

      const alumniAndStudentsSortedByLastName = [...alumni, ...students].sort((a,b) => {
        return a.last_name > b.last_name ? 1 : -1;
      })

      console.log(alumniAndStudentsSortedByLastName);

      setStudents(alumniAndStudentsSortedByLastName);
    })
  }

  return (
    <div>
      <div className="student-list" id="students">
        <h1>Student List</h1>
        
        <button className="alumni-btn" onClick={includeAlumniWithStudents}>
          Include Alumni
        </button>
        <div className="student-list__container">
          {students.map(student => {
            return (
              <div className="student-card" key={student.id}>
                <div><span>Name: </span>{student.first_name} {student.last_name} </div>
                <div><span>Role: </span>{student.role}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="staff-list" id="staff">
        <h1>Staff List</h1>
        <div className="staff-list__container">
          {staff.map(staff => {
            return (
                <div  className="staff-card" key={staff.id}>
                  <div><span>Name: </span>{staff.first_name} {staff.last_name}</div>
                  <div><span>Role: </span>{staff.role}</div>
                </div>
              );
          })}
        </div>
      </div>
</div>
  )
}

export default App
