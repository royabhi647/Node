import React from 'react'

function Child() {
  console.log("Child called");
  return (
    <div>
        child component
    </div>
  )
}

export default React.memo(Child);