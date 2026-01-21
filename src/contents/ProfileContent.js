export default class ProfileContent{
    constructor(scene){
        this.scene=scene;
    }
    createElement(){
        const container=document.createElement('div');
        container.classList.add('profile-container');


        const nameDisplay=document.createElement('span');
        nameDisplay.textContent=this.scene.player.name;

        //編集の時の入力欄
        const input=document.createElement('input');
        input.value=this.scene.player.name
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
    drawRadarChart(){
        
    }
}