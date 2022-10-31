clear all
close all
clc

%% Generate Data
p = 2;
n = 200;
prob = 0.5;
n1 = floor(n * prob);
n2 = n - n1;

X1 = [1 1] + 0.15 * randn(n1, 2);
y1 = ones(n1, 1);
X2 = [2 2] + 0.15 * randn(n2, 2);
y2 = -ones(n2, 1);

X = [X1; X2];
y = [y1; y2];

f1 = figure(1);
clf(f1);                        % Using SVMs
plot(X1(:, 1), X1(:, 2), 'bx', 'Linewidth', 2);
hold on
plot(X2(:, 1), X2(:, 2), 'rx', 'Linewidth', 2);
xlims = [0.5 2.5];
ylims = [0.5 2.5];
xlim(xlims);
ylim(ylims);


%% Lambdas
P = zeros(n, n);
q = ones(n, 1);
for ii = 1 : n
    for jj = 1 : n
        P(ii, jj) = X(ii, :) * X(jj, :)' * y(ii) * y(jj);
    end
end

lb = zeros(n, 1);
ub = 100 * ones(n, 1);
lambda = quadprog(P, -q, [], [], y', 0, lb, ub)

lambda1 = lambda(1:n1);
k1 = find(lambda1 == max(lambda1));
lambda2 = lambda(n1+1:end);
k2 = find(lambda2 == max(lambda2));


%% SVM Implementation
beta = zeros(1, p);
b = 0;
for k = 1 : n
    beta = beta + lambda(k) * X(k, :) * y(k);
end
for k = 1 : n
    b = b + (1/n) * (y(k) - beta*X(k, :)');
end


%% Optimal Hyperplane (Maximum Margin Hyperplane)
xAxis = linspace(xlims(1), xlims(2), 1000);
yk = [];
for x = xAxis
    yk = [yk (-beta(2)*x-b) / beta(1)];               % beta' * x + b = 0
end
plot(xAxis, yk);
hold on
plot(X1(k1, 1), X1(k1, 2), 'bx', 'Linewidth', 3, 'Markersize', 15);
hold on
plot(X2(k2, 1), X2(k2, 2), 'rx', 'Linewidth', 3, 'Markersize', 15);
title("SVMs classification");
xlabel("x");
ylabel("y");
