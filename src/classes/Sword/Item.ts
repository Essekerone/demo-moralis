import ItemInterface from "@/classes/Sword/interfaces/ItemInterface";
import AttributeInterface from "@/classes/Sword/interfaces/AttributesInterface";

export default class Item implements ItemInterface {
    attributes: Array<AttributeInterface>;
    description: string;
    hash: string;
    hashAccepted: boolean;
    id: number;
    image: string;
    name: string;
    type: string;
    token_address: string;
    token_uri: string;
    token_id: number;
    damage: number;
    defense: number;
    equipped: boolean;
    amount: number;

    isEquipped(equippedTokenAddress: string, equippedTokenId: number) : boolean {
        if (equippedTokenId === this.token_id && equippedTokenAddress === this.token_address) {
            this.equipped = true;
            return true;
        }
        this.equipped = false;
        return false;
    }
}