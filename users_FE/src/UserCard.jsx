const UserCard = ({ user }) => {
  const { role } = user;
  return (
    <div className={`${role}-card`} key={user.id}>
      <div><span>Name: </span>{user.first_name} {user.last_name} </div>
      <div><span>Role: </span>{user.role}</div>
    </div>
  )
}

export default UserCard;