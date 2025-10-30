# 🔐 GitHub身份验证指南

## 问题说明
推送代码到GitHub时遇到403权限错误，这是因为GitHub要求身份验证。

## 解决方案

### 方法一：GitHub Desktop（推荐 - 最简单）

1. **下载GitHub Desktop**
   - 访问：https://desktop.github.com/
   - 下载并安装

2. **登录账户**
   - 打开GitHub Desktop
   - 使用您的GitHub账户登录

3. **添加本地仓库**
   - 点击"Add an Existing Repository from your Hard Drive"
   - 选择项目文件夹：`c:\Users\Administrator\Desktop\网页生成`

4. **推送代码**
   - 在GitHub Desktop中会自动检测到您的仓库
   - 点击"Publish repository"或"Push origin"

### 方法二：Personal Access Token

1. **生成Token**
   - 访问：https://github.com/settings/tokens
   - 点击"Generate new token (classic)"
   - 设置过期时间和权限（至少选择`repo`）
   - 复制生成的token（类似：ghp_xxxxxxxxxxxx）

2. **使用Token推送**
   ```bash
   git push -u origin master
   ```
   - 用户名：输入您的GitHub用户名
   - 密码：粘贴刚才复制的token

### 方法三：SSH密钥

1. **生成SSH密钥**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **添加到GitHub**
   - 复制公钥内容：`~/.ssh/id_ed25519.pub`
   - 在GitHub Settings > SSH and GPG keys中添加

3. **更改远程URL为SSH**
   ```bash
   git remote set-url origin git@github.com:jaakkee-xiao/guangzhou-housing-policy-timeline.git
   git push -u origin master
   ```

## 推荐流程

### 对于普通用户（推荐方法一）
1. 下载GitHub Desktop
2. 登录GitHub账户
3. 添加本地仓库
4. 一键推送

### 对于技术用户（推荐方法二）
1. 生成Personal Access Token
2. 使用命令行推送
3. 用token作为密码

## 推送成功后的步骤

1. **启用GitHub Pages**
   - 访问仓库页面：https://github.com/jaakkee-xiao/guangzhou-housing-policy-timeline
   - 进入Settings > Pages
   - Source选择"Deploy from a branch"
   - Branch选择"master"
   - 点击Save

2. **访问网站**
   - 几分钟后访问：https://jaakkee-xiao.github.io/guangzhou-housing-policy-timeline

## 常见问题

**Q: Token在哪里输入？**
A: 在git push命令提示输入密码时，粘贴token而不是GitHub密码

**Q: 推送后网站多久可以访问？**
A: 通常2-10分钟内GitHub Pages会完成部署

**Q: 如何确认推送成功？**
A: 访问GitHub仓库页面，应该能看到所有文件

---

💡 **建议**：如果您不熟悉命令行操作，强烈推荐使用GitHub Desktop，它提供图形界面，操作更简单直观。