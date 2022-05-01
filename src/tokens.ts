import { IToken } from "./interfaces";

export const tokens: Record<string, IToken> = {
    cauri: {
        name: "Cauri",
        networks: {
            mainnet: {
                addressPrefix: 28,
                wif: 16,
            },
            devnet: {
                addressPrefix: 30,
                wif: 170,
            },
        },
    },
};
