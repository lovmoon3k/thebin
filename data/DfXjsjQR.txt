clear all
clc

%% Data
% Baseband signal
T_signal = 100;
t = [0:0.1:2*T_signal]';
fr = 1/T_signal;
signal = sin(2*pi*fr*t);
% Carrier
c = 3e8;
fc = 300e6;
lambda = c /fc;
% Array
N = 5;
incidentAngle = [45; 0];
array = phased.ULA('NumElements', N, 'ElementSpacing', lambda/2);
x = collectPlaneWave(array, signal, incidentAngle, fc, c);
% Noise
rng('default');
noise = 0.1*(randn(size(x)) + 1j*randn(size(x)));
rx = x + noise;

%% Beamformer
% MVDR Beamformer
beamformer = phased.MVDRBeamformer('SensorArray',array,...
    'PropagationSpeed',c,'OperatingFrequency',fc,...
    'Direction',incidentAngle,'WeightsOutputPort',true);
[y, weights] = beamformer(rx);

% Plot
figure('Name', 'Received in middle antenna vs Beamformed');
plot(t, real(rx(:,ceil(N/2))), 'r:', t, real(y));
xlabel('Time');
ylabel('Amplitude');
legend('Original', 'Beamformed');
figure('Name', 'Array Factor');
pattern(array, fc, -180:180, 0, 'PropagationSpeed', c, ...
    'Weights', weights, 'CoordinateSystem', 'rectangular',...
    'Type','powerdb');

weights
gains = abs(weights)
phases_degrees = angle(weights) * 180/pi

