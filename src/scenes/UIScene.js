import MenuManager from "../managers/MenuManager.js";

export default class UIScene extends Phaser.Scene{
    constructor(){
        super({key:'UIScene'});
    }
    create(){
        const worldScene=this.scene.get('World');

        this.menuManager=new MenuManager(this,worldScene);

        this.keys=this.input.keyboard.addKeys('M,I,P,A,R,S,D');
    }
    update(){
        //メニューを開くキーのショートカット
        if(Phaser.Input.Keyboard.JustDown(this.keys.M)){
            this.menuManager.toggle('menu');
        }
        if(Phaser.Input.Keyboard.JustDown(this.keys.I)){
            this.menuManager.toggle('inventory');
        }
        if(Phaser.Input.Keyboard.JustDown(this.keys.P)){
            this.menuManager.toggle('profile');
        }
        if(Phaser.Input.Keyboard.JustDown(this.keys.A)){
            this.menuManager.toggle('review');
        }
        if(Phaser.Input.Keyboard.JustDown(this.keys.R)){
            this.menuManager.toggle('ranking');
        }
        if(Phaser.Input.Keyboard.JustDown(this.keys.S)){
            this.menuManager.toggle('settings');
        }
        if(Phaser.Input.Keyboard.JustDown(this.keys.D)){
            this.menuManager.toggle('dictionary');
        }
    }
}