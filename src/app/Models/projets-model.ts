export class ProjetsModel{
    constructor(
        public id:string,
        public title:string,
        public langages:string[] = [],
        public description:string,
        public images:string[][]=[]
    ){}
}