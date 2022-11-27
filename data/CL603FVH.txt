	.file	"main.c"
	.intel_syntax noprefix
	.text
	.globl	f
	.type	f, @function
f:
	push	rbp
	mov	rbp, rsp
	movsd	QWORD PTR -8[rbp], xmm0
	movsd	xmm0, QWORD PTR -8[rbp]
	mulsd	xmm0, xmm0
	mulsd	xmm0, QWORD PTR -8[rbp]
	movapd	xmm1, xmm0
	mulsd	xmm1, QWORD PTR -8[rbp]
	movsd	xmm0, QWORD PTR -8[rbp]
	addsd	xmm0, xmm0
	mulsd	xmm0, QWORD PTR -8[rbp]
	mulsd	xmm0, QWORD PTR -8[rbp]
	addsd	xmm0, xmm1
	subsd	xmm0, QWORD PTR -8[rbp]
	movsd	xmm1, QWORD PTR .LC0[rip]
	subsd	xmm0, xmm1
	pop	rbp
	ret
	.size	f, .-f
	.globl	solve
	.type	solve, @function
solve:
	push	rbp
	mov	rbp, rsp
	sub	rsp, 48
	movsd	QWORD PTR -24[rbp], xmm0
	movsd	QWORD PTR -32[rbp], xmm1
	movsd	QWORD PTR -40[rbp], xmm2
	jmp	.L4
.L7:
	movsd	xmm0, QWORD PTR -24[rbp]
	addsd	xmm0, QWORD PTR -32[rbp]
	movsd	xmm1, QWORD PTR .LC1[rip]
	divsd	xmm0, xmm1
	movsd	QWORD PTR -8[rbp], xmm0
	mov	rax, QWORD PTR -32[rbp]
	movq	xmm0, rax
	call	f
	movsd	QWORD PTR -48[rbp], xmm0
	mov	rax, QWORD PTR -8[rbp]
	movq	xmm0, rax
	call	f
	movsd	xmm1, QWORD PTR -48[rbp]
	mulsd	xmm1, xmm0
	pxor	xmm0, xmm0
	comisd	xmm0, xmm1
	jbe	.L10
	movsd	xmm0, QWORD PTR -8[rbp]
	movsd	QWORD PTR -24[rbp], xmm0
	jmp	.L4
.L10:
	movsd	xmm0, QWORD PTR -8[rbp]
	movsd	QWORD PTR -32[rbp], xmm0
.L4:
	movsd	xmm0, QWORD PTR -32[rbp]
	subsd	xmm0, QWORD PTR -24[rbp]
	comisd	xmm0, QWORD PTR -40[rbp]
	ja	.L7
	movsd	xmm0, QWORD PTR -24[rbp]
	addsd	xmm0, QWORD PTR -32[rbp]
	movsd	xmm1, QWORD PTR .LC1[rip]
	divsd	xmm0, xmm1
	leave
	ret
	.size	solve, .-solve
	.section	.rodata
.LC4:
	.string	"-c"
.LC5:
	.string	"%lf %lf"
.LC6:
	.string	"%lf\n"
.LC8:
	.string	"Program execution time: %lf\n"
.LC9:
	.string	"-f"
.LC10:
	.string	"r"
.LC11:
	.string	"w"
	.align 8
.LC12:
	.string	"Please enter one of the following keys: -f, -c"
	.text
	.globl	main
	.type	main, @function
main:
	push	rbp
	mov	rbp, rsp
	add	rsp, -128
	mov	DWORD PTR -116[rbp], edi
	mov	QWORD PTR -128[rbp], rsi
	mov	rax, QWORD PTR fs:40
	mov	QWORD PTR -8[rbp], rax
	xor	eax, eax
	movsd	xmm0, QWORD PTR .LC3[rip]
	movsd	QWORD PTR -88[rbp], xmm0
	mov	rax, QWORD PTR -128[rbp]
	add	rax, 8
	mov	rax, QWORD PTR [rax]
	lea	rsi, .LC4[rip]
	mov	rdi, rax
	call	strcmp@PLT
	test	eax, eax
	jne	.L12
	lea	rdx, -96[rbp]
	lea	rax, -104[rbp]
	mov	rsi, rax
	lea	rdi, .LC5[rip]
	mov	eax, 0
	call	__isoc99_scanf@PLT
	call	clock@PLT
	mov	QWORD PTR -32[rbp], rax
	movsd	xmm0, QWORD PTR -96[rbp]
	mov	rax, QWORD PTR -104[rbp]
	movsd	xmm1, QWORD PTR -88[rbp]
	movapd	xmm2, xmm1
	movapd	xmm1, xmm0
	movq	xmm0, rax
	call	solve
	movq	rax, xmm0
	mov	QWORD PTR -56[rbp], rax
	call	clock@PLT
	mov	QWORD PTR -24[rbp], rax
	mov	rax, QWORD PTR -56[rbp]
	movq	xmm0, rax
	lea	rdi, .LC6[rip]
	mov	eax, 1
	call	printf@PLT
	mov	rax, QWORD PTR -24[rbp]
	sub	rax, QWORD PTR -32[rbp]
	cvtsi2sd	xmm0, rax
	movsd	xmm1, QWORD PTR .LC7[rip]
	divsd	xmm0, xmm1
	movsd	QWORD PTR -16[rbp], xmm0
	mov	rax, QWORD PTR -16[rbp]
	movq	xmm0, rax
	lea	rdi, .LC8[rip]
	mov	eax, 1
	call	printf@PLT
	jmp	.L13
.L12:
	mov	rax, QWORD PTR -128[rbp]
	add	rax, 8
	mov	rax, QWORD PTR [rax]
	lea	rsi, .LC9[rip]
	mov	rdi, rax
	call	strcmp@PLT
	test	eax, eax
	jne	.L14
	mov	rax, QWORD PTR -128[rbp]
	add	rax, 16
	mov	rax, QWORD PTR [rax]
	lea	rsi, .LC10[rip]
	mov	rdi, rax
	call	fopen@PLT
	mov	QWORD PTR -80[rbp], rax
	mov	rax, QWORD PTR -128[rbp]
	add	rax, 24
	mov	rax, QWORD PTR [rax]
	lea	rsi, .LC11[rip]
	mov	rdi, rax
	call	fopen@PLT
	mov	QWORD PTR -72[rbp], rax
	lea	rcx, -96[rbp]
	lea	rdx, -104[rbp]
	mov	rax, QWORD PTR -80[rbp]
	lea	rsi, .LC5[rip]
	mov	rdi, rax
	mov	eax, 0
	call	__isoc99_fscanf@PLT
	call	clock@PLT
	mov	QWORD PTR -64[rbp], rax
	movsd	xmm0, QWORD PTR -96[rbp]
	mov	rax, QWORD PTR -104[rbp]
	movsd	xmm1, QWORD PTR -88[rbp]
	movapd	xmm2, xmm1
	movapd	xmm1, xmm0
	movq	xmm0, rax
	call	solve
	movq	rax, xmm0
	mov	QWORD PTR -56[rbp], rax
	call	clock@PLT
	mov	QWORD PTR -48[rbp], rax
	mov	rdx, QWORD PTR -56[rbp]
	mov	rax, QWORD PTR -72[rbp]
	movq	xmm0, rdx
	lea	rsi, .LC6[rip]
	mov	rdi, rax
	mov	eax, 1
	call	fprintf@PLT
	mov	rax, QWORD PTR -48[rbp]
	sub	rax, QWORD PTR -64[rbp]
	cvtsi2sd	xmm0, rax
	movsd	xmm1, QWORD PTR .LC7[rip]
	divsd	xmm0, xmm1
	movsd	QWORD PTR -40[rbp], xmm0
	mov	rax, QWORD PTR -40[rbp]
	movq	xmm0, rax
	lea	rdi, .LC8[rip]
	mov	eax, 1
	call	printf@PLT
	mov	rax, QWORD PTR -80[rbp]
	mov	rdi, rax
	call	fclose@PLT
	mov	rax, QWORD PTR -72[rbp]
	mov	rdi, rax
	call	fclose@PLT
	jmp	.L13
.L14:
	lea	rdi, .LC12[rip]
	call	puts@PLT
.L13:
	mov	eax, 0
	mov	rcx, QWORD PTR -8[rbp]
	xor	rcx, QWORD PTR fs:40
	je	.L16
	call	__stack_chk_fail@PLT
.L16:
	leave
	ret
	.size	main, .-main
	.section	.rodata
	.align 8
.LC0:
	.long	0
	.long	1072693248
	.align 8
.LC1:
	.long	0
	.long	1073741824
	.align 8
.LC3:
	.long	2696277389
	.long	1051772663
	.align 8
.LC7:
	.long	0
	.long	1093567616
	.ident	"GCC: (Ubuntu 9.3.0-17ubuntu1~20.04) 9.3.0"
	.section	.note.GNU-stack,"",@progbits