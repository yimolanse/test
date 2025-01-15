// 移动端菜单切换
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// 页面滚动动画
function handleScroll() {
    const elements = document.querySelectorAll('.timeline-item, .leader-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('visible');
        }
    });
}

// 领袖卡片展开/收起
document.querySelectorAll('.leader-card').forEach(card => {
    card.addEventListener('click', function() {
        const content = this.querySelector('.leader-content');
        content.classList.toggle('expanded');
    });
});

// 特性卡片悬停效果
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const tech = this.getAttribute('data-tech');
        this.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// 首页元素动画
function handleIndexAnimations() {
    const elements = document.querySelectorAll('.intro-text, .feature-card, .future-section');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
            // 添加延迟动画
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 200); // 每个元素延迟200ms
        }
    });
}

// 初始化所有动画
window.addEventListener('scroll', () => {
    handleScroll();
    if (document.querySelector('.features')) {
        handleIndexAnimations();
    }
});

window.addEventListener('load', () => {
    handleScroll();
    if (document.querySelector('.features')) {
        handleIndexAnimations();
    }
});

// 时间线图片点击效果
document.querySelectorAll('.timeline-item img').forEach(img => {
    img.addEventListener('click', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
        }, 500);
    });
});

// 领袖卡片3D效果
document.querySelectorAll('.leader-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 30;
        const angleY = (centerX - x) / 30;
        
        this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});