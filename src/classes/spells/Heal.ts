import SpellInterface from "@/classes/spells/SpellInterface";
import DefaultPerson from "@/classes/DefaultPerson";
import SpellDefault from "@/classes/spells/SpellDefault";

export default class Heal extends SpellDefault {
    cooldown: number;
    currentCooldown: number;
    description: string;
    icon: string;
    name: string;
    spellOwner: DefaultPerson;
    healthRecovery: number;

    action(spellOwner: DefaultPerson, target: DefaultPerson | null): void {
        spellOwner.heal(this.healthRecovery)
    }

    constructor() {
        super();
        this.name = "Heal"
        this.icon = "Heal.png"
        this.healthRecovery = 50
        this.description = `That is very easy, your heal himself by ${this.healthRecovery}`
        this.cooldown = 5
        this.currentCooldown = 0
    }

}