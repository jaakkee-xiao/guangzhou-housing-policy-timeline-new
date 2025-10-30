// 内容切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取导航按钮和内容区域
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.ai-content-section');
    
    // 默认显示第一个内容区域
    if (contentSections.length > 0) {
        contentSections[0].classList.add('active');
    }
    if (navButtons.length > 0) {
        navButtons[0].classList.add('active');
    }
    
    // 为每个导航按钮添加点击事件
    navButtons.forEach((button) => {
        button.addEventListener('click', function() {
            // 获取目标内容区域的ID
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            if (!targetSection) {
                console.error('Target section not found:', targetId);
                return;
            }
            
            // 移除所有按钮的active类
            navButtons.forEach(btn => btn.classList.remove('active'));
            // 隐藏所有内容区域
            contentSections.forEach(section => section.classList.remove('active'));
            
            // 激活当前按钮
            this.classList.add('active');
            // 显示对应的内容区域
            targetSection.classList.add('active');
            
            // 平滑滚动到内容区域
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // 时间线项目动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察时间线项目
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // 观察区域卡片
    const districtCards = document.querySelectorAll('.district-card');
    districtCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // 观察阶段总结卡片
    const stageSummaryCards = document.querySelectorAll('.stage-summary-card');
    stageSummaryCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // 观察验证卡片
    const verificationCards = document.querySelectorAll('.verification-card');
    verificationCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // 平滑滚动到顶部功能
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // 添加返回顶部按钮（如果需要）
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    document.body.appendChild(backToTopButton);
    
    backToTopButton.addEventListener('click', scrollToTop);
    
    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
        } else {
            backToTopButton.style.opacity = '0';
        }
    });
    
    // 添加键盘导航支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const activeButton = document.querySelector('.nav-btn.active');
            if (activeButton) {
                const currentIndex = Array.from(navButtons).indexOf(activeButton);
                let newIndex;
                
                if (e.key === 'ArrowLeft') {
                    newIndex = currentIndex > 0 ? currentIndex - 1 : navButtons.length - 1;
                } else {
                    newIndex = currentIndex < navButtons.length - 1 ? currentIndex + 1 : 0;
                }
                
                navButtons[newIndex].click();
            }
        }
    });
});

// 添加CSS动画关键帧
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .back-to-top:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2) !important;
    }
`;
document.head.appendChild(style);