import React, { useEffect } from 'react'

// redux
import { fetchAllUsers } from "../store/slices/users" 
import { useDispatch, useSelector } from "react-redux"

const UserList = () => {
  
  const { list: users } = useSelector(state => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])
  

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {
          users.map((user, index) => (
            <div key={index}>
              <div>
                <img className="mx-auto" src={user.avatar} alt="avatar" />
                <div>
                  <h5 className="font-semibold">{`${user.first_name} ${user.last_name}`}</h5>
                  <p>{user.email}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default UserList