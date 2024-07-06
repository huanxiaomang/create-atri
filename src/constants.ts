import chalk from "chalk";


export const nameToRepoURL = {
    'vue-lint-vitesse-lite': 'huanxiaomang/vue-lint-vitesse-lite',
    'npm-ts-tsup': 'huanxiaomang/npm-ts-tsup',
} as const;

export type TemplateName = keyof typeof nameToRepoURL;

export interface Choice {
    title: string;
    value: TemplateName;
}

export const choices: Choice[] = [
    { title: chalk.cyan("vue-lint-vitesse-lite"), value: "vue-lint-vitesse-lite" },
    { title: chalk.green('npm-ts-tsup'), value: "npm-ts-tsup" },
    { title: chalk.blue('nothing1'), value: "npm-ts-tsup" },
    { title: chalk.magenta('nothing2'), value: "npm-ts-tsup" }
];

export const projGuideCommands: Record<TemplateName, string[]> = {
    'vue-lint-vitesse-lite': [
        'cd $PATH',
        'pnpm i',
        'pnpm dev'
    ],
    'npm-ts-tsup': [
        'cd $PATH',
        'pnpm i',
        'pnpm dev'
    ],
} as const;