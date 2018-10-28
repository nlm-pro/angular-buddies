# Contributing to Angular Buddies

We would love to make new budddies who want to contribute to this project. The more we will be numerous and diversified, the better will be the Angular Buddies! :smiley:

In order to get along nicely, we would like you to follow the following guidelines:

* [Code of Conduct](#coc)
* [Issues and Bugs](#issue)
* [Feature Requests](#feature)
* [Submission Guidelines](#submit)
* [Coding Rules](#rules)
* [Commit Message Guidelines](#commit)

## <a name="coc"></a> Code of Conduct

> Our code of Conduct is directly inspired by the [one from Angular][angular-coc]

As contributors and maintainers of the Angular Buddies project, we pledge to respect everyone who contributes by posting issues, updating documentation, submitting pull requests, providing feedback in comments, and any other activities.

Communication through any of Angular Buddies's channels must be constructive and never resort to personal attacks, trolling, public or private harassment, insults, or other unprofessional conduct.

We promise to extend courtesy and respect to everyone involved in this project regardless of gender, gender identity, sexual orientation, disability, age, race, ethnicity, religion, level of experience or prefered javascript development solutions. We expect anyone contributing to the Angular Buddies project to do the same.

If any member of the community violates this code of conduct, the maintainers of the Angular project may take action, removing issues, comments, and PRs or blocking accounts as deemed appropriate.

## <a name="issue"></a> Found a Bug?

If you find a bug in the source code, you can help us by
[submitting an issue](#submit-issue) to our [GitHub Repository](github). Even better, you can
[submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Missing a Feature?

You can _request_ a new feature by [submitting an issue](#submit-issue) to our GitHub
Repository. If you would like to _implement_ a new feature, please submit an issue with
a proposal for your work first, to be sure that we can use it.
Please consider what kind of change it is:

* For a **Major Feature**, first open an issue and outline your proposal so that it can be
  discussed. This will also allow us to better coordinate our efforts, prevent duplication of work,
  and help you to craft the change so that it is successfully accepted into the project.
* **Small Features** can be crafted and directly [submitted as a Pull Request](#submit-pr).

# <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search [the issue tracker][issues], maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. Having a reproducible scenario gives us wealth of important information without going back & forth to you with additional questions like:

* version of Angular Buddies used
* version of Angular DevKit used
* all related configurations
* 3rd-party libraries and their versions
* and most importantly - a use-case that fails

A minimal reproduce scenario using allows us to quickly confirm a bug (or point out coding problem) as well as confirm that we are fixing the right problem.

We will be insisting on a minimal reproduce scenario in order to save maintainers time and ultimately be able to fix more bugs. Interestingly, from our experience users often find coding problems themselves while preparing a minimal repository. We understand that sometimes it might be hard to extract essentials bits of code from a larger code-base but we really need to isolate the problem before we can fix it.

Unfortunately we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you we are going to close an issue that don't have enough info to be reproduced.

You can file new issues by filling out our [new issue form][new-issues].

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

* Search [GitHub][pulls] for an open or closed PR
  that relates to your submission. You don't want to duplicate effort.
* Make your changes in a new git branch:

  ```shell
  git checkout -b my-fix-branch master
  ```

* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Run the full Angular Buddies test suite, as described in the [developer documentation][dev-doc],
  and ensure that all tests pass.
* Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit). Adherence to these conventions
  is necessary because release notes are automatically generated from these messages. In order to help you follow this rules, Angular Buddies offer some tools that we hightly recommand to use, as described in the [developer documentation][dev-doc].

* Push your branch to GitHub:

  ```shell
  git push origin my-fix-branch
  ```

* In GitHub, send a pull request to `angular-buddies:master`.
* If we suggest changes then:

  * Make the required updates.
  * Re-run the Angular Buddies test suites to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

  ```shell
  git push origin --delete my-fix-branch
  ```

* Check out the master branch:

  ```shell
  git checkout master -f
  ```

* Delete the local branch:

  ```shell
  git branch -D my-fix-branch
  ```

* Update your master with the latest upstream version:

  ```shell
  git pull --ff upstream master
  ```

## <a name="rules"></a> Coding Rules

This project follows the [Angular Coding Rules](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#rules).

We offer as much automated help as possible in order to help you respect this rules, as described in the [developer documentation][dev-doc].

## <a name="commit"></a> Commit Message Guidelines

This project follows the [Angular commit convention][commit-convention].

We offer as much automated help as possible in order to help you respect this rules, as described in the [developer documentation][dev-doc].

However, the supported scopes are, of course, not the sames:

### Scope

The following is the list of supported scopes:

* @angular-buddies/prettier

[angular-coc]: https://github.com/angular/code-of-conduct/blob/master/CODE_OF_CONDUCT.md
[dev-doc]: https://github.com/angular-buddies/angular-buddies/blob/master/docs/DEVELOPER.md
[github]: https://github.com/aangular-buddies/angular-buddies
[pulls]: https://github.com/aangular-buddies/angular-buddies/pulls
[issues]: https://github.com/aangular-buddies/angular-buddies/issues
[new-issues]: https://github.com/aangular-buddies/angular-buddies/
[individual-cla]: http://code.google.com/legal/individual-cla-v1.0.html
[js-style-guide]: https://google.github.io/styleguide/jsguide.html
[commit-convention]: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines
[coding-rules]: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#rules
