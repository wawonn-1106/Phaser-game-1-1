export default class SettingsContent{
    constructor(scene){
        this.scene=this.scene;
    }
    getElement(){
        const container=document.createElement('div');
        container.classList.add('menu-content');
        return container;
    }
}