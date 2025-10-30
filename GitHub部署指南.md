# 🚀 GitHub Pages 部署指南

## 📋 部署步骤

### 第一步：创建GitHub仓库

1. 访问 [GitHub.com](https://github.com) 并登录您的账户
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `guangzhou-housing-policy-timeline`
   - **Description**: `广州房票政策时间线网站 - Guangzhou Housing Policy Timeline`
   - **Visibility**: 选择 `Public`（必须是公开仓库才能使用免费的GitHub Pages）
   - ✅ 勾选 "Add a README file"
4. 点击 "Create repository"

### 第二步：上传代码

#### 方法一：使用Git命令行（推荐）

1. 在本地项目文件夹中打开命令行
2. 执行以下命令：

```bash
# 添加远程仓库（替换YOUR_USERNAME为您的GitHub用户名）
git remote set-url origin https://github.com/YOUR_USERNAME/guangzhou-housing-policy-timeline.git

# 推送代码到GitHub
git push -u origin master
```

#### 方法二：使用GitHub网页界面

1. 在GitHub仓库页面，点击 "uploading an existing file"
2. 将以下文件拖拽到页面中：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `本地部署说明.md`
   - `访问指南.md`
3. 在页面底部填写提交信息，点击 "Commit changes"

### 第三步：启用GitHub Pages

1. 在GitHub仓库页面，点击 "Settings" 标签
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分：
   - 选择 "Deploy from a branch"
   - Branch: 选择 `master` 或 `main`
   - Folder: 选择 `/ (root)`
4. 点击 "Save"

### 第四步：访问网站

1. GitHub会自动构建和部署您的网站
2. 几分钟后，您的网站将在以下地址可用：
   ```
   https://YOUR_USERNAME.github.io/guangzhou-housing-policy-timeline
   ```
3. 替换 `YOUR_USERNAME` 为您的GitHub用户名

## 🔧 故障排除

### 问题1：推送代码时要求身份验证
**解决方案**：
- 使用GitHub的Personal Access Token
- 或者使用GitHub Desktop应用程序

### 问题2：GitHub Pages没有显示网站
**解决方案**：
- 确保仓库是公开的（Public）
- 检查Settings > Pages中的配置
- 等待几分钟让GitHub完成构建

### 问题3：网站显示404错误
**解决方案**：
- 确保 `index.html` 文件在仓库根目录
- 检查文件名是否正确（区分大小写）

## 📱 访问地址示例

假设您的GitHub用户名是 `example-user`，那么：

- **仓库地址**: https://github.com/example-user/guangzhou-housing-policy-timeline
- **网站地址**: https://example-user.github.io/guangzhou-housing-policy-timeline

## 🌟 优势

- ✅ **国内访问友好**：相比Vercel更稳定
- ✅ **完全免费**：GitHub Pages免费托管静态网站
- ✅ **自动更新**：推送代码后自动更新网站
- ✅ **HTTPS支持**：自动提供SSL证书

## 📞 需要帮助？

如果您在部署过程中遇到问题：

1. 检查GitHub仓库的Settings > Pages页面
2. 查看Actions标签页的构建日志
3. 确保所有文件都已正确上传

---

**💡 提示**：GitHub Pages通常在几分钟内完成部署，请