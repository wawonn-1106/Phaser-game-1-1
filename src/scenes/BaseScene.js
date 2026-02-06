import DialogManager from "../managers/DialogManager.js";
import Player from '../entities/Player.js';
//import DialogManager from '../managers/DialogManager.js';
import NPC from '../entities/NPC.js';
//import House from './House.js';
import MenuManager from '../managers/MenuManager.js';
import InventoryManager from '../managers/InventoryManager.js';
import ProfileManager from '../managers/ProfileManager.js';
import DictionaryManager from '../managers/DictionaryManager.js';
import ProfileContent from '../contents/ProfileContent.js';
import MachineManager from '../managers/MachineManager.js';

export default class BaseScene extends Phaser.Scene{
    constructor(config){
        super(config);

        this.interactables=[];
        this.readyIcon=null;
        this.readyActionType=null;
        this.actionTarget=null;
    }
    initManagers(){
        this.dialogManager=new DialogManager(this);
        this.profileManager=new ProfileManager(this); 
        //this.dialogManager=new DialogManager(this);
        this.machineManager=new MachineManager(this);
    }
    updateInteractables(player){
        let minDistance=100;
        let closestItem=null;//機械、ドア、NPCで近いものに▼マークを付ける
        let bestPriority=999;

        this.interactables.forEach(item=>{

            let targetX=item.type==='npc' ? item.instance.x:item.x;
            let targetY=item.type==='npc' ? item.instance.y:item.y;

            const dist=Phaser.Math.Distance.Between(this.player.x,this.player.y,targetX,targetY);

            if(dist<minDistance){
                let priority=3;
                if(item.type==='npc') priority=0;
                else if(item.type=='machine') priority=1;
                else if(item.type=='door') priority=2;

                if(priority<bestPriority || (priority===bestPriority&& dist<minDistance)){
                    minDistance=dist;
                    bestPriority=priority;

                    closestItem={
                        ...item,
                        currentX:targetX,
                        currentY:targetY
                    };
                }
            }
        });

        const isMenuOpen=this.menuManager?.isOpenMenu || false;
        const isBusy=this.dialogManager?.isTalking || isMenuOpen;

        if(closestItem && !isBusy){
            this.readyActionType=closestItem.type;
            this.actionTarget=closestItem;
            this.readyIcon.setVisible(true);
            this.readyIcon.setPosition(closestItem.currentX,closestItem.currentY-50);

        }else{
            this.readyActionType=null;
            this.actionTarget=null;
            this.readyIcon.setVisible(false);
        }
    }
}