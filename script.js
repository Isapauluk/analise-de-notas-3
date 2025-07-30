<!DOCTYPE html>
<html>
<head>
  <title>Notas dos Alunos</title>
</head>
<body>
  <h2>Cadastro de Alunos</h2>
  <div id="formulario">
    <input type="text" id="nome" placeholder="Nome do aluno">
    <input type="number" id="nota" placeholder="Nota">
    <button onclick="adicionarNota()">Adicionar Nota</button>
    <button onclick="salvarAluno()">Salvar Aluno</button>
  </div>

  <h3>Lista de Alunos</h3>
  <pre id="saida"></pre>

  <script>
    let alunos = [];
    let notasTemp = [];

    function adicionarNota() {
      const nota = parseFloat(document.getElementById("nota").value);
      if (!isNaN(nota)) {
        notasTemp.push(nota);
        document.getElementById("nota").value = "";
      }
    }

    function salvarAluno() {
      const nome = document.getElementById("nome").value;
      if (nome && notasTemp.length > 0) {
        const soma = notasTemp.reduce((a, b) => a + b, 0);
        const media = soma / notasTemp.length;
        const desvio = calcularDesvio(notasTemp, media);
        alunos.push({ nome, notas: [...notasTemp], media, desvio });
        notasTemp = [];
        document.getElementById("nome").value = "";
        mostrarAlunos();
      }
    }

    function calcularDesvio(notas, media) {
      const soma = notas.reduce((acc, val) => acc + Math.pow(val - media, 2), 0);
      return notas.length > 1 ? Math.sqrt(soma / (notas.length - 1)) : 0;
    }

    function mostrarAlunos() {
      let saida = "";
      alunos.forEach(aluno => {
        saida += Aluno: ${aluno.nome}\nNotas: ${aluno.notas.join(", ")}\nMédia: ${aluno.media.toFixed(2)}\nDesvio Padrão: ${aluno.desvio.toFixed(2)}\n\n;
      });

      let maior = alunos.reduce((a, b) => a.media > b.media ? a : b);
      let menor = alunos.reduce((a, b) => a.media < b.media ? a : b);
      let aprovados = alunos.filter(a => a.media >= 7);

      saida += Aluno com maior média: ${maior.nome} (${maior.media.toFixed(2)})\n;
      saida += Aluno com menor média: ${menor.nome} (${menor.media.toFixed(2)})\n;
      saida += Total de aprovados: ${aprovados.length}\n;

      document.getElementById("saida").innerText = saida;
    }
  </script>
</body>
</html>
