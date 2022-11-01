clear all
close all
clc

%% Data and plot
t = [3.92 7.93 11.89 23.90 47.87 71.91 93.85 117.84];
c = [0.163 0.679 0.679 0.388 0.183 0.125 0.086 0.0624];
figure();
plot(t, c, 'bo');
xlabel('t');
ylabel('c');


%% Model and optimization problem
model = @(b, t)  b(1)*exp(-b(4)*t) + b(2)*exp(-b(5)*t) + b(3)*exp(-b(6)*t);
options = optimoptions('lsqcurvefit', 'OutputFcn', ...
                       @curvefittingcurvefittingpoltIterates, 'Display', 'none');
problem = createOptimProblem('lsqcurvefit', 'objective', model, ...
                             'xdata', t, 'ydata', c, 'x0', ones(1, 6), ...
                             'lb', [-10 -10 -10 0 0 0], ...
                             'ub', [10 10 10 0.5 0.5 0.5], ...
                             'options', options);
                         
b = lsqcurvefit(problem);


%% Multistart
ms = MultiStart;
ms.Display = 'iter';
tic;
rng default;
[b, fval, exitflag, output, solutions] = run(ms, problem, 50);
serialTime = toc;
curvefittingpoltIterates(solutions)


%% Parallel Computing
ms.useParallel = true;
gcp;
tic;
rng default;
run(ms, problem, 50);
parallelTime = toc;
speedUp = serialTime / parallelTime;

