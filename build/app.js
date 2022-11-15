"use strict";
class DocumentItem {
    constructor() {
        this.setState(new DraftDocumentItemState());
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
}
class DocumentItemState {
    setContext(item) {
        this.item = item;
    }
}
class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = "DraftDocument";
    }
    publish() {
        console.log(`Текст ${this.item.text} опубликован`);
        this.item.setState(new PublicDocumentItemState());
    }
    delete() {
        console.log(`Нельзя снять с публикации не опубликованный докумует`);
    }
}
class PublicDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = "PublicDocument";
    }
    publish() {
        console.log('Нельзя опубликовать опубликованный документ');
    }
    delete() {
        console.log('Документ снят с публикации');
        this.item.setState(new DraftDocumentItemState());
    }
}
const doc = new DocumentItem();
doc.text = 'Пост!';
console.log(doc.getState().name);
doc.deleteDoc();
doc.publishDoc();
doc.publishDoc();
console.log(doc.getState().name);
doc.deleteDoc();
console.log(doc.getState().name);
