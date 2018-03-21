// tests go here; this will not be compiled when this package is used as a library

WSJoyStick.onKey(KEY.P, () => {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
})
WSJoyStick.onKey(KEY.A, () => {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
})
WSJoyStick.onKey(KEY.B, () => {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
})
WSJoyStick.onKey(KEY.C, () => {
    basic.showLeds(`
        . . # # .
        . # . . .
        . # . . .
        . # . . .
        . . # # .
        `)
})
WSJoyStick.onKey(KEY.D, () => {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # . # .
        . # . # .
        . # # . .
        `)
})
WSJoyStick.onKey(KEY.F, () => {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
})
WSJoyStick.onKey(KEY.E, () => {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        `)
})
WSJoyStick.JoyStickInit()
WSJoyStick.PlayMusic(262, music.beat(BeatFraction.Whole))
WSJoyStick.PlayMusic(294, music.beat(BeatFraction.Whole))
WSJoyStick.PlayMusic(330, music.beat(BeatFraction.Whole))
WSJoyStick.PlayMusic(349, music.beat(BeatFraction.Whole))
WSJoyStick.PlayMusic(392, music.beat(BeatFraction.Whole))
WSJoyStick.PlayMusic(440, music.beat(BeatFraction.Whole))
WSJoyStick.PlayMusic(494, music.beat(BeatFraction.Whole))
WSJoyStick.PlayMusic(523, music.beat(BeatFraction.Whole))
basic.forever(() => {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        images.arrowImage(ArrowNames.North).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        images.arrowImage(ArrowNames.South).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        images.arrowImage(ArrowNames.West).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        images.arrowImage(ArrowNames.East).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        images.arrowImage(ArrowNames.NorthEast).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        images.arrowImage(ArrowNames.SouthEast).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        images.arrowImage(ArrowNames.NorthWest).showImage(0)
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        images.arrowImage(ArrowNames.SouthWest).showImage(0)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
