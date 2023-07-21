"use client"
import React from 'react'

import { signIn } from 'next-auth/react'

const login = () => {
  return (
    <div>
     <button onClick={ () => signIn("github")}> Login with github</button>
    </div>
  )
}

export default login