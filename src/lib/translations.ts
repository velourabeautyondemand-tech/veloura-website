export type Locale = 'en' | 'zh' | 'it';

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      match: "Find Your Match",
      store: "Store",
      talent: "Talent Agency",
      apply: "Join Our Team",
      partners: "Our Partners",
      blog: "Blog",
      about: "Our Story",
      signIn: "Sign In"
    },
    hero: {
      title: "VÉLOURA Beauty on Demand",
      subtitle: "Where technology meets beauty. One App. One Click.",
      cta: "Download the App to Book",
      choice: "Your Choice: We Come to You, or You Come to Us"
    },
    footer: {
      tagline: "The on-demand marketplace connecting you with elite beauty and lifestyle professionals for appointments wherever you are.",
      marketplace: "Marketplace",
      company: "Company",
      markets: "Our Markets",
      support: "Support"
    }
  },
  zh: {
    nav: {
      home: "首頁",
      services: "服務項目",
      match: "智能匹配",
      store: "官方旗艦店",
      talent: "人才機構",
      apply: "加入我們",
      partners: "合作夥伴",
      blog: "博客",
      about: "品牌故事",
      signIn: "登錄"
    },
    hero: {
      title: "VÉLOURA 按需美妝",
      subtitle: "科技遇見美。一鍵預約，奢華到家。",
      cta: "下載應用預約",
      choice: "您的選擇：我們上門服務，或您親臨體驗"
    },
    footer: {
      tagline: "連接精英美妝與生活方式專家的按需平台，隨時隨地為您提供專業服務。",
      marketplace: "市場",
      company: "公司",
      markets: "服務城市",
      support: "幫助中心"
    }
  },
  it: {
    nav: {
      home: "Home",
      services: "Servizi",
      match: "Trova il tuo match",
      store: "Negozio",
      talent: "Agenzia Talenti",
      apply: "Unisciti al Team",
      partners: "I nostri Partner",
      blog: "Blog",
      about: "La nostra Storia",
      signIn: "Accedi"
    },
    hero: {
      title: "VÉLOURA Bellezza su Richiesta",
      subtitle: "Dove la tecnologia incontra la bellezza. Un'app. Un clic.",
      cta: "Scarica l'app per prenotare",
      choice: "La tua scelta: Veniamo da te, o vieni da noi"
    },
    footer: {
      tagline: "Il marketplace on-demand che ti connette con professionisti d'élite della bellezza e dello stile di vita, ovunque tu sia.",
      marketplace: "Mercato",
      company: "Azienda",
      markets: "Le nostre sedi",
      support: "Supporto"
    }
  }
};

export type TranslationKey = 
  | 'nav.home' | 'nav.services' | 'nav.match' | 'nav.store' | 'nav.talent' | 'nav.apply' | 'nav.partners' | 'nav.blog' | 'nav.about' | 'nav.signIn'
  | 'hero.title' | 'hero.subtitle' | 'hero.cta' | 'hero.choice'
  | 'footer.tagline' | 'footer.marketplace' | 'footer.company' | 'footer.markets' | 'footer.support';
