import Message from '@/classes/Message';
import {ActionsListEnum} from "@/classes/enums/ActionsListEnum";
import ActiveActionsType from "@/classes/types/ActiveActionsType";
import InitStatsItemsService from "@/classes/services/InitStatsItemsService";
import ItemInterface from "@/classes/Sword/interfaces/ItemInterface";
import PrepareStatsItemStatus from "@/classes/types/PrepareStatsItemStatus";
import SpellInterface from "@/classes/spells/SpellInterface";
import Heal from "@/classes/spells/Heal";
import Bubble from "@/classes/spells/Bubble";

export default class DefaultPerson {
    health: number;
    maxHealth: number;
    attack: ActionsListEnum;
    block: ActionsListEnum;
    name: string;
    level: number;
    damage: number;
    experience: number;
    maxExperience: number;
    baseDefense: number;
    headDefense: number;
    legsDefense: number;
    chestDefense: number;
    points: number;
    isDead: boolean;
    inventory: Array<ItemInterface>;
    prepareItemStatus: PrepareStatsItemStatus;
    spells: Array<SpellInterface>
    activeSpell: SpellInterface|null;
    public readonly activeActions = ActiveActionsType;

    constructor(level: number, name: string, inventory: [] | null) {
        this.level = level;
        this.name = name;
        this.isDead = false;
        this.inventory = inventory;
        this.attack = ActionsListEnum.NONE;
        this.block = ActionsListEnum.NONE;
        this.points = 0;
        this.prepareItemStatus = new PrepareStatsItemStatus();
        this.prepareStats();
        this.spells = [
            new Heal(),
            new Bubble()
        ];
        // this.prepareInventoryStats();
    }

    public prepareInventoryStats(): void {
        const initItems = new InitStatsItemsService(this, this.prepareItemStatus);
        initItems.prepareInventoryStatsToPerson(this.inventory);
    }

    public prepareStats(): void {
        this.health = this.maxHealth = 100 + (this.level - 1) * 5;
        this.experience = 0;
        this.maxExperience = 100 + (this.level - 1) * 50;
        this.baseDefense = (this.level - 1);
        this.headDefense = this.baseDefense;
        this.legsDefense = this.baseDefense;
        this.chestDefense = this.baseDefense;
        this.damage = 10 + (this.level - 1) * 5;
    }

    public makeHit(target: DefaultPerson, isEnemy: boolean): Message {
        const message = new Message(isEnemy);
        if (target.block != this.attack) {
            const damage = Math.trunc(this.damage * this.getAbsorbPercent(target));
            target.health -= damage;
            message.appendMessage(target.name + ` get ${damage} dmg <br>`);
            message.setHitSuccess();
        } else {
            message.appendMessage(target.name + " block attack <br>");
            message.setHitFalse();
        }

        return message;
    }

    public useSpell(target: DefaultPerson, isEnemy: boolean): Message {
        const message = new Message(isEnemy);
        this.activeSpell.action(this, target)
        this.activeSpell.currentCooldown = this.activeSpell.cooldown;
        message.appendMessage(`${this.name} use spell <span style="cursor:pointer" title="${this.activeSpell.description}"><b>${this.activeSpell.name}</b></span> <br>`);
        message.setHitSuccess();
        this.activeSpell = null;
        return message;
    }

    public getAbsorbPercent(person: DefaultPerson): number {
        let absorb = 1;
        if (this.attack === 0) {
            absorb = 1 - (0.05 * person.headDefense / (1 + 0.05 * person.headDefense));
        }
        if (this.attack === 1) {
            absorb = 1 - (0.05 * person.chestDefense / (1 + 0.05 * person.chestDefense));
        }
        if (this.attack === 2) {
            absorb = 1 - (0.05 * person.legsDefense / (1 + 0.05 * person.legsDefense));
        }
        return absorb;
    }

    public setInventory(inventory: Array<ItemInterface>): void {
        this.inventory = inventory;
        this.prepareInventoryStats();
    }


    public getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    public getActionNameById(id: number): string {
        if (id == ActionsListEnum.NONE) {
            return '';
        }
        return this.activeActions.find(item => item.value == id).name;
    }

    public updateStatus(): void {
        if (this.health <= 0) {
            this.isDead = true;
        }
    }

    public getExperienceFromEnemy(person: DefaultPerson): void {
        this.experience += 50 + (person.level-1) * 10;
        this.points += (50 + (person.level-1) * 10) / 10;
    }

    public levelUp(): void {
        this.level++;
        this.prepareItemStatus.resetItemStatus();
        this.prepareStats();
        this.prepareInventoryStats();
    }

    public heal(live: number): void {
        if((this.health + live) > this.maxHealth){
            this.health= this.maxHealth;
        } else {
            this.health +=live;
        }
    }

    public roundCooldownSpells(): void {
        this.spells.forEach(spell => {
            if(spell.currentCooldown > 0){
                spell.currentCooldown--;
            }
        })
    }
}
