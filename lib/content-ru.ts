import { img, vid, type Content } from "./content-shared";

/** Every Russian word on the site. Components only lay this out. */
export const ru: Content = {
  locale: "ru",
  site: {
    name: "Арман Мхитарян",
    role: "Продуктовый инженер",
    email: "arman.mkhitaryan.1997@mail.ru",
    telegram: "https://t.me/armanmkhitarian",
    telegramHandle: "@armanmkhitarian",
    linkedin: "https://www.linkedin.com/in/armanmkhitarian",
    url: "https://arman.mikitari.com",
  },
  hero: {
    intro:
      "Создаю мобильные и веб-приложения и помогаю им расти с помощью рекламы и AI-контента",
    facts: [
      {
        icon: "/work/skills/icon-downloads.webp",
        value: "50 тыс.+ скачиваний",
        label: "моих приложений",
      },
      {
        icon: "/work/skills/icon-apps.webp",
        value: "9 приложений",
        label: "в Google Play и App Store",
      },
      {
        icon: "/work/skills/icon-experience.webp",
        value: "8 лет опыта",
        label: "коммерческой разработки",
      },
    ],
  },
  skills: [
    {
      title: "Разработка",
      tag: "dev",
      image: "/work/skills/dev.webp",
      tint: "#7C5CFF",
      tags: ["iOS и Android", "SaaS", "AI-агенты", "Платежи"],
    },
    {
      title: "Продвижение и реклама",
      tag: "growth",
      image: "/work/skills/promo.webp",
      tint: "#3D7BFF",
      tags: ["Google Ads", "ASO", "Рассылки", "Юнит-экономика"],
    },
    {
      title: "AI-контент",
      tag: "ai",
      image: "/work/skills/content.webp",
      tint: "#3FB8A6",
      tags: ["AI-персонаж", "Ролики", "Озвучка", "Автопубликация"],
    },
    {
      title: "Маркетинговые материалы",
      tag: "materials",
      image: "/work/skills/materials.webp",
      tint: "#8A5CFF",
      tags: ["Баннеры", "Скриншоты", "Playable", "Лендинги"],
    },
  ],
  tags: [
    { id: "dev", label: "Разработка" },
    { id: "growth", label: "Продвижение и реклама" },
    { id: "ai", label: "AI" },
    { id: "materials", label: "Маркетинговые материалы" },
    { id: "games", label: "Игры" },
  ],
  projects: [
    {
      slug: "tutchat",
      name: "TutChat",
      type: "Мессенджер без интернета",
      tags: ["dev", "growth", "materials"],
      pitch:
        "Переписка и файлы напрямую с телефона на телефон — без интернета и без сервера",
      metric: { value: "40 тыс.+", label: "скачиваний" },
      cover: {
        kind: "phones",
        srcs: [
          "/work/tutchat/files.webp",
          "/work/tutchat/hero.webp",
          "/work/tutchat/nearby.webp",
        ],
      },
      tint: "#7C5CFF",
      task: "Дать связь там, где её нет: в горах, в самолёте, при отключениях",
      did: [
        "Нативные приложения на Kotlin и Swift",
        "Связь телефон-телефон по Bluetooth и Wi-Fi Direct, без сервера",
        "44 языка и оптимизация под поиск в Google Play и App Store",
        "Лесенка скидок и прямая оплата для России",
      ],
      result:
        "Более 40 тыс. скачиваний и №1 в Google Play по «offline messenger» в 4 странах — весь трафик органический",
      metrics: [
        { value: "40 тыс.+", label: "скачиваний, весь трафик органический" },
        { value: "№1", label: "в поиске Google Play в 4 странах" },
        { value: "~560", label: "посетителей в день из поиска" },
      ],
      gallery: [
        {
          title: "Скриншоты для магазинов приложений",
          items: [
            img("tutchat", "hero", 739, 1600),
            img("tutchat", "files", 739, 1600),
            img("tutchat", "nearby", 739, 1600),
            img("tutchat", "privacy", 739, 1600),
          ],
        },
        {
          title: "AI-ролик",
          items: [vid("tutchat", "reel-plane", "Самолёт: файлы без связи")],
        },
      ],
      links: [
        { label: "tutchat.ru", href: "https://tutchat.ru" },
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.tutchat.app",
        },
        {
          label: "App Store",
          href: "https://apps.apple.com/ru/app/tutchat/id6756493585",
        },
      ],
      tech: [
        "Kotlin",
        "Swift",
        "Bluetooth / Wi-Fi Direct",
        "Google Play Billing",
        "Robokassa",
        "ASO",
      ],
    },
    {
      slug: "foodino",
      name: "Foodino",
      type: "SaaS приёма заказов для кафе",
      tags: ["dev", "ai", "growth"],
      pitch:
        "Своя страница заказов для кафе, приложение для персонала, AI-меню по фото и AI-агент продаж",
      metric: { value: "~90", label: "заказов в месяц на одно заведение" },
      cover: { kind: "wide", src: "/work/foodino/storefront.webp" },
      tint: "#FF6B34",
      task: "Кафе принимают заказы по телефону, а агрегаторы берут большую комиссию",
      did: [
        "Своя витрина заказов на поддомене для каждого заведения",
        "Приложение для персонала на Android и iOS: заказ приходит звонком",
        "AI переносит меню по фото: OCR → YandexGPT → готовое меню с размерами",
        "AI-агент сам находит кафе, пишет им и разбирает ответы",
      ],
      result:
        "Заведения получают в среднем около 90 заказов в месяц, без комиссии агрегаторов. Агент отобрал 77 подходящих кафе из 941, письмо стоит $0.003",
      metrics: [
        { value: "~90", label: "заказов в месяц в среднем на одно заведение" },
        { value: "941 → 77", label: "заведений после отсева агентом" },
        { value: "$0.003", label: "цена письма вместо $0.02" },
      ],
      gallery: [
        {
          title: "Витрина для гостей",
          items: [
            img(
              "foodino",
              "storefront",
              1280,
              699,
              "Витрина заведения на десктопе",
            ),
            img("foodino", "dish", 760, 1045, "Блюдо с размерами и соусами"),
            img(
              "foodino",
              "client-mobile",
              500,
              1000,
              "Живой клиент «Щедрый вкус» на телефоне",
            ),
          ],
        },
        {
          title: "Приложение для заведения",
          items: [
            img("foodino", "app-order", 739, 1600, "Входящий заказ"),
            img("foodino", "app-feed", 739, 1600, "Лента заказов и выручка"),
          ],
        },
        {
          title: "Продвижение",
          items: [img("foodino", "promo", 1400, 1050, "Рекламная карточка")],
        },
      ],
      links: [
        { label: "foodino.ru", href: "https://foodino.ru" },
        { label: "Живой клиент", href: "https://schedry-vkus.foodino.ru" },
        { label: "Демо-кафе", href: "https://demo.foodino.ru" },
      ],
      tech: [
        "C# / .NET",
        "PostgreSQL",
        "Flutter",
        "Yandex Cloud: OCR и YandexGPT",
        "Python",
        "Linux, nginx, CI",
      ],
    },
    {
      slug: "ai-video",
      name: "AI-ролики для соцсетей",
      type: "Короткие видео для продвижения приложений",
      tags: ["ai", "growth"],
      pitch:
        "Ролики для YouTube, Instagram и Facebook — от идеи и генерации до автопубликации",
      metric: { value: "63%", label: "удержание на YouTube" },
      cover: {
        kind: "video",
        src: "/work/gus/pillow.mp4",
        poster: "/work/gus/pillow.webp",
        sides: ["/work/gus/sprint.webp", "/work/gus/cat.webp"],
      },
      tint: "#3FB8A6",
      task: "Ролики с экраном приложения не цепляли: зрители листали дальше, удержание было 17–19%",
      did: [
        "Придумываю хуки и сценарии, генерирую сцены в Google Vids",
        "Создал постоянного AI-персонажа для серии роликов",
        "Скрипт вставляет запись приложения, добавляет озвучку, субтитры и концовку",
        "Ролики выходят на трёх языках и публикуются по расписанию",
      ],
      result:
        "Удержание выросло до 63% — в 3,5 раза. Конвейер сам выпускает ролики в YouTube, Instagram и Facebook",
      metrics: [
        { value: "63%", label: "удержание против 17–19% у обычных роликов" },
        { value: "3", label: "языка: английский, испанский, португальский" },
        { value: "3", label: "площадки с автопубликацией" },
      ],
      gallery: [
        {
          title: "Серия с AI-персонажем",
          note: "Хук с героем → запись приложения в его телефоне → концовка со ссылками на скачивание",
          items: [
            vid("gus", "pillow", "Подушка → StopTime"),
            vid("gus", "sprint", "Стадион → StopTime"),
            vid("gus", "cat", "Кот и ваза → StopTime"),
            vid("gus", "barber", "Барбершоп → Block Pop"),
          ],
        },
        {
          title: "Другие AI-ролики",
          items: [
            vid("tutchat", "reel-plane", "TutChat: файлы без связи в самолёте"),
          ],
        },
      ],
      links: [
        {
          label: "Смотреть на YouTube",
          href: "https://youtube.com/shorts/YiyymAXRtTM",
        },
      ],
      tech: [
        "Google Vids",
        "Python",
        "ffmpeg",
        "Озвучка и субтитры",
        "YouTube / Instagram API",
        "Linux, systemd",
      ],
    },
    {
      slug: "stoptime",
      name: "StopTime",
      type: "Игра на чувство времени",
      tags: ["games", "dev", "growth", "materials"],
      pitch:
        "Игра из одной механики, выросшая в живой продукт: дуэли, турниры, рейтинги и 27 языков",
      metric: { value: "10 тыс.+", label: "скачиваний" },
      cover: {
        kind: "phones",
        srcs: [
          "/work/stoptime/party.webp",
          "/work/stoptime/hero.webp",
          "/work/stoptime/modes.webp",
        ],
      },
      tint: "#3D7BFF",
      task: "Игра из одной механики должна удерживать игроков и зарабатывать",
      did: [
        "8 режимов, онлайн-дуэли, турниры и режим компании на одном телефоне",
        "Глобальный рейтинг, аватары и серии",
        "27 языков с поддержкой RTL",
        "Оптимизация страницы в Google Play и A/B-тесты, решения по данным BigQuery",
      ],
      result:
        "Более 10 тыс. скачиваний и до 900 игроков в день. Новая иконка дала +20% установок",
      metrics: [
        { value: "10 тыс.+", label: "скачиваний" },
        { value: "+20%", label: "установок от новой иконки" },
        { value: "27", label: "языков, включая арабский с RTL" },
      ],
      gallery: [
        {
          title: "Скриншоты для магазинов приложений",
          items: [
            img("stoptime", "hero", 900, 1600),
            img("stoptime", "gameplay", 900, 1600),
            img("stoptime", "home", 900, 1600),
            img("stoptime", "party", 900, 1600),
            img("stoptime", "modes", 900, 1600),
          ],
        },
        {
          title: "A/B-тест иконки",
          note: "Google Play, 359 установок против 300",
          items: [
            img("stoptime", "icon-a", 1254, 1254, "Было", true),
            img(
              "stoptime",
              "icon-b",
              1254,
              1254,
              "Стало: +20% установок",
              true,
            ),
          ],
        },
        {
          title: "Аватары и серии",
          items: [img("stoptime", "skins", 1254, 1254, undefined, true)],
        },
      ],
      links: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.stoptime.app",
        },
        {
          label: "App Store",
          href: "https://apps.apple.com/ru/app/stoptime-time-perception-game/id6772400704",
        },
      ],
      tech: ["Flutter", "Firebase", "BigQuery", "A/B-тесты Google Play", "ASO"],
    },
    {
      slug: "memorizepath",
      name: "MemorizePath",
      type: "Игры на память",
      tags: ["games", "growth", "materials"],
      pitch:
        "Пять мини-игр на память и полный набор рекламы к ним: ролики, баннеры, playable",
      metric: { value: "38", label: "рекламных креативов" },
      cover: {
        kind: "phones",
        srcs: [
          "/work/memorizepath/path.webp",
          "/work/memorizepath/hero.webp",
          "/work/memorizepath/modes.webp",
        ],
      },
      tint: "#8A5CFF",
      task: "Продвигать мини-игры рекламой в разных форматах и сетях",
      did: [
        "Приложения на Kotlin и SwiftUI с пятью режимами",
        "38 рекламных креативов: 20 роликов, 15 баннеров и 3 playable",
        "Каждый креатив в трёх форматах: 9:16, 1:1 и 16:9 / 1200×628",
        "Playable — игра одним HTML-файлом ~300 КБ с MRAID для рекламных сетей",
        "Кампании в Google Ads на установки с тестом стран",
      ],
      result:
        "38 рекламных креативов во всех форматах сетей — три playable можно пройти прямо на этой странице",
      metrics: [
        {
          value: "38",
          label: "креативов: 20 роликов, 15 баннеров, 3 playable",
        },
        { value: "~300 КБ", label: "playable целиком в одном файле" },
        { value: "3", label: "формата на каждый креатив" },
      ],
      gallery: [
        {
          title: "Playable-реклама",
          note: "Можно пройти прямо здесь. Кнопка «Install» ведёт в Google Play",
          items: [
            {
              kind: "playable",
              src: "https://mikitari.com/playables/memorizepath-path/",
              caption: "Запомни путь",
            },
            {
              kind: "playable",
              src: "https://mikitari.com/playables/memorizepath-colors/",
              caption: "Запомни цвета",
            },
            {
              kind: "playable",
              src: "https://mikitari.com/playables/memorizepath-focus/",
              caption: "Найди лишнюю плитку",
            },
          ],
        },
        {
          title: "Рекламные ролики",
          note: "Каждый ролик собран в 9:16, 1:1 и 16:9",
          items: [
            vid("memorizepath", "ad", "Все режимы, 9:16"),
            vid("memorizepath", "colors-9x16", "Цвета, 9:16"),
            vid("memorizepath", "focus-9x16", "Внимание, 9:16"),
            vid("memorizepath", "combo6-9x16", "Короткая нарезка, 9:16"),
            vid("memorizepath", "combo-1x1", "Все режимы, 1:1", 960, 960),
          ],
        },
        {
          title: "Баннеры",
          note: "Одна система на пять игр в форматах 1:1, 4:5 и 1200×628",
          items: [
            img("memorizepath", "banner-path-1200x1500", 960, 1200),
            img("memorizepath", "banner-colors-1200x1500", 960, 1200),
            img("memorizepath", "banner-brand-1200x1200", 1200, 1200),
            img("memorizepath", "banner-schulte-1200x1200", 1200, 1200),
            img("memorizepath", "banner-focus-1200x628", 1200, 628),
            img("memorizepath", "banner-colors-1200x628", 1200, 628),
          ],
        },
        {
          title: "Скриншоты для магазинов приложений",
          items: [
            img("memorizepath", "hero", 739, 1600),
            img("memorizepath", "modes", 739, 1600),
            img("memorizepath", "path", 739, 1600),
            img("memorizepath", "colors", 739, 1600),
            img("memorizepath", "schulte", 739, 1600),
          ],
        },
      ],
      links: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.memorizepath.android",
        },
        {
          label: "App Store",
          href: "https://apps.apple.com/ru/app/memorizepath-memory-game/id6760545214",
        },
      ],
      tech: ["Kotlin", "SwiftUI", "HTML5 Canvas", "MRAID", "Firebase"],
    },
    {
      slug: "attic",
      name: "Attic",
      type: "Чистка галереи свайпами, по подписке",
      tags: ["dev", "growth", "materials"],
      pitch:
        "Разобрать тысячи фото за вечер: влево — в архив, вправо — оставить",
      metric: { value: "27", label: "языков" },
      cover: {
        kind: "phones",
        srcs: [
          "/work/attic/archive.webp",
          "/work/attic/hero.webp",
          "/work/attic/keep.webp",
        ],
      },
      tint: "#F2994A",
      task: "Тысячи похожих фото в телефоне, а разбирать их по одному скучно",
      did: [
        "Свайп влево — в архив, вправо — оставить",
        "Группировка похожих снимков и счётчик освобождённого места",
        "Подписка с триалом через RevenueCat",
        "Приложение и сайт на 27 языках, автоматические ролики для соцсетей",
      ],
      result: "Работает по подписке в App Store и Google Play",
      metrics: [
        { value: "27", label: "языков в приложении и на сайте" },
        { value: "iOS + Android", label: "одна кодовая база" },
        { value: "Подписка", label: "с триалом через RevenueCat" },
      ],
      gallery: [
        {
          title: "Скриншоты для магазинов приложений",
          items: [
            img("attic", "hero", 900, 1600),
            img("attic", "archive", 900, 1600),
            img("attic", "keep", 900, 1600),
            img("attic", "freed", 900, 1600),
          ],
        },
      ],
      links: [
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/attic-photo-cleaner-swipe/id6797534856",
        },
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.mikitari.attic",
        },
      ],
      tech: [
        "Flutter",
        "RevenueCat",
        "Firebase",
        "Python + ffmpeg для роликов",
      ],
    },
    {
      slug: "nammu",
      name: "Nammu",
      type: "Сайты для местного бизнеса",
      tags: ["dev", "ai", "growth"],
      pitch:
        "Сайт под конкретный салон или кафе по данным из их карточек и соцсетей",
      metric: { value: "11", label: "сайтов запущено" },
      cover: { kind: "wide", src: "/work/nammu/desktop.webp" },
      tint: "#B08A6E",
      task: "У салонов и кафе часто нет сайта — только VK и 2ГИС",
      did: [
        "Собираю фото, прайс и отзывы из карточек и соцсетей",
        "Тексты и дизайн готовлю с AI, сайт выходит на своём поддомене с SSL",
        "Клиентов находит тот же AI-агент, что и для Foodino",
      ],
      result:
        "Сайт салона «ПараЛиний» собран для клиента из рассылки и работает",
      metrics: [
        { value: "11", label: "сайтов запущено" },
        { value: "Свой поддомен", label: "и SSL для каждого" },
      ],
      gallery: [
        {
          title: "Салон «ПараЛиний»",
          items: [
            img("nammu", "desktop", 1280, 800, "Десктоп"),
            img("nammu", "mobile", 375, 812, "Телефон"),
          ],
        },
      ],
      links: [
        { label: "Открыть сайт", href: "https://paralinii.nammu.ru" },
        { label: "nammu.ru", href: "https://nammu.ru" },
      ],
      tech: [".NET", "HTML / CSS", "Python", "Linux, nginx", "Let's Encrypt"],
    },
    {
      slug: "puzzles",
      name: "Collapse и Block Pop",
      type: "Казуальные головоломки",
      tags: ["games", "materials"],
      pitch:
        "Две головоломки с рекламной монетизацией и решениями по юнит-экономике",
      metric: { value: "$0.04", label: "LTV против CPI\u00a0$1–3" },
      cover: {
        kind: "phones",
        srcs: [
          "/work/puzzles/collapse-3.webp",
          "/work/puzzles/collapse-1.webp",
          "/work/puzzles/collapse-2.webp",
        ],
      },
      tint: "#4FC3F7",
      task: "Проверить жанр казуальных головоломок с монетизацией рекламой",
      did: [
        "Collapse: снять все блоки, тапая по группам, с льдом, бомбами и стенами",
        "Block Pop: блоки с комбо и рекордами",
        "Реклама с медиацией, аналитика в Firebase и BigQuery",
      ],
      result:
        "LTV установки $0.04 против CPI $1–3 — решил не покупать трафик в минус",
      metrics: [
        { value: "$0.04", label: "LTV установки" },
        { value: "$1–3", label: "CPI в США — закупка не окупится" },
      ],
      gallery: [
        {
          title: "Collapse",
          items: [
            img("puzzles", "collapse-banner", 1024, 500),
            img("puzzles", "collapse-1", 740, 1600),
            img("puzzles", "collapse-2", 740, 1600),
            img("puzzles", "collapse-3", 740, 1600),
          ],
        },
        {
          title: "Block Pop",
          items: [
            img("puzzles", "blockpop-1", 739, 1600),
            img("puzzles", "blockpop-2", 739, 1600),
            img("puzzles", "blockpop-3", 739, 1600),
          ],
        },
      ],
      links: [
        {
          label: "Collapse в Google Play",
          href: "https://play.google.com/store/apps/details?id=com.mikitari.collapse",
        },
        {
          label: "Block Pop в Google Play",
          href: "https://play.google.com/store/apps/details?id=com.mikitari.blockpop",
        },
      ],
      tech: ["Flutter", "Медиация рекламы", "Firebase", "BigQuery"],
    },
  ],
  experience: {
    title: "Опыт",
    items: [
      {
        period: "Сейчас",
        text: "Свои продукты: студия приложений Miki Tari, SaaS Foodino, сайты Nammu",
      },
      {
        period: "8 лет",
        text: "Коммерческая разработка: бэкенд на .NET, корпоративные системы, интеграции, мониторинг",
      },
    ],
  },
  ui: {
    projects: "Проекты",
    all: "Все",
    filterAria: "Фильтр проектов",
    seeProjects: "Смотреть проекты",
    see: "Смотреть →",
    allProjects: "← Все проекты",
    task: "Задача",
    did: "Что сделал",
    result: "Результат",
    tech: "Технологии",
    next: "Следующий проект",
    contact: "Связаться",
    openSeparately: "открыть отдельно",
    email: "Почта",
    switchTo: "EN",
    ogImage: "/og-ru.png",
    ogLocale: "ru_RU",
    description:
      "Продуктовый инженер. Создаю мобильные и веб-приложения и помогаю им расти с помощью рекламы и AI-контента",
  },
};
