//import ProfileContent from "../contents/ProfileContent";
export default class ProfileManager{
    constructor(scene){
        this.scene=scene;

        //this.profileManager=new ProfileManager(scene); MenuManagerで渡してるからいらんね
    }
    editProfile(){

    }
    saveProfile(){

    }
    initTutorialProfile(name){
        const player=this.scene.player;
        player.name=name;

        const skills=Object.keys(player.stats);

        if(name.includes('尾道')){
            skills.forEach(s=>player.stats[s]=25);
        }else{
            skills.forEach(s=>{
                player.stats[s]=(Math.floor(Math.random()*5)*5)+5;//Math.random()*5→切り捨て→*5→+5;
            });
            const lucky=skills[Math.floor(Math.random()*skills.length)];
            player.stats[lucky]=25;//一つだけカンスト
        }
    }
}
/*今はWorldのデータをProfileContentでもらって編集の時はProfileManager通してるけど、
json管理の時はProfileManagerでデータをもらう感じにする*/