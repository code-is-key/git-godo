import program from 'commander';
import { cleanupCommand } from './src/commands/cleanup';
import shell from 'shelljs';
const packageJson = require('../package.json');

export function cli() {
  //program
  //  .command('workon <issue>')
  //  .alias('w')
  //  .description('lol')
  //  .option('-c, --create', 'create issue')
  //  .action((args: any) => {
  //    status();
  //    console.log('');
  //  });
  //
  //program
  //  .command('wrapup')
  //  .description('')
  //  .option('')
  //  .action(() => {
  //    console.log('');
  //  });
  //
  //program
  //  .command('issues')
  //  .alias('i')
  //  .description('List issues from repository')
  //  .option('-f, --filter', 'Filter issues')
  //  .action(() => {
  //    console.log('');
  //  });

  program
    .command('cleanup')
    .alias('c')
    .description('cleanup your workspace an empty out used branches')
    .option('-a, --all', 'removes all branches except master and development', false)
    .option('-d, --dry-run', 'show the result of the command without executing it', false)
    .option('-p, --prune-remote', 'prune remote branches', false)
    .action(
      requiresGit((args: any) => {
        cleanupCommand(args);
      }),
    );

  program
    .command('status')
    .alias('s')
    .description('');

  if (!process.argv.slice(2).length) {
    program.help();
    return;
  }

  const versionMessage = `
  Current version of ctw-cli:
  ${packageJson.version}
  `;

  program.version(versionMessage, '-v, --version', 'Show the current version');

  program.parse(process.argv);
}

const requiresGit = (func: (...args: any) => void) => {
  if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
  }
  return func;
};
