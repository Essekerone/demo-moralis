import InventoryService from "@/classes/services/InventoryService";
import {ref, onMounted} from "vue";
import {useStore} from "vuex";

export function useInventory(isPlayer: boolean): object {
    const store = useStore();

    const inventory = ref({
        sword: {
            image: "sword_default.png",
            name: "sword_default"
        },
        helm: {
            image: "helmet_default.png",
            name: "sword_default"
        },
        shield: {
            image: "shield_default.png",
            name: "shield_default"
        },
        boots: {
            image: "boots_default.png",
            name: "boots_default"
        },
    });

    const fetchInventoryItems = async (): Promise<any>=> {
        if (!isPlayer) {
            return;
        }
        let sword = await InventoryService.getItemFromDataBase(store.state.account, 'swordPicked');
        if (sword.name) {
            inventory.value.sword = sword;
        }
        let shield = await InventoryService.getItemFromDataBase(store.state.account, 'shieldPicked');
        if (shield.name) {
            inventory.value.shield = shield;
        }
        let helm = await InventoryService.getItemFromDataBase(store.state.account, 'helmPicked');
        if (helm.name) {
            inventory.value.helm = helm;
        }
        let boots = await InventoryService.getItemFromDataBase(store.state.account, 'bootsPicked');
        if (boots.name) {
            inventory.value.boots = boots;
        }
    }

    onMounted(fetchInventoryItems);

    return inventory;
}