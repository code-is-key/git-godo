import chalk from 'chalk';
import inquirer, { QuestionCollection } from 'inquirer';
import { runSh } from '../utils/utils';

interface ICleanup {
  all: boolean;
  dryRun: boolean;
  pruneRemote: boolean;
}

/**
 * Run cleanup command
 * @param args
 */
export const cleanupCommand = async (args: ICleanup) => {
  const branches = getBranches(runSh('git branch'));

  if (args.dryRun) {
    console.log(chalk.yellowBright(`*** Running in dry-run mode ***`));
  }

  if (args.all) {
    deleteBranches(branches, args.dryRun);
  }

  if (!args.all) {
    const question: QuestionCollection = {
      type: 'checkbox',
      choices: branches.map(br => ({ name: br, value: br })),
      name: 'deletebranchinqury',
      message: 'Which branches do you want to delete?',
    };

    if (branches.length !== 0) {
      const answers = await inquirer.prompt(question);
      const selectedBranches: string[] = answers['deletebranchinqury'];
      deleteBranches(selectedBranches, args.dryRun);
    } else {
      console.log(chalk.whiteBright(`No more local branches to clean! you're good 👍`));
    }
  }

  if (args.pruneRemote) {
    console.log(chalk.whiteBright(`pruning remote branches`));
    if (!args.dryRun) {
      runSh('git fetch --prune');
    }
  }
  console.log(chalk.whiteBright(`Workspace has been cleaned`));
};

/**
 * Delete branches
 * @param branches
 * @param dryRun
 */
export const deleteBranches = (branches: string[] = [], dryRun: boolean = false) => {
  branches.forEach(branch => {
    console.log(chalk.whiteBright(`deleting branch ${chalk.bold(branch)}`));
    if (!dryRun) {
      runSh(`git branch -D ${branch}`);
    }
  });
};

/**
 * get branches from 'git branch command'
 * @param raw
 */
export const getBranches = (raw: string): string[] => {
  return raw
    .split('\n')
    .map(branch => branch.trim())
    .filter(branch => !branch.startsWith('*'))
    .filter(branch => branch !== '')
    .filter(branch => branch !== 'develop' && branch !== 'master' && branch !== 'development');
};
