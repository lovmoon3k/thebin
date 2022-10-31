clear all
close all
clc

%% Quadprog for: min ((2x_1^2 + x_2^2 + x_1x_2) + (x_1 + x_2))
display('***********************************');
display('quadprog');
H = [4 1; 1 2];
f = [1 1]';
A = [-1 0; 0 -1];
b = [0 0]';
Aeq = [1 1];
beq = 1;
[x_optimal, f_min] = quadprog(H, f, A, b, Aeq, beq)
display('***********************************');
display(' ');


%% CVX for: min ((2x_1^2 + x_2^2 + x_1x_2) + (x_1 + x_2))
display('***********************************');
display('CVX');
cvx_begin quiet
    variable x(2);
    minimize(0.5 * x'*H*x + f'*x);
    subject to
        A*x <= b;
        Aeq*x == beq;
cvx_end
disp("cvx_optval = " + num2str(cvx_optval));
display('***********************************');
display(' ');