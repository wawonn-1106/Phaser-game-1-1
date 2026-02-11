export default class ProfileContent{
    constructor(uiScene,x,y){
        this.uiScene=uiScene;
        this.worldScene=this.uiScene.scene.get('World');
        this.graphics=null;

        this.statLabels=[];
    }
    createView(){
        const container=this.uiScene.add.container(0,0);

        const frontSide=this.uiScene.add.container(0,0);
        const frontBg=this.uiScene.add.image(0,0,'profile-front-bg').setDisplaySize(1000,600);
        const nameText=this.uiScene.add.text(-350,-220,`名前：`,{
            fontSize:'32px',
            color:'#000000'
        });

        const photo=this.uiScene.add.rectangle(-300,0,200,250,0xcccccc);

        frontSide.add([frontBg,nameText,photo]);

        const backSide=this.uiScene.add.container(0,0);
        const backBg=this.uiScene.add.image(0,0,'profile-back-bg').setDisplaySize(1000,600);

        backSide.add(backBg);

        backSide.scaleX=0;

        container.add([backSide,frontSide]);

        let isFront=true;

        frontBg.setInteractive({useHandCursor:true});
        backBg.setInteractive({useHandCursor:true});

        const flipCard=()=>{
            const outTarget=isFront? frontSide: backSide;
            const inTarget=isFront? backSide: frontSide;

            this.uiScene.tweens.add({
                targets:outTarget,
                scaleX:0,
                duration:200,
                onComplete:()=>{
                    isFront=!isFront;
                    this.uiScene.tweens.add({
                        targets:inTarget,
                        scaleX:1,
                        duration:200
                    });
                }
            });    
        }

        frontBg.on('pointerdown',flipCard);
        backBg.on('pointerdown',flipCard);

        return container;

    }
}