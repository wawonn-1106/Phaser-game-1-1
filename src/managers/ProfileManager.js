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
}
/*今はWorldのデータをProfileContentでもらって編集の時はProfileManager通してるけど、
json管理の時はProfileManagerでデータをもらう感じにする*/