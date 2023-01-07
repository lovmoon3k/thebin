clear all
close all
clc

%% Data
% Baseband Signal
t = [0 :0.001 : 0.3];
s = zeros(size(t));
s = s(:);                           
s(201:205) = 1;                  % Row vector ---> Column vector
figure('Name', 'Baseband Signal');
plot(t, s);
title('Pulse');    xlabel('Time (s)');    ylabel('Amplitude (V)');

% Carrier
fc = 100e6;
c = 3e8;
lambda = c / fc;

% Array
ula = phased.ULA('NumElements', 10,'ElementSpacing', lambda/2);
ula.Element.FrequencyRange = [10e6 110e6];
inputAngle = [45; 0];
x = collectPlaneWave(ula, s, inputAngle, fc, c);

% Noise is 3 dB lower (signal has power = 1, so noise will be at 0.5)
rs = RandStream.create('mt19937ar','Seed',2008);
P_noise = 0.5; 
noise = sqrt(P_noise/2)*randn(rs,size(x)) * (1+1i);
rxSignal = x + noise;           % It has 10 columns for 10 elements

% Plots of data
figure('Name', 'Received signals in 2 first elements');
subplot(2, 1, 1); 
plot(t, abs(rxSignal(:, 1)));
axis tight;
title('Pulse at Antenna 1');
xlabel('Time (s)');
ylabel('Magnitude (V)');
subplot(2, 1, 2);
plot(t, abs(rxSignal(:, 2)));
axis tight;
title('Pulse at Antenna 2');
xlabel('Time (s)');
ylabel('Magnitude (V)');


%% 1) CONVENTIONAL BEAMFORMERS

%% 1a) Phase Shifts Beamformer
psbeamformer = phased.PhaseShiftBeamformer('SensorArray', ula,...
    'OperatingFrequency', fc ,'Direction', inputAngle, ...
    'WeightsOutputPort', true);

[yCbf, w] = psbeamformer(rxSignal);
figure('Name', 'AF of PS Beamformer');
pattern(ula, fc, -180:180, 0, 'Weights', w, 'Type','powerdb', ...
    'PropagationSpeed', c, 'Normalize', false,...
    'CoordinateSystem','rectangular');
axis([-90 90 -60 0]);

figure('Name', 'Output of PS Beamformer (only with noise)');
plot(t,abs(yCbf)); axis tight;
title('Output of Phase Shift Beamformer');
xlabel('Time (s)');ylabel('Magnitude (V)');





 %% 2) ADAPTIVE BEAMFORMERS

% Create 2 interfernces with a 10x amplitude in 30 and 50 degrees
N = length(t);
s1 = 10*randn(rs, N, 1);
s2 = 10*randn(rs, N, 1);
interference = collectPlaneWave(ula, [s1 s2], [25 50; 0 0], fc, c);

% Noise at minimal level with SNR = 50 dB
P_noise = 10^(-5); 
noise = sqrt(P_noise/2)*randn(rs, size(x)) * (1+1i);
rxInt = interference + noise;        % Total interference + noise
rxSignal = x + rxInt;                % Total received Signal

% Failure of PS Beamformer
[yCbf, w] = psbeamformer(rxSignal);
figure('Name', 'Failed output of PS Beamformer in presence with interfernce');
plot(t,abs(yCbf)); axis tight;
title('Failed output of Phase Shift Beamformer');
xlabel('Time (s)');ylabel('Magnitude (V)');

%% 2a) MVDR
mvdrbeamformer = phased.MVDRBeamformer('SensorArray', ula, ...
    'Direction', inputAngle, 'OperatingFrequency', fc,...
    'WeightsOutputPort', true);

% Train in it 2 cases
mvdrbeamformer.TrainingInputPort = true;
[yMVDR, wMVDR] = mvdrbeamformer(rxSignal, rxInt);

figure('Name', 'Output of MVDR Beamformer With Presence of Interference');
plot(t, abs(yMVDR)); axis tight;
title('Output of MVDR Beamformer (noise + interference)');
xlabel('Time (s)');ylabel('Magnitude (V)');

figure('Name', 'AF of MVDR Beamformer');
pattern(ula, fc, -90:90, 0, 'Weights', wMVDR, 'Type','powerdb', ...
    'PropagationSpeed', c, 'Normalize', false,...
    'CoordinateSystem','rectangular');


figure('Name', 'MVDR vs PS');
pattern(ula, fc, -180:180, 0, 'Weights', wMVDR, 'Type', 'powerdb', ...
    'PropagationSpeed', c, 'Normalize', false, ...
    'CoordinateSystem', 'rectangular');
axis([-90 90 -80 20]);
hold on
pattern(ula, fc, -180:180, 0, 'Weights', w, ...
    'PropagationSpeed', c, 'Normalize', false,...
    'Type', 'powerdb', 'CoordinateSystem', 'rectangular');
hold off;
legend('MVDR','PhaseShift');





%% Self-nulling Issue
mvdrbeamformer_selfnull = phased.MVDRBeamformer('SensorArray',ula,...
    'Direction',inputAngle,'OperatingFrequency',fc,...
    'WeightsOutputPort',true,'TrainingInputPort',false);

expDir = [43; 0];
mvdrbeamformer_selfnull.Direction = expDir;

[ySn, wSn] = mvdrbeamformer_selfnull(rxSignal);
plot(t,abs(ySn)); axis tight;
title('Output of MVDR Beamformer With Signal Direction Mismatch');
xlabel('Time (s)');ylabel('Magnitude (V)');


%% 2c) LCMV Beamformer
lcmvbeamformer = phased.LCMVBeamformer('WeightsOutputPort', true);
steeringvec = phased.SteeringVector('SensorArray', ula);
stv = steeringvec(fc, [43 41 45]);
lcmvbeamformer.Constraint = stv;
lcmvbeamformer.DesiredResponse = [1; 1; 1];

[yLCMV, wLCMV] = lcmvbeamformer(rxSignal);
figure('Name', 'Array response of LCMV Beamformer');
plot(t,abs(yLCMV)); axis tight;
title('Output of LCMV Beamformer With Signal Direction Mismatch');
xlabel('Time (s)');ylabel('Magnitude (V)');

figure('Name', 'MVDR vs LCMV');
pattern(ula,fc,-180:180,0,'Weights',wLCMV,'Type','powerdb',...
    'PropagationSpeed',physconst('LightSpeed'),'Normalize',false,...
    'CoordinateSystem','rectangular');
axis([0 90 -40 35]);

hold on;  % compare to MVDR
pattern(ula,fc,-180:180,0,'Weights',wSn,...
    'PropagationSpeed',physconst('LightSpeed'),'Normalize',false,...
    'Type','powerdb','CoordinateSystem','rectangular');
hold off;
legend('LCMV','MVDR');

