# Curation List for Moss 0.15

This folder contains a curations list and a Tools list.

**Curation List**:
A curation list is a list of curations of Weave Tools maintained by a curator. It can contain
multiple curations listing Tools of different developer collectives.

**Tools List**:
A Tools list is a list of Weave Tools maintained by a developer collective. It contains information
about the developer collective as well as a list of Tools and available versions thereof. A Tool
is identified by an `id` and a `versionBranch`, where all versions of a Tool belonging to the same
`versionBranch` are assumed to be compatible.

## Computing Sha256 Hashes of .webhapp files

To verify the integrity of the files, the sha256 hashes of the `.webhapp`, `.happ` and the UI are
required for every Tool version in a Tools list. These get stored in the group DNA of a Moss
group so that each group member can verify that they download the same Tool as other group
members.

To compute these hashes you can use the Weave CLI [`@theweave/cli`](https://www.npmjs.com/package/@theweave/cli) and
run the following command:
```
weave hash-webhapp [version] [path or URL to your Tool's webhapp file]
```

> [!IMPORTANT]
> It is important to use the Weave CLI for computing the hashes as the hashes may differ from computing them manually
and they need to match with how Moss computes them.

## Modifying the Curation List

0. Run `npm install`
1. Go to `./modify/curations-0.15.ts` and change the file as needed
2. Run `npm run write-lists` which should update `./lists/curations-0.15.json`.
3. run `npm run test` to run basic validity checks for the generated json file.
4. Make a PR with the new change

## Modifying the Tools List

0. Run `npm install`
1. Go to `./modify/tool-list-0.15.ts` and change the file as needed
2. Run `npm run write-lists` which should update `./lists/tool-list-0.15.json`.
3. run `npm run test` to run basic validity checks for the generated json file.
4. Make a PR with the new change

