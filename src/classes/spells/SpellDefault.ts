import SpellInterface from "@/classes/spells/SpellInterface";
import DefaultPerson from "@/classes/DefaultPerson";

export default class SpellDefault implements SpellInterface {
    cooldown: number;
    currentCooldown: number;
    description: string;
    icon: string;
    name: string;
    spellOwner: DefaultPerson;

    action(spellOwner: DefaultPerson, target: DefaultPerson | null): void {
        throw new Error("Not implemented spell action")
    }
}