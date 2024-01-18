import * as jsonfile from 'jsonfile';
import dataBasePath from '../database/dirname'


const PATH = dataBasePath + '/data.json'
const DB = jsonfile.readFileSync(PATH)


interface Shoe {
    id: number,
    createdAt: string,
    description: string,
    color: [string],
    stock: number,
    price: number,
    sku: string,
    photo: string,
    onSale: boolean

}


const getAll = () => DB
const getById = (id: number) => DB.find((shoe: Shoe) => id == shoe.id)
const getOnSale = () => DB.filter((shoe: Shoe) => shoe.onSale == true)
const getByColor = (color: string) => DB.filter((shoe: Shoe) => shoe.color.includes(color))



console.log("🚀 ~ getByColor(Black):", getByColor("Violet"))


