import MachineManager from "../managers/MachineManager.js";

export default class MachineContent{
    constructor(uiScene){
        this.uiScene=uiScene;   
        this.worldScene=this.uiScene.scene.get('World');
        this.machineManager=new MachineManager(this.uiScene);
    }
    createView(){
        const container=this.uiScene.add.container(0,0);

        const bg=this.uiScene.add.image(0,0,'machine-bg').setDisplaySize(1000,600);
        container.add(bg);

        const invData=this.worldScene.inventoryData;
        const listContainer=this.uiScene.add.container(-400,-200);
        container.add(listContainer);

        this.machineManager.recipes.forEach((recipe,index)=>{
            const missingCount=this.machineManager.canCraft(recipe,invData);

            if(missingCount>=2)return;//二種類以上材料足りないなら表示しない

            const y=index*50;
            const recipeBtn=this.uiScene.add.container(0,y);

            const recipeText=this.uiScene.add.text(0,0,recipe.name,{
                fontSize:'24px',
                color:'#000000'
            }).setInteractive({useHandCursor:true});

            if(missingCount===1){//材料が一種類足りないなら半透明で表示、クリックで足りない材料を知れる
                recipeBtn.setAlpha(0.5);
            }

            recipeText.on('pointerdown',()=>{
                //ここで個数とかを入力する処理とかに入る
                console.log('クリックテスト');
            });

            recipeBtn.add(recipeText);
            listContainer.add(recipeBtn);
        });
        //const manager=this.worldScene.machineManager;//ここら辺はまた今度やる

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