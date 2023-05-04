# 简介

一个基于 Vue3、TypeScript、Vue Router、Pinia、Axios 和 Element-Plus 的基础模板

## 🚀 开发

```
# 配置
1. 安装 eslint 插件
2. 安装 volar 插件
3. node > v18.x

# 安装依赖
npm install

# 启动服务
npm run serve
```

## 📦️ 多环境打包

```
# 构建生产环境
npm run build

# 构建测试环境
npm run build:test
```

## 🔧 代码格式检查

```
# Run your unit tests
npm run test:unit

# Run your end-to-end tests
npm run test:e2e

# Lints and fixes files
npm run lint
```

### 目录结构

```
├─ vue.config.js // 项目配置
├─ public // 文件下资源将会直接被拷贝，不会经过 webpack 的处理。需要通过绝对路径来引用。
├─ babel.config.js // babel 配置文件
├─ package.json // 项目配置文件
├─ package-lock.json // 安装的依赖包指定版本(node_modules 快照)
├─ tsconfig.json // ts 配置
├─ .env.xxx // 各环境的配置文件
├─ .gitignore // 配置 git 提交忽略文件
└─ src
   │─ App.vue // 根容器
   │─ main.ts // 入口文件
   ├─ components // 组件
   ├─ assets // 静态资源
   ├─ views // 页面
   ├─ router // 路由
   ├─ stores // pinia 状态
   ├─ servers // 服务
   ├─ utils // 公用方法
```

### Git 提交规范

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
- `mod` 不确定分类的修改
