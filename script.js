const { createApp } = Vue;

createApp({
    data() {
        return {
            activeCategory: 'frontend',
            searchQuery: '',
            categories: [
                {
                    id: 'frontend',
                    name: '前端开发',
                    icon: '🎨',
                    description: '用户界面与交互体验开发',
                    stacks: [
                        {
                            name: 'HTML',
                            icon: '📄',
                            level: '基础必学',
                            description: '网页结构标记语言，所有前端开发的基础',
                            courses: [
                                { name: 'HTML5+CSS3从入门到精通', author: '黑马程序员', tag: '零基础', url: 'https://www.bilibili.com/video/BV14J4114768' },
                                { name: 'Web前端入门教程', author: '尚硅谷', tag: '系统学习', url: 'https://www.bilibili.com/video/BV1XJ411X7Ud' }
                            ]
                        },
                        {
                            name: 'CSS',
                            icon: '🎨',
                            level: '基础必学',
                            description: '样式表语言，负责网页的视觉呈现和布局',
                            courses: [
                                { name: 'CSS3实战教程', author: '慕课网', tag: '实战项目', url: 'https://www.bilibili.com/video/BV1p54y1C7Yp' },
                                { name: 'Flex布局完全指南', author: '技术胖', tag: '布局专题', url: 'https://www.bilibili.com/video/BV1N54y1i7dG' }
                            ]
                        },
                        {
                            name: 'JavaScript',
                            icon: '⚡',
                            level: '核心技能',
                            description: '前端编程语言，实现网页交互和动态效果',
                            courses: [
                                { name: 'JavaScript基础语法', author: '尚硅谷', tag: '语法基础', url: 'https://www.bilibili.com/video/BV1YW411T7GX' },
                                { name: 'ES6-ES11新特性', author: '尚硅谷', tag: '新特性', url: 'https://www.bilibili.com/video/BV1uK411H7on' },
                                { name: 'JavaScript高级程序设计', author: '李立超', tag: '进阶提升', url: 'https://www.bilibili.com/video/BV1YW411T7GX' }
                            ]
                        },
                        {
                            name: 'Vue.js',
                            icon: '💚',
                            level: '框架必学',
                            description: '渐进式JavaScript框架，构建用户界面',
                            courses: [
                                { name: 'Vue3从入门到实战', author: '尚硅谷', tag: '最新版本', url: 'https://www.bilibili.com/video/BV1Za4y1r7KE' },
                                { name: 'Vue2完整教程', author: '黑马程序员', tag: '经典版本', url: 'https://www.bilibili.com/video/BV12J4114728' },
                                { name: 'Vue项目实战', author: '慕课网', tag: '项目实战', url: 'https://www.bilibili.com/video/BV1Zy4y1K7SH' }
                            ]
                        },
                        {
                            name: 'React',
                            icon: '⚛️',
                            level: '框架选学',
                            description: 'Facebook开发的用户界面库',
                            courses: [
                                { name: 'React18入门到实战', author: '黑马程序员', tag: '最新版本', url: 'https://www.bilibili.com/video/BV1Z44y1K7Fj' },
                                { name: 'React Hooks详解', author: '技术胖', tag: 'Hooks专题', url: 'https://www.bilibili.com/video/BV1cE411B7by' }
                            ]
                        },
                        {
                            name: 'UniApp',
                            icon: '📱',
                            level: '跨端开发',
                            description: '一套代码，多端发布的跨平台开发框架',
                            courses: [
                                { name: 'UniApp从入门到实战', author: '黑马程序员', tag: '跨端开发', url: 'https://www.bilibili.com/video/BV1BJ411W7pX' },
                                { name: 'UniApp商城项目', author: '慕课网', tag: '实战项目', url: 'https://www.bilibili.com/video/BV1mt4y1M7Ux' }
                            ]
                        }
                    ],
                    jobRequirements: {
                        title: '前端开发工程师岗位要求',
                        skills: ['HTML5/CSS3', 'JavaScript ES6+', 'Vue/React', '响应式布局', 'Webpack', 'Git版本控制', '跨浏览器兼容', 'RESTful API']
                    }
                },
                {
                    id: 'backend',
                    name: '后端开发',
                    icon: '⚙️',
                    description: '服务器端逻辑与数据处理',
                    stacks: [
                        {
                            name: 'Java',
                            icon: '☕',
                            level: '企业首选',
                            description: '面向对象编程语言，企业级应用开发首选',
                            courses: [
                                { name: 'Java零基础入门', author: '尚硅谷', tag: '零基础', url: 'https://www.bilibili.com/video/BV1Cv411372m' },
                                { name: 'Java面向对象编程', author: '黑马程序员', tag: 'OOP思想', url: 'https://www.bilibili.com/video/BV1uJ411k7wy' },
                                { name: 'Java集合框架', author: '尚硅谷', tag: '核心API', url: 'https://www.bilibili.com/video/BV1Kb411W75N' }
                            ]
                        },
                        {
                            name: 'Spring Boot',
                            icon: '🍃',
                            level: 'Java框架',
                            description: 'Java企业级开发框架，简化Spring应用开发',
                            courses: [
                                { name: 'SpringBoot2核心技术', author: '尚硅谷', tag: '核心框架', url: 'https://www.bilibili.com/video/BV19K4y1L7MT' },
                                { name: 'SpringBoot实战项目', author: '黑马程序员', tag: '项目实战', url: 'https://www.bilibili.com/video/BV15y4y1a77I' }
                            ]
                        },
                        {
                            name: 'Python',
                            icon: '🐍',
                            level: '简洁高效',
                            description: '简洁易学的编程语言，适合快速开发',
                            courses: [
                                { name: 'Python入门到精通', author: '黑马程序员', tag: '零基础', url: 'https://www.bilibili.com/video/BV1ex411x7Em' },
                                { name: 'Python爬虫教程', author: '崔庆才', tag: '爬虫专题', url: 'https://www.bilibili.com/video/BV1Yh411o7Sz' }
                            ]
                        },
                        {
                            name: 'Django',
                            icon: '🎸',
                            level: 'Python框架',
                            description: 'Python Web开发框架，快速构建Web应用',
                            courses: [
                                { name: 'Django框架教程', author: '千锋教育', tag: 'Web框架', url: 'https://www.bilibili.com/video/BV1rT4y1v7uQ' },
                                { name: 'Django项目实战', author: '慕课网', tag: '项目实战', url: 'https://www.bilibili.com/video/BV1R7411j7Gn' }
                            ]
                        },
                        {
                            name: 'MySQL',
                            icon: '🗄️',
                            level: '数据库必学',
                            description: '关系型数据库管理系统',
                            courses: [
                                { name: 'MySQL数据库教程', author: '尚硅谷', tag: '数据库基础', url: 'https://www.bilibili.com/video/BV1xW411u7ax' },
                                { name: 'MySQL高级优化', author: '黑马程序员', tag: '性能优化', url: 'https://www.bilibili.com/video/BV1Kr4y1i7ru' }
                            ]
                        },
                        {
                            name: 'Redis',
                            icon: '🔴',
                            level: '缓存技术',
                            description: '内存数据库，用于缓存和会话存储',
                            courses: [
                                { name: 'Redis入门到实战', author: '尚硅谷', tag: '缓存技术', url: 'https://www.bilibili.com/video/BV1Rv41177Af' },
                                { name: 'Redis集群搭建', author: '黑马程序员', tag: '集群部署', url: 'https://www.bilibili.com/video/BV1S54y1R7SB' }
                            ]
                        }
                    ],
                    jobRequirements: {
                        title: '后端开发工程师岗位要求',
                        skills: ['Java/Python', 'Spring Boot/Django', 'MySQL/Redis', 'Linux服务器', 'RESTful API', '微服务架构', 'Docker容器', 'Git版本控制']
                    }
                },
                {
                    id: 'mobile',
                    name: '移动端开发',
                    icon: '📱',
                    description: '移动应用程序开发',
                    stacks: [
                        {
                            name: 'Android',
                            icon: '🤖',
                            level: '原生开发',
                            description: 'Google Android平台原生应用开发',
                            courses: [
                                { name: 'Android开发入门', author: '黑马程序员', tag: '原生开发', url: 'https://www.bilibili.com/video/BV15J411F7yh' },
                                { name: 'Kotlin语言教程', author: '尚硅谷', tag: '现代语言', url: 'https://www.bilibili.com/video/BV1oh411i7zZ' }
                            ]
                        },
                        {
                            name: 'iOS',
                            icon: '🍎',
                            level: '原生开发',
                            description: 'Apple iOS平台原生应用开发',
                            courses: [
                                { name: 'iOS开发Swift教程', author: '千锋教育', tag: 'Swift语言', url: 'https://www.bilibili.com/video/BV1hJ411t7d2' },
                                { name: 'SwiftUI界面开发', author: '慕课网', tag: '现代UI', url: 'https://www.bilibili.com/video/BV1Jh411W7sB' }
                            ]
                        },
                        {
                            name: 'Flutter',
                            icon: '🦋',
                            level: '跨平台',
                            description: 'Google跨平台移动应用开发框架',
                            courses: [
                                { name: 'Flutter入门到实战', author: '技术胖', tag: '跨平台', url: 'https://www.bilibili.com/video/BV15J411F7yh' },
                                { name: 'Dart语言基础', author: '慕课网', tag: '语言基础', url: 'https://www.bilibili.com/video/BV1S54y1R7SB' }
                            ]
                        },
                        {
                            name: 'React Native',
                            icon: '⚛️',
                            level: '跨平台',
                            description: 'Facebook跨平台移动应用开发方案',
                            courses: [
                                { name: 'React Native开发', author: '尚硅谷', tag: '跨平台', url: 'https://www.bilibili.com/video/BV1st411c7v7' },
                                { name: 'RN项目实战', author: '黑马程序员', tag: '项目实战', url: 'https://www.bilibili.com/video/BV1Jh411W7sB' }
                            ]
                        },
                        {
                            name: '微信小程序',
                            icon: '💬',
                            level: '小程序',
                            description: '微信生态内的轻量级应用',
                            courses: [
                                { name: '微信小程序开发', author: '黑马程序员', tag: '小程序', url: 'https://www.bilibili.com/video/BV1nE41117BQ' },
                                { name: '小程序云开发', author: '腾讯云', tag: '云开发', url: 'https://www.bilibili.com/video/BV1Jh411W7sB' }
                            ]
                        }
                    ],
                    jobRequirements: {
                        title: '移动端开发工程师岗位要求',
                        skills: ['Android/iOS原生', 'Flutter/RN跨平台', 'UI/UX设计理解', 'RESTful API', '性能优化', '应用发布流程', 'Git版本控制', '敏捷开发']
                    }
                },
                {
                    id: 'ai',
                    name: '人工智能',
                    icon: '🤖',
                    description: '机器学习与深度学习',
                    stacks: [
                        {
                            name: 'Python基础',
                            icon: '🐍',
                            level: 'AI语言',
                            description: 'AI领域主流编程语言',
                            courses: [
                                { name: 'Python数据分析', author: '莫烦Python', tag: '数据分析', url: 'https://www.bilibili.com/video/BV1Px411S7BH' },
                                { name: 'NumPy科学计算', author: '尚硅谷', tag: '科学计算', url: 'https://www.bilibili.com/video/BV1hx411d7jb' }
                            ]
                        },
                        {
                            name: '机器学习',
                            icon: '🧠',
                            level: 'ML算法',
                            description: '传统机器学习算法与应用',
                            courses: [
                                { name: '机器学习入门', author: '吴恩达中文版', tag: '经典课程', url: 'https://www.bilibili.com/video/BV164411b7dx' },
                                { name: 'scikit-learn实战', author: '莫烦Python', tag: 'ML库', url: 'https://www.bilibili.com/video/BV13x411v7US' }
                            ]
                        },
                        {
                            name: '深度学习',
                            icon: '🔥',
                            level: 'DL框架',
                            description: '神经网络与深度学习',
                            courses: [
                                { name: '深度学习入门', author: '李宏毅机器学习', tag: 'DL理论', url: 'https://www.bilibili.com/video/BV1JE411g7XF' },
                                { name: 'PyTorch深度学习', author: '小土堆', tag: 'PyTorch', url: 'https://www.bilibili.com/video/BV1hE411t7RN' }
                            ]
                        },
                        {
                            name: 'TensorFlow',
                            icon: '🔶',
                            level: 'DL框架',
                            description: 'Google深度学习框架',
                            courses: [
                                { name: 'TensorFlow2.0教程', author: '莫烦Python', tag: 'TF框架', url: 'https://www.bilibili.com/video/BV1B7411L7Qt' },
                                { name: 'Keras快速入门', author: '慕课网', tag: '高级API', url: 'https://www.bilibili.com/video/BV1Jh411W7sB' }
                            ]
                        },
                        {
                            name: '计算机视觉',
                            icon: '👁️',
                            level: 'CV应用',
                            description: '图像处理与计算机视觉',
                            courses: [
                                { name: 'OpenCV图像处理', author: '小土堆', tag: 'CV基础', url: 'https://www.bilibili.com/video/BV1PV411774y' },
                                { name: 'YOLO目标检测', author: 'Ultralytics', tag: '目标检测', url: 'https://www.bilibili.com/video/BV1Jh411W7sB' }
                            ]
                        },
                        {
                            name: '自然语言处理',
                            icon: '💬',
                            level: 'NLP应用',
                            description: '文本处理与语言理解',
                            courses: [
                                { name: 'NLP自然语言处理', author: '斯坦福CS224N', tag: 'NLP理论', url: 'https://www.bilibili.com/video/BV1Yo4y1D7FW' },
                                { name: 'BERT模型详解', author: '李宏毅', tag: 'Transformer', url: 'https://www.bilibili.com/video/BV1JE411g7XF' }
                            ]
                        }
                    ],
                    jobRequirements: {
                        title: 'AI工程师岗位要求',
                        skills: ['Python编程', '机器学习算法', 'PyTorch/TensorFlow', '数据预处理', '模型调优', '数学基础', 'Linux环境', '论文阅读能力']
                    }
                }
            ]
        }
    },
    methods: {
        setActiveCategory(categoryId) {
            this.activeCategory = categoryId;
        },
        getCurrentCategory() {
            return this.categories.find(cat => cat.id === this.activeCategory);
        },
        filterContent() {
            // 搜索功能实现
            console.log('搜索:', this.searchQuery);
        }
    },
    mounted() {
        console.log('计算机学习路线页面已加载');
    }
}).mount('#app');