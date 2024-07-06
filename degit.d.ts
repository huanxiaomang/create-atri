
declare module 'degit' {
    import { EventEmitter } from 'events';

    interface DegitOptions {
        cache?: boolean;
        force?: boolean;
        verbose?: boolean;
        mode?: string;
    }

    interface Repo {
        site: string;
        user: string;
        name: string;
        ref: string;
        url: string;
        ssh: string;
        subdir?: string;
        mode: string;
    }

    class Degit extends EventEmitter {
        constructor(src: string, opts?: DegitOptions);
        src: string;
        cache: boolean;
        force: boolean;
        verbose: boolean;
        proxy: string;
        repo: Repo;
        mode: string;

        clone(dest: string): Promise<void>;
    }

    export default function degit(src: string, opts?: DegitOptions): Degit;
}
