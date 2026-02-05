export default class MachineManager{
    constructor(scene){
        this.scene=scene;

        this.recipes=this.scene.cache.json.get('recipesData').recipes;//UISceneでダウンロードしておく
        /*this.recipes=[
            {id:'bread',name:'パン',ingredients:[{id:'wheat',count:3}],result:'bread'},
            {id:'bread',name:'パン',ingredients:[{id:'wheat',count:3}],result:'bread'},
            {id:'bread',name:'パン',ingredients:[{id:'wheat',count:3}],result:'bread'},
            {id:'bread',name:'パン',ingredients:[{id:'wheat',count:3}],result:'bread'},
            {id:'bread',name:'パン',ingredients:[{id:'wheat',count:3}],result:'bread'},
        ];//将来的にjsonで管理*/
    }
    canCraft(recipe,inventoryData){
        //const recipe=this.recipes.find(r=>r.id===recipeId);
        let missingCount=0;

        recipe.ingredients.forEach(ingredient=>{
            const heldItem=inventoryData.find(item=>item.id===ingredient.itemId);

            if(!heldItem|| heldItem.count<ingredient.count){
                missingCount++;
            }
        });

        return missingCount;//レシピの材料の種類から足りない個数を渡す。
        
    }
}