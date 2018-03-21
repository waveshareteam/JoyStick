# WSJoyStick

Waveshare electronic

## TODO

- [ ] Add a reference for your blocks here
- [ ] Add "icon.png" image (300x200) in the root folder
- [ ] Add "- beta" to the GitHub project description if you are still iterating it.
- [ ] Turn on your automated build on https://travis-ci.org
- [ ] Use "pxt bump" to create a tagged release on GitHub
- [ ] Get your package reviewed and approved https://makecode.microbit.org/packages/approval

Read more at https://makecode.microbit.org/packages/build-your-own

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

##################
#initialization
#First use this module need to initialize the module, otherwise the rocker does not work
WSJoyStick.JoyStickInit()


##################
#Listening button
KEY = P, A, B, C, D, E, F,

if (WSJoyStick.Listen_Key(KEY.P)) {
	#event
}

WSJoyStick.onKey(KEY.P, () => {
	#event
})

#example 1:
WSJoyStick.onKey(KEY.P, () => {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
})

#example 2:
if (WSJoyStick.Listen_Key(KEY.P)) {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
}


##################
#Listening rocker
DIR = NONE, U, D, L, R, U_L, U_R, D_L, D_R

if (WSJoyStick.Listen_Dir(DIR.NONE)) {
	
}

#example:
if (WSJoyStick.Listen_Dir(DIR.NONE)) {
    images.arrowImage(ArrowNames.North).showImage(0)
}


##################
#Play Music

#example:
WSJoyStick.PlayMusic(262, music.beat(BeatFraction.Whole))

