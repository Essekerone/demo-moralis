export default interface  MoralisUserInterface {
    get(propertyName: string): string;
    set(propertyName: string): void;
}