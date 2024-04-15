import React, { useState } from 'react'

import styles from '../../styles/User.module.css'

const UserSignUpForm = () => {
  const { value, setValue } = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  })

  const handleChange = (target:) => {
    setValue({ ...value, })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.close}>
        <svg className={icon}>
          <use xLinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>

      </div>

      <div className={styles.title}>
        Sign Up
      </div>

      <form className={styles.form}>
        <div className={styles.group}>
          <input
            type="name"
            placeholder='Your name'
            name='name'
            value=''
            autoComplete='off'
            onChange={() => { }}
            required
          />
          <input
            type="password"
            placeholder='Your password'
            name='password'
            value=''
            autoComplete='off'
            onChange={() => { }}
            required
          />
          <input
            type="email"
            placeholder='Your email'
            name='email'
            value=''
            autoComplete='off'
            onChange={() => { }}
            required
          />
          <input
            type="avatar"
            placeholder='Your avatar'
            name='avatar'
            value=''
            autoComplete='off'
            onChange={() => { }}
            required
          />

          <div className={styles.xLinkHref}>
            I already have an account
          </div>

          <button type='submit' className={styles.submit}>
            Create an account
          </button>
        </div>
      </form>

    </div>
  )
}

export default UserSignUpForm