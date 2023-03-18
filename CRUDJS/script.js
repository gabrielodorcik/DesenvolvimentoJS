'use strict'
//o use strict muda as vezes as semanticas para ajudar a leitura do programa

//quando clicar sobre o cadastro, o modal vai ser ativado
const openModal = () => document.getElementById('modal').classList.add('active')

//função de fechar o modal
const closeModal = () => {

    clearFields()
    document.getElementById('modal').classList.remove('active')

}
//armazenando o valaro do banco, tranformando JSON e mandando para a função 
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
//enviar os dados e transformar me string em forma de função
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

//criando a função de deletar
const deleteClient = (index) => {

    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)

}

//criando a função de atualiar um dado já cadastrado
const updateClient = (index, client) => {

    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)

}

//função que le os dados 
const readClient = () => getLocalStorage()

//criando a função de criar um cliente
const createClient = (client) => {

    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)

}

//função que verifica a validade
const isValidFields = () => {

    return document.getElementById('form').reportValidity()

}

//função limpando os dados
const clearFields = () => {

    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
    document.querySelector(".modal-header>h2").textContent  = 'Novo Cliente'

}

//função de salvar os clientes, verificando a validação 
const saveClient = () => {

    if (isValidFields()) {

        const client = {

            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value

        }

        const index = document.getElementById('nome').dataset.index

        if (index == 'new') {

            createClient(client)
            updateTable()
            closeModal()

        } else {

            updateClient(index, client)
            updateTable()
            closeModal()

        }

    }

}

//faz com oq os dados sejam armazenador e apresentados em uma lista, na tela, com opção e edit e delete
const createRow = (client, index) => {

    const newRow = document.createElement('tr')

    newRow.innerHTML = `

        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>

        <td>

            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>

        </td>

    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)

}

//função de limpar a tabela
const clearTable = () => {

    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))

}

//função de atualuzar a tabela
const updateTable = () => {

    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)

}

//filtrando os campos com uma função
const fillFields = (client) => {

    document.getElementById('nome').value = client.nome
    document.getElementById('email').value = client.email
    document.getElementById('celular').value = client.celular
    document.getElementById('cidade').value = client.cidade
    document.getElementById('nome').dataset.index = client.index

}

//criando a função de editar um cliente
const editClient = (index) => {

    const client = readClient()[index]
    client.index = index
    fillFields(client)
    document.querySelector(".modal-header>h2").textContent  = `Editando ${client.nome}`
    openModal()

}

//evento de clicar em deletar um cliente
const editDelete = (event) => {

    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {

            editClient(index)

        } else {

            const client = readClient()[index]
            //alerta de realmnete deseja excluir
            const response = confirm(`Deseja realmente excluir o cliente ${client.nome}`)

            if (response) {

                deleteClient(index)
                updateTable()

            }

        }

    }

}

updateTable()

// chamar o evento de abrir o modal
document.getElementById('cadastrarCliente').addEventListener('click', openModal)

//chamar a função de fechar o modal
document.getElementById('modalClose').addEventListener('click', closeModal)

//chamar a função salvar
document.getElementById('salvar').addEventListener('click', saveClient)

//chamar a função de deletar
document.querySelector('#tableClient>tbody').addEventListener('click', editDelete)

//chamar a função de cancelar
document.getElementById('cancelar').addEventListener('click', closeModal)