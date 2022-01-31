import DefaultPerson from "@/classes/DefaultPerson";

interface SpellInterface {
    name: string
    icon: string,
    description: string
    action(spellOwner: DefaultPerson, target: DefaultPerson|null): void
    cooldown: number
    spellOwner: DefaultPerson
    currentCooldown: number
}

export default SpellInterface;