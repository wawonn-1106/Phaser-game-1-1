export default class MenuManager{
    constructor(){
        this.isOpenMenu=false;
    }
    openMenu(){
        //ショートカットで開くにしても、一度MenuManagerを経由
        this.isOpenMenu=true;
    }
    closeMenu(){
        this.isOpenMenu=false;
    }
}