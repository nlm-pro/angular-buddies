# Processes

## Release

1.  `lerna version <bump> --conventional-commits --no-push [--preid <patchid>]`
1.  verify / edit changelog
    a. (if necessary) `git commit -v --no-edit --amend`
    b. recreate tag
1.  `git push && git push --tags`
1.  `npm login`
1.  `lerna publish from-git`
