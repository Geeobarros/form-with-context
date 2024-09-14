import { createContext, useContext, useState } from "react";

export const FormContext = createContext()

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  })

  const updateFormData = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  return(
    <FormContext.Provider value={{formData, updateFormData}}>
      {children}
    </FormContext.Provider>
  )

  
}

export function useFormContext() {
  return useContext(FormContext);
}