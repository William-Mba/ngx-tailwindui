# Contributing

Thank you for your interest in contributing! The following sections describe
ways to get involved.

## Code of conduct

Please review and follow our [code of conduct](CODE_OF_CONDUCT.md).

## Feedback

User feedback is the most valuable to us. It's a great way to start
contributing!

-   [File new issues](https://github.com/William-Mba/ngx-tailwindui/issues/new/choose)
    for bugs you run into or feature requests you have.

-   [Create a discussion](https://github.com/William-Mba/ngx-tailwindui/discussions/new/choose)
    for help, feedback on changes, or feature proposals.

## Discord

Join our [Discord](https://discord.gg/NQuRP9rE) channel to chat
directly with the team and other users.

## Pull requests

Pull requests are welcome! Keep a few things in mind:

-   Create an
    [issue](https://github.com/William-Mba/ngx-tailwindui/issues/new/choose)
    or
    [discussion](https://github.com/William-Mba/ngx-tailwindui/discussions/new/choose)
    before opening a pull request.
-   Trivial changes, such as documentation, don't need an issue.
-   Create draft PRs for new features.
-   Please be patient! It may take a while for the team to review. Keep changes
    small and scoped to speed things up.

### New components

Please understand that new component implementations are difficult for us to
directly accept. They need to complete several engineer, design, and
accessibility reviews that are not easy with our externally available workflows.

If you want to help build a new component, create a
[new discussion](https://discord.gg/MjRgxFGr).
Add any design docs, code samples, reference implementations in draft PRs, and
get community feedback.


### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

1. Search [GitHub](https://github.com/William-Mba/ngx-tailwindui/pulls) for an open or closed PR that relates to your submission.
   You don't want to duplicate existing efforts.

2. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add.
   Discussing the design upfront helps to ensure that we're ready to accept your work.

4. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the William-Mba/ngx-tailwindui repo.

5. In your forked repository, make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch main
     ```

6. Create your patch, **including appropriate test cases**.

7. Follow our [Coding Rules](#rules).

8. Run the full @ngx-tailwindui test suite, as described in the [developer documentation][dev-doc], and ensure that all tests pass.

9. Commit your changes using a descriptive commit message that follows our [commit message conventions](#commit).
   Adherence to these conventions is necessary because release notes are automatically generated from these messages.

     ```shell
     git commit --all
     ```
    Note: the optional commit `--all` command line option will automatically "add" and "rm" edited files.

10. Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

11. In GitHub, send a pull request to `ngx-tailwindui:main`.

#### Addressing review feedback

If we ask for changes via code reviews then:

1. Make the required updates to the code.

2. Re-run the ngx-tailwindui test suites to ensure tests are still passing.

3. Create a fixup commit and push to your GitHub repository (this will update your Pull Request):

    ```shell
    git commit --all --fixup HEAD
    git push
    ```

That's it! Thank you for your contribution!


##### Updating the commit message

A reviewer might often suggest changes to a commit message (for example, to add more context for a change or adhere to our [commit message guidelines](#commit)).
In order to update the commit message of the last commit on your branch:

1. Check out your branch:

    ```shell
    git checkout my-fix-branch
    ```

2. Amend the last commit and modify the commit message:

    ```shell
    git commit --amend
    ```

3. Push to your GitHub repository:

    ```shell
    git push --force-with-lease
    ```

> NOTE:<br />
> If you need to update the commit message of an earlier commit, you can use `git rebase` in interactive mode.
> See the [git docs](https://git-scm.com/docs/git-rebase#_interactive_mode) for more details.


#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the main branch:

    ```shell
    git checkout main -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your local `main` with the latest upstream version:

    ```shell
    git pull --ff upstream main
    ```


## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit-tests).
* All public API methods **must be documented**.
* We follow [Google's JavaScript Style Guide][js-style-guide], but wrap all code at **100 characters**.


## <a name="commit"></a> Commit Message Format

*This specification is inspired by and supersedes the [AngularJS commit message format][commit-message-format].*

We have very precise rules over how our Git commit messages must be formatted.
This format leads to **easier to read commit history**.

Each commit message consists of a **header**, a **body**, and a **footer**.


```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is mandatory for all commits except for those of type "docs".
When the body is present it must be at least 20 characters long and must conform to the [Commit Message Body](#commit-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-footer) format describes what the footer is used for and the structure it must have.


#### <a name="commit-header"></a>Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|common|core|localize|http|
  │                          elements|forms|migrations|components|
  │                          upgrade|packaging|changelog|docs-infra|
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.


##### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests


##### Scope
The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

* `animations`
* `common`
* `core`
* `elements`
* `forms`
* `http`
* `components`
* `localize`
* `router`
* `upgrade`

There are currently a few exceptions to the "use package name" rule:

* `packaging`: used for changes that change the npm package layout in all of our packages, e.g. public path changes, package.json changes done to all packages, d.ts file/format changes, changes to bundles, etc.

* `changelog`: used for updating the release notes in CHANGELOG.md


* `migrations`: used for changes to the `ng update` migrations.

* none/empty string: useful for `test` and `refactor` changes that are done across all packages (e.g. `test: add missing unit tests`) and for docs changes that are not related to a specific package (e.g. `docs: fix typo in tutorial`).


##### Summary

Use the summary field to provide a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end


#### <a name="commit-body"></a>Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.


#### <a name="commit-footer"></a>Commit Message Footer

The footer can contain information about breaking changes and deprecations and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to.
For example:

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

or

```
DEPRECATED: <what is deprecated>
<BLANK LINE>
<deprecation description + recommended update path>
<BLANK LINE>
<BLANK LINE>
Closes #<pr number>
```

Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

Similarly, a Deprecation section should start with "DEPRECATED: " followed by a short description of what is deprecated, a blank line, and a detailed description of the deprecation that also mentions the recommended update path.


### Revert commits

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.

The content of the commit message body should contain:

- information about the SHA of the commit being reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message.


[coc]: https://github.com/William-Mba/ngx-tailwindui/blob/master/CODE_OF_CONDUCT.md
[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#
[github]: https://github.com/William-Mba/ngx-tailwindui
[js-style-guide]: https://google.github.io/styleguide/jsguide.html