# 错误表现

子应用使用 tailwindcss V4 时，会导致样式失效




# 复现流程
## 安装依赖
- cd main-app && pnpm i
- cd child-app && pnpm i

## 启动
- cd main-app && pnpm dev
- cd child-app && pnpm dev

## 其他

主要代码在 child-app/src/App.tsx 里面
