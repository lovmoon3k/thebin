-- @file bigtunnel.lua
--
-------------------------------------------------------------------------------

-- wget https://raw.githubusercontent.com/renanmfd/turtlesworm/master/bigtunnel.lua bigtunnel

local facing = nil
local args = {...}

local checkLava = function (side)
    local success, data

    if size == "up" then
        success, data = turtle.inspectUp()
    elseif size == "down" then
        success, data = turtle.inspectDown()
    else
        success, data = turtle.inspect()
    end

    if not success then
        return false
    end

    if data.name == 'minecraft:lava' then
        turtle.select(sworm_api.TURTLE_SLOT_BUCKET)
        turtle.place()
        turtle.refuel()
        message("Lava found and used for fuel.")
        turtle.select(sworm_api.TURTLE_SLOT_INVENTORY)
        return true
    end

    return false
end

local dig = function ()
    turtle.dig()
end

local digUp = function ()
    turtle.digUp()
end

local digDown = function ()
    turtle.digDown()
end

local forward = function ()
    checkLava()
    dig()

    sworm_api.forward()

    checkLava("up")
    digUp()
    checkLava("down")
    digDown()
end

local excavateLayer = function (size, direction)
    local vertical = 0
    local horizontal

    if direction == "up" then
        sworm_api.right()
    elseif direction == "down" then
        sworm_api.left()
    end

    while vertical < size do
        horizontal = 0
        while horizontal < size do
            forward()
            horizontal = horizontal + 1
        end

        vertical = vertical + 3

        -- All layers but last.
        if vertical < size then
            sworm_api.turnAround()
            if direction == "up" then
                sworm_api.up()
                sworm_api.up()
                digUp()
                sworm_api.up()
                digUp()
            elseif direction == "down" then
                sworm_api.down()
                sworm_api.down()
                digDown()
                sworm_api.down()
                digDown()
            end
        -- Last layer.
        else
            sworm_api.turnTo(facing)
            forward()
        end
    end
end

local usage = function ()
    print("bigtunnel <size> <depth>")
    print("  <size>   Integer multiple of 3 and odd (e.g. 3, 9, 15, 93).")
    print("  <depth>  Integer heigher than 1. Will be rounded to next even number.")
end

local checkInputs = function ()
    local size, depth

    if args == nil or args[1] == nil or args[2] == nil then
        usage()
        print("Invalid or missing argument.")
        error()
    end

    size = tonumber(args[1])
    depth = tonumber(args[2])

    print("Size: " .. size .. " Dept: " .. depth)

    if size < 3 then
        usage()
        print("Size argument cannot be lower than 3.")
        error()
    end

    if math.fmod(size, 2) ~= 1 then
        usage()
        print("Size argument must be odd.")
        error()
    end

    if math.fmod(size, 3) ~= 0 then
        usage()
        print("Size argument must multiple of 3.")
        error()
    end

    if depth < 1 then
        usage()
        print("Dept argument cannot be lower than 1.")
        error()
    end

    return size, depth
end

local main = function ()
    local size, maxdepth = checkInputs()
    local depth = 0

    sworm_api.init()

    facing = sworm_api.getFacing()
    print("Facing: " .. facing)

    dig()
    sworm_api.forward()
    digUp()
    sworm_api.up()

    while depth < maxdepth do
        excavateLayer(size, "up")
        depth = depth + 1

        excavateLayer(size, "down")
        depth = depth + 1
    end
end

print("BIG TUNNEL by renanmfd")
os.loadAPI("sworm_api")
sleep(2)
main()

-- wget https://raw.githubusercontent.com/renanmfd/turtlesworm/master/bigtunnel.lua bigtunnel
