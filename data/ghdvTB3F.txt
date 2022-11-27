idz3: main.o funcs.o
	gcc -o idz3 main.o funcs.o
main.o: main.asm
	as --gstabs -o main.o main.asm
funcs.o: funcs.asm
	as --gstabs -o funcs.o funcs.asm