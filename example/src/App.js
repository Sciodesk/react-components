import React from 'react'

import './styles/main.scss'

import { InputError } from 'scio-react-components'
import 'scio-react-components/dist/index.css'

const App = () => {
  return (
    <InputError
    placeholder="Nombre"
    type="text"
    error="No se encuentra"/>
  )
}

export default App
