clear all
close all
clc

%% fminbnd
display('*************************************');
f1 = @(x) x - log(x) + (1-x)^2 + (2-sqrt(x))^3;
f2 = @(x) sin(x);
lb = 0;
ub = 2*pi;
[x_opt1, f_min1] = fminbnd(f1, lb, ub)
[x_opt2, f_min2] = fminbnd(f2, lb, ub)
display('*************************************');
display(' ');


%% fminunc
display('*************************************');
fun = @(x)3*x(1)^2 + 2*x(1)*x(2) + x(2)^2 - 4*x(1) + 5*x(2);
x0 = [1,1];
[x,fval] = fminunc(fun,x0)
x0 = [-50,500];
[x,fval] = fminunc(fun,x0)
display('*************************************');
display(' ');