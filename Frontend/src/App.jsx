import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from './routes'

function App() {
  
  return (
    <div className="">

<Routes>
 {
  routes.map(({element,path},index)=>(
 <Route key={index} element={element} path={path} />
  ))
 }

</Routes>

    </div>
  )
}

export default App