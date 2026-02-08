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

        //const items=this.worldScene.inventoryData || [];  //World.jsのアイテムなかったら空
        const items=this.uiScene.registry.get('inventoryData');

        /*if(items.length===0){
            const emptyMsg=this.uiScene.add.text(0,0,'持ち物はありません',{
                fontSize:'28px',
                color:'#000000'
            });
            //emptyMsg.textContent='持ち物はありません';
            container.add(emptyMsg);
            return container;
        }*/

        const startX=-400;
        const backPackStartY=-120;
        const hotbarStartY=160;
        const slotSize=100;

        const tooltip=this.uiScene.add.text(0,-240,'',{
            fontSize:'20px',
            color:'#000000',
            backgroundColor:'#ffffff',
            padding:{x:12,y:10},
            lineSpacing:8
        }).setOrigin(0.5,0.5).setDepth(2000).setVisible(false);
        
        container.add(tooltip);
        /*const colWidth=260;
        const rowHeight=120;
        const maxCols=3;
        /*const ul=document.createElement('ul');
        ul.classList.add('item-grid');*/

        items.forEach((item,index)=>{
            const isHotbar=index<9;
            const col=isHotbar? index:(index-9)%9;
            const row=isHotbar?0:Math.floor((index%9)/9);

            const x=startX+(col*slotSize);
            const y=isHotbar? hotbarStartY:backPackStartY+(row*slotSize);

            const slotBg=this.uiScene.add.image(x,y,'slot-bg')
                .setDisplaySize(90,90)
                .setInteractive({useHandCursor:true,draggable:true});

            container.add(slotBg);

            const itemContainer=this.uiScene.add.container(x,y);

            if(item&& item.count>0){
                const icon=this.uiScene.add.image(0,0,item.id).setDisplaySize(60,60);
                const countText=this.uiScene.add.text(38,38,item.count,{
                    fontSize:'18px',
                    stroke:'#000',
                    strokeTickness:3
                }).setOrigin(1,1);

                itemContainer.add([icon,countText]);
            }

            slotBg.on('pointerover',(pointer)=>{
                if(this.uiScene.draggedItem)return;

                let text=`【${item.name}】`;

                if(item.qualityDetails){
                    text+=`★１:${item.qualityDetails[0]} ★２:${item.qualityDetails[1]} ★３:${item.qualityDetails[2]}}`;
                }

                tooltip.setText(text).setVisible(true).setPosition(pointer.worldX,pointer.worldY);
            });

            slotBg.on('pointermove',(pointer)=>{
                tooltip.setPosition(pointer.worldX,pointer.worldY);
            });

            slotBg.on('pointerout',()=>{
                tooltip.setVisible(false);
            });

            let pressStartTime=0;

            slotBg.on('pointerdown',(pointer)=>{
                pressStartTime=pointer.time;
            });

            slotBg.on('pointerup',(pointer)=>{
                const duration=pointer.time-pressStartTime;

                if(duration<200 && !this.uiScene.draggedItem){
                    this.showItemDescription(item);
                }else if(this.uiScene.draggedItem){
                    this.uiScene.dropItem(index);
                    //this.worldScene.menuManager.switchTab('inventory');
                }
            });

            slotBg.on('dragstart',()=>{
                this.uiScene.startDragItem(index);
                itemContainer.setVisible(false);
                tooltip.setVisible(false);
            });
            /*const li=document.createElement('li');
            li.classList.add('item-card');*/

            /*const stars='★'.repeat(item.realQuality)+'☆'.repeat(3-item.realQuality);
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

            /*dropBtn.on('pointerdown',()=>{
                this.worldScene.inventoryManager.removeItem(item.id);
            });*/

            /*li.appendChild(qualityDiv); //sppendchild ×
            li.appendChild(nameEl);
            li.appendChild(btnGroup);
            btnGroup.appendChild(useBtn);
            btnGroup.appendChild(dropBtn);

            ul.appendChild(li);*/
            //itemContainer.add([qualityText,nameText,dropBtn]);//useBtn作るかも
            //container.add(itemContainer);

        });
        //container.appendChild(ul);

        return container;
    }
    showItemDescription(item){
        if (!item || this.uiScene.draggedItem) return;

        if(this.descPanel)this.descPanel.destroy();

        this.descPanel=this.uiScene.add.container(250,-150);

        const panelBg=this.uiScene.add.image(0,0,'descPane-bg')
            .setDisplaySize(350,450)
            .setInteractive();

        const titleText=this.uiScene.add.text(0,-180,item.name,{
            fontSize:'28px',
            color:'#000000',
            stroke:'#000',
            strokeTickness:4
        }).setOrigin(0.5);

        const descText=this.uiScene.add.text(-140,-130,item.description,{
            fontSize:'18px',
            color:'#ffffff',
            lineSpacing:5
        });

        let qualityInfo=`【品質内訳】`;

        if(item.qualityDetails){
            qualityInfo+=`★１:${item.qualityDetails[0]}個 ★２:${item.qualityDetails[1]}個 ★３:${item.qualityDetails[2]}個}`;
        }

        const qualityText=this.uiScene.add.text(-140,50,qualityInfo,{
            fontSize:'18px',
            color:'#000000',
            lineSpacing:8
        });

        const closeBtn=this.uiScene.add.image(0,180,'close-btn')//何て名前だっけ、後で統一
            .setDisplaySize(120,50)
            .setInteractive({useHandCursor:true});
        
        const closeText=this.uiScene.add.text(0,180,'閉じる',{
            fontSize:'16px',
            color:'#000000',
        }).setOrigin(0.5);

        closeBtn.on('pointerdown',()=>{
            this.descPanel.destroy();
            this.descPanel=null;
        });

        this.descPanel.add([panelBg,titleText,descText,qualityText,closeBtn,closeText]);
        this.descPanel.setDepth(5000);
    }
}