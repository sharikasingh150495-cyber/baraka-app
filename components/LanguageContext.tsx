"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Lang = 'EN' | 'KH' | 'TH' | 'VI' | 'ZH' | 'JA' | 'KO';

const translations: Record<Lang, Record<string, string>> = {
  EN: {
    bannerBonus: "$1.75 Welcome Bonus Active! Share to 3 groups to unlock $2.00 Bakong cashout",
    hubBadge: "Golden Triangle Direct Factory Sourcing (Poipet & Bavet)",
    heroTitle1: "Watch Short Videos.",
    heroTitle2: "Buy 3 Pcs at Factory Price.",
    heroDesc: "Cambodia's first video-first wholesale platform. Watch supplier reels, sponsor ads, and source at direct factory prices.",
    btnTikTok: "📱 Watch Live Reels & Earn ⚡",
    btnWholesale: "🛍️ Browse 3-Piece Catalog",
    liveFeedTitle: "Factory & Sponsor Feed",
    liveFeedDesc: "Watch ABA Bank & Telecom Cambodia ads to earn instant wallet balance.",
    btnOpenReels: "Open Video Feed",
    marketTitle: "Marketplace",
    marketDesc: "Browse verified bulk products",
    escrowTitle: "Escrow Wallet",
    escrowDesc: "Bakong & safe trade payments",
    studioTitle: "AI Creator Studio",
    studioDesc: "Create shorts & earn rewards",
    ordersTitle: "Orders & Escrow",
    ordersDesc: "Track shipments & invoices",
    navHome: "Home",
    navMarket: "Market",
    navReels: "Reels",
    navWallet: "Wallet",
    loginBtn: "Login",
    signupBtn: "Register"
  },
  KH: {
    bannerBonus: "រង្វាន់ស្វាគមន៍ $1.75! ចែករំលែកទៅកាន់ 3 ក្រុមដើម្បីដកប្រាក់ Bakong $2.00",
    hubBadge: "ប្រភពរោងចក្រផ្ទាល់ត្រីកោណមាស (ប៉ោយប៉ែត និងបាវិត)",
    heroTitle1: "ទស្សនាវីដេអូខ្លីៗ។",
    heroTitle2: "ទិញ ៣ ដុំក្នុងតម្លៃរោងចក្រ។",
    heroDesc: "ទីផ្សារលក់ដុំវីដេអូដំបូងបង្អស់នៅកម្ពុជា។ មើលវីដេអូរោងចក្រ និងរកប្រាក់ Bakong ប្រចាំថ្ងៃ។",
    btnTikTok: "📱 មើលវីដេអូ និងរកប្រាក់ ⚡",
    btnWholesale: "🛍️ ស្វែងរកទំនិញលក់ដុំ ៣ ដុំ",
    liveFeedTitle: "វីដេអូរោងចក្រ និងពាណិជ្ជកម្ម",
    liveFeedDesc: "ទស្សនាការផ្សាយពាណិជ្ជកម្ម ABA Bank និង Telecom Cambodia ដើម្បីទទួលប្រាក់រង្វាន់។",
    btnOpenReels: "បើកមើលវីដេអូ",
    marketTitle: "ទីផ្សារលក់ដុំ",
    marketDesc: "ស្វែងរកផលិតផលលក់ដុំ",
    escrowTitle: "កាបូបប្រាក់ Escrow",
    escrowDesc: "ការទូទាត់ប្រាក់តាម Bakong",
    studioTitle: "ស្ទូឌីយោ AI វីដេអូ",
    studioDesc: "បង្កើតវីដេអូ និងរកប្រាក់",
    ordersTitle: "ការបញ្ជាទិញ",
    ordersDesc: "តាមដានការដឹកជញ្ជូន",
    navHome: "ទំព័រដើម",
    navMarket: "ទីផ្សារ",
    navReels: "វីដេអូ",
    navWallet: "កាបូបប្រាក់",
    loginBtn: "ចូល",
    signupBtn: "ចុះឈ្មោះ"
  },
  TH: {
    bannerBonus: "โบนัสต้อนรับ $1.75! แชร์ไปยัง 3 กลุ่มเพื่อปลดล็อกถอนเงิน Bakong $2.00",
    hubBadge: "ศูนย์จัดหาสินค้าโรงงานตรงสามเหลี่ยมทองคำ",
    heroTitle1: "ดูวิดีโอสั้น",
    heroTitle2: "ซื้อ 3 ชิ้นในราคาโรงงาน",
    heroDesc: "ตลาดค้าส่งวิดีโอแห่งแรกในกัมพูชา เชื่อมต่อโดยตรงกับโรงงานพร้อมระบบ Bakong Escrow",
    btnTikTok: "📱 ดูวิดีโอและรับรางวัล ⚡",
    btnWholesale: "🛍️ สำรวจสินค้าขายส่ง 3 ชิ้น",
    liveFeedTitle: "ฟีดโรงงานและโฆษณา",
    liveFeedDesc: "ดูโฆษณา ABA Bank และ Telecom Cambodia เพื่อรับเงินสดเข้ากระเป๋าเงินทันที",
    btnOpenReels: "เปิดฟีดวิดีโอ",
    marketTitle: "ตลาดขายส่ง",
    marketDesc: "เรียกดูสินค้าจำนวนมาก",
    escrowTitle: "กระเป๋าเงิน Escrow",
    escrowDesc: "การชำระเงินที่ปลอดภัยด้วย Bakong",
    studioTitle: "AI วิดีโอสตูดิโอ",
    studioDesc: "สร้างวิดีโอสั้นและรับรางวัล",
    ordersTitle: "คำสั่งซื้อ",
    ordersDesc: "ติดตามการจัดส่ง",
    navHome: "หน้าแรก",
    navMarket: "ตลาด",
    navReels: "วิดีโอ",
    navWallet: "กระเป๋าเงิน",
    loginBtn: "เข้าสู่ระบบ",
    signupBtn: "ลงทะเบียน"
  },
  VI: {
    bannerBonus: "Thưởng chào mừng $1.75! Chia sẻ tới 3 nhóm để rút $2.00 qua Bakong",
    hubBadge: "Nguồn hàng trực tiếp Tam Giác Vàng (Poipet & Bavet)",
    heroTitle1: "Xem Video Ngắn.",
    heroTitle2: "Mua 3 Món Giá Xuất Xưởng.",
    heroDesc: "Thị trường bán sỉ video đầu tiên tại Campuchia. Kiếm thưởng Bakong mỗi ngày.",
    btnTikTok: "📱 Xem Video Kiếm Tiền ⚡",
    btnWholesale: "🛍️ Khám Phá Sỉ 3 Món",
    liveFeedTitle: "Bảng Tin Nhà Xưởng & Quảng Cáo",
    liveFeedDesc: "Xem quảng cáo ABA Bank và Telecom Cambodia nhận tiền vào ví tức thì.",
    btnOpenReels: "Mở Bảng Tin Video",
    marketTitle: "Thị Trường Sỉ",
    marketDesc: "Khám phá sản phẩm bán sỉ",
    escrowTitle: "Ví Escrow",
    escrowDesc: "Thanh toán an toàn qua Bakong",
    studioTitle: "AI Video Studio",
    studioDesc: "Tạo video ngắn & nhận thưởng",
    ordersTitle: "Đơn Hàng",
    ordersDesc: "Theo dõi đơn hàng",
    navHome: "Trang Chủ",
    navMarket: "Thị Trường",
    navReels: "Video",
    navWallet: "Ví Tiền",
    loginBtn: "Đăng nhập",
    signupBtn: "Đăng ký"
  },
  ZH: {
    bannerBonus: "$1.75 注册奖励！分享到3个百人群组立即解锁 $2.00 Bakong 提现",
    hubBadge: "金三角直达工厂货源（波贝与巴域中心）",
    heroTitle1: "看短视频赚钱。",
    heroTitle2: "3件起享工厂批发价。",
    heroDesc: "柬埔寨首个视频批发平台。直连一手工厂车间，支持Bakong担保交易。",
    btnTikTok: "📱 观看视频赚取奖励 ⚡",
    btnWholesale: "🛍️ 浏览 3件 起批专区",
    liveFeedTitle: "工厂与品牌广告专区",
    liveFeedDesc: "观看 ABA 银行与柬埔寨电信官方视频赚取真实余额。",
    btnOpenReels: "进入视频流",
    marketTitle: "批发市场",
    marketDesc: "浏览验证商品",
    escrowTitle: "担保钱包",
    escrowDesc: "Bakong安全交易",
    studioTitle: "AI 视频创作",
    studioDesc: "创作短视频赚收益",
    ordersTitle: "订单管理",
    ordersDesc: "追踪物流发票",
    navHome: "首页",
    navMarket: "市场",
    navReels: "短视频",
    navWallet: "钱包",
    loginBtn: "登录",
    signupBtn: "注册"
  },
  JA: {
    bannerBonus: "初回登録で $1.75 進呈！3つのグループにシェアして $2.00 Bakong 出金を解除",
    hubBadge: "ゴールデントライアングル直航工場調達",
    heroTitle1: "ショート動画を見る。",
    heroTitle2: "3点から工場直卸価格で購入。",
    heroDesc: "カンボジア初の動画型卸売プラットフォーム。毎日の動画視聴で報酬獲得。",
    btnTikTok: "📱 リールを見て稼ぐ ⚡",
    btnWholesale: "🛍️ 3ピース卸売をチェック",
    liveFeedTitle: "工場・スポンサーフィード",
    liveFeedDesc: "ABA Bank、Telecom Cambodiaの広告を視聴して残高を獲得。",
    btnOpenReels: "動画を開く",
    marketTitle: "マーケット",
    marketDesc: "大宗商品一覧",
    escrowTitle: "エスクローウォレット",
    escrowDesc: "Bakong安全決済",
    studioTitle: "AI スタジオ",
    studioDesc: "動画作成で報酬獲得",
    ordersTitle: "注文履歴",
    ordersDesc: "発送と請求書の追跡",
    navHome: "ホーム",
    navMarket: "市場",
    navReels: "動画",
    navWallet: "ウォレット",
    loginBtn: "ログイン",
    signupBtn: "登録"
  },
  KO: {
    bannerBonus: "$1.75 무료 웰컴 보너스! 3개 단톡방 공유 시 $2.00 바콩 즉시 출금 잠금 해제",
    hubBadge: "골든 트라이앵글 공장 직거래 허브",
    heroTitle1: "숏폼 비디오 시청.",
    heroTitle2: "3개부터 공장 원가 도매 구매.",
    heroDesc: "캄보디아 최초의 영상 기반 도매 마켓플레이스. 매일 비디오 시청 리워드 지급.",
    btnTikTok: "📱 릴스 시청하고 적립 ⚡",
    btnWholesale: "🛍️ 3개 묶음 도매 둘러보기",
    liveFeedTitle: "공장 및 공식 광고 피드",
    liveFeedDesc: "ABA Bank, 캄보디아 텔레콤 광고를 시청하고 지갑 잔액을 적립하세요.",
    btnOpenReels: "비디오 열기",
    marketTitle: "도매시장",
    marketDesc: "검증된 대량 상품",
    escrowTitle: "에스크로 지갑",
    escrowDesc: "Bakong 안전 결제",
    studioTitle: "AI 비디오 스튜디오",
    studioDesc: "숏폼 제작 및 수익 창출",
    ordersTitle: "주문 내역",
    ordersDesc: "배송 조회",
    navHome: "홈",
    navMarket: "마켓",
    navReels: "릴스",
    navWallet: "지갑",
    loginBtn: "로그인",
    signupBtn: "회원가입"
  }
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>({
  lang: 'EN',
  setLang: () => {},
  t: (key) => key
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>('EN');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem('baraka_lang') as Lang;
      if (saved && translations[saved]) {
        setLangState(saved);
      }
    } catch (e) {}
  }, []);

  if (!isMounted) return <div className="bg-black min-h-screen"></div>;

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('baraka_lang', newLang);
    } catch (e) {}
  };

  const t = (key: string) => {
    return translations[lang]?.[key] || translations['EN']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
