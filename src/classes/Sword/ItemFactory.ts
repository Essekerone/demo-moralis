import Item from "@/classes/Sword/Item";
import ItemInterface from "@/classes/Sword/interfaces/ItemInterface";
import SwordAttributesEnum from "@/classes/enums/SwordAttributesEnum";

export default class ItemFactory {
    createItem(data: ItemInterface): Item {
        const item = new Item();
        item.name = data.name;
        item.image = data.image;
        item.token_address = data.token_address;
        item.token_id = data.token_id;
        item.type = data.type;
        item.amount = data.amount;
        item.description = data.description;
        this.prepareHash(data, item);
        this.prepareAttributes(data, item);

        return item;
    }

    private prepareHash(data: ItemInterface, item: Item): void {
        if (!data.hashAccepted) {
            return;
        }
        item.hashAccepted = true;
        item.hash = data.hash
    }

    private prepareAttributes(data: ItemInterface, item: Item): void {
        if (!data.attributes) {
            return
        }
        item.attributes = data.attributes;
        item.attributes.forEach(attribute => {
            if (attribute.trait_type === SwordAttributesEnum.damage) {
                item.damage = attribute.value
            }
            if (attribute.trait_type === SwordAttributesEnum.defense) {
                item.defense = attribute.value
            }
        });
    }
}