export default class MachineContent{
    constructor(uiScene){
        this.uiScene=uiScene;   
        this.worldScene=this.uiScene.scene.get('World');
    }
    createView(){
        const container=this.uiScene.add.container(0,0);

        const bg=this.uiScene.add.image(0,0,'machine-bg').setDisplaySize(1000,600);
        container.add(bg);

        const invData=this.worldScene.inventoryData;
        const manager=this.worldScene.machineManager;//ここら辺はまた今度やる

        const closeBtn=this.uiScene.add.text(350,-220,'×',{
            fontSize:'500px',
            color:'#000000',
            fontStyle:'bold'
        }).setInteractive({useHandCursor:true}).setDepth(6000);//500,6000は一時的な値。

        closeBtn.on('pointerdown',()=>{
            this.uiScene.menuManager.toggle('machine');
        });
        container.add(closeBtn);

        return container;
    }
}