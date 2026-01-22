export default class ProfileContent{
    constructor(scene,x,y){
        this.scene=scene;

        /*this.container=this.scene.add.container(x,y);
        this.graphics=this.scene.add.graphics();
        this.container.add(this.graphics);

        this.statLabels=[];

        //this.drawRadarChart();*/
    }
    createElement(){
        const container=document.createElement('div');
        container.classList.add('profile-container');


        const nameDisplay=document.createElement('span');
        nameDisplay.textContent=this.scene.player.name;

        //編集の時の入力欄
        const input=document.createElement('input');
        input.value=this.scene.player.name;
        input.classList.add('hidden');

        //保存ボタン
        const saveBtn=document.createElement('button');
        saveBtn.textContent='保存';
        saveBtn.classList.add('hidden');

        //編集開始ボタン
        const editBtn=document.createElement('button');
        editBtn.textContent='編集';

        editBtn.onclick=()=>{
            nameDisplay.classList.add('hidden');
            editBtn.classList.add('hidden');
            saveBtn.classList.remove('hidden');
            input.classList.remove('hidden');
            input.focus();
        }

        saveBtn.onclick=()=>{
            const newName=input.value.trim();

            if(newName){
                this.scene.player.name=newName;
                nameDisplay.textContent=newName;

                this.drawRadarChart();
            }
            nameDisplay.classList.remove('hidden');
            editBtn.classList.remove('hidden');
            saveBtn.classList.add('hidden');
            input.classList.add('hidden');
        }

        container.appendChild(input);
        container.appendChild(saveBtn);
        container.appendChild(editBtn);
        container.appendChild(nameDisplay);
        //if(input.value.trim()==='尾道') 満たしていたら５V

        return container;

    }
    /*drawRadarChart(){
        this.graphics.clear();

        this.statLabels.forEach(label=>label.destroy());
        this.statLabels=[];

        const manager=this.scene.profileManager;
        const stats=this.scene.player.stats;
        const radius=100;

        const bgPoints=manager.getPoints(0,0,radius,null);
        const pPoints=manager.getPoints(0,0,radius,stats);

        this.graphics.lineStyle(1,0x000000,0.3).strokePoints(bgPoints,true);//黒
        this.graphics.fillStyle(0x888888,0.5).lineStyle(2,0x888888,1);//グレー
        this.graphics.beginPath().moveTo(pPoints[0].x,pPoints[0].y);
        pPoints.forEach(p=>this.graphics.lineTo(p.x,p.y));
        this.graphics.closePath().fillPath().strokePath();

        manager.statList.forEach((s,i)=>{
            const p=bgPoints[i];

            const labelX=p.x*1.2;
            const labelY=p.y*1.2;

            const txt=this.scene.add.text(labelX,labelY,`${s.label}`,{
                fontSize:'14px',
                fill:'black',
                align:'center'
            }).setOrigin(0.5);//どの個体値か

            this.container.add(txt);
            this.statLabels.push(txt);
        });

    }*/
}