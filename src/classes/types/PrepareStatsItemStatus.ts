export default class PrepareStatsItemStatus {
    sword: boolean
    shield: boolean
    helm: boolean
    boots: boolean

    constructor() {
        this.resetItemStatus();
    }

    resetItemStatus(): void {
        this.sword = false;
        this.shield = false;
        this.helm = false;
        this.boots = false;
    }
}