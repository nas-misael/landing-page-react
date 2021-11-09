import React from "react";
import FormElements from "./FormElements"
import {FormContainer, FormContent, FormH2} from "./FormContainer"
import {Container} from "@material-ui/core"

const Form = () => {
  
    return (
      <FormContainer id="form" itemID="form">
          <FormContent>
            <Container component="article" maxWidth="md">
                <FormH2 variant="h3" component="h1" align="center" >Realize seu pedido aqui!</FormH2>
                <FormElements aoEnviar={aoEnviarForm} validarTelefone={validarTelefone} validarNome={validarNome}  validarSobrenome={validarSobrenome} validarEmail={validarEmail}  validarPizza={validarPizza} />
            </Container>
          </FormContent>
      </FormContainer>
    )
}

function aoEnviarForm(dados){
  
  }
  
  function validarTelefone(numero){
    if(numero.length !== 11){
      return {valido:false, texto:"Número deve ter 11 digitos. Ex: 00999900000"}
    }else{
      return {valido:true, texto:""}
    }
  }

  function validarNome(nome){
    if(nome === ""){
      console.log(nome)
      return {validoNome: false, textoNome: "Insira o seu Nome para continuar"}
    } else {
      console.log(nome)
      return {validoNome: true, textoNome:""}
    }
  }

  function validarSobrenome(sobrenome){
    if(sobrenome === ""){
      return {validoSobrenome: false, textoSobrenome: "Insira o seu Sobrenome para continuar"}
    } else {
      return {validoSobrenome: true, textoSobrenome:""}
    }
  }

  function validarEmail(email){
    if(email === ""){
      return {validoEmail: false, textoEmail: "Insira o seu Sobrenome para continuar"}
    } else {
      return {validoEmail: true, textoEmail:""}
    }
  }

  function validarPizza(pizza){
    if(pizza === ""){
      return {validoPizza: false, textoPizza: "Escolha o sabor de Pizza para continuar"}
    } else {
      return {validoPizza: true, textoPizza:""}
    }
  }

export default Form
