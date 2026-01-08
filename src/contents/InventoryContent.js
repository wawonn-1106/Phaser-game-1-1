export default class InventoryContent{
    constructor(scene){
        this.scene=scene;
    }
    getElement(){
        const container=document.createElement('div');
        container.classList.add('inventory-content');
        return container;
    }
}