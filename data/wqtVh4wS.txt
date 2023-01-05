clear all
close all
clc

% Antennas
isot = phased.IsotropicAntennaElement;
array = phased.ULA;
array.Element = isot;
array.NumElements = 8;
freq = 300e6;

% Plots
figure('Name', '3D Radiation Pattern');
pattern(array, freq);
figure('Name', '2D Azimuth Pattern (Elevation = 0, z = 0, Plane xy)');
patternAzimuth(array, freq);
figure('Name', '2D Elevation Pattern (Azimuth = 0, y = 0, Plane xz)');
patternElevation(array, freq);

figure('Name', 'Array Factor');
c = physconst('LightSpeed');
AZ = -180:180;
EL = 0;
pattern(array, freq, AZ, EL, 'PropagationSpeed', c,...
'CoordinateSystem','rectangular', 'Type','powerdb','Normalize',true);

