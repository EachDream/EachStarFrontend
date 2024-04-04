# 项目设置

在 `http://localhost:3000` 上启动开发服务器

```bash
# pnpm
pnpm install
pnpm dev

# 构建
pnpm run build
```

# 功能维护（临时）

## i18n 添加新语言

1. 在 `locales` 文件夹中添加新的 JSON 文件
2. 在 `i18n.config.ts` 中导入新的语言文件
3. 在 `i18n.config.ts` 的 `locales` 数组中添加新的语言
