import degit from 'degit';
import { TemplateName, nameToRepoURL } from './constants';
import chalk from "chalk";

export const cloneTemplateTo = async (templateName: TemplateName, targetPath: string) => {
    const repoURL = nameToRepoURL[templateName];
    const emitter = degit(repoURL, {
        cache: true,
        force: true,
    });

    emitter.on('info', (info) => {
        console.log(info.message);
    });

    emitter.on('warn', (warning) => {
        console.warn(warning.message);
    });

    try {

        await emitter.clone(targetPath);
        return true;

    } catch (err) {
        console.error(chalk.red('Cloning failed:'), err);
        return false;
    }



}