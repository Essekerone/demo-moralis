import AttributeInterface from "@/classes/Sword/interfaces/AttributesInterface";

interface ItemInterface {
    name: string
    id: number
    image: string
    description: string
    token_address: string
    token_id: number
    token_uri: string
    hashAccepted: boolean
    hash: string
    type: string
    amount: number
    attributes: Array<AttributeInterface>
}


export default ItemInterface;