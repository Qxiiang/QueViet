window.LESSONS_DATA = window.LESSONS_DATA || {};
window.LESSONS_DATA["A2"] = window.LESSONS_DATA["A2"] || {};
window.LESSONS_DATA["A2"][17] = window.LESSONS_DATA["A2"][17] || {};

Object.assign(window.LESSONS_DATA["A2"][17], {
  // =========================================================================
  // 1. HỘI THOẠI (HỘI THOẠI 1 & CÁC ĐOẠN HỘI THOẠI MUA BÁN A, B, C)
  // =========================================================================
  dialogues: [
    {
      titleVi: "Hội thoại 1: Mua tranh Đông Hồ và sáo trúc",
      titleZh: "会话一：买东湖画和竹笛",
      lines: [
        {
          speaker: "Người bán",
          vi: "Mời anh vào xem hàng.",
          zh: "请您进来看货。"
        },
        {
          speaker: "Khách",
          vi: "Tranh Đông Hồ chị bán thế nào?",
          zh: "东湖画姐姐怎么卖？"
        },
        {
          speaker: "Người bán",
          vi: "Bán từng tranh và bán theo bộ anh ạ.",
          zh: "单张卖和按套卖都有，先生。"
        },
        {
          speaker: "Khách",
          vi: "Có cả bộ à?",
          zh: "还有整套的呀？"
        },
        {
          speaker: "Người bán",
          vi: "Vâng. Đây ạ.",
          zh: "是的，在这儿。"
        },
        {
          speaker: "Khách",
          vi: "Bộ tranh Gà lợn giá bao nhiêu?",
          zh: "《鸡猪图》套画多少钱？"
        },
        {
          speaker: "Người bán",
          vi: "Tám mươi nghìn đồng (80.000 đ).",
          zh: "八万越南盾（80,000盾）。"
        },
        {
          speaker: "Khách",
          vi: "Chị bán cho tôi hai bộ. Còn cái gì đây?",
          zh: "卖给我两套。那这是什么？"
        },
        {
          speaker: "Người bán",
          vi: "À, cái sáo trúc.",
          zh: "哦，是竹笛。"
        },
        {
          speaker: "Khách",
          vi: "Cái này giá bao nhiêu?",
          zh: "这个多少钱？"
        },
        {
          speaker: "Người bán",
          vi: "Mười nghìn đồng (10.000 đ).",
          zh: "一万越南盾（10,000盾）。"
        }
      ],
      questions: [
        {
          qVi: "1. Tranh Đông Hồ bán thế nào?",
          qZh: "东湖画怎么卖？",
          options: ["Chỉ bán từng tranh", "Bán từng tranh và bán theo bộ", "Chỉ bán theo bộ"],
          answer: 1
        },
        {
          qVi: "2. Bộ tranh Gà lợn giá bao nhiêu tiền?",
          qZh: "《鸡猪图》套画多少钱？",
          options: ["10.000 đồng", "50.000 đồng", "80.000 đồng"],
          answer: 2
        },
        {
          qVi: "3. Khách hàng mua mấy bộ tranh và cái sáo trúc giá bao nhiêu?",
          qZh: "顾客买了几套画？竹笛多少钱？",
          options: [
            "Mua hai bộ tranh; sáo trúc giá 10.000 đồng",
            "Mua một bộ tranh; sáo trúc giá 80.000 đồng",
            "Mua ba bộ tranh; sáo trúc giá 20.000 đồng"
          ],
          answer: 0
        }
      ]
    },
    {
      titleVi: "Hội thoại 2: Mua dưa hấu (Đoạn A)",
      titleZh: "会话二：买西瓜（对话A）",
      lines: [
        {
          speaker: "Khách",
          vi: "Chị ơi, dưa hấu bán thế nào?",
          zh: "姐姐，西瓜怎么卖？"
        },
        {
          speaker: "Người bán",
          vi: "Năm nghìn đồng (5.000 đ) một cân (kí, kilôgam).",
          zh: "五千越南盾（5,000盾）一公斤。"
        },
        {
          speaker: "Khách",
          vi: "Đắt quá. Tôi trả chị bốn nghìn được không?",
          zh: "太贵了。我出四千盾行吗？"
        },
        {
          speaker: "Người bán",
          vi: "Dạ, được.",
          zh: "好的，可以。"
        },
        {
          speaker: "Khách",
          vi: "Bán cho tôi một quả khoảng 3 cân.",
          zh: "卖给我一个大约3公斤的。"
        },
        {
          speaker: "Người bán",
          vi: "Vâng.",
          zh: "好的。"
        }
      ],
      questions: [
        {
          qVi: "1. Lúc đầu người bán nói dưa hấu bao nhiêu tiền một cân?",
          qZh: "起初卖家说西瓜多少钱一公斤？",
          options: ["4.000 đồng", "5.000 đồng", "7.000 đồng"],
          answer: 1
        },
        {
          qVi: "2. Cuối cùng khách mua dưa hấu với giá bao nhiêu và mua mấy cân?",
          qZh: "最后顾客以什么价格买西瓜，买了多少？",
          options: [
            "4.000 đồng một cân, mua một quả khoảng 3 cân",
            "5.000 đồng một cân, mua hai quả",
            "6.000 đồng một cân, mua 4 cân"
          ],
          answer: 0
        }
      ]
    },
    {
      titleVi: "Hội thoại 3: Mua bưởi (Đoạn B)",
      titleZh: "会话三：买柚子（对话B）",
      lines: [
        {
          speaker: "Khách",
          vi: "Chị có bưởi không?",
          zh: "姐姐，您有柚子吗？"
        },
        {
          speaker: "Người bán",
          vi: "Cô muốn mua bưởi à?",
          zh: "姑娘想买柚子呀？"
        },
        {
          speaker: "Khách",
          vi: "Vâng, một quả bưởi giá bao nhiêu?",
          zh: "是的，一个柚子多少钱？"
        },
        {
          speaker: "Người bán",
          vi: "Bảy nghìn đồng (7.000 đ).",
          zh: "七千越南盾（7,000盾）。"
        },
        {
          speaker: "Khách",
          vi: "Đắt thế. Bớt đi! Sáu nghìn được không?",
          zh: "这么贵。便宜点吧！六千行吗？"
        },
        {
          speaker: "Người bán",
          vi: "Vâng.",
          zh: "好吧。"
        },
        {
          speaker: "Khách",
          vi: "Chị bán cho tôi 4 quả.",
          zh: "卖给我4个吧。"
        },
        {
          speaker: "Người bán",
          vi: "Đủ tiền rồi. Cảm ơn cô.",
          zh: "钱正好。谢谢姑娘。"
        }
      ],
      questions: [
        {
          qVi: "1. Một quả bưởi sau khi bớt giá là bao nhiêu tiền?",
          qZh: "减价后一个柚子多少钱？",
          options: ["7.000 đồng", "6.000 đồng", "5.000 đồng"],
          answer: 1
        },
        {
          qVi: "2. Khách hàng mua mấy quả bưởi và hết tổng cộng bao nhiêu tiền?",
          qZh: "顾客买了几个柚子，一共多少钱？",
          options: ["4 quả, hết 24.000 đồng", "4 quả, hết 28.000 đồng", "3 quả, hết 18.000 đồng"],
          answer: 0
        }
      ]
    },
    {
      titleVi: "Hội thoại 4: Mua cam & trả lại tiền thừa (Đoạn C)",
      titleZh: "会话四：买橙子与找零（对话C）",
      lines: [
        {
          speaker: "Khách",
          vi: "Bao nhiêu tiền một cân cam hả bà?",
          zh: "大娘，一公斤橙子多少钱？"
        },
        {
          speaker: "Người bán",
          vi: "Bốn mươi nghìn (40.000 đ).",
          zh: "四万盾（40,000盾）。"
        },
        {
          speaker: "Khách",
          vi: "Bà cho 2 cân. Tiền đây, một trăm nghìn (100.000 đ). Bà trả lại tôi hai mươi nghìn (20.000 đ).",
          zh: "大娘给我来2公斤。给您钱，十万盾（100,000盾）。您找我两万盾（20,000盾）。"
        }
      ],
      questions: [
        {
          qVi: "1. Khách mua mấy cân cam và đưa cho người bán bao nhiêu tiền?",
          qZh: "顾客买了几公斤橙子，给了卖家多少钱？",
          options: [
            "Mua 2 cân cam, đưa 100.000 đồng",
            "Mua 3 cân cam, đưa 100.000 đồng",
            "Mua 2 cân cam, đưa 80.000 đồng"
          ],
          answer: 0
        },
        {
          qVi: "2. Người bán trả lại khách bao nhiêu tiền thừa?",
          qZh: "卖家找给顾客多少零钱？",
          options: ["10.000 đồng", "20.000 đồng", "30.000 đồng"],
          answer: 1
        }
      ]
    }
  ],

  // =========================================================================
  // 2. BÀI ĐỌC: CHỢ BẾN THÀNH
  // =========================================================================
  reading: {
    titleVi: "Bài đọc: Chợ Bến Thành",
    titleZh: "短文阅读：滨城市场",
    paragraphs: [
      {
        vi: "Chợ Bến Thành là chợ lớn nhất ở Thành phố Hồ Chí Minh. Đây là một trung tâm mua bán sầm uất. Trong chợ có hàng trăm quầy hàng lớn nhỏ. Đến đây bạn có thể mua được những đồ điện tử có chất lượng cao và đẹp mắt.",
        zh: "滨城市场是胡志明市最大的市场。这是一个繁华的商业交易中心。市场里有成百上千个大大小小的摊位。来到这里，你可以买到高质量且美观的电子产品。"
      },
      {
        vi: "Bạn sẽ rất thích khi đến các quầy bán đồ trang sức và quần áo sang trọng dành cho phụ nữ. Những chiếc dây chuyền vàng, những chiếc vòng cổ làm bằng đá quý lấp lánh trong các tủ kính.",
        zh: "当你来到专为女性开设的高档首饰和服装摊位时，你一定会非常喜欢。一条条金项链、一串串宝石项链在玻璃柜台里闪闪发光。"
      },
      {
        vi: "Những tà áo dài thướt tha có nhiều họa tiết đẹp khoác trên những manơcanh khiến nhiều người phải dừng lại ngắm nhìn. Du khách đến chợ Bến Thành chắc chắn sẽ chọn được một món quà vừa ý.",
        zh: "穿在人体模特上的飘逸奥黛长衫有着许多精美的图案，让许多人忍不住停下脚步欣赏。来到滨城市场的游客一定能选到一份称心如意的礼物。"
      }
    ],
    questions: [
      {
        qVi: "1. Chợ Bến Thành ở đâu?",
        qZh: "滨城市场在哪里？",
        options: ["Ở Hà Nội", "Ở Thành phố Hồ Chí Minh", "Ở Đà Nẵng"],
        answer: 1
      },
      {
        qVi: "2. Ở chợ Bến Thành có bao nhiêu quầy hàng?",
        qZh: "滨城市场有多少个摊位？",
        options: ["Hàng trăm quầy hàng", "Một trăm quầy hàng", "Một nghìn quầy hàng"],
        answer: 0
      },
      {
        qVi: "3. Loại hàng nào ở chợ Bến Thành có chất lượng cao và đẹp mắt?",
        qZh: "滨城市场的哪类商品质量高且美观？",
        options: ["Đồ điện tử", "Quần áo phụ nữ", "Đồ trang sức phụ nữ"],
        answer: 0
      },
      {
        qVi: "4. Hàng gì có họa tiết đẹp khiến nhiều người phải dừng lại ngắm nhìn?",
        qZh: "什么商品有着精美的图案，让人忍不住停下欣赏？",
        options: ["Đồ điện tử", "Vòng cổ", "Áo dài"],
        answer: 2
      }
    ]
  },

  // =========================================================================
  // 3. NGỮ PHÁP (GIẢI THÍCH CHI TIẾT TIẾNG VIỆT & TIẾNG TRUNG)
  // =========================================================================
  grammar: [
    {
      titleVi: "1. Cách hỏi giá: '... giá bao nhiêu?' và 'Bao nhiêu tiền ...?'",
      titleZh: "一、询问价格的句型：“... giá bao nhiêu?” 和 “Bao nhiêu tiền ...?”",
      explanationVi: "Có hai cấu trúc phổ biến để hỏi giá cả trong tiếng Việt:\na) [Danh từ chỉ hàng hóa] + giá bao nhiêu (tiền)?\nb) Bao nhiêu tiền + [Số lượng + Đơn vị + Danh từ chỉ hàng hóa]?",
      explanationZh: "【语法说明】：越南语中询问价格有两种最常用的句式：\na) [商品名称] + giá bao nhiêu (tiền)? —— 侧重于询问某件具体物品的价格（“……多少钱？”）。\nb) Bao nhiêu tiền + [数量 + 量词 + 商品名称]? —— 侧重于询问按单位（公斤、个、套等）计价的商品价格（“多少钱一斤/一个……？”）。",
      examples: [
        {
          vi: "Cái máy vi tính này giá bao nhiêu?",
          zh: "这台电脑多少钱？"
        },
        {
          vi: "Quyển sách này giá bao nhiêu?",
          zh: "这本书多少钱？"
        },
        {
          vi: "Bao nhiêu tiền một cân xoài?",
          zh: "一公斤芒果多少钱？"
        },
        {
          vi: "Bao nhiêu tiền một quả bưởi?",
          zh: "一个柚子多少钱？"
        }
      ]
    },
    {
      titleVi: "2. Cách hỏi '... bán thế nào?'",
      titleZh: "二、询问销售方式与价格：“... bán thế nào?”",
      explanationVi: "Cấu trúc: [Danh từ chỉ hàng hóa] + bán thế nào?\nDùng trong hai trường hợp:\na) Hỏi và trả lời về cách thức bán hàng (bán theo bộ, theo cân, theo quả, theo chiếc...).\nb) Hỏi về giá bán (tương tự như 'bao nhiêu tiền một đơn vị?').",
      explanationZh: "【语法说明】：结构为 “[商品名称] + bán thế nào?”（……怎么卖？），在购物交际中有两种用法：\na) 询问商品的销售方式或计价单位（按套卖、按公斤卖、按个卖等）。\nb) 直接询问商品的单价（相当于“多少钱一斤/个？”）。",
      examples: [
        {
          vi: "Tranh Đông Hồ bán thế nào? — Bán theo bộ.",
          zh: "东湖画怎么卖？——按套卖。（询问销售方式）"
        },
        {
          vi: "Sầu riêng bán thế nào? — Bán theo quả hoặc theo cân.",
          zh: "榴莲怎么卖？——按个卖或者按公斤卖。（询问销售方式）"
        },
        {
          vi: "Chôm chôm bán thế nào? — Mười nghìn một cân.",
          zh: "红毛丹怎么卖？——一万盾一公斤。（询问单价）"
        }
      ]
    },
    {
      titleVi: "3. Câu hỏi với từ nghi vấn 'à?'",
      titleZh: "三、带疑问词 “à?” 的确认疑问句",
      explanationVi: "'À?' đặt ở cuối câu trần thuật, dùng để hỏi về một sự việc mà người hỏi giả định là đúng, chỉ hỏi lại để xác nhận hoặc làm rõ giả định đó. Câu trả lời thường bắt đầu bằng 'Vâng / Ừ / Đúng rồi' (nếu khẳng định) hoặc 'Không' (nếu phủ định).",
      explanationZh: "【语法说明】：语气疑问词 “à?” 放在陈述句末尾（相当于汉语的“……呀？”、“……吗？”）。说话人心里对某件事已有一定的猜测或判断，用 “à?” 提出疑问只是为了进一步核实或确认。\n• 肯定回答常用：Vâng / Ừ / Đúng rồi（是的/对）。\n• 否定回答常用：Không（不/不是），并补充说明实际情况。",
      examples: [
        {
          vi: "Chị muốn mua xoài à? — Vâng. Bao nhiêu tiền một cân ạ?",
          zh: "姐姐想买芒果呀？——是的。多少钱一公斤？"
        },
        {
          vi: "Chị muốn mua sầu riêng à? — Không. Tôi không thích mùi của nó.",
          zh: "姐姐想买榴莲呀？——不。我不喜欢它的味道。"
        },
        {
          vi: "Có cả bộ à? — Vâng. Đây ạ.",
          zh: "还有整套的呀？——是的。在这儿。"
        }
      ]
    }
  ],

  // =========================================================================
  // 4. LUYỆN TẬP TƯƠNG TÁC (THỰC HÀNH 9, THỰC HÀNH 11, THỰC HÀNH 12 TRONG PDF)
  // =========================================================================
  exercises: {
    // THỰC HÀNH 9 TRONG PDF: Nghe và điền các từ vào chỗ trống (10 câu)
    listeningFill: {
      titleVi: "Bài 1 (Thực hành 9): Nghe và điền các từ vào chỗ trống",
      titleZh: "练习一（教材第9题）：听录音并填入所缺词语",
      items: [
        {
          before: "1.",
          blank: "Bao nhiêu tiền",
          after: "một cân xoài hả chị?",
          fullAudio: "Bao nhiêu tiền một cân xoài hả chị?",
          hintZh: "提示：询问一公斤芒果多少钱（Bao nhiêu tiền）。"
        },
        {
          before: "2. Hai mươi lăm nghìn",
          blank: "đồng",
          after: ".",
          fullAudio: "Hai mươi lăm nghìn đồng.",
          hintZh: "提示：越南货币单位（đồng / một cân）。"
        },
        {
          before: "3. Quả",
          blank: "đu đủ",
          after: "này giá bao nhiêu?",
          fullAudio: "Quả đu đủ này giá bao nhiêu?",
          hintZh: "提示：一种水果名称（đu đủ / dưa hấu）。"
        },
        {
          before: "4. Quả này hai cân, giá",
          blank: "mười bốn nghìn",
          after: ".",
          fullAudio: "Quả này hai cân, giá mười bốn nghìn.",
          hintZh: "提示：价格数字（mười bốn nghìn / 14.000 đồng）。"
        },
        {
          before: "5. Chôm chôm bán",
          blank: "thế nào",
          after: "?",
          fullAudio: "Chôm chôm bán thế nào?",
          hintZh: "提示：询问怎么卖（thế nào）。"
        },
        {
          before: "6. Mười nghìn",
          blank: "một cân",
          after: ".",
          fullAudio: "Mười nghìn một cân.",
          hintZh: "提示：计价单位（một cân）。"
        },
        {
          before: "7. Anh muốn mua chôm chôm",
          blank: "à",
          after: "?",
          fullAudio: "Anh muốn mua chôm chôm à?",
          hintZh: "提示：句末确认疑问词（à）。"
        },
        {
          before: "8.",
          blank: "Vâng",
          after: ". Chị cho ba cân.",
          fullAudio: "Vâng. Chị cho ba cân.",
          hintZh: "提示：肯定回答词（Vâng）。"
        },
        {
          before: "9. Ba mươi nghìn",
          blank: "đồng",
          after: ".",
          fullAudio: "Ba mươi nghìn đồng.",
          hintZh: "提示：货币单位（đồng）。"
        },
        {
          before: "10. Tiền đây.",
          blank: "Cảm ơn chị",
          after: ".",
          fullAudio: "Tiền đây. Cảm ơn chị.",
          hintZh: "提示：礼貌道谢（Cảm ơn chị）。"
        }
      ]
    },

    // THỰC HÀNH 10 & 11 TRONG PDF: Nghe đoạn văn về Chợ Đồng Xuân & xác nhận Đúng / Sai
    trueFalseQuiz: {
      titleVi: "Bài 2 (Thực hành 10 & 11): Nghe giới thiệu về Chợ Đồng Xuân và chọn Đúng / Sai",
      titleZh: "练习二（教材第10-11题）：听同春市场短文并判断正误（Đúng / Sai）",
      audioText: "Chợ Đồng Xuân ở trung tâm thủ đô Hà Nội. Ở Hà Nội, chợ Đồng Xuân là chợ lớn nhất. Đây là một trung tâm mua bán sầm uất. Trong chợ bán rất nhiều đồ như: quần áo, vải vóc, giày dép, đồ điện tử, bánh kẹo và hoa quả. Hàng hóa ở chợ Đồng Xuân không đắt lắm, giá cả phải chăng. Rất nhiều người từ các tỉnh và du khách nước ngoài về chợ Đồng Xuân mua hàng.",
      transcriptLines: [
        { speaker: "Bài nghe", vi: "Chợ Đồng Xuân ở trung tâm thủ đô Hà Nội. Ở Hà Nội, chợ Đồng Xuân là chợ lớn nhất.", zh: "同春市场位于首都河内市中心。在河内，同春市场是最大的市场。" },
        { speaker: "Bài nghe", vi: "Đây là một trung tâm mua bán sầm uất. Trong chợ bán rất nhiều đồ như: quần áo, vải vóc, giày dép, đồ điện tử, bánh kẹo và hoa quả.", zh: "这是一个繁华的商业中心。市场里卖很多东西，比如：服装、布料、鞋帽、电子产品、糖果糕点和水果。" },
        { speaker: "Bài nghe", vi: "Hàng hóa ở chợ Đồng Xuân không đắt lắm, giá cả phải chăng. Rất nhiều người từ các tỉnh và du khách nước ngoài về chợ Đồng Xuân mua hàng.", zh: "同春市场的商品不太贵，价格适中。很多来自外省的人和外国游客都到同春市场购物。" }
      ],
      statements: [
        {
          statementVi: "1. Chợ Đồng Xuân ở trung tâm Thành phố Hồ Chí Minh.",
          statementZh: "同春市场位于胡志明市中心。",
          answer: false,
          explanationZh: "Sai（错）：同春市场位于首都河内（Hà Nội）市中心，不是胡志明市。"
        },
        {
          statementVi: "2. Ở Hà Nội, chợ Đồng Xuân là chợ lớn nhất.",
          statementZh: "在河内，同春市场是最大的市场。",
          answer: true,
          explanationZh: "Đúng（对）：同春市场是河内最大的市场。"
        },
        {
          statementVi: "3. Chợ Đồng Xuân là một trung tâm mua bán sầm uất.",
          statementZh: "同春市场是一个繁华的商业中心。",
          answer: true,
          explanationZh: "Đúng（对）：原文明确提到 Đây là một trung tâm mua bán sầm uất。"
        },
        {
          statementVi: "4. Hàng hóa ở chợ Đồng Xuân rất đắt.",
          statementZh: "同春市场的商品非常贵。",
          answer: false,
          explanationZh: "Sai（错）：同春市场的商品不太贵，价格适中（không đắt lắm）。"
        },
        {
          statementVi: "5. Rất nhiều người từ các tỉnh và du khách nước ngoài đến đây mua hàng.",
          statementZh: "很多来自各省的人和外国游客来这里购物。",
          answer: true,
          explanationZh: "Đúng（对）：许多外省民众和外国游客都会来同春市场买东西。"
        }
      ]
    },

    // THỰC HÀNH 12 TRONG PDF: Sắp xếp lại các từ ngữ để tạo thành câu (5 câu)
    wordOrder: {
      titleVi: "Bài 3 (Thực hành 12): Sắp xếp lại các từ ngữ để tạo thành câu",
      titleZh: "练习三（教材第12题）：连词成句（点击词语按顺序排列）",
      items: [
        {
          words: ["giá", "bao nhiêu", "cái", "này", "sáo trúc", "?"],
          correct: "Cái sáo trúc này giá bao nhiêu?"
        },
        {
          words: ["một", "cân", "25.000", "xoài", "đồng", "giá."],
          correct: "Một cân xoài giá 25.000 đồng."
        },
        {
          words: ["bán", "bia", "thế nào", "Sài Gòn", "?"],
          correct: "Bia Sài Gòn bán thế nào?"
        },
        {
          words: ["tiền", "một", "đu đủ", "quả", "bao nhiêu", "chị", "hả", "?"],
          correct: "Bao nhiêu tiền một quả đu đủ hả chị?"
        },
        {
          words: ["à", "mua", "ông", "sầu riêng", "muốn", "?"],
          correct: "Ông muốn mua sầu riêng à?"
        }
      ]
    }
  }
});