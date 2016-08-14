# Require-hash
This package allows you to require files relative to your projects package.json folder.

## Usage:

```
# Project folder
.
├── README.md
└── src
    ├── app.js
    ├── lib
    │   └── search.js
    ├── modules
    │   └── user.js
    └── node_modules

# File: app.js
require('require-hash');

# File: modules/user.js
const search = require('#lib/search');
```

# Change the symbol
The hash symbol can be changed to something else by called the updateSymbol method.
```
require('require-hash')
# File: app.js
require('require-hash').updateSymbol('@');

# File: modules/user.js
const search = require('@lib/search');
```