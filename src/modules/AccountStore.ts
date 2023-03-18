import { create } from 'zustand';
import {InjectedAccountWithMeta} from "@polkadot/extension-inject/types";
import {ContractPromise} from "@polkadot/api-contract";
import {ApiPromise} from "@polkadot/api";

interface AccountStore {
    account: InjectedAccountWithMeta | null;
    setAccount: (account: InjectedAccountWithMeta | null) => void;
    nftContract: ContractPromise | null;
    setNftContract: (nftContract: ContractPromise | null) => void;
    daoContract: ContractPromise | null;
    setDaoContract: (nftContract: ContractPromise | null) => void;
    daoManagerContract: ContractPromise | null;
    setDaoManagerContract: (nftContract: ContractPromise | null) => void;
    api: ApiPromise | null;
    setApi: (api: ApiPromise | null) => void;
}

export const useAccountStore = create<AccountStore>()((set) => ({
    account: null,
    setAccount: (account) => set({ account }),
    nftContract: null,
    setNftContract: (nftContract) => set({ nftContract }),
    daoContract: null,
    setDaoContract: (daoContract) => set({ daoContract }),
    daoManagerContract: null,
    setDaoManagerContract: (daoManagerContract) => set({ daoManagerContract }),
    api: null,
    setApi: (api) => set({ api }),
}))