### 1. 安装依赖
  npm install -g typescript
  npm install request --save-dev
  npm install @types/request --save-dev
  npm install lodash --save-dev
  npm install @types/lodash --save-dev
  npm install lodash --save-dev
  npm install @types/lodash --save-dev

### 2.初始化项目
  npm init
  tsc --init

  修改 tsconfig.json:
    "outDir": "./out",
    "rootDir": "./src", 

  创建 ./out ./src

  GitHubApi: `https://api.github.com/users/${userName}`