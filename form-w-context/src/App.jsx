import './App.css'
import Formulario from './form'
import { FormProvider } from './formContext'

function App() {

  return (
    
      <FormProvider>
        <Formulario />
      </FormProvider>
    
  )
}

export default App
