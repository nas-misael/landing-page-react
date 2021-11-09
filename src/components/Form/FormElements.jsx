import React, { useState } from "react";
import { TextField, Button, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import SvgIcon from '@material-ui/core/SvgIcon';

function FormElements({aoEnviar, validarTelefone, validarNome, validarSobrenome, validarEmail, validarPizza}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [pizza, setPizza] = useState("");
  const [erros, setErros] = useState({numero:{valido:true, texto:""}})
  const [errosNome, setErrosNome] = useState({nome:{validoNome:true, textoNome:""}})
  const [errosSobrenome, setErrosSobrenome] = useState({sobrenome:{validoSobrenome:true, textoSobrenome:""}})
  const [errosEmail, setErrosEmail] = useState({email:{validoEmail:true, textoEmail:""}})
  const [errosPizza, setErrosPizza] = useState({pizza:{validoPizza:true, textoPizza:""}})

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, numero, email, pizza});
        if((nome !== "") && (sobrenome !== "") && (numero.length === 11) && (email !== "") && (pizza !== "")){
          alert(`
            Olá, ${nome}!
            Confirmando seus dados: Telefone:${numero} e Email: ${email}.
            Seu pedido é: ${pizza}
          `)

          setNome("")
          setSobrenome("")
          setNumero("")
          setEmail("")
          setPizza("")
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={(event)=>{
          const ehValido = validarNome(nome);
          setErrosNome({nome:ehValido})
        }}
        error={!errosNome.nome.validoNome}
        helperText={errosNome.nome.textoNome}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        onBlur={(event)=>{
          const ehValido = validarSobrenome(sobrenome);
          setErrosSobrenome({sobrenome:ehValido})
        }}
        error={!errosSobrenome.sobrenome.validoSobrenome}
        helperText={errosSobrenome.sobrenome.textoSobrenome}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}

        onBlur={(event)=>{
          const ehValido = validarTelefone(numero);
          setErros({numero:ehValido})
        }}
        error={!erros.numero.valido}
        helperText={erros.numero.texto}
        id="Numero"
        label="Telefone"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}

        onBlur={(event)=>{
          const ehValidoEmail = validarEmail(email);
          setErrosEmail({email:ehValidoEmail})
        }}
        error={!errosEmail.email.validoEmail}
        helperText={errosEmail.email.textoEmail}
        id="email"
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControl variant="standard" fullWidth margin="normal">
        <InputLabel id="demo-simple-select-standard-label">Sabores</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={pizza}
          onChange={(event) => {
            setPizza(event.target.value);
          }}
          onBlur={(event)=>{
            const ehValido = validarPizza(pizza);
            setErrosPizza({pizza:ehValido})
          }}
          error={!errosPizza.pizza.validoPizza}
          helperText={errosPizza.pizza.textoPizza}

          label="Sabores"
          fullWidth
        >
          <MenuItem value="">
            <em>Escolha sua Pizza</em>
          </MenuItem>
          <MenuItem value={"Italiana com frango"}>Italiana com frango</MenuItem>
          <MenuItem value={"Margerita Clássica"}>Margerita Clássica</MenuItem>
          <MenuItem value={"Pepperoni"}>Pepperoni</MenuItem>
          <MenuItem value={"Salame e azeitona"}>Salame e azeitona</MenuItem>
          <MenuItem value={"Azeitona e Pimentão"}>Azeitona e Pimentão</MenuItem>
          <MenuItem value={"Chocolate e Morango"}>Chocolate e Morango</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" endIcon={<SvgIcon ><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></SvgIcon>}>
        Pedir Pizza
      </Button>
    </form>
  );
}


export default FormElements;