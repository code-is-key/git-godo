# Git godo

git godo(pronounced "go do"), is CLI that helps you manage your workspace, issues, PRs in an oppionated workflow, that focuses on automation.

### Motivation

- **godo is the answer to the question, how do we automate the developer vcs experience**. By letting the tool control branches, PRs and issues. We can easily create a descriptive git history without writing long commit messages and having advanced branching strategies

- **Keeping code traceability**. By linking each commit to an issues, traceability is kept between the codebase and issues tracking system. Nothing gets in our out with out an issue

- **No more clicking back and forth to create issues**. Godo can create issues/tasks directly in the terminal.

- **Workspaces created from issues**. No more clicking around to find an issue and then create a vaquely named branch. Godo handles setting up your workspace, and delivering you work when you are done.

- **Releasing automatically**. Godo can help releasing in master/develop workflows and master/tag workflows.

* **git utilities**. As a bonus it also comes with a bunch of small utilities. Like for example deleting the 500 dead branches in your workspace.

### Installation

with `npm`

```
npm install -g git-godo
```

with `yarn`

```
yarn global add git-godo
```

### Usage

#### cleanup

```
git godo cleanup
```

cleanup you workspace interactively

#### help

```
git godo --help
```

Show help message
