import InventoryManager from './InventoryManager';
export default class MenuManager{
    constructor(){
        this.isOpenMenu=false;
    }
    openMenu(){
        //ショートカットで開くにしても、一度MenuManagerを経由
        this.isOpenMenu=true;
        this.input.keyboard.on('keydown-I',()=>{
            
        });
    }
    closeMenu(){
        this.isOpenMenu=false;
    }
}