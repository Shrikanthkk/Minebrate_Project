import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import View from './component/View'
import State from './component/State'

const List = () => {
  return (
    <BrowserRouter>
      |
        <Routes>
          <Route path='/' element={<State/>}/>
          <Route path='/view' element={<View/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default List
