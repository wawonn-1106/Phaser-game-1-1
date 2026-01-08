export default class MenuContent{
    constructor(scene,menuManager){
        this.scene=scene;
        this.menuManager=menuManager;
    }
    getElement(){
        const container=document.createElement('div');
        container.classList.add('menu-content');
        return container;
    }
}