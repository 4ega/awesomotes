## Awesomotes - notes app

Features:
* Create/Edit/Delete notes
* Create note categories
* Filter notes by category
* Markdown editor

In the project directory, you can run:

To build Back-end:

1) AWS account
2) run `sls deploy` command

To build client:

1) nodejs 12.13+
2) yarn

Run `yarn` to get node_modules.

For existing backend, you can start local server:
- `yarn start`

or build project and serve files:
- `yarn build`

For new backend copy `appsync api keys` and `appsync endpoints` to `src/aws-config.ts`
from `sls deploy` output
