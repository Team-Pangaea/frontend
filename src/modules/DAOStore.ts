import { create } from 'zustand';
import {InjectedAccountWithMeta, InjectedExtension} from "@polkadot/extension-inject/types";
import {ContractPromise} from "@polkadot/api-contract";
import {ApiPromise} from "@polkadot/api";

export interface Project {
    id?: number;
    description?: string;
    creator?: string;
    members?: string[];
}

export interface Task {
    id?: number;
    
}

interface DAOStore {
    projects: Record<number, Project>;
    setProject: (id: number, project: Project) => void;
    tasks: Record<number, any>;
    setTask: (id: number, task: any) => void;
}


export const useDAOStore = create<DAOStore>()((set) => ({
    projects: {},
    setProject: (id, project) => set((state) => ({ 
        projects: { 
            ...state.projects, 
            [id]: state.projects[id] ? {
                ...state.projects[id],
                ...project,
            } : project 
        } })),
    tasks: {},
    setTask: (id, task) => set((state) => ({
        tasks: {
            ...state.tasks,
            [id]: state.tasks[id] ? {
                ...state.tasks[id],
                ...task,
            } : task
        }
    })),
}))