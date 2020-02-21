import Octokit, { IssuesListForRepoResponseItem } from '@octokit/rest';
import { isUserWhitespacable, is } from '@babel/types';
import chalk from 'chalk';

interface IStatus {}

export const statusCommand = async (args: IStatus) => {
  const octokit = new Octokit();

  octokit.issues
    .listForRepo({
      owner: 'code-is-key',
      repo: 'git-godo',
    })
    .then(data => {
      data.data.forEach(issue => {
        printIssue(issue);
      });
    })
    .catch(err => {
      console.log(err);
    });
};

const printIssue = (issue: IssuesListForRepoResponseItem) => {
  const labels = issue.labels.map(label => `${chalk.hex(label.color)(label.name)}`).join(' ');
  console.log(`${chalk.bold(issue.number.toString())} ${issue.title} ${labels}`);
};
