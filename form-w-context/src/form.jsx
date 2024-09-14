import { useState } from "react";
import { useFormContext }  from "./formContext";

function Formulario() {
  const {formData, updateFormData} = useFormContext()
  const [errors, setErrors] = useState({})

  function validateForm(){
    const newErrors = {}
    if (!formData.nome){
      newErrors.nome = "O nome é obrigatório"
    }
    if (!formData.email){
      newErrors.email = "Email é obrigatório"
    }
    if (!formData.senha) {
      newErrors.senha = "Senha é obrigatório"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e){
    e.preventDefault()
    if (validateForm()) {
      console.log('Formulario válido', formData)
    } else {
      console.log('Formulario inválido', errors)
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input type="text"
      value={formData.nome}      
      onChange={(e) => updateFormData('nome', e.target.value)}
    />
      {errors.nome &&  <p>{errors.nome}</p>}

    
      <label>Email:</label>
      <input type="email"
      value={formData.email}      
      onChange={(e) => updateFormData('email', e.target.value)}
    />
      {errors.email &&  <p>{errors.email}</p>}

      <label>Senha:</label>
      <input type="password"
      value={formData.senha}      
      onChange={(e) => updateFormData('senha', e.target.value)}
    />
      {errors.senha &&  <p>{errors.senha}</p>}


      <button type="submit">Enviar</button>
    </form>
  )
  
}

export default Formulario