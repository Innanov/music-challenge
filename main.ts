basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        music.setVolume(255)
        music.setTempo(120)
        music.playTone(185, music.beat(BeatFraction.Half))
        music.playTone(185, music.beat(BeatFraction.Half))
        music.playTone(208, music.beat(BeatFraction.Half))
        music.playTone(185, music.beat(BeatFraction.Half))
        music.playTone(165, music.beat(BeatFraction.Half))
        music.playTone(156, music.beat(BeatFraction.Half))
        music.playTone(165, music.beat(BeatFraction.Half))
        music.playTone(185, music.beat(BeatFraction.Half))
        music.playTone(156, music.beat(BeatFraction.Half))
        music.playTone(165, music.beat(BeatFraction.Half))
        music.playTone(139, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(311, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(311, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(277, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
    }
})
