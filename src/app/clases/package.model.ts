export class Package{
    userId: number = 0;
    id: number = 0;
    title: string = "";
    body: string = "";

    constructor (title: string, body: string){
        this.title = title;
        this.body = body;
        this.userId = Math.round(Math.random()*(100));
    }
}