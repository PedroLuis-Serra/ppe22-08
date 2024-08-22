const alunos = [];

function adicionarAluno() {
  const nome = document.getElementById('nome').value;
  const dataNascimento = document.getElementById('dataNascimento').value;
  const matricula = document.getElementById('matricula').value;
  const email = document.getElementById('email').value;
  const telefone   
 = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;   


  
  if (!validarEmail(email)) {
    alert('Email inválido');
    return;
  }

  const novoAluno = {
    nome,
    dataNascimento,
    matricula,
    email,
    telefone,
    endereco
  };

  alunos.push(novoAluno);
  renderizarTabela();
}

function buscarAlunos() {
  const filtro = document.getElementById('filtro').value.toLowerCase();
  const alunosFiltrados = alunos.filter(aluno => {
    return aluno.nome.toLowerCase().includes(filtro) ||
           aluno.matricula.toLowerCase().includes(filtro);
  });
  renderizarTabela(alunosFiltrados);
}

function atualizarAluno(indice) {
 
}

function excluirAluno(indice) {
  if (confirm('Tem certeza que deseja excluir este aluno?')) {
    alunos.splice(indice, 1);
    renderizarTabela();
  }
}

function renderizarTabela(alunosParaRenderizar = alunos) {
  const tabela = document.getElementById('tabelaAlunos');
  tabela.innerHTML = '';

  const header = tabela.insertRow();
  header.insertCell().textContent = 'Nome';
  header.insertCell().textContent = 'Matrícula';
  header.insertCell().textContent = 'Email';
  header.insertCell().textContent = 'Ações';

  alunosParaRenderizar.forEach((aluno, index) => {
    const linha = tabela.insertRow();
    linha.insertCell().textContent = aluno.nome;
    linha.insertCell().textContent = aluno.matricula;
    linha.insertCell().textContent = aluno.email;
    const acoes = linha.insertCell();
    const botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar';
    botaoEditar.onclick = () => atualizarAluno(index);
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.onclick = () => excluirAluno(index);
    acoes.appendChild(botaoEditar);
    acoes.appendChild(botaoExcluir);
  });
}


function validarEmail(email) {
 
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


renderizarTabela();