
export interface NavItemType {
    name : string,
    path : string
}


export interface ContentType {
    id:number,
    title : string,
    description:string,
    quote:string,
    author : string,
    link : string,
    path  :string,
    image : string,
    imageDescription : string
}

export interface BlogType{
    id : number ,
    title : string,
    description  :string,
    path : string,
    image : string,
    imageDescription : string
}


export interface featureCompanyType{
    image:string,
    imageDescription:string
}


export interface footerContentsType{
    title : string,
    contents : string[]
}