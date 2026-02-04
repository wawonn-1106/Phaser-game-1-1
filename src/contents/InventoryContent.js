//import InventoryManager from "../managers/InventoryManager.js";

export default class InventoryContent{
    constructor(uiScene){
        this.uiScene=uiScene;

        this.worldScene=this.uiScene.scene.get('World');
    }
    createView(){
        const container=this.uiScene.add.container(0,0);

        const bg=this.uiScene.add.image(0,0,'menu-bg').setDisplaySize(1000,600);
        container.add(bg);

        //const container=document.createElement('div');
        //container.classList.add('inventory-container');

        const items=this.worldScene.inventoryData || [];  //World.jsのアイテムなかったら空

        if(items.length===0){
            const emptyMsg=this.uiScene.add.text(0,0,'持ち物はありません',{
                fontSize:'28px',
                color:'#000000'
            });
            //emptyMsg.textContent='持ち物はありません';
            container.add(emptyMsg);
            return container;
        }

        const startX=-400;
        const startY=-180;
        const colWidth=260;
        const rowHeight=120;
        const maxCols=3;
        /*const ul=document.createElement('ul');
        ul.classList.add('item-grid');*/

        items.forEach((item,index)=>{
            const col=index%maxCols;
            const row=Math.floor(index/maxCols);
            const x=startX+(col*colWidth);
            const y=startY+(row*rowHeight);

            const itemContainer=this.uiScene.add.container(x,y);
            /*const li=document.createElement('li');
            li.classList.add('item-card');*/

            const stars='★'.repeat(item.realQuality)+'☆'.repeat(3-item.realQuality);
            const qualityText=this.uiScene.add.text(0,0,stars,{
                fontSize:'18px',
                color:'#000000'
            });

            const nameText=this.uiScene.add.text(0,25,`${item.name}`,{
                fontSize:'20px',
                color:'#000000'
            });

            const dropBtn=this.uiScene.add.text(0,60,'[捨てる]',{
                fontSize:'18px',
                color:'#000000'
            }).setInteractive({unHandler:true});
            /*qualityDiv.classList.add('item-quality');
            qualityDiv.textContent=stars;

            const nameEl=document.createElement('div');
            nameEl.classList.add('item-name');
            nameEl.textContent=`${item.name}(×${item.count})`;

            const btnGroup=document.createElement('div');
            btnGroup.classList.add('item-actions');
            //使う、捨てる処理は後で
            const useBtn=document.createElement('button');
            useBtn.textContent='使う';

            const dropBtn=document.createElement('button');
            dropBtn.textContent='捨てる';*/

            dropBtn.on('pointerdown',()=>{
                this.worldScene.inventoryManager.removeItem(item.id);
            });

            /*li.appendChild(qualityDiv); //sppendchild ×
            li.appendChild(nameEl);
            li.appendChild(btnGroup);
            btnGroup.appendChild(useBtn);
            btnGroup.appendChild(dropBtn);

            ul.appendChild(li);*/
            itemContainer.add([qualityText,nameText,dropBtn]);//useBtn作るかも
            container.add(itemContainer);

        });
        //container.appendChild(ul);

        return container;
    }
}