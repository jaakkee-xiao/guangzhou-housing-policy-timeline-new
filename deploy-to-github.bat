@echo off
echo ========================================
echo 广州房票政策时间线网站 - GitHub Pages 部署
echo ========================================
echo.

echo 请确保您已经：
echo 1. 在GitHub上创建了仓库
echo 2. 配置了Git用户信息
echo.

set /p username="请输入您的GitHub用户名: "
set /p reponame="请输入仓库名称 (默认: guangzhou-housing-policy-timeline): "

if "%reponame%"=="" set reponame=guangzhou-housing-policy-timeline

echo.
echo 正在配置远程仓库...
git remote set-url origin https://github.com/%username%/%reponame%.git

echo.
echo 正在推送代码到GitHub...
git push -u origin master

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo 🎉 部署成功！
    echo ========================================
    echo.
    echo 您的网站将在几分钟后可用：
    echo https://%username%.github.io/%reponame%
    echo.
    echo 请按照以下步骤启用GitHub Pages：
    echo 1. 访问 https://github.com/%username%/%reponame%
    echo 2. 点击 Settings 标签
    echo 3. 在左侧菜单中找到 Pages
    echo 4. 在 Source 部分选择 "Deploy from a branch"
    echo 5. Branch 选择 "master"，Folder 选择 "/ (root)"
    echo 6. 点击 Save
    echo.
) else (
    echo.
    echo ❌ 推送失败！
    echo 请检查：
    echo 1. GitHub仓库是否已创建
    echo 2. 用户名和仓库名是否正确
    echo 3. 是否有推送权限
    echo.
)

pause