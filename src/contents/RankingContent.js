export default class RankingContent{
    constructor(uiScene){
        this.uiScene=uiScene;
    }
    createView(){
        const container=this.uiScene.add.container(0,0);

        const bg=this.uiScene.add.image(0,0,'menu-bg').setDisplaySize(1000,600);
        container.add(bg);



        
        return container;
    }
}