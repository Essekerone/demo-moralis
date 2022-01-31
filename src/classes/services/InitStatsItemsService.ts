import AttributeInterface from "@/classes/Sword/interfaces/AttributesInterface";
import DefaultPerson from "@/classes/DefaultPerson";
import ItemInterface from "@/classes/Sword/interfaces/ItemInterface";
import ItemsTypeEnum from "@/classes/enums/ItemsTypeEnum";
import PrepareStatsItemStatus from "@/classes/types/PrepareStatsItemStatus";

export default class InitStatsItemsService {
    prepareStatsItemStatus: PrepareStatsItemStatus
    person: DefaultPerson
    constructor(person: DefaultPerson,prepareStatsItemStatus: PrepareStatsItemStatus) {
        this.person = person;
        this.prepareStatsItemStatus = prepareStatsItemStatus;
    }

    prepareInventoryStatsToPerson(inventory: Array<ItemInterface>) {
        Object.entries(inventory).forEach(
            ([key, value]) => {
                if (key === ItemsTypeEnum.sword && !this.prepareStatsItemStatus.sword) {
                    if (value.attributes) {
                        this.initSwordAttributes(value.attributes)
                    }
                }
                if (key === ItemsTypeEnum.shield && !this.prepareStatsItemStatus.shield) {
                    if (value.attributes) {
                        this.initShieldAttributes(value.attributes)
                    }
                }
                if (key === ItemsTypeEnum.helm && !this.prepareStatsItemStatus.helm) {
                    if (value.attributes) {
                        this.initHelmAttributes(value.attributes)
                    }
                }
                if (key === ItemsTypeEnum.boots && !this.prepareStatsItemStatus.boots) {
                    if (value.attributes) {
                        this.initBootsAttributes(value.attributes)
                    }
                }
            }
        );
    }


    initSwordAttributes(attributes: Array<AttributeInterface>): void {
        this.person.damage += Number(attributes[0].value);
        this.prepareStatsItemStatus.sword = true;
    }

    initHelmAttributes(attributes: Array<AttributeInterface>): void {
        this.person.headDefense += Number(attributes[0].value);
        this.prepareStatsItemStatus.helm = true;
    }

    initShieldAttributes(attributes: Array<AttributeInterface>): void {
        this.person.chestDefense += Number(attributes[0].value);
        this.prepareStatsItemStatus.shield = true;
    }

    initBootsAttributes(attributes: Array<AttributeInterface>): void {
        this.person.legsDefense += Number(attributes[0].value);
        this.prepareStatsItemStatus.boots = true;
    }
}