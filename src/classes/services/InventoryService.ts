import MoralisUserInterface from "@/classes/interfaces/MoralisUserInterface";
import Item from "@/classes/Sword/Item";
import ItemFactory from "@/classes/Sword/ItemFactory";

export default class InventoryService {
    static getItemFromDataBase(account: MoralisUserInterface, itemName: string):  Item  {
        let item = account.get(itemName);
        if (item && item.length !== 0) {
            const itemFactory = new ItemFactory();
            return itemFactory.createItem(JSON.parse(item));
        }
        return new Item();
    }
}