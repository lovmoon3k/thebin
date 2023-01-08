local RunService = game:GetService("RunService")
	local FpsLabel = script.Parent

	local TimeFunction = RunService:IsRunning() and time or os.clock

	local LastIteration, Start
	local FrameUpdateTable = {}

	local function HeartbeatUpdate()
		LastIteration = TimeFunction()
		for Index = #FrameUpdateTable, 1, -1 do
			FrameUpdateTable[Index + 1] = FrameUpdateTable[Index] >= LastIteration - 1 and FrameUpdateTable[Index] or nil
		end

		FrameUpdateTable[1] = LastIteration
	local fps = tostring(math.floor(TimeFunction() - Start >= 1 and #FrameUpdateTable or #FrameUpdateTable / (TimeFunction() - Start)))
	script.Parent.Text = "FPS = "..fps.."    Ping = "..game:GetService("Stats").Network.ServerStatsItem["Data Ping"]:GetValue()
	end

	Start = TimeFunction()
	RunService.Heartbeat:Connect(HeartbeatUpdate)
