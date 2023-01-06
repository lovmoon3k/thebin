clear all
close all
clc

% Patch Microstrip
p = patchMicrostrip;
p.Height = 0.01;
figure();
show(p);
% impedance(p, 1e9 : 20e6 : 2e9);
figure();
current(p, 1.66e9);
figure();
pattern(p, 1.66e9);

% Array
a = linearArray;
a.Element = p;
a.NumElements = 4;
a.ElementSpacing = 0.1
figure();
layout(a)
figure();
pattern(a, 1.66e9);