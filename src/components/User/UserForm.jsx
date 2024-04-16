import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserSignUpForm from './UserSignUpForm'
import styles from '../../styles/User.module.css'
import { toggleForm, toggleFormType } from '../../features/user/userSlice';


const UserForm = () => {

  const dispatch = useDispatch();
  const { showForm } = useSelector(({ user }) => user)

  return (
    showForm ? (
      <>
        <div
          className={styles.overlay}
          onClick={() => dispatch(toggleForm(false))}
        />
        ? <UserSignUpForm /> : <></>
      </>
    ) : <></>

  )
}

export default UserForm