# 错误表现

在Firefox浏览器,iframe模式加载子应用 Tooltip组件 的位置也有问题，在chrome一切又都是正常的




# 复现流程
## 安装依赖
- cd main-app && pnpm i
- cd child-app && pnpm i

## 启动
- cd main-app && pnpm dev
- cd child-app && pnpm dev

## 其他

主要代码在 child-app/src/App.tsx 里面
