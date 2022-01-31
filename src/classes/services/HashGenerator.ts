// @ts-ignore
import MD5 from "crypto-js/md5";
import config from '@/config';

export default class HashGenerator {
    address: string
    tokenId: number | null
    constructor(address: string, tokenId: number | null) {
        this.address = address;
        this.tokenId = tokenId;
    }

    public async getHash(): Promise<any> {
        if(this.tokenId) {
             return await MD5(MD5(this.address).toString() + this.tokenId + config.hash).toString();
        }
        return await MD5(this.address + this.tokenId).toString();
    }
}