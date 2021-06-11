export interface INewCake {
    name: string;
    comment: string;
    imageUrl: string;
    yumFactor: number;
}

export interface ICake extends INewCake {
    id: string;
}
