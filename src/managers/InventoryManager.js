//import InventoryContent from '../contents/InventoryContent.js';

export default class InventoryManager{
    constructor(scene){
        this.scene=scene;
        //this.isOpenInv=false;

        /*this.inventoryEl=document.getElementById('inventory');
        this.itemListEl=document.getElementById('inventory-item');*/

        //this.inventoryContent=new InventoryContent(scene);MenuManagerで渡してるからいらんやん
    }
    removeItem(itemId){
        this.scene.inventoryData=this.scene.inventoryData.filter(i=>i.id !==itemId);

        if(this.scene.menuManager){
            //WorldのやつだからmenuManagerにもアクセスできる
            this.scene.menuManager.switchTab('inventory');
        }
    }
}