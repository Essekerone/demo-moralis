import SpellInterface from "@/classes/spells/SpellInterface";
import DefaultPerson from "@/classes/DefaultPerson";
import SpellDefault from "@/classes/spells/SpellDefault";

export default class Bubble extends SpellDefault {
    cooldown: number;
    currentCooldown: number;
    description: string;
    icon: string;
    name: string;
    spellOwner: DefaultPerson;

    action(spellOwner: DefaultPerson, target: DefaultPerson | null): void {
        // spellOwner.heal(this.healthRecovery)
    }

    constructor() {
        super();
        this.name = "Holy bubble"
        this.icon = "Bubble.png"
        this.cooldown = 10
        this.description = "Block any damage 2 rounds"
        this.currentCooldown = 0
    }

}