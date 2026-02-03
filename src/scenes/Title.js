export default class Title extends Phaser.Scene{
    constructor(){
        super({key:'Title'});
    }
    preload(){
        this.load.image('title','assets/images/title-image.png');
        this.load.image('start-btn','assets/images/player.png');
    }
    create(){
        this.add.image(640,360,'title');

        const startBtn=this.add.image(640,550,'start-btn').setInteractive({unHandCursor:true});

        startBtn.on('pointerdown',()=>{
            startBtn.disableInteractive();

            this.cameras.main.fadeOut(1000,0,0,0);

            this.cameras.main.once('camerafadeoutcomplete',()=>{
                this.scene.start('World');
            });
        });
    }
}