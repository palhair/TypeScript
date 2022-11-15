class DocumentItem {
    public text: string;
    private state: DocumentItemState;

    constructor(){
        this.setState(new DraftDocumentItemState());
        
    }

    getState() {
        return this.state;
    }

    setState(state: DocumentItemState){
        this.state = state;
        this.state.setContext(this);
    }

    publishDoc(){
        this.state.publish();
    }

    deleteDoc(){
        this.state.delete();
    }
}

abstract class DocumentItemState {
    public name: string;
    public item: DocumentItem;

    setContext (item: DocumentItem) {
        this.item = item;
    }

    public abstract publish(): void;
    public abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState {
    constructor(){
        super();
        this.name = "DraftDocument";
    }

    public publish(): void {
        console.log(`Текст ${this.item.text} опубликован`);
        this.item.setState(new PublicDocumentItemState());
    }
    public delete(): void {
        console.log(`Нельзя снять с публикации не опубликованный докумует`)
    }
    
}

class PublicDocumentItemState extends DocumentItemState {

    constructor(){
        super();
        this.name = "PublicDocument";
    }
    public publish(): void {
        console.log('Нельзя опубликовать опубликованный документ');
    }
    public delete(): void {
        console.log('Документ снят с публикации');
        this.item.setState(new DraftDocumentItemState());
    }

}

const doc = new DocumentItem();
doc.text = 'Пост!'

console.log(doc.getState().name);
doc.deleteDoc();
doc.publishDoc();
doc.publishDoc();
console.log(doc.getState().name);
doc.deleteDoc();
console.log(doc.getState().name);