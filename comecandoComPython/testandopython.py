print('ola mundo :)')

nota1 = int(input('nota 1: '))
nota2 = int(input('nota 2: '))
nota3 = int(input('nota 3: '))

soma = nota1 + nota2 + nota3 
media = soma /3

print(media)

if media >= 6:
	print('passou ')
elif media == 5:
	print('Trabalho complementar')
else:
	print('reprovou')

soma2 = 0

while True:
	inp = float(input('digite um numero para somar ou "0" para cancelar '))
	
	if inp == 0:
		break

	soma2 += inp;

print("resultado: ", soma2)

vetor = ['azul', 'laranja', 'amarelo']

def printArrayValues (array):
	for i in array:
		print(i)

	return


printArrayValues(vetor)

pessoa = {
	"nome" : "bruno",
	"sobrenome" : "mendes",
	"idade" : "24" 
}

print(pessoa['nome'])

for i in range(0, 11):
	print(i)


j = 10
while j >= 1:
	print(j)
	j -= 1


import math
print (math.pi)

