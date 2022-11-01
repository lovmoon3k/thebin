clear all
close all
clc


%% Data
% I want to fit data in the curve: c1 + c2*exp(-t) 
tic
t = [0 0.3 0.8 1.1 1.6 2.3]';
y = [0.82 0.72 0.63 0.60 0.55 0.50]';


%% 1. Solution with / - Solver POV
% We have 6 equations and 2 unknowns, so this should be infeasible
% Matlab solves this system
display('*************************************');
display('1. Solution with mldivide');
E = [ones(length(t), 1) exp(-t)];
c = E\y;
disp("c1 = " + num2str(c(1)) + ", c2 = " + num2str(c(2)))
points(t, y);
hold on
check(c, 'red');
title('y(t) = c_1 + c_2e^{-t} with mldivide');
display('*************************************');
display(' ');


%% 2. Constrained Curve Fitting - Problem-based POV
display('*************************************');
display('2. Solution with optimproblem');
display('and 1 extra constraint');
p = optimproblem;
x = optimvar('x', 2);
p.ObjectiveSense = 'minimize';
p.Objective = sum((E*x-y).^2);
p.Constraints.intercept = x(1)+x(2) == 1.00 * y(1);
sol = solve(p);
c_constr = sol.x
points(t, y);
hold on
check(c_constr, 'red');
title('y(t) = c_1 + c_2e^{-t} with optimproblem');
display('*************************************');
display(' ');


%% Comparing the methods
points(t, y);
hold on
check(c, 'red');
hold on
check(c_constr, 'blue');
legend("Data", "mldivide", "optimproblem")



function points(t, y)
    figure();
    plot(t, y, 'bo', 'Markersize', 10);
    xlabel('Time');
    ylabel('Response');
end

function check(c, color)
    tt = linspace(0, 2.5, 101);
    yy = c(1) + c(2) * exp(-tt);
    plot(tt, yy, color);
end