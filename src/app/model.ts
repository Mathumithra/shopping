export interface Shopping {
  id ? :string,
    name: string;
    price: number;
    category: string [];
  }
  export interface addcart{
    id ? :string,
    name: string;
    price: number;
    category: string [];
  }
  export interface LoginData {
    email : string,
    password : string
}

export interface TokenData{
    token : string
}