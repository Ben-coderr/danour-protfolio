import type { Locale } from './ui';

export interface TimelineEntry {
  role: string;
  company: string;
  period: string;
  status: 'active' | 'milestone' | 'internship';
  location: string;
  category: string;
  summary: string;
  achievements: string[];
  stack: string[];
}

export const timelineEn: TimelineEntry[] = [
  {
    role: 'Lead Architect & Full-Stack Engineer',
    company: 'JG SupplyNet (Jamael Group)',
    period: '2025 — Present',
    status: 'active',
    location: 'Algeria',
    category: 'B2B Digital Platform',
    summary: 'Architected and shipped Algeria’s premier B2B procurement network (jgsupplynet.com), connecting verified national manufacturers, industrial suppliers, and corporate buyers with RFQ workflows and multilingual interfaces.',
    achievements: [
      'Engineered resilient full-stack architecture with Next.js 15 App Router, TypeScript, and high-performance serverless endpoints.',
      'Implemented trilingual localization (EN / FR / AR) with automated multi-currency industrial quote generation.',
      'Designed responsive enterprise catalog navigation with instant faceted search and high mobile conversion.',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
  },
  {
    role: 'Lead AI Instructor ("Build with AI")',
    company: 'Everest Academy',
    period: '2026',
    status: 'active',
    location: 'Mostaganem, Algeria',
    category: 'GenAI Intensive Formation',
    summary: 'Designed and instructed intensive generative AI formation covering prompt engineering, vibe coding, AI video synthesis, and commercial AI graphic design for production-grade output.',
    achievements: [
      'Taught advanced prompt engineering, context framing, and system prompt architectures.',
      'Pioneered Vibe Coding methodology to rapidly prototype and iterate full-stack web applications using AI copilots.',
      'Taught AI video generation (Runway, Kling, Luma) and AI graphic design (Midjourney, FLUX.1) for commercial creative workflows.',
      '100% of students shipped functional AI prototypes for graduation demo day.',
    ],
    stack: ['Prompt Engineering', 'Vibe Coding', 'AI Video', 'FLUX.1', 'Next.js', 'Python'],
  },
  {
    role: 'Embedded Systems & Robotics Mentor',
    company: 'DZDuino Collaboration',
    period: '2026 — Present',
    status: 'active',
    location: 'Algeria',
    category: 'Robotics & Hardware',
    summary: 'Hands-on embedded systems training in collaboration with dzduino.com, mentoring robotics students on Arduino microcontrollers and Raspberry Pi single-board computers.',
    achievements: [
      'Guiding 2 dedicated students through a rigorous 2-month embedded hardware and robotics program (1 month completed, 1 month active).',
      'Taught sensor interfacing, PWM motor actuation, I2C/SPI bus protocols, and real-time C/C++ firmware.',
      'Integrated Raspberry Pi Linux environments with Python for computer vision and IoT edge computing.',
    ],
    stack: ['Arduino', 'Raspberry Pi', 'C/C++', 'Python', 'Sensors', 'dzduino.com'],
  },
  {
    role: 'Course Author & Online Instructor',
    company: 'Udemy (BenCoder)',
    period: '2024 — Present',
    status: 'active',
    location: 'Online / Global',
    category: '300+ Students',
    summary: 'Author of "Python for Beginners in Arabic" (تعلم البرمجة من الصفر بلغة بايثون), my premier online course with 300+ enrolled students building strong algorithmic and software foundations.',
    achievements: [
      'Designed complete Arabic curriculum from zero programming knowledge to object-oriented programming and practical projects.',
      'Maintained outstanding student rating with active mentoring and code review in course forums.',
    ],
    stack: ['Python', 'Curriculum Design', 'Algorithmic Thinking', 'Udemy'],
  },
  {
    role: 'Technical Creator & Founder',
    company: 'BenCoder',
    period: '2024 — Present',
    status: 'active',
    location: 'Global (Online)',
    category: '102K+ Community',
    summary: 'Create Arabic technical tutorials and AI guides breaking down modern web frameworks, agent architectures, and programming fundamentals for a 102,000+ Arabic-speaking developer community.',
    achievements: [
      'Produced 45+ video and practical engineering breakdowns in Arabic with zero fluff.',
      'Grew an engaged technical audience of over 102,000 Arabic developers across Algeria and the Arab region.',
      'Organized weekly Q&A sessions on AI career transitions and software best practices.',
    ],
    stack: ['Content Creation', 'Next.js', 'Python', 'Web Architecture', 'Community'],
  },
  {
    role: 'Technical Speaker & Workshop Instructor',
    company: 'University & Tech Hubs',
    period: '2025 — 2026',
    status: 'milestone',
    location: 'Tlemcen, Algiers & Oran, Algeria',
    category: 'Multi-City Workshops',
    summary: 'Delivered hands-on software development bootcamps, algorithmic seminars, and web engineering workshops across university hubs in Tlemcen, Algiers, and Oran.',
    achievements: [
      'Led intensive 3-month 1-on-1 Summer web development mentorship, advancing an individual from fundamentals to full-stack proficiency.',
      'Conducted algorithmic problem solving, modern JavaScript/TypeScript, and web architecture workshops.',
      'Mentored university engineering students on technical portfolio development and career transitions.',
    ],
    stack: ['Web Dev Mentorship', 'JavaScript', 'Algorithms', 'Tlemcen', 'Algiers', 'Oran'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Sonatrach GP1Z',
    period: 'June 2026',
    status: 'internship',
    location: 'Algeria',
    category: 'Industrial Enterprise',
    summary: 'National petroleum enterprise. Worked on internal software systems, technical documentation, and IT infrastructure operations within a critical national facility.',
    achievements: [
      'Analyzed server maintenance workflows and network monitoring configurations.',
      'Supported internal enterprise system tasks in a high-security operational environment.',
    ],
    stack: ['Linux', 'Windows Server', 'Networks', 'IT Systems', 'Enterprise Security'],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Sefrone',
    period: 'Dec 2024 — Mar 2025',
    status: 'internship',
    location: 'Algeria',
    category: 'Startup Internship',
    summary: 'Engineered REST APIs and relational database schemas for client web applications in an agile, fast-paced product team.',
    achievements: [
      'Engineered scalable Node.js backend endpoints with PostgreSQL data persistence.',
      'Optimized query performance and reduced API response latencies.',
      'Participated in daily standups, code reviews, and Git feature branches.',
    ],
    stack: ['Node.js', 'PostgreSQL', 'REST APIs', 'Git', 'Agile'],
  },
];

export const timelineAr: TimelineEntry[] = [
  {
    role: 'كبير مهندسي المعمارية والبرمجيات المتكاملة',
    company: 'JG SupplyNet (مجموعة جاميل)',
    period: '2025 — حتى الآن',
    status: 'active',
    location: 'الجزائر',
    category: 'منصة رقمية B2B',
    summary: 'هندسة وإطلاق شبكة المشتريات والتوريد الرقمية B2B الرائدة في الجزائر (jgsupplynet.com)، لربط المصانع الوطنية والموردين المعتمدين والمشترين المؤسساتيين بنظام RFQ متكامل وواجهات ثلاثية اللغات.',
    achievements: [
      'بناء معمارية برمجية متينة وموثوقة باستخدام Next.js 15 App Router، وTypeScript، ونقاط نهاية سحابية فائقة السرعة.',
      'تطبيق نظام ثلاثي اللغات (العربية، الإنجليزية، الفرنسية) مع توليد آلي لعروض الأسعار الصناعية.',
      'تصميم مسار تصفح وبحث متقدم للكتالوجات الصناعية يوفر تجربة سلسة ونسبة تحويل عالية على الهواتف.',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
  },
  {
    role: 'كبير مدرّبي الذكاء الاصطناعي ("Build with AI")',
    company: 'Everest Academy',
    period: '2026',
    status: 'active',
    location: 'مستغانم، الجزائر',
    category: 'تكوين مكثف في GenAI',
    summary: 'تصميم وقيادة برنامج تكويني مكثف في الذكاء الاصطناعي التوليدي، يغطي هندسة الأوامر (Prompt Engineering)، وأسلوب Vibe Coding، وتوليد الفيديو بالذكاء الاصطناعي والتصميم الرقمي للإنتاج التجاري.',
    achievements: [
      'تدريب المبرمجين على تقنيات هندسة الأوامر المتقدمة، وضبط السياق، ومعمارية System Prompts.',
      'ريادة منهجية Vibe Coding لتطوير وبناء تطبيقات ويب كاملة بسرعة فائقة بالاعتماد على أدوات الذكاء الاصطناعي.',
      'تدريب الطلاب على أدوات توليد الفيديو (Runway, Kling, Luma) والتصميم التجاري (Midjourney, FLUX.1).',
      'تخريج 100% من الطلاب بنماذج أولية ومشاريع ذكاء اصطناعي شغالة في يوم العرض الختامي.',
    ],
    stack: ['Prompt Engineering', 'Vibe Coding', 'AI Video', 'FLUX.1', 'Next.js', 'Python'],
  },
  {
    role: 'مرشد وموجّه الأنظمة المدمجة والروبوتات',
    company: 'شراكة DZDuino',
    period: '2026 — حتى الآن',
    status: 'active',
    location: 'الجزائر',
    category: 'روبوتات وبرمجة عتاد',
    summary: 'تدريب تطبيقي على الأنظمة المدمجة بالتعاون مع dzduino.com، لتوجيه طلاب الروبوتات في برمجة وتطوير مشاريع تعتمد على Arduino وRaspberry Pi.',
    achievements: [
      'توجيه طالبين متميزين في برنامج عملي مكثف لمدة شهرين في عتاد الأنظمة المدمجة والروبوتات.',
      'تدريب على ربط الحساسات، والتحكم في المحركات (PWM)، وبروتوكولات I2C/SPI، وبرمجة C/C++ في الوقت الفعلي.',
      'دمج بيئات Linux على Raspberry Pi مع بايثون لتطبيقات الرؤية الحاسوبية وإنترنت الأشياء (IoT).',
    ],
    stack: ['Arduino', 'Raspberry Pi', 'C/C++', 'Python', 'Sensors', 'dzduino.com'],
  },
  {
    role: 'مؤلف ومدرب دورات برمجية',
    company: 'Udemy (BenCoder)',
    period: '2024 — حتى الآن',
    status: 'active',
    location: 'عبر الإنترنت / عالمياً',
    category: '300+ طالب',
    summary: 'مؤلف دورة "تعلم البرمجة من الصفر بلغة بايثون"، الدورة الرائدة التي سجل بها أكثر من 300 طالب لبناء أسس خوارزمية وهندسية متينة.',
    achievements: [
      'تصميم منهج عربي متكامل ينطلق من الصفر إلى إتقان البرمجة كائنية التوجه (OOP) والمشاريع التطبيقية.',
      'المحافظة على تقييم طلابي ممتاز (4.8★) مع تقديم إرشاد مباشر ومراجعة أكواد الطلاب في منتدى الدورة.',
    ],
    stack: ['Python', 'Curriculum Design', 'Algorithmic Thinking', 'Udemy'],
  },
  {
    role: 'صانع محتوى تقني ومؤسس',
    company: 'BenCoder',
    period: '2024 — حتى الآن',
    status: 'active',
    location: 'عالمياً (عبر الإنترنت)',
    category: 'مجتمع 102K+',
    summary: 'صناعة شروحات تقنية وأدلة تطبيقية باللغة العربية تشرح أطر الويب الحديثة، ومعمارية وكلاء الذكاء الاصطناعي (AI Agents) لمجتمع يضم أكثر من 102,000 مطوّر عربي.',
    achievements: [
      'إنتاج 45+ درساً وشرحاً هندسياً معمقاً باللغة العربية خالياً من الحشو والنظريات غير المجدية.',
      'بناء مجتمع تقني متفاعل يضم أكثر من 102,000 مطور في الجزائر ومختلف أنحاء العالم العربي.',
      'تنظيم جلسات نقاش وإجابة أسبوعية حول مسارات العمل في الذكاء الاصطناعي وأفضل ممارسات البرمجة.',
    ],
    stack: ['Content Creation', 'Next.js', 'Python', 'Web Architecture', 'Community'],
  },
  {
    role: 'محاضر تقني ومقدم ورشات برمجية',
    company: 'الجامعات ونوادي الابتكار التقني',
    period: '2025 — 2026',
    status: 'milestone',
    location: 'تلمسان، الجزائر العاصمة ووهران',
    category: 'ورشات عمل وطنية',
    summary: 'تقديم معسكرات برمجية تطبيقية، وندوات خوارزمية، وورشات في هندسة الويب الحديثة عبر المراكز الجامعية في تلمسان، العاصمة، ووهران.',
    achievements: [
      'قيادة برنامج إرشاد فردي مكثف (1-on-1) لمدة 3 أشهر في الصيف نقل المتدرب من الصفر إلى الاحتراف في تطوير الويب الكامل.',
      'تقديم ورشات متخصصة في حل المشكلات الخوارزمية، وتقنيات JavaScript/TypeScript، وتصميم معمارية الويب.',
      'توجيه طلبة الهندسة الجامعيين في بناء ملفات أعمالهم التقنية واجتياز المقابلات الهندسية.',
    ],
    stack: ['Web Dev Mentorship', 'JavaScript', 'Algorithms', 'Tlemcen', 'Algiers', 'Oran'],
  },
  {
    role: 'مهندس برمجيات متدرب',
    company: 'سوناطراك — Sonatrach GP1Z',
    period: 'جوان 2026',
    status: 'internship',
    location: 'الجزائر',
    category: 'منشأة صناعية وطنية كبرى',
    summary: 'المؤسسة الوطنية للمحروقات. العمل على الأنظمة البرمجية الداخلية، التوثيق الهندسي، وإدارة البنية التحتية لتكنولوجيا المعلومات في منشأة حيوية وطنية.',
    achievements: [
      'تحليل ومراجعة مسارات صيانة الخوادم وإعدادات مراقبة الشبكات الصناعية.',
      'دعم تشغيل الأنظمة المؤسسية الداخلية في بيئة عمل عملياتية عالية الأمان والسرية.',
    ],
    stack: ['Linux', 'Windows Server', 'Networks', 'IT Systems', 'Enterprise Security'],
  },
  {
    role: 'مطور واجهات خلفية متدرب (Backend Developer)',
    company: 'Sefrone',
    period: 'ديسمبر 2024 — مارس 2025',
    status: 'internship',
    location: 'الجزائر',
    category: 'شركة ناشئة',
    summary: 'تطوير واجهات برمجة التطبيقات (REST APIs) وقواعد البيانات العلائقية لتطبيقات الويب ضمن فريق عمل مرن وسريع الإيقاع.',
    achievements: [
      'هندسة نقاط نهاية خلفية قابلة للتوسع باستخدام Node.js مع إدارة وحفظ البيانات في PostgreSQL.',
      'تحسين استعلامات قواعد البيانات وتقليل زمن استجابة الـ API بشكل ملموس.',
      'المشاركة في الاجتماعات اليومية (Daily Standups)، ومراجعات الأكواد، وإدارة الفروع على Git.',
    ],
    stack: ['Node.js', 'PostgreSQL', 'REST APIs', 'Git', 'Agile'],
  },
];

export function getTimeline(locale: Locale): TimelineEntry[] {
  return locale === 'ar' ? timelineAr : timelineEn;
}
