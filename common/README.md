Common
======
This is the place where common shared code should live.

Setup
=====
Make sure that it is set up as a linked module by running:

```
# In the current common/ directory
npm link

# In each module that will depend on this
cd ../client
npm link common
cd ../server
npm link common
```

Development
===========
Use `npm run flow` to type check files.

Use `npm run build` to build the flow-typed files into normal js files.
