import InventoryManager from "../managers/InventoryManager";

export default class InventoryContent{
    constructor(scene){
        this.scene=scene;
        this.invManager=new InventoryManager();
    }
    getElement(){
        const container=document.createElement('div');
        container.classList.add('inventory-container');

        //const items=this.scene.playerItems || [];  World.jsのアイテムなかったら空

        if(items.length===0){
            const emptyMsg=document.createElement('p');

            emptyMsg.textContent='持ち物はありません';
            container.appendChild(emptyMsg);
            return container;
        }

        const ul=document.createElement('ul');
        ul.classList.add('item-grid');

        items.forEach(item=>{
            const li=document.createElement('li');
            li.classList.add('item-card');

            const stars='★'.repeat(item.realQuality)+'☆'.repeat(3-item.realQuality);
            const qualityDiv=document.createElement('div');
            qualityDiv.classList.add('item-quality');
            qualityDiv.textContent=stars;

            const nameEl=document.createElement('div');
            nameEl.classList.add('item-name');
            nameEl.textContent=`${item.name}(×${item.count})`;

            const btnGroup=document.createElement('button');
            btnGroup.classList.add('item-actions');
            //使う、捨てる処理は後で
            const useBtn=document.createElement('button');
            useBtn.textContent='使う';

            const dropBtn=document.createElement('button');
            dropBtn.textContent='捨てる';

            li.sppendChild(qualityDiv);
            li.sppendChild(nameEl);
            li.sppendChild(btnGroup);
            btnGroup.sppendChild(useBtn);
            btnGroup.sppendChild(dropBtn);

            ul.appendChild(li);


        });
        container.sppendChild(ul);

        return container;
    }
}