export const languages = {
  en: 'English',
  ar: 'العربية',
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    // Navigation
    'nav.work': 'Work',
    'nav.teaching': 'Teaching',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.contact': "Let's talk",
    'nav.downloadCv': 'Download CV (PDF) ↗',

    // Hero
    'hero.badge': 'Open to AI teaching, freelance & work',
    'hero.title.prefix': 'I build with AI,',
    'hero.title.highlight': 'teach it',
    'hero.title.suffix': ', and ship the products around it.',
    'hero.description':
      "I'm {name}: AI instructor, full-stack engineer and creator behind {brand} (102K+ community). Lead AI instructor at Everest Academy, author of a top-rated Arabic Python course on Udemy (300+ students, 4.8 rating), and full-stack architect behind platforms like JG SupplyNet.",
    'hero.cta.work': 'View selected work',
    'hero.cta.contact': 'Get in touch',

    // Section Labels & Titles
    'section.01.num': '',
    'section.01.label': 'SELECTED WORK',
    'section.01.title': 'Featured Projects &',
    'section.01.titleAccent': 'Architectures',
    'section.01.description':
      "Algeria's digital B2B procurement platform, resilient botanical AI, made-to-order manufacturing, and AI revenue forecasting SaaS.",
    'section.01.archive': 'View all projects archive',

    'section.02.num': '',
    'section.02.label': 'TEACHING & CONTENT',
    'section.02.title': 'Making AI',
    'section.02.titleAccent': 'practical',
    'section.02.titleSuffix': ', accessible & affordable',
    'section.02.description':
      'Lead Generative AI instructor at Everest Academy and creator behind BenCoder (102,000+ developers). Teaching practical AI systems and shipping production software.',
    'section.02.portal': 'Explore full teaching portal',

    'section.03.num': '',
    'section.03.label': 'ABOUT & VALUES',
    'section.03.title': 'From first principles to',
    'section.03.titleAccent': 'reliable',
    'section.03.titleSuffix': 'production systems',
    'section.03.readMore': 'Read full biography & story',

    'section.04.num': '',
    'section.04.label': 'CORE COMPETENCIES',
    'section.04.title': 'Production-tested',
    'section.04.titleAccent': 'technology stack',
    'section.04.description':
      'Core technical competencies actively deployed across live production web apps, computer vision models, and enterprise platforms.',

    'section.05.num': '',
    'section.05.label': 'EXPERIENCE & EDUCATION',
    'section.05.title': "Where I've",
    'section.05.titleAccent': 'contributed',
    'section.05.titleSuffix': '& learned',
    'section.05.description':
      'From national enterprise infrastructure to fast-moving AI research and technical education leadership.',

    'section.06.num': '',
    'section.06.label': 'CONTACT & INQUIRIES',
    'section.06.title': "Let's build something",
    'section.06.titleAccent': 'together',
    'section.06.description':
      'Open for AI curriculum development, corporate training, high-impact freelance engineering, and full-time technical leadership.',

    // Stats
    'stats.community.title': 'Community & Reach',
    'stats.community.tag': '102K+ Community',
    'stats.community.value': '102K+',
    'stats.community.label': 'Followers',
    'stats.community.desc': 'Engaged developer community across BenCoder platforms',

    'stats.teaching.title': 'AI Bootcamp',
    'stats.teaching.tag': 'Everest Academy',
    'stats.teaching.value': '20+',
    'stats.teaching.label': 'Graduates',
    'stats.teaching.desc': 'Engineers trained hands-on in "Build with AI" intensive bootcamp',

    'stats.udemy.title': 'Udemy Academy',
    'stats.udemy.tag': 'Udemy Instructor',
    'stats.udemy.value': '300+',
    'stats.udemy.label': 'Students',
    'stats.udemy.desc': 'Python for Beginners in Arabic · 4.8★ rating across 300+ learners',

    'stats.base.title': 'Technical Content',
    'stats.base.tag': 'BenCoder Platform',
    'stats.base.value': '45+',
    'stats.base.label': 'Breakdowns',
    'stats.base.desc': 'Hands-on Arabic video tutorials in applied AI & web architecture',

    // Buttons & Progressive Disclosure
    'btn.visitLive': 'Visit Live Site ↗',
    'btn.caseStudy': 'Case study →',
    'btn.deepDive': 'Deep dive →',
    'btn.seeMoreDetails': 'See more details',
    'btn.showLessDetails': 'Show less details',
    'btn.seeMoreOutcomes': 'See more outcomes',
    'btn.seeMoreExperience': 'See more experience (4 earlier roles & internships)',
    'btn.showLessExperience': 'Show less experience',
    'btn.seeAllTenets': 'See all 4 operating tenets',
    'btn.showLessTenets': 'Show less tenets',
    'btn.copyEmail': 'Copy email address',
    'btn.copied': 'Copied to clipboard!',
    'btn.sendMessage': 'Send Message',
    'btn.sending': 'Sending...',

    // Footer
    'footer.tagline': 'Minimal, high-contrast engineering.',
    'footer.rights': 'All rights reserved.',
    'footer.algeria': 'Engineered in Mostaganem, Algeria',
  },
  ar: {
    // Navigation
    'nav.work': 'المشاريع',
    'nav.teaching': 'التعليم',
    'nav.about': 'نبذة عني',
    'nav.experience': 'المسار المهني',
    'nav.contact': 'لنبدأ الحديث',
    'nav.downloadCv': 'تحميل السيرة الذاتية (PDF) ↗',

    // Hero
    'hero.badge': 'متاح لتدريب الذكاء الاصطناعي، الاستشارات البرمجية والعمل',
    'hero.title.prefix': 'أبني بأنظمة الذكاء الاصطناعي،',
    'hero.title.highlight': 'أعلّمها',
    'hero.title.suffix': '، وأشحن المنتجات الرقمية حولها.',
    'hero.description':
      'أنا {name}: مهندس برمجيات متكامل ومدرب ذكاء اصطناعي ومؤسس منصة {brand} (مجتمع يضم أكثر من 102,000 مطوّر). كبير مدربي الذكاء الاصطناعي في Everest Academy، ومؤلف دورة بايثون العربية على Udemy بتقييم 4.8 من 5.0 (300+ طالب)، والمهندس المعماري لمنصة JG SupplyNet الرقمية.',
    'hero.cta.work': 'استكشف أبرز الأعمال',
    'hero.cta.contact': 'تواصل معي',

    // Section Labels & Titles
    'section.01.num': '',
    'section.01.label': 'المشاريع الهندسية',
    'section.01.title': 'المشاريع الرائدة و',
    'section.01.titleAccent': 'المعمارية البرمجية',
    'section.01.description':
      'منصة المشتريات والتوريد الرقمية B2B الأولى في الجزائر، أنظمة الذكاء الاصطناعي للرعاية النباتية، منصات التصنيع حسب الطلب، وحلول SaaS للتنبؤ المالي.',
    'section.01.archive': 'تصفح أرشيف كافة المشاريع',

    'section.02.num': '',
    'section.02.label': 'التعليم وصناعة المحتوى',
    'section.02.title': 'جعل الذكاء الاصطناعي',
    'section.02.titleAccent': 'عملياً',
    'section.02.titleSuffix': '، متاحاً ومجدياً للإنتاج',
    'section.02.description':
      'كبير مدربي الذكاء الاصطناعي التوليدي في Everest Academy ومؤسس BenCoder (أكثر من 102,000 مطوّر). نعلّم هندسة الذكاء الاصطناعي ونشحن برمجيات حقيقية.',
    'section.02.portal': 'استكشف منصة التعليم المتكاملة',

    'section.03.num': '',
    'section.03.label': 'نبذة عني وفلسفة العمل',
    'section.03.title': 'من المبادئ الأولى إلى',
    'section.03.titleAccent': 'أنظمة حية',
    'section.03.titleSuffix': 'تخدم المستخدمين',
    'section.03.readMore': 'قراءة السيرة الذاتية الكاملة',

    'section.04.num': '',
    'section.04.label': 'الكفاءات التقنية',
    'section.04.title': 'الحزمة التقنية',
    'section.04.titleAccent': 'المُثبتة في بيئات الإنتاج',
    'section.04.description':
      'كفاءات هندسية أساسية مُطبقة مباشرة في مواقع وتطبيقات حية، نماذج الرؤية الحاسوبية، والأنظمة الموزعة.',

    'section.05.num': '',
    'section.05.label': 'المسار المهني والأكاديمي',
    'section.05.title': 'حيث',
    'section.05.titleAccent': 'ساهمت',
    'section.05.titleSuffix': 'وتعلمت',
    'section.05.description':
      'من البنية التحتية في كبرى المنشآت الوطنية الصناعية إلى قيادة برامج الذكاء الاصطناعي والأبحاث المتسارعة.',

    'section.06.num': '',
    'section.06.label': 'التواصل والتعاون',
    'section.06.title': 'لنقم ببناء مشروع',
    'section.06.titleAccent': 'متميز معاً',
    'section.06.description':
      'متاح لتطوير مناهج الذكاء الاصطناعي، التدريب المؤسسي للشركات، الاستشارات البرمجية عالية التأثير، والقيادة التقنية.',

    // Stats
    'stats.community.title': 'المجتمع والوصول',
    'stats.community.tag': 'مجتمع 102K+',
    'stats.community.value': '102K+',
    'stats.community.label': 'متابع',
    'stats.community.desc': 'مجتمع برمجي متفاعل وواسع عبر منصات وقنوات BenCoder',

    'stats.teaching.title': 'معسكر الذكاء الاصطناعي',
    'stats.teaching.tag': 'Everest Academy',
    'stats.teaching.value': '20+',
    'stats.teaching.label': 'مهندس متخرج',
    'stats.teaching.desc': 'مهندسون تدربوا تطبيقياً في معسكر "Build with AI" المكثف',

    'stats.udemy.title': 'أكاديمية Udemy',
    'stats.udemy.tag': 'مدرب معتمد',
    'stats.udemy.value': '300+',
    'stats.udemy.label': 'طالب',
    'stats.udemy.desc': 'دورة بايثون للمبتدئين بالعربية على Udemy · تقييم متميز 4.8★',

    'stats.base.title': 'المحتوى التقني التطبيقي',
    'stats.base.tag': 'منصة BenCoder',
    'stats.base.value': '45+',
    'stats.base.label': 'شرح تطبيقي',
    'stats.base.desc': 'شروحات عملية مرئية باللغة العربية في الذكاء الاصطناعي وهندسة الويب',

    // Buttons & Progressive Disclosure
    'btn.visitLive': 'زيارة المنصة الحية ↗',
    'btn.caseStudy': 'دراسة الحالة ←',
    'btn.deepDive': 'تفاصيل المشروع ←',
    'btn.seeMoreDetails': 'عرض المزيد من التفاصيل',
    'btn.showLessDetails': 'إخفاء التفاصيل',
    'btn.seeMoreOutcomes': 'عرض المزيد من النتائج الهندسية',
    'btn.seeMoreExperience': 'عرض المزيد من الخبرات (4 محطات سابقة)',
    'btn.showLessExperience': 'إخفاء الخبرات السابقة',
    'btn.seeAllTenets': 'عرض كافة المبادئ التشغيلية الـ 4',
    'btn.showLessTenets': 'إخفاء المبادئ الإضافية',
    'btn.copyEmail': 'نسخ البريد الإلكتروني',
    'btn.copied': 'تم النسخ إلى الحافظة!',
    'btn.sendMessage': 'إرسال الرسالة',
    'btn.sending': 'جارٍ الإرسال...',

    // Footer
    'footer.tagline': 'هندسة برمجية نظيفة، متباينة ودقيقة.',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.algeria': 'صُمم وبُني في مستغانم، الجزائر',
  },
} as const;

export function useTranslations(locale: Locale = 'en') {
  return function t(key: keyof (typeof ui)['en'], params?: Record<string, string>): string {
    let text: string = ui[locale]?.[key] ?? ui[defaultLocale][key] ?? key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(new RegExp(`{${k}}`, 'g'), v);
      });
    }
    return text;
  };
}
