import React from 'react'

const Users_card = ({users}) => {
    return users.map(user =>
      <div className="project column-3">
        {
          console.log(user)
        }
        <div className="profile">
          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
          <h1 className="name">{user.first_name} {user.last_name}</h1>
          <p className="userid">User-id : {user.id}</p>
          <p className="email">{user.email}</p>
          
        </div>
      </div>
)
}

export default Users_card;