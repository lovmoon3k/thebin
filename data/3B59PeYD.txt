clear all
close all
clc


%% fmincon for: min( 100*(x_2 - x_1^2)^2 + (1-x_1)^2 )
display('********************************************');
display('fmincon');
fun = @(x) 100*(x(2)-x(1)^2)^2 + (1-x(1))^2;
A = [1 2];
b = 1;
Aeq = [2 1];
beq = 1;
x0 = [0.5 0];                   % It must satisfy the constraints
[x_opt, f_min] = fmincon(fun, x0, A, b, Aeq, beq)
display('********************************************');
display(' ');


%% fmincon for: min( 100*(x_2 - x_1^2)^2 + (1-x_1)^2 )
% We also insert a non-linear constraint
display('********************************************');
display('fmincon with non-linear constraint and options');
options = optimoptions('fmincon','Display','iter','Algorithm','sqp');
lb = [];
ub = [];
nonlcon = @unitdisk;
[x_opt, f_min] = fmincon(fun, x0, A, b, Aeq, beq, lb, ub, nonlcon, options)
display('********************************************');
display(' ');


%% CVX for: min( 100*(x_2 - x_1^2)^2 + (1-x_1)^2 )
cvx_begin quiet
    variables x(2);
    minimize(100*(x(2)-x(1)^2)^2 + (1-x(1))^2);
    subject to
        x(1) + 2*x(2) <= 1;
        2*x(1) + x(2) == 1;
cvx_end
cvx_optval


%% Auxiliary Function for non-linear constraints
function [c,ceq] = unitdisk(x)
    c = x(1)^2 + x(2)^2 - 1;
    ceq = [];
end