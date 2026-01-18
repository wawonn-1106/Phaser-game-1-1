export default class DictionaryContent{
    constructor(scene){
        this.scene=scene;
    }
    createElement(){
        const container=document.createElement('div');
        container.classList.add('dictionary-content');//ここは変えてね


        const terms=this.scene.dictionaryManager.getTerms();//DictionaryManagerがjsonでデータを取る
        //↑Worldで、this.dictionaryManager=new DictionaryManager(this)をやってる前提

        terms.forEach(term=>{
            const item=document.createElement('div');
            item.classList.add('dictionary-item');

            const word=document.createElement('div');
            word.classList.add('term-word');
            word.textContent=term.word;

            const category=document.createElement('div');
            category.classList.add('term-category');
            category.textContent=term.category;

            const description=document.createElement('div');
            description.classList.add('term-description');
            description.textContent=term.description || '説明はありません';

            const example=document.createElement('div');
            example.classList.add('term-example');
            example.textContent=term.example || '例文はありません';

            item.appendChild(word);
            item.appendChild(category);
            item.appendChild(description);
            item.appendChild(example);

            container.appendChild(item);
        });

        return container;
    }
}