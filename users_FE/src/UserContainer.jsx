const UserContainer = ({ users, userType }) => {
  const normalizedType = userType
  const capitalizedType = userType.charAt(0).toUpperCase() + userType.slice(1);
  return (
    <div className={`${normalizedType}-list`} id={normalizedType}>
      <h1>{capitalizedType} List</h1>
      <div className={`${normalizedType}-list__container`}>
        {users.map(user => {
          return (
            <UserCard user={user} key={user.id} />
          )
        })}
      </div>
    </div>
  )
}

export default UserContainer;