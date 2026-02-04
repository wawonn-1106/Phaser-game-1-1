export default class MachineManager{
    constructor(scene){
        this.scene=scene;

        this.recipes=[
            {id:'bread',name:'パン',ingredients:[{id:'wheat',count:3}],result:'bread'},
            {id:'bread',name:'パン',ingredients:[{id:'wheat',count:3}],result:'bread'},
            {id:'bread',name:'パン',ingredients:[{id:'wheat',count:3}],result:'bread'},
            {id:'bread',name:'パン',ingredients:[{id:'wheat',count:3}],result:'bread'},
            {id:'bread',name:'パン',ingredients:[{id:'wheat',count:3}],result:'bread'},
        ];//将来的にjsonで管理
    }
    canCraft(recipeId,inventoryData){
        const recipe=this.recipes.find(r=>r.id===recipeId);

        
    }
}