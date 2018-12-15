import { Recipe } from './domain/recipe'
import { Product } from './domain/product'

export const REC: Recipe[] = [
  { id: 1, name: 'Burek',products:[
    {
      id:1,
      name:"so",
      check:true
    },
    {
      id:2,
      name:"mleko",
      check:false
    },
    {
      id:3,
      name:"cokolada",
      check:false
    },
    {
      id:4,
      name:"brasno",
      check:true
    }
  ] },
  { id: 2, name: 'Palacinke',products:[
    {
      id:1,
      name:"so",
      check:false
    },
    {
      id:2,
      name:"mleko",
      check:true
    },
    {
      id:3,
      name:"cokolada",
      check:true
    },
    {
      id:4,
      name:"brasno",
      check:false
    }
  ] },
  { id: 3, name: 'Pizza',products:[
    {
      id:1,
      name:"so",
      check:true
    },
    {
      id:2,
      name:"mleko",
      check:false
    },
    {
      id:3,
      name:"cokolada",
      check:false
    },
    {
      id:4,
      name:"brasno",
      check:true
    }
  ] },
];
export const PRO: Product[] = [
  {
    id:1,
    name:"so",
    check:false
  },
  {
    id:2,
    name:"mleko",
    check:false
  },
  {
    id:3,
    name:"cokolada",
    check:false
  },
  {
    id:4,
    name:"brasno",
    check:false
  }
]
