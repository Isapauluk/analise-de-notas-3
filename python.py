alunos = []
quantidade_alunos = int(input("Quantos alunos você deseja cadastrar? "))
quantidade_notas = int(input("Quantas notas cada aluno terá? "))

for i in range(quantidade_alunos):
    nome = input(f"Digite o nome do aluno {i+1}: ")
    notas = []
    for j in range(quantidade_notas):
        nota = float(input(f"Digite a nota {j+1} de {nome}: "))
        notas.append(nota)
    media = sum(notas) / quantidade_notas
    desvio = statistics.stdev(notas) if len(notas) > 1 else 0
    alunos.append({
        "nome": nome,
        "notas": notas,
        "media": media,
        "desvio": desvio
    })

print("\nResumo dos Alunos:")
for aluno in alunos:
    print(f"\nAluno: {aluno['nome']}")
    print(f"Notas: {aluno['notas']}")
    print(f"Média: {aluno['media']:.2f}")
    print(f"Desvio padrão: {aluno['desvio']:.2f}")

maior = max(alunos, key=lambda x: x['media'])
menor = min(alunos, key=lambda x: x['media'])

print(f"\nAluno com maior média: {maior['nome']} ({maior['media']:.2f})")
print(f"Aluno com menor média: {menor['nome']} ({menor['media']:.2f})")

aprovados = [aluno for aluno in alunos if aluno['media'] >= 7]
print(f"\nTotal de alunos aprovados: {len(aprovados)}")
