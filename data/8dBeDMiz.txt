clear all
close all
clc

%% Intlinprog for: min (8x_1 + x_2)
f = [8; 1];
intcon = 2;                 % Means x2 is integer
A = [-1 -2; -4 -1; 2 1];
b = [14; -33; 20];
[x_opt, f_min] = intlinprog(f, intcon, A, b)
