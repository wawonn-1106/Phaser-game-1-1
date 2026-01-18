export default class DictonaryManager{
    constructor(scene){
        this.scene=scene;
    }
    getTerms(){
        const data=this.scene.cache.json.get('termsData');

        return data ? data.terms : [];
    }
}