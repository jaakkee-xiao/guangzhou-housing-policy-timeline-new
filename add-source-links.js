// 引用来源文章URL映射
const sourceUrlMap = {
    "一线城市首个！广州提出房票安置政策": "https://xinwen.bjd.com.cn/content/s653ca7f6e4b0a9019c75d05e.html",
    "十件大事看懂2024广州楼市之转": "https://baijiahao.baidu.com/s?id=1820829801698105023&wfr=spider&for=pc",
    "广州发布房票安置新政，全市新房都参与，利好楼市\"回稳\"势头": "https://stcn.com/article/detail/1410738.html",
    "2024回顾与前瞻③｜城中村改造与存量房收储释放楼市新机遇": "https://huacheng.gz-cmc.com/pages/2024/12/24/SF131220754eda04870b48483bbd526d.html",
    "\"房票安置\"将在广州全市推广，12个焦点问题解答来了": "https://static.nfnews.com/content/202401/08/c8483243.html",
    "解局｜城市更新与广州第一张房票溯源": "https://guandian.hk/article/20240107/375527.html",
    "2024开局太猛，旧改真的要大变样": "https://www.163.com/dy/article/INPUI2TR0535MR9F.html",
    "全国首个城中村改造立法！用上了创新金融工具": "https://fengcx.com/news/detail/56638079.shtml",
    "广州：房票可购买全市可售的新建商品房": "https://www.chinanews.com.cn/dwq/2024/11-13/10318289.shtml",
    "房票安置：多批房票发放并全市推广": "https://finance.eastmoney.com/a/202501103292755913.html",
    "广州楼市新动作！拓展房票适用范围": "https://www.sohu.com/a/946936157_100053070",
    "全面放开限购、拟放宽\"购房入户\"、户型使用率超100%，2024年广州楼市十大关键词": "https://xueqiu.com/6678388456/319634032",
    "【区住建交通局】广州市从化区住房城乡建设和交通运输局关于进一步促进房地产市场平稳健康发展若干措施的通知": "https://www.gz.gov.cn/gzzcwjk/gzdata/content/mpost_10380616.html",
    "广州开出单张亿元房票引楼市\"活水\"": "https://k.sina.com.cn/article_1650111241_625ab30901901dto4.html",
    "房票巨变！广州拆迁户拿\"万能券\"：商住工通兑，楼市大洗牌！": "https://m.163.com/dy/article/KCGDDIFL05524NSM.html",
    "广州将修订房屋征收补偿办法，房票有望发挥更大作用": "https://baijiahao.baidu.com/s?id=1834790553054389479&wfr=spider&for=pc",
    "城楼网｜一线城市房票安置政策全面铺开 二三线或将持续跟进": "https://baijiahao.baidu.com/s?id=1847094185710581853&wfr=spider&for=pc",
    "顶硬上！敢啃城市更新\"硬骨头\"": "https://www.gz.gov.cn/zt/gzlfzgzld/gzgzlfz/content/post_10510487.html",
    "广州房票，横扫楼市": "https://www.toutiao.com/article/7566601638799032842/?upstream_biz=doubao&source=m_redirect"
};

// 关键词匹配函数
function findMatchingUrl(sourceText) {
    // 移除"引用来源："前缀和日期后缀
    let cleanText = sourceText.replace(/^引用来源：/, '').replace(/（\d{4}-\d{2}-\d{2}.*?）$/, '').trim();
    
    // 直接匹配
    if (sourceUrlMap[cleanText]) {
        return sourceUrlMap[cleanText];
    }
    
    // 关键词匹配
    const keywords = [
        { key: "一线城市首个", url: sourceUrlMap["一线城市首个！广州提出房票安置政策"] },
        { key: "房票安置.*全市推广", url: sourceUrlMap["\"房票安置\"将在广州全市推广，12个焦点问题解答来了"] },
        { key: "城市更新.*第一张房票", url: sourceUrlMap["解局｜城市更新与广州第一张房票溯源"] },
        { key: "2024开局太猛", url: sourceUrlMap["2024开局太猛，旧改真的要大变样"] },
        { key: "城中村改造立法", url: sourceUrlMap["全国首个城中村改造立法！用上了创新金融工具"] },
        { key: "房票可购买全市", url: sourceUrlMap["广州：房票可购买全市可售的新建商品房"] },
        { key: "房票安置.*多批.*推广", url: sourceUrlMap["房票安置：多批房票发放并全市推广"] },
        { key: "拓展房票适用范围", url: sourceUrlMap["广州楼市新动作！拓展房票适用范围"] },
        { key: "从化区.*若干措施", url: sourceUrlMap["【区住建交通局】广州市从化区住房城乡建设和交通运输局关于进一步促进房地产市场平稳健康发展若干措施的通知"] },
        { key: "单张亿元房票", url: sourceUrlMap["广州开出单张亿元房票引楼市\"活水\""] },
        { key: "房票巨变.*万能券", url: sourceUrlMap["房票巨变！广州拆迁户拿\"万能券\"：商住工通兑，楼市大洗牌！"] },
        { key: "修订房屋征收补偿办法", url: sourceUrlMap["广州将修订房屋征收补偿办法，房票有望发挥更大作用"] },
        { key: "敢啃.*硬骨头", url: sourceUrlMap["顶硬上！敢啃城市更新\"硬骨头\""] },
        { key: "房票.*横扫楼市", url: sourceUrlMap["广州房票，横扫楼市"] }
    ];
    
    for (let keyword of keywords) {
        const regex = new RegExp(keyword.key, 'i');
        if (regex.test(cleanText)) {
            return keyword.url;
        }
    }
    
    return null;
}

// 添加查看原文按钮
function addSourceLinks() {
    const sourceDivs = document.querySelectorAll('.event-source');
    
    sourceDivs.forEach(sourceDiv => {
        const sourceText = sourceDiv.textContent.trim();
        const matchedUrl = findMatchingUrl(sourceText);
        
        if (matchedUrl) {
            // 创建查看原文按钮
            const linkButton = document.createElement('a');
            linkButton.href = matchedUrl;
            linkButton.target = '_blank';
            linkButton.textContent = '[查看原文]';
            linkButton.style.cssText = 'background-color:#f3e5f5;color:#7b1fa2;font-weight:bold;padding:2px 6px;border-radius:3px;text-decoration:none;font-size:11px;margin-left:5px;';
            
            // 添加悬停效果
            linkButton.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#e1bee7';
            });
            
            linkButton.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#f3e5f5';
            });
            
            // 将按钮添加到引用来源后面
            sourceDiv.appendChild(linkButton);
        }
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', addSourceLinks);