-- @file floorer.lua
--
-------------------------------------------------------------------------------

-- wget https://raw.githubusercontent.com/renanmfd/turtlesworm/master/obsidian.lua obsidian

local args = {...}
local size
local count = 0

if args[1] == nil then
    size = 1
elseif tonumber(args[1]) < 1 then
    exit()
else
    size = tonumber(args[1])
end

while true do
    turtle.turnLeft()
    turtle.dig()
    turtle.turnRight()
    turtle.turnRight()
    turtle.dig()
    turtle.turnLeft()
    turtle.dig()
    turtle.forward()
    
    count = count + 1
    if count >= size then
        break
    end
end

turtle.turnLeft()
turtle.turnLeft()
turtle.digDown()
turtle.down()
