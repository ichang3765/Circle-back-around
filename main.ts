input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 16; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 228)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 85)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        basic.pause(500)
    }
    maqueen.motorStop(maqueen.Motors.All)
})
basic.forever(function () {
	
})
