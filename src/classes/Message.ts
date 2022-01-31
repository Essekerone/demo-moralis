export default class Message {
    message: string;
    result: boolean;
    isEnemy: boolean;

    constructor(isEnemy: boolean) {
        this.isEnemy = isEnemy;
        this.message = '';
    }

    appendMessage(text: string) {
        this.message = this.message + text;
    }

    setHitSuccess() {
        this.result = true;
    }

    setHitFalse() {
        this.result = false;
    }
}

