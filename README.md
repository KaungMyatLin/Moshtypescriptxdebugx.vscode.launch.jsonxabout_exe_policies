##  path where npm puts your globally installed packages
npm config get prefix

##  install typescript globally and use
1.  tsc --init to generate full preset commented config.
2.  tsc --version

##  uncomment followings useful in tsconfig.full.json
1.  "rootDir": "./src",
2.  "outDir": "./transpiles",
3.  "removeComments": true,
4.  "noEmitOnError": true,
5.  "sourceMap": true,
6.  "noImplicitAny": true,
7.  "noUnusedParameters": true,

##  launch.json
1.  open primary sidebar in vscode.
2.  goto debugging section.
3.  create launch.json
4.  paste in "program" property in launch.json: value of "${workspaceFolder}/src/practice.ts", "preLaunchTask": "tsc: build - tsconfig.json"
5.  goto debugging section and click launch.
6.  typein "age" under "watch".