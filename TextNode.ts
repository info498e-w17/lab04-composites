
class TextNode implements IDomElement {
    private tag:string;
    private start:string;
    private end:string;

    constructor(newTag) {
        this.tag = newTag;
        this.start = `<${newTag}>`;
        this.end = `</${newTag}>`;
    }

    print() {
        console.log(`${this.tag}`);
    } 
}