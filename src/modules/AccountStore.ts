import { create } from 'zustand';
import {InjectedAccountWithMeta} from "@polkadot/extension-inject/types";

interface AccountStore {
    account: InjectedAccountWithMeta | null;
    setAccount: (account: InjectedAccountWithMeta | null) => void;
}

export const useAccountStore = create<AccountStore>()((set) => ({
    account: null,
    setAccount: (account) => set({ account }),
}))