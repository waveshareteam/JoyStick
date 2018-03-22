/*****************************************************************************
* | File      	:	WSJoyStick
* | Author      :   Waveshare team
* | Function    :	Contorl JoyStick
* | Info        :
*----------------
* |	This version:   V1.0
* | Date        :   2018-02-06
* | Info        :   Basic version
*
******************************************************************************/
enum DIR {
    NONE = 0,
    U = 1,
    D = 2,
    L = 3,
    R = 4,
    U_L = 5,
    U_R = 6,
    D_L = 7,
    D_R = 8
}

enum KEY {
    P = 0,
    A = 1,
    B = 2,
    C = 3,
    D = 4,
    E = 5,
    F = 6,
}
let JoyStick_P = DigitalPin.P8;
let JoyStick_X = AnalogPin.P1;
let JoyStick_Y = AnalogPin.P2;
let KEY_A = DigitalPin.P5;
let KEY_B = DigitalPin.P11;
let KEY_C = DigitalPin.P15;
let KEY_D = DigitalPin.P14;
let KEY_E = DigitalPin.P13;
let KEY_F = DigitalPin.P12;

/**
 * Operational remote JoyStick function
 */
//% weight=20 color=#3333FF icon="\uf11b"
namespace WSJoyStick {
    let Read_X = 0, Read_Y = 0;
    //% blockId==JoyStickInit block="JoyStickInit"
    //% weight=100
    export function JoyStickInit(): void {
        pins.setPull(JoyStick_P, PinPullMode.PullUp);
        pins.setPull(KEY_A, PinPullMode.PullUp);
        pins.setPull(KEY_B, PinPullMode.PullUp);
        pins.setPull(KEY_C, PinPullMode.PullUp);
        pins.setPull(KEY_D, PinPullMode.PullUp);
        pins.setPull(KEY_E, PinPullMode.PullUp);
        pins.setPull(KEY_F, PinPullMode.PullUp);

        //10 bits of AD conversion chip，max = 1024
        Read_X = pins.analogReadPin(JoyStick_X);
        Read_Y = pins.analogReadPin(JoyStick_Y);
    }

    //% blockId==Listen_Key block="Key %pin |Press"
    //% weight=90
    export function Listen_Key(pin: KEY): boolean {
        let Val = 2;

        //Read pin 
        if (pin == KEY.P) {
            Val = pins.digitalReadPin(JoyStick_P);
        } else if (pin == KEY.A) {
            Val = pins.digitalReadPin(KEY_A);
        } else if (pin == KEY.B) {
            Val = pins.digitalReadPin(KEY_B);
        } else if (pin == KEY.C) {
            Val = pins.digitalReadPin(KEY_C);
        } else if (pin == KEY.D) {
            Val = pins.digitalReadPin(KEY_D);
        } else if (pin == KEY.E) {
            Val = pins.digitalReadPin(KEY_E);
        } else {
            Val = pins.digitalReadPin(KEY_F);
        }

        //registerWithDal((int)pin, MICROBIT_KEY_EVT_CLICK, body);
        //To determine the value
        if (Val == 0) {
            return true;
        } else {
            return false;
        }
    }

    //% blockId==onKey block="Key %pin |Press"
    //% weight=80
    export function onKey(pin: KEY, body: Action): void {
        let Pin = 0;

        //Read pin 
        if (pin == KEY.P) {
            Pin = JoyStick_P;
        } else if (pin == KEY.A) {
            Pin = KEY_A;
        } else if (pin == KEY.B) {
            Pin = KEY_B;
        } else if (pin == KEY.C) {
            Pin = KEY_C;
        } else if (pin == KEY.D) {
            Pin = KEY_D;
        } else if (pin == KEY.E) {
            Pin = KEY_E;
        } else {
            Pin = KEY_F;
        }
        pins.onPulsed(Pin, PulseValue.Low, body);
    }

    //% blockId==Listen_Dir block="DIR Dir %pin "
    //% weight=70
    export function Listen_Dir(Dir: DIR): boolean {
        let Get_Dir = DIR.NONE;

        let New_X = pins.analogReadPin(AnalogPin.P1);
        let New_Y = pins.analogReadPin(AnalogPin.P2);

        let Right = New_X - Read_X;
        let Left = Read_X - New_X;
        let Up = New_Y - Read_Y;
        let Down = Read_Y - New_Y;

        let Dx = Math.abs(Read_X - New_X);
        let Dy = Math.abs(New_Y - Read_Y);

        let Precision = 150; //0.5v

        if (Right > Precision && Dy < Precision) {
            Get_Dir = DIR.R;
        } else if (Left > Precision && Dy < Precision) {
            Get_Dir = DIR.L;
        } else if (Up > Precision && Dx < Precision) {
            Get_Dir = DIR.U;
        } else if (Down > Precision && Dx < Precision) {
            Get_Dir = DIR.D;
        } else if (Right > Precision && Up > Precision) {
            Get_Dir = DIR.U_R;
        } else if (Right > Precision && Down > Precision) {
            Get_Dir = DIR.D_R;
        } else if (Left > Precision && Up > Precision) {
            Get_Dir = DIR.U_L;
        } else if (Left > Precision && Down > Precision) {
            Get_Dir = DIR.D_L;
        } else {
            Get_Dir = DIR.NONE;
        }

        //To determine the value
        if (Get_Dir == Dir) {
            return true;
        } else {
            return false;
        }
    }
	
	/**
     * Plays a tone through pin ``P0`` for the given duration.
     * @param frequency pitch of the tone to play in Hertz (Hz)
     * @param ms tone duration in milliseconds (ms)
     */
    //% help=music/play-tone weight=60
    //% blockId=PlayMusic block="Play |Music %note=device_note|for %duration=device_beat" blockGap=8
    //% parts="headphone"
    //% useEnumVal=1
    export function PlayMusic(frequency: number, ms: number): void {
        pins.analogPitch(frequency, ms);
    }
	
}
