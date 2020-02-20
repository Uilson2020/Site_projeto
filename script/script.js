let inputCpf = document.getElementById('CPFUsuario');
let inputconfirmarSenhaUsuario = document.getElementById('confirmarSenhaUsuario');
let inputsenhaUsuario = document.getElementById('senhaUsuario')
let inputCPFTitularUsuario = document.getElementById('CPFTitularUsuario')
let inputCEPUsuario = document.getElementById('CEPUsuario')
let inputendEndereco = document.getElementById('enderecoSenhaUsuario')
let inputBairro = document.getElementById('bairroUsuario')
let inputCidade = document.getElementById('cidadeUsuario')
let selectEstado = document.getElementById('estadoUsuario')


inputCpf.addEventListener('keyup', ()=>{
   // console.log(inputCpf.value)
   if(isNaN(inputCpf.value)){
       inputCpf.value = inputCpf.value.substring(0, (inputCpf.value.length -1))
   }
   if(inputCpf.value.length >11){
       inputCpf.value = inputCpf.value.substring(0,11)
   }
})

inputconfirmarSenhaUsuario.addEventListener('keyup', (e)=>{
    if(confirmarSenhaUsuario.value != inputsenhaUsuario.value){
        confirmarSenhaUsuario.setAttribute('class', 'form-control is-invalid')
    }else{
        confirmarSenhaUsuario.setAttribute('class', 'form-control is-valid')
    }
})

inputCPFTitularUsuario.addEventListener('keyup', ()=>{
    if(isNaN(inputCPFTitularUsuario.value)){
        inputCPFTitularUsuario.value = inputCPFTitularUsuario.value.substring(0, (inputCPFTitularUsuario.value.length -1))
    }
    if(inputCPFTitularUsuario.value.length >11){
        inputCPFTitularUsuario.value = inputCPFTitularUsuario.value.substring(0,11)
    }
})

function buscarCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => response.json())
    .then(dados =>{
        if(dados.erro){
            return inputCEPUsuario.setAttribute('class', 'form-control is-invalid')
        }
        inputCEPUsuario.setAttribute('class', 'form-control is valid')
        inputendEndereco.value = dados.logradouro
        inputBairro.value = dados.bairro
        inputCidade.value = dados.localidade
        selectEstado.value = dados.uf
    })
}

inputCEPUsuario.addEventListener('keyup', (event)=>{
    if(isNaN(inputCEPUsuario.value)){
        inputCEPUsuario.value = inputCEPUsuario.value.substring(0, (inputCEPUsuario.value.length -1))
    }
    if(inputCEPUsuario.value.length >= 8){
        inputCEPUsuario.value = inputCEPUsuario.value.substring(0, 8)
        buscarCep(inputCEPUsuario.value)
    }
})