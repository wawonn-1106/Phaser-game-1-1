import InventoryManager from './InventoryManager';
import MenuContent from '../contents/MenuContent';
import ProfileContent from '../contents/ProfileContent';
import SettingsContent from '../contents/SettingsContent';
import InventoryContent from '../contents/InventoryContent';
import RankingContent from '../contents/RankingContent';
import ReviewContent from '../contents/ReviewContent';

export default class MenuManager{
    constructor(scene){
        this.scene=scene;
        this.isOpenMenu=false;
        this.currentTab='menu';

        this.window=document.getElementById('menu-window');
        this.contentArea=document.getElementById('menu-content');

        //インスタンスは作っておく
        this.contents={
            'menu':new MenuContent(scene,this),//thisはMenuManager自身、MenuContentは仲介をするので、アクセスできるようにしておく
            'inventory':new InventoryContent(scene),
            'profile':new ProfileContent(scene),
            'review':new ReviewContent(scene),
            'ranking':new RankingContent(scene),
            'settings':new SettingsContent(scene)
        };
    }
    toggle(tabId='menu'){
        if(!this.isOpenMenu){
            this.openMenu(tabId);
            return;
        }
        if(this.currentTab===tabId){
            this.closeMenu();
        }else{
            this.switchTab(tabId);
        }
    }
    openMenu(tabId){
        this.isOpenMenu=true;
        this.window.classList.remove('hidden');
        this.switchTab(tabId);
    }
    closeMenu(){
        this.isOpenMenu=false;
        this.window.classList.add('hidden');
    }
    switchTab(tabId){
        this.currentTab=tabId;

        if(this.contentArea.firstChild){
            this.contentArea.removeChild(this.contentArea.firstChild);
            /*removeChildでfirstChildを取り出すのを繰り返す→結果的に全部取り出す(張替のため)
            appendChildで毎回一つしか追加されないけど中身の要素は多いからwhileは必須。
            */
        }
        const content=this.contents[tabId];//★contents['menu']=contents.menuは同じ
        if(content){
            const element=content.createElement();

            this.contentArea.appendChild(element);
        }


    }
}