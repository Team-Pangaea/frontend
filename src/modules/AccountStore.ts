import { create } from 'zustand';
import {InjectedAccountWithMeta} from "@polkadot/extension-inject/types";
import {ContractPromise} from "@polkadot/api-contract";

interface AccountStore {
    account: InjectedAccountWithMeta | null;
    setAccount: (account: InjectedAccountWithMeta | null) => void;
    nftContract: ContractPromise | null;
    setNftContract: (nftContract: ContractPromise | null) => void;
}

export const useAccountStore = create<AccountStore>()((set) => ({
    account: null,
    setAccount: (account) => set({ account }),
    nftContract: null,
    setNftContract: (nftContract) => set({ nftContract }),
}))