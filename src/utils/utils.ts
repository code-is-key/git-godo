import shell from 'shelljs';
import chalk from 'chalk';

/**
 * Execute a shell command
 * @param command
 */
export const runSh = (command: string): string => {
  const execution = shell.exec(command, { silent: true });

  if (execution.code !== 0) {
    console.error(chalk.red(`Last command '${command}' failed 🤯`));
    console.log(chalk.white(execution.stderr));
    process.exit(1);
  }

  return execution.stdout;
};
