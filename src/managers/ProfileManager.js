//import ProfileContent from "../contents/ProfileContent";
export default class ProfileManager{
    constructor(scene){
        this.scene=scene;

        this.playerData={
            name:'',
            stats:{}
        };

        this.statList=[
            {id:'mining',label:'採掘'},
            {id:'fishing',label:'釣り'},
            {id:'farming',label:'農業'},
            {id:'processing',label:'加工'},
            {id:'logging',label:'木こり'},
        ];//↑jsonに書く予定

        //this.profileManager=new ProfileManager(scene); MenuManagerで渡してるからいらんね
    }
    editProfile(){

    }
    saveProfile(){

    }
    initTutorialProfile(name){//チュートリアル用の関数(個体値の抽選は最初だけ)
        const player=this.scene.player;
        player.name=name;

        player.stats={};//これをMongoDBに送る。

        //const skills=Object.keys(stats);//objectを配列にする

        if(name.includes('尾道')){
            this.statList.forEach(s=>{
                player.stats[s.id]=25;
            });
        }else{
            this.statList.forEach(s=>{
                player.stats[s.id]=(Math.floor(Math.random()*5)*5)+5;//Math.random()*5→切り捨て→*5→+5;
            });

            player.stats[Phaser.Utils.Array.GetRandom(this.statList).id]=25;//Phaser.Utils.Array.GetRandom配列からランダムに一つ選ぶ
        }
        this.playerData.name=player.name;
        this.playerData.stats=player.stats;
    }
}