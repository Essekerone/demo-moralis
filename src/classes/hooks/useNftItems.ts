import HashGenerator from "@/classes/services/HashGenerator";
import Moralis from '@/initMoralis';
import ItemFactory from "@/classes/Sword/ItemFactory";
import {ref, onMounted} from 'vue'
import ItemInterface from "@/classes/Sword/interfaces/ItemInterface";

export function useNftItems(options: object) {
    const items = ref([]);

    const generateHash = async (tokenAddress: string, tokenId: number): Promise<any> => {
        const hashGenerator = new HashGenerator(tokenAddress, tokenId);
        return await hashGenerator.getHash();
    }

    const getNFTsFromMoralis = async (): Promise<any> => {
        return await Moralis.Web3.getNFTs(options);
        //@ts-ignore
        // const result = await Moralis.Web3API.account.getNFTs(options);
        // return result.result;
    }

    const fetchUrl = async (url: string): Promise<any> => {
        return await fetch(url).then(response => response.json());
    }
    const getNftMetaData = async (nft: ItemInterface) => {
        const response = await fetchUrl(nft.token_uri).catch(e => {
            console.log(e, nft)
        });

        const nftHash = await generateHash(nft.token_address, nft.token_id);
        if (response) {
            if (response.hash) {
                if (nftHash === response.hash) {
                    response.hashAccepted = true;
                }
            }
            response.token_address = nft.token_address;
            response.amount = nft.amount;
            response.token_id = Number(nft.token_id);
            const swordItemFactory = new ItemFactory();
            const sword = swordItemFactory.createItem(response);
            sword.hash = nftHash;
            items.value.push(sword);
        }
    }

    const getSwordsForShop = async (): Promise<any> => {
        let NTFs;
        try {
            NTFs = await getNFTsFromMoralis();
        } catch (e) {
            console.log("MORALIS GETNFT ERROR", e);
        }
        for (const nft of NTFs) {
            if (!nft.token_uri) {
                continue;
            }
            getNftMetaData(nft);
        }
    }

    onMounted(getSwordsForShop)

    return items;
}