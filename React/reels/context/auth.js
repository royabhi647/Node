import React from 'react'

function AuthWrapper({children}) {
    console.log("Hello in Auth wrapper");
  return (
    <div>{ children}</div>
  )
}

export default AuthWrapper