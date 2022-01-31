import AttributesInterface from "@/classes/Sword/interfaces/AttributesInterface";

export default class Attribute implements AttributesInterface {
    display_type: string;
    trait_type: string;
    value: any;
}