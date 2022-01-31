import DefaultPerson from '@/classes/DefaultPerson';
import {ActionsListEnum} from "@/classes/enums/ActionsListEnum";
import SpellInterface from "@/classes/spells/SpellInterface";

export default class DefaultBot extends DefaultPerson  {

    public setRandomActions(): void {
        let randomAttack  = super.getRandomInt(4);

        if(randomAttack < 3) {
            this.attack = this.getRandomActiveAction();
        } else {
            this.attack = ActionsListEnum.NONE;
            this.activeSpell = this.getFirstNotCooldownSpell();
        }
        this.block = this.getRandomActiveAction();
    }
    private getRandomActiveAction() : number {
        const randomNumber = super.getRandomInt(3);
        return this.activeActions.find(item => item.value == randomNumber).value;
    }

    private getFirstNotCooldownSpell() : SpellInterface | null {
        let activeSpell;
        this.spells.forEach(spell => {
            if(spell.currentCooldown === 0){
                activeSpell = spell;
            }
        });
        this.attack = this.getRandomActiveAction();
        return activeSpell;
    }
}