// Base a ser utilizada
const alunosDaEscola = [
    {nome: "Henrique",
    notas: [], 
    cursos: [],
    faltas: 5},
    
    {nome: "Edson",
    notas: [],
    cursos: [],
    faltas: 2},
    
    {nome: "Bruno",
    notas: [10,9.8,9.6],
    cursos: [],
    faltas: 0},
    
    {nome: "Guilherme",
    notas: [10,9.8,9.6],
    cursos: [{nomeDoCurso: "Full Stack", dataMatricula: new Date}],
    faltas: 0},
    
    {nome: "Carlos",
    notas: [],
    cursos: [],
    faltas: 0},
    
    {nome: "Lucca",
    notas: [10,9.8,9.6],
    cursos: [{nomeDoCurso: "UX", dataMatricula: new Date}],
    faltas: 0}];


// implementação

// function adicionarAluno

const adicionarAluno = nome => {
    let alunoNovo = {
        nome: nome,
        notas: [],
        cursos: [],
        faltas: 0
    };
    
    alunosDaEscola.push(alunoNovo);
    return "Novo aluno adicionado: " + alunoNovo.nome;
}

console.log(adicionarAluno("Fernanda"));
console.log(adicionarAluno("Saulo"));
console.log(alunosDaEscola.length);

// function listarAlunos

const listarAlunos = () => {
    for (i = 0; i < alunosDaEscola.length; i++) {
        let aluno = alunosDaEscola[i];
        console.log("=".repeat(10));
        console.log("Nome: " + aluno.nome);
        console.log("Notas: " + aluno.notas);
        console.log("Cursos: " + aluno.cursos);
        console.log("Fatas: " + aluno.faltas);
        console.log("=".repeat(10));
    };
}
listarAlunos();

// function buscarAluno

function buscarAluno(nome) {
    let alunoEncontrado = alunosDaEscola.find(function(aluno){
        return aluno.nome == nome;
    });

    if (alunoEncontrado != undefined) {
        console.log("Aluno " + nome + " encontrado!");
    } else {
        console.log("Aluno não encontrado!");
    };
}
buscarAluno("Raquel");
buscarAluno("Fernanda");

// function matricularAluno

function matricularAluno(aluno, curso){
        if (aluno != undefined) {
            console.log("Aluno " + aluno + " matriculado no curso " + curso + "." + " Data: " + new Date);
        } else {
            console.log("Aluno não cadastrado!");
        };
}
matricularAluno("Fernanda", "Full Stack");

// function aplicarFalta

function aplicarFalta(aluno){
    if (aluno != undefined){
            console.log("Falta aplicada!");
        } else {
            console.log("Falta não aplicada.");
        }
}
aplicarFalta("Lucca");

// function aplicarNota

function aplicarNota(aluno){
    if (aluno != undefined){
        console.log("Nota aplicada!");
    } else {
        console.log("Nota não aplicada.");
    }
}
aplicarNota("Lucca");

// function aprovarAluno

function aprovarAluno(aluno){
    let mediaAluno = 0;
    if (aluno != undefined && mediaAluno >= 7 && aluno.faltas <= 3){
        console.log("Aluno aprovado!");
    } else {
        console.log("Aluno não aprovado.");
    }
}
aprovarAluno("Guilherme");
