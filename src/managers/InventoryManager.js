export default class Inventory{
    constructor(){
        this.isOpenInv=false;

        this.inventoryEl=document.getElementById('inventory');
        this.itemListEl=document.getElementById('inventory-item');
    }
    openInventory(items){
        this.isOpenInv=true;
        this.itemListEl.innerHTML='';//最優先で空にして、表示
        this.inventoryEl.classList.remove('hidden');

        items.forEach((item)=>{

            const li=document.createElement('li');
            li.setAttribute('data-id',item.id);

            const stars='★'.repeat(item.realQuality)+'☆'.repeat(3-item.realQuality);
            li.textContent=`${item.name}[品質:${stars}]×${item.count}`;
            //品質は星で表す

            li.onclick=(e)=>{
                const id=e.currentTarget.getAttribute('data-id');
                //クリックしたアイテムの特定
                const clickedItem=items.find(i=>i.id===id);
                console.log(`${clickedItem}が選択されました。`);
                //ここで使う、捨てるを選べるようにする予定
            }
            this.itemListEl.appendChild(li);
        });
    }
    closeInventory(){
        this.isOpenInv=false;
        this.inventoryEl.classList.add('hidden');
    }
}