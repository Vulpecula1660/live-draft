// 示範選秀池資料
const DRAFT_POOL = [
    {
        id: "player1",
        name: "瀨戶環奈",
        image: "https://i.meee.com.tw/FIm5iku.jpg",
        instagram: "https://www.instagram.com/setokanna_/"
    },
    {
        id: "player2",
        name: "村上悠華",
        image: "https://i.meee.com.tw/AiDkM8J.jpg",
        instagram: "https://www.instagram.com/murakami_yuka_/"
    },
    {
        id: "player3",
        name: "神宮寺奈緒",
        image: "https://i.meee.com.tw/4PhBRsS.jpg",
        instagram: "https://www.instagram.com/jinguji_nao/"
    },
    {
        id: "player4",
        name: "河北彩伽",
        image: "https://i.meee.com.tw/m1s5FUu.jpg",
        instagram: "https://www.instagram.com/saika_kawakita__official/"
    },
    {
        id: "player5",
        name: "青空光",
        image: "https://i.meee.com.tw/pnIXZRt.jpg",
        instagram: "https://www.instagram.com/aozora_cmore/"
    },
    {
        id: "player6",
        name: "西宮夢",
        image: "https://i.meee.com.tw/0DR3Yba.jpg",
        instagram: "https://www.instagram.com/nishimiya_yume/"
    },
    {
        id: "player7",
        name: "miru",
        image: "https://i.meee.com.tw/kdACMPc.jpg",
        instagram: "https://www.instagram.com/mirugram_55/"
    },
    {
        id: "player8",
        name: "櫻空桃",
        image: "https://i.meee.com.tw/EhtUY3H.jpg",
        instagram: "https://www.instagram.com/sakumomo1203/"
    },
    {
        id: "player9",
        name: "七瀨愛麗絲",
        image: "https://i.meee.com.tw/WvjhVdW.jpg",
        instagram: "https://www.instagram.com/nanase_alice_all/"
    },
    {
        id: "player10",
        name: "涼森玲夢",
        image: "https://i.meee.com.tw/Rtnk2cl.jpg",
        instagram: "https://www.instagram.com/remu19971203/"
    },
    {
        id: "player11",
        name: "七澤米亞",
        image: "https://i.meee.com.tw/KciX689.jpg",
        instagram: "https://www.instagram.com/miananasawa_official/"
    },
    {
        id: "player12",
        name: "石川澪",
        image: "https://i.meee.com.tw/nkOPGbO.jpg",
        instagram: "https://www.instagram.com/ishikawa._.mio/"
    },
    {
        id: "player13",
        name: "明里紬",
        image: "https://i.meee.com.tw/baD6ecI.jpg",
        instagram: "https://www.instagram.com/akari.tsumugi/"
    },
    {
        id: "player14",
        name: "神木麗",
        image: "https://i.meee.com.tw/8nkle7L.jpg",
        instagram: "https://www.instagram.com/rei.kamiki/"
    },
    {
        id: "player15",
        name: "本庄鈴",
        image: "https://i.meee.com.tw/wNssJ48.jpg",
        instagram: "https://www.instagram.com/honjo_suzu/"
    },
    {
        id: "player16",
        name: "美園和花",
        image: "https://i.meee.com.tw/h9lRbif.jpg",
        instagram: "https://www.instagram.com/misono_waka/"
    },
    {
        id: "player17",
        name: "金松季步",
        image: "https://i.meee.com.tw/IVtJOez.jpg",
        instagram: "https://www.instagram.com/kiho_kanematsu/"
    },
    {
        id: "player18",
        name: "紗倉真菜",
        image: "https://i.meee.com.tw/tCzojSE.jpg",
        instagram: "https://www.instagram.com/sakuramanateee/"
    },
    {
        id: "player19",
        name: "小宵虎南",
        image: "https://i.meee.com.tw/oKzjWIm.jpg",
        instagram: "https://www.instagram.com/konankoyoiiii/"
    },
    {
        id: "player20",
        name: "新有菜",
        image: "https://i.meee.com.tw/uQp3oml.jpg",
        instagram: "https://www.instagram.com/arina_arata2/"
    },
    {
        id: "player21",
        name: "森日向子",
        image: "https://i.meee.com.tw/StOgzQC.jpg",
        instagram: "https://www.instagram.com/hinako_mori_/"
    },
    {
        id: "player22",
        name: "美谷朱里",
        image: "https://i.meee.com.tw/bnrfrsM.jpg",
        instagram: "https://www.instagram.com/akanemitani0415/"
    },
    {
        id: "player23",
        name: "三上悠亞",
        image: "https://i.meee.com.tw/M5dn1E6.jpg",
        instagram: "https://www.instagram.com/yua_mikami/"
    },
    {
        id: "player24",
        name: "彌生美月",
        image: "https://i.meee.com.tw/7XhDcax.jpg",
        instagram: "https://www.instagram.com/mizuki_yayoi/"
    },
    {
        id: "player25",
        name: "倉本すみれ",
        image: "https://i.meee.com.tw/lRz4LYE.jpg",
        instagram: "https://www.instagram.com/kuramotosumire/"
    },
    {
        id: "player26",
        name: "松本一香",
        image: "https://i.meee.com.tw/iy9yceN.jpg",
        instagram: "https://www.instagram.com/verseau_219/"
    },
    {
        id: "player27",
        name: "椿莉香",
        image: "https://i.meee.com.tw/ZilcpKy.jpg",
        instagram: "https://www.instagram.com/tsu_chan44rika/"
    },
    {
        id: "player28",
        name: "天馬唯",
        image: "https://i.meee.com.tw/ItrqFpX.jpg",
        instagram: "https://www.instagram.com/tenma_yuichan/"
    },
    {
        id: "player29",
        name: "新村朱里",
        image: "https://i.meee.com.tw/qvEmjDd.jpg",
        instagram: "https://www.instagram.com/niimura_akari/"
    },
    {
        id: "player30",
        name: "木下日葵",
        image: "https://i.meee.com.tw/phH8k8z.jpg",
        instagram: "https://www.instagram.com/himari_kinoshita/"
    },
    {
        id: "player31",
        name: "波多野結衣",
        image: "https://i.meee.com.tw/OIdTNO6.jpg",
        instagram: "https://www.instagram.com/hatachan524/"
    },
    {
        id: "player32",
        name: "白石桃",
        image: "https://i.meee.com.tw/efq187B.jpg",
        instagram: "https://x.com/shiraishimomo_"
    },
    {
        id: "player33",
        name: "七森莉莉",
        image: "https://i.meee.com.tw/VG9hcvO.jpg",
        instagram: "https://x.com/riri_nntmr"
    },
    {
        id: "player34",
        name: "安齋拉拉",
        image: "https://i.meee.com.tw/eZ2mQBU.jpg",
        instagram: ""
    },
    {
        id: "player35",
        name: "篠田優",
        image: "https://i.meee.com.tw/k3dpwip.jpg",
        instagram: "https://www.instagram.com/yushinoda0721/"
    },
    {
        id: "player36",
        name: "相澤南",
        image: "https://i.meee.com.tw/yMcKNTN.jpg",
        instagram: "https://www.instagram.com/epoint2016/"
    },
    {
        id: "player37",
        name: "小倉由菜",
        image: "https://i.meee.com.tw/V1XAS4B.jpg",
        instagram: "https://www.instagram.com/ogura_yuna/"
    },
    {
        id: "player38",
        name: "吉高寧寧",
        image: "https://i.meee.com.tw/xvaGzlW.jpg",
        instagram: "https://www.instagram.com/_yoshitaka_nene/"
    },
    {
        id: "player39",
        name: "桃乃木香奈",
        image: "https://i.meee.com.tw/8SWVxu2.jpg",
        instagram: "https://www.instagram.com/kana_momonogi/"
    },
    {
        id: "player40",
        name: "深田詠美",
        image: "https://i.meee.com.tw/OgV76VT.jpg",
        instagram: "https://www.instagram.com/eimi0318/"
    },
    {
        id: "player41",
        name: "水卜櫻",
        image: "https://i.meee.com.tw/fxk8PJx.jpg",
        instagram: "https://x.com/archemiura/media"
    },
    {
        id: "player42",
        name: "高橋聖子",
        image: "https://i.meee.com.tw/fDqkFiW.jpg",
        instagram: "https://www.instagram.com/ts_takasho/"
    },
    {
        id: "player43",
        name: "伊藤舞雪",
        image: "https://i.meee.com.tw/4NDoLzV.jpg",
        instagram: "https://www.instagram.com/myk__gram/"
    },
    {
        id: "player44",
        name: "葵司",
        image: "https://i.meee.com.tw/55AFdRj.jpg",
        instagram: ""
    },
    {
        id: "player45",
        name: "明日花綺羅",
        image: "https://i.meee.com.tw/GrXAe8f.jpg",
        instagram: "https://www.instagram.com/asukakiraran/"
    },
    {
        id: "player46",
        name: "凪光",
        image: "https://i.meee.com.tw/tYu4dSw.webp",
        instagram: "https://www.instagram.com/_nagihikaru/"
    },
    {
        id: "player47",
        name: "宮下玲奈",
        image: "https://i.meee.com.tw/opKSHVo.webp",
        instagram: "https://www.instagram.com/rena__miyashita/"
    },
    {
        id: "player48",
        name: "田野憂",
        image: "https://i.meee.com.tw/yoCifh4.jpg",
        instagram: "https://x.com/_yu_8_8"
    },
    {
        id: "player49",
        name: "逢澤美優",
        image: "https://i.meee.com.tw/lYP1Ah5.jpg",
        instagram: "https://x.com/aizawa_miyu03"
    },
    {
        id: "player50",
        name: "柏木小夏",
        image: "https://i.meee.com.tw/Y3cZuzO.jpg",
        instagram: "https://www.instagram.com/kashi_konatsu/"
    },
];

// 獲取選秀池資料
function getDraftPool() {
    return DRAFT_POOL.map(player => ({
        ...player,
        isSelected: false,
        selectedBy: null,
        selectedRound: null
    }));
}
