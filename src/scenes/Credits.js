class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene');
    }

    create() {
        // check for high score in local storage
        // uncomment console.log statements if you need to debug local storage
        /*if(localStorage.getItem('hiscore') != null) {
            let storedScore = parseInt(localStorage.getItem('hiscore'));
            //console.log(`storedScore: ${storedScore}`);
            // see if current score is higher than stored score
            if(level > storedScore) {
                //console.log(`New high score: ${level}`);
                localStorage.setItem('hiscore', level.toString());
                highScore = level;
                newHighScore = true;
            } else {
                //console.log('No new high score :/');
                highScore = parseInt(localStorage.getItem('hiscore'));
                newHighScore = false;
            }
        } else {
            //console.log('No high score stored. Creating new.');
            highScore = level;
            localStorage.setItem('hiscore', highScore.toString());
            newHighScore = true;
        }

        // add GAME OVER text
        if(newHighScore) {
            this.add.bitmapText(centerX, centerY - textSpacer, 'gem', 'New Hi-Score!', 32).setOrigin(0.5);
        }
        this.add.bitmapText(centerX, centerY, 'gem', `Disintegration averted for ${level}s`, 48).setOrigin(0.5);
        this.add.bitmapText(centerX, centerY + textSpacer, 'gem', `This browser's best: ${highScore}s`, 24).setOrigin(0.5);
        this.add.bitmapText(centerX, centerY + textSpacer*2, 'gem', `Press UP ARROW to Restart`, 36).setOrigin(0.5);
*/
        // set up cursor keys
        //cursors = this.input.keyboard.createCursorKeys();
        this.add.text(game.config.width/2, game.config.height/2, 'Credits', scoreConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + 64, 'All assets created by Handrei Bohrjah', scoreConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 + 32, 'All code implemented by Handrei Bohrjah', scoreConfig).setOrigin(0.5)
    }

    update() {
        // wait for UP input to restart game
       
        /*let textureManager = this.textures;
        console.log(textureManager)
        // take snapshot of the entire game viewport (same as title screen)
        this.game.renderer.snapshot((snapshotImage) => {
            console.log('took snapshot in GameOver')
            if(textureManager.exists('titlesnapshot')) {
                textureManager.remove('titlesnapshot');
            }
            textureManager.addImage('titlesnapshot', snapshotImage);
        });*/
        this.restart()
    }

    restart()
    {
        if (Phaser.Input.Keyboard.JustDown( this.input.keyboard.addKey(RKey))) {
            // start next scene
            passed = 0
            
            this.scene.start('playScene');

        }
    }
}