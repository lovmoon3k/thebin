clear all
close all
clc


%% fmincon for: min( 100*(x_2 - x_1^2)^2 + (1-x_1)^2 )
fun = @(x) sqrt(x(1)) + log(2-x(2));
x0 = [0.01 0.01];
A = [];
b = [];
Aeq = [];
beq = [];
lb = [];
ub = [];
exponents = [1, 2, 3, 4];
limits = [0.1, 0.5, 1, 5];
nonlcon = @unitdisk;
options = optimoptions('fmincon','Display','iter','Algorithm','sqp');
[x_opt, f_min] = fmincon(fun, x0, A, b, Aeq, beq, lb, ub, nonlcon)
display('********************************************');
display(' ');




%% Auxiliary Function for non-linear constraints
function [cin,ceq] = unitdisk(x, exponents, limits)
    global exponents limits
    cin = [];
    for i = 1 : length(limits)
        cin = [cin, x(1)^exponents(i) + x(2)^(exponents(i)+0.5) - limits(i)];
    end
    ceq = [];
end