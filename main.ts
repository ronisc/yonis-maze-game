function Level1 () {
    tiles.setTilemap(tiles.createTilemap(hex`10001000010101010101010101010101010101010104040404040404040404040404070101040404040405050508040a050504010109050505040404040404040404040101040404040404050a04050505040401010404040405050404040404040504010104040404040402040505050e0a040101040a05080404040404040404050401010404040d0404040406040404050401010404040905050a040b0404050c0e0101040404040404040406040404040401010905050505040404060404040a0401010404040404040a04040405050c0401010f0e080405040404040504040404010104030d04090505040404040a05040101010101010101010101010101010101`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . 2 2 
        2 . . . . . 2 2 2 2 . 2 2 2 . 2 
        2 2 2 2 2 . . . . . . . . . . 2 
        2 . . . . . . 2 2 . 2 2 2 . . 2 
        2 . . . . 2 2 . . . . . . 2 . 2 
        2 . . . . . . . . 2 2 2 2 2 . 2 
        2 . 2 2 2 . . . . . . . . 2 . 2 
        2 . . . 2 . . . . 2 . . . 2 . 2 
        2 . . . 2 2 2 2 . 2 . . 2 2 2 2 
        2 . . . . . . . . 2 . . . . . 2 
        2 2 2 2 2 2 . . . 2 . . . 2 . 2 
        2 . . . . . . 2 . . . 2 2 2 . 2 
        2 . 2 2 . 2 . . . . 2 . . . . 2 
        2 . . 2 . 2 2 2 . . . . 2 2 . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.darkGroundSouthWest1], TileScale.Sixteen))
    tiles.placeOnRandomTile(playerSprite, sprites.dungeon.collectibleInsignia)
    info.startCountdown(15)
}
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    if (info.life() > 0) {
        game.splash("TIME RUN OUT!!!")
        InitLevel()
    }
})
function InitGame () {
    scene.setBackgroundColor(10)
    level = 1
    info.setLife(3)
    playerSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a a . . . . 
        . . . . . a a a a a a a . . . . 
        . . . a a a d d d d a a a . . . 
        . . . . . . f d f d . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 8 5 5 8 5 . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        . . . . . . 8 . . 8 . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(playerSprite)
    InitLevel()
    scene.cameraFollowSprite(playerSprite)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
})
function InitLevel () {
    if (level == 1) {
        Level1()
    }
}
let level = 0
let playerSprite: Sprite = null
InitGame()
InitLevel()
