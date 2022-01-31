import Web3 from "web3";
import SwordTraderABI from "@/contractsABI/SwordTraderABI";
import {ref, onMounted} from "vue";
import store from "@/store";

export function usePrices(tokenAddress: string, tokenId: number) {
    const pricesContent  = ref({
            //@todo Create price class
            priceWei: 0,
            traderContractAddress: "0x30E6b81900EEc9129EC10262B9F73E60e5114F8f",
            // traderContractAddress: "0x6685F68c385D138741DB6Bd397cc98750764eAd6",
            // traderContractAddress: "0x80ed9767EC2bA7d75c9F1B37D078878e88112113", - avalacnhe trader
            priceETH: 0,
            amount: 0
    })

    const fetchPrice = () => {
        try {
            const web3 = new Web3('https://rinkeby.infura.io/v3/35834d5d46374d7ba23918443a1e1763');
            //@ts-ignore
            const tradeToken = new web3.eth.Contract(SwordTraderABI, pricesContent.value.traderContractAddress);
            tradeToken.methods.getPriceERC1155(tokenAddress, BigInt(tokenId)).call().then((res: any) => {
                // console.log(res)
                pricesContent.value.priceWei = res.price;
                pricesContent.value.amount = res.amount;
                if (pricesContent.value.priceWei != 0) {
                    pricesContent.value.priceETH = store.state.web3.utils.fromWei(pricesContent.value.priceWei , 'ether');
                    // pricesContent.value.priceETH = parseFloat((pricesContent.value.priceWei / 1000000000000000000).toFixed(18));
                }
            });
        } catch (E) {
            console.log(E);
        }
    }


    onMounted(fetchPrice);

    return pricesContent;
}