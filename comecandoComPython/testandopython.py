print('ola mundo :)')

print(7+4)

print('ola', 5)

n1 = input('primeiro numero: ')
n2 = input('segundo numero: ')

print('resultado = ', n1 + n2)

nota1 = input('nota 1: ')
nota2 = input('nota 2: ')
nota3 = input('nota 3: ')

soma = nota1 + nota2 + nota3 
media = soma /3

print(media)

if media >= 6:
	print('passou ')
else:
	print('reprovou ')


soma2 = 0

while True:
	inp = input('digite um numero para somar ou "c" para cancelar ')
	
	if inp == 'c':
		break

	soma2 += inp;

print("resultado: ", soma2)

