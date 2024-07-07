#!/usr/bin/env node
import prompts from "prompts";
import path from "node:path";
import chalk from "chalk";
import { TemplateName, choices, projGuideCommands } from "./constants";
import { cloneTemplateTo } from "./clone";


const bootstrap = async () => {
    welcome();
    const result = await prompts([
        {
            type: "text",
            name: "projectName",
            message: "请输入项目名称(输入.直接在当前目录创建):"
        },
        {
            type: 'select',
            name: 'projectSelect',
            message: '请选择项目类型:',
            choices,
            initial: 0
        }

    ]);
    const targetPath = path.resolve(
        process.cwd(),
        result.projectName === '.' ? '' : result.projectName
    );

    const repoName = result.projectSelect;
    const isSuccess = await cloneTemplateTo(repoName, targetPath);

    isSuccess && successLog(repoName, result.projectName);


};
bootstrap();


function welcome() {
    const cat = `
⣿⣿⣿⠟⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢋⣩⣉⢻⣿⣿
⣿⣿⣿⠀⣿⣶⣕⣈⠹⠿⠿⠿⠿⠟⠛⣛⢋⣰⠣⣿⣿⠀⣿⣿
⣿⣿⣿⡀⣿⣿⣿⣧⢻⣿⣶⣷⣿⣿⣿⣿⣿⣿⠿⠶⡝⠀⣿⣿
⣿⣿⣿⣷⠘⣿⣿⣿⢏⣿⣿⣋⣀⣈⣻⣿⣿⣷⣤⣤⣿⡐⢿⣿
⣿⣿⣿⣿⣆⢩⣝⣫⣾⣿⣿⣿⣿⡟⠿⠿⠦⠀⠸⠿⣻⣿⡄⢻
⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⣿⣿⠇⣼
⣿⣿⣿⣿⣿⣿⡄⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣰⣿
⣿⣿⣿⣿⣿⣿⠇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣿⣿
⣿⣿⣿⣿⣿⠏⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿
⣿⣿⣿⣿⠟⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿
⣿⣿⣿⠋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⣿⣿
⣿⣿⠋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿
    `
    console.log(cat);
    console.log(`———————————————————————————————————————————————————`)
    console.log(chalk.blue(`欢迎(●• ̀ω•́ )✧ 请创建你的项目`))
    console.log(`———————————————————————————————————————————————————`)
}

function successLog(repoName: TemplateName, path: string) {

    console.log(
        chalk.green(`创建成功`) +
        `${projGuideCommands[repoName].map((c) => `\n     ${c}`.replaceAll('$PATH', path)).join('')}`
    )
}