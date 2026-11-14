window.LESSONS_DATA = window.LESSONS_DATA || {};
window.LESSONS_DATA["A2"] = window.LESSONS_DATA["A2"] || {};
window.LESSONS_DATA["A2"][16] = window.LESSONS_DATA["A2"][16] || {};

Object.assign(window.LESSONS_DATA["A2"][16], {
  // =========================================================================
  // 1. HỘI THOẠI (HỘI THOẠI 1 & HỘI THOẠI 2)
  // =========================================================================
  dialogues: [
    {
      titleVi: "Hội thoại 1: Bưu điện nào gần đây nhất?",
      titleZh: "会话一：哪家邮局离这儿最近？",
      lines: [
        {
          speaker: "Peter",
          vi: "Chị Hoa này, bưu điện nào gần đây nhất chị?",
          zh: "阿花姐，哪家邮局离这儿最近啊？"
        },
        {
          speaker: "Hoa",
          vi: "Bưu điện Trung tâm.",
          zh: "中心邮局。"
        },
        {
          speaker: "Peter",
          vi: "Bưu điện Trung tâm ở đâu chị?",
          zh: "中心邮局在哪里，姐姐？"
        },
        {
          speaker: "Hoa",
          vi: "À, ở số 75 phố Đinh Tiên Hoàng, ngay cạnh hồ Hoàn Kiếm ấy.",
          zh: "哦，在丁先皇街75号，就在还剑湖旁边。"
        },
        {
          speaker: "Peter",
          vi: "Thế, bưu điện nào lớn nhất hả chị?",
          zh: "那么，哪家邮局最大呢，姐姐？"
        },
        {
          speaker: "Hoa",
          vi: "Ở Hà Nội, bưu điện Trung tâm là bưu điện lớn hơn cả. Ở đó có đủ các loại dịch vụ bưu điện như: gửi bưu kiện, gửi thư chuyển phát nhanh, gửi fax, mua tem, phong bì...",
          zh: "在河内，中心邮局是最大的邮局。那里有齐全的各类邮政服务，比如：寄包裹、寄特快专递信件、发传真、买邮票、信封等等。"
        }
      ],
      questions: [
        {
          qVi: "1. Bưu điện nào gần đây nhất?",
          qZh: "哪家邮局离这儿最近？",
          options: ["Bưu điện Bờ Hồ", "Bưu điện Trung tâm", "Bưu điện Cầu Giấy"],
          answer: 1
        },
        {
          qVi: "2. Bưu điện Trung tâm ở địa chỉ nào?",
          qZh: "中心邮局在哪个地址？",
          options: [
            "Số 63 phố Tràng Tiền",
            "Số 31 phố Tràng Thi",
            "Số 75 phố Đinh Tiên Hoàng, ngay cạnh hồ Hoàn Kiếm"
          ],
          answer: 2
        },
        {
          qVi: "3. Ở Hà Nội, bưu điện nào lớn hơn cả?",
          qZh: "在河内，哪家邮局最大？",
          options: ["Bưu điện Trung tâm", "Bưu điện Hà Đông", "Bưu điện Gia Lâm"],
          answer: 0
        }
      ]
    },
    {
      titleVi: "Hội thoại 2: Gửi bưu kiện đi Mỹ",
      titleZh: "会话二：寄包裹去美国",
      lines: [
        {
          speaker: "Peter",
          vi: "Chị ơi, chị cho tôi gửi bưu kiện này đi Mỹ.",
          zh: "姐姐，请帮我把这个包裹寄去美国。"
        },
        {
          speaker: "Nhân viên",
          vi: "Gửi đi đâu ạ?",
          zh: "寄去哪里呢？"
        },
        {
          speaker: "Peter",
          vi: "Đi Mỹ chị ạ.",
          zh: "去美国，姐姐。"
        },
        {
          speaker: "Nhân viên",
          vi: "Thế, anh viết vào tờ khai này, ghi rõ địa chỉ người gửi, người nhận, loại hàng hóa, rồi kí tên nhé!",
          zh: "那么，请您填写这张申报单，写清楚寄件人、收件人地址和物品种类，然后签名吧！"
        },
        {
          speaker: "Peter",
          vi: "Vâng... Chị ơi, tôi khai xong rồi đây ạ!",
          zh: "好的……姐姐，我已经填好了！"
        },
        {
          speaker: "Nhân viên",
          vi: "Bưu kiện của anh nặng 2 kg, hết 420.000 đồng.",
          zh: "您的包裹重2公斤，一共420,000越南盾。"
        },
        {
          speaker: "Peter",
          vi: "Xin gửi tiền chị. À, gửi thư chuyển phát nhanh ở đâu chị?",
          zh: "给您钱。对了，寄特快专递信件在哪里办理，姐姐？"
        },
        {
          speaker: "Nhân viên",
          vi: "Ở bên kia, bàn số 6 anh ạ!",
          zh: "在那边，6号柜台，先生！"
        }
      ],
      questions: [
        {
          qVi: "1. Anh Peter muốn gửi bưu kiện đi nước nào?",
          qZh: "彼得先生想把包裹寄去哪个国家？",
          options: ["Đi Pháp", "Đi Mỹ", "Đi Nhật Bản"],
          answer: 1
        },
        {
          qVi: "2. Bưu kiện của anh ấy nặng mấy kilôgam và hết bao nhiêu tiền?",
          qZh: "他的包裹重几公斤，花了多少钱？",
          options: ["2 kg, hết 420.000 đồng", "3 kg, hết 240.000 đồng", "1 kg, hết 420.000 đồng"],
          answer: 0
        },
        {
          qVi: "3. Gửi thư chuyển phát nhanh ở bàn số mấy?",
          qZh: "寄特快专递信件在几号柜台？",
          options: ["Bàn số 2", "Bàn số 4", "Bàn số 6"],
          answer: 2
        }
      ]
    }
  ],

  // =========================================================================
  // 2. BÀI ĐỌC
  // =========================================================================
  reading: {
    titleVi: "Bài đọc: Anh Peter ở Hà Nội",
    titleZh: "短文阅读：彼得在河内",
    paragraphs: [
      {
        vi: "Anh Peter là người Mỹ. Hiện nay, anh đang sống và làm việc ở Hà Nội. Anh ấy mới đến Việt Nam 3 tháng trước. Anh Peter muốn đến một bưu điện gần nhất để gửi bưu kiện. Anh ấy đến Bưu điện Trung tâm ở số 75, phố Đinh Tiên Hoàng để gửi một bưu kiện đi Mỹ và một thư chuyển phát nhanh đi Đà Nẵng.",
        zh: "彼得先生是美国人。目前，他在河内生活和工作。他3个月前才刚来到越南。彼得先生想去一家最近的邮局寄包裹。他来到丁先皇街75号的中心邮局，寄了一个包裹去美国，还寄了一封特快专递信件去岘港。"
      },
      {
        vi: "Bưu điện Trung tâm Hà Nội là bưu điện lớn nhất thành phố, nằm bên cạnh hồ Hoàn Kiếm, một cảnh đẹp của Thủ đô Hà Nội. Ở bưu điện, có nhiều dịch vụ như: gửi bưu phẩm, hàng hóa, sách báo, thư từ, fax...",
        zh: "河内中心邮局是全市最大的邮局，位于首都河内的一处美景——还剑湖旁边。在邮局里有很多服务，比如：寄邮件、货物、书报、信件、传真等等。"
      },
      {
        vi: "Sau khi gửi thư và bưu kiện, từ bưu điện, anh ấy đã đi đến một số nơi ở gần đó như: hiệu sách Thăng Long ở phố Tràng Tiền; Trung tâm thương mại Tràng Tiền Plaza và Nhà hát Lớn Hà Nội.",
        zh: "寄完信和包裹后，从邮局出来，他去了那附近的几个地方，比如：长钱街的升龙书店、长钱购物中心以及河内大剧院。"
      }
    ],
    questions: [
      {
        qVi: "1. Anh Peter đến Việt Nam bao lâu rồi?",
        qZh: "彼得先生来越南多久了？",
        options: ["3 tuần trước", "3 tháng trước", "3 năm trước"],
        answer: 1
      },
      {
        qVi: "2. Ở bưu điện, anh ấy đã gửi những gì?",
        qZh: "在邮局，他寄了什么？",
        options: [
          "Một bưu kiện đi Mỹ và một thư chuyển phát nhanh đi Đà Nẵng",
          "Một bức thư đi Mỹ và một bưu kiện đi Huế",
          "Sách báo và fax đi Thành phố Hồ Chí Minh"
        ],
        answer: 0
      },
      {
        qVi: "3. Sau khi gửi thư và bưu kiện, từ bưu điện anh ấy đã đi đâu?",
        qZh: "寄完信和包裹后，从邮局出来他去了哪里？",
        options: [
          "Đi chợ Đồng Xuân và Hồ Tây",
          "Đi hiệu sách Thăng Long, Tràng Tiền Plaza và Nhà hát Lớn Hà Nội",
          "Đi sân bay Nội Bài"
        ],
        answer: 1
      }
    ]
  },

  // =========================================================================
  // 3. NGỮ PHÁP (GIẢI THÍCH CHI TIẾT BẰNG TIẾNG VIỆT & TIẾNG TRUNG)
  // =========================================================================
  grammar: [
    {
      titleVi: "1. Các từ chỉ sự so sánh tuyệt đối: nhất, hơn cả, hơn hết",
      titleZh: "一、表示最高级比较的词：nhất, hơn cả, hơn hết",
      explanationVi: "Cấu trúc: [Danh từ / Chủ ngữ] + Tính từ + nhất / hơn cả / hơn hết. Cả ba từ đều biểu thị mức độ cao nhất trong một phạm vi so sánh, trong đó từ 'nhất' thông dụng nhất trong giao tiếp hằng ngày.",
      explanationZh: "【语法结构】：主语 / 名词 + 形容词 + nhất / hơn cả / hơn hết。\n【用法说明】：“nhất”、“hơn cả”、“hơn hết” 均放在形容词之后，表示在某一个特定范围内程度达到最高（相当于汉语的“最……”）。其中：\n• “nhất” 最常用，口语和书面语均可；\n• “hơn cả” 和 “hơn hết” 语气更强，多用于书面语或强调对比（意为“比所有的都……”、“最为……”）。",
      examples: [
        {
          vi: "Bưu điện Trung tâm gần đây nhất.",
          zh: "中心邮局离这儿最近。"
        },
        {
          vi: "Ở Hà Nội, bưu điện Trung tâm là bưu điện lớn hơn cả.",
          zh: "在河内，中心邮局是最大的邮局（比其他邮局都大）。"
        },
        {
          vi: "Hồ Hoàn Kiếm đẹp hơn hết.",
          zh: "还剑湖最美（美过一切）。"
        }
      ]
    },
    {
      titleVi: "2. Các từ hỏi về địa điểm: ở đâu? đi đâu? từ đâu?",
      titleZh: "二、询问地点的疑问词：ở đâu? đi đâu? từ đâu?",
      explanationVi: "• 'Ở đâu': hỏi về vị trí, nơi hoạt động xảy ra.\n• 'Đi đâu': hỏi về điểm đến, phương hướng di chuyển.\n• 'Từ đâu': hỏi về điểm xuất phát.\n• Chú ý: Ngoài các cách hỏi trên, có thể dùng từ 'đâu' cho một số trường hợp như 'ăn đâu?', 'ngủ đâu?', 'học đâu?' nhưng không thông dụng.",
      explanationZh: "【用法区别】：\n1. “ở đâu”（在哪里）：用于询问人、事物所在的位置，或动作发生的地点。句型：[主语] + ở đâu? 或 [主语 + 动词] + ở đâu?\n2. “đi đâu”（去哪里）：用于询问移动的方向或目的地。句型：[主语] + đi đâu? 或 [主语 + 动词] + đi đâu?\n3. “từ đâu”（从哪里）：用于询问动作的起点或来源地。句型：[主语 + 动词] + từ đâu? 或 [主语] + từ đâu + [动词]?\n【注意】：在日常口语中，有时可以省略介词 “ở”，直接说成 “ăn đâu?”（在哪吃？）、“ngủ đâu?”（在哪睡？）、“học đâu?”（在哪学？），但这种说法不如带 “ở” 规范常用。",
      examples: [
        {
          vi: "Nhà anh ở đâu? — Nhà tôi ở nhà số 45, phố Bà Triệu.",
          zh: "你家在哪里？——我家在赵婆街45号。（询问静态位置）"
        },
        {
          vi: "Anh học tiếng Anh ở đâu? — Tôi học tiếng Anh ở Mỹ.",
          zh: "你在哪里学英语？——我在美国学英语。（询问动作发生地）"
        },
        {
          vi: "Anh muốn gửi bưu kiện đi đâu? — Tôi muốn gửi bưu kiện đi Huế.",
          zh: "您想把包裹寄去哪里？——我想把包裹寄去顺化。（询问目的地）"
        },
        {
          vi: "Chiều nay, anh đi đâu? — Chiều nay, tôi đi thư viện.",
          zh: "今天下午你去哪里？——今天下午我去图书馆。（询问去向）"
        },
        {
          vi: "Bưu kiện gửi từ đâu? — Bưu kiện gửi từ Việt Nam.",
          zh: "包裹是从哪里寄来的？——包裹是从越南寄来的。（询问起点）"
        }
      ]
    }
  ],

  // =========================================================================
  // 4. LUYỆN TẬP TƯƠNG TÁC (THỰC HÀNH 9, THỰC HÀNH 11, THỰC HÀNH 12 TRONG PDF)
  // =========================================================================
  exercises: {
    // THỰC HÀNH 9 TRONG PDF: Nghe và điền thông tin vào chỗ trống
    listeningFill: {
      titleVi: "Bài 1 (Thực hành 9): Nghe và điền thông tin vào chỗ trống",
      titleZh: "练习一（教材第9题）：听录音并填空（使用最高级：nhất / hơn cả / hơn hết）",
      items: [
        {
          before: "1. Nhà hát Lớn là nhà hát",
          blank: "đẹp nhất",
          after: "thành phố.",
          fullAudio: "Nhà hát Lớn là nhà hát đẹp nhất thành phố.",
          hintZh: "提示：大剧院是全市最漂亮的剧院（đẹp nhất / lớn nhất）。"
        },
        {
          before: "2. Chợ Đồng Xuân là",
          blank: "chợ lớn nhất",
          after: "Hà Nội.",
          fullAudio: "Chợ Đồng Xuân là chợ lớn nhất Hà Nội.",
          hintZh: "提示：同春市场是河内最大的市场（chợ lớn nhất / chợ to nhất）。"
        },
        {
          before: "3. Ở Hà Nội, Hồ Tây là hồ",
          blank: "rộng hơn cả",
          after: ".",
          fullAudio: "Ở Hà Nội, Hồ Tây là hồ rộng hơn cả.",
          hintZh: "提示：在河内，西湖是最大的湖（rộng hơn cả / rộng nhất）。"
        },
        {
          before: "4. Ở Hà Nội, công viên Thủ Lệ",
          blank: "đẹp nhất",
          after: ".",
          fullAudio: "Ở Hà Nội, công viên Thủ Lệ đẹp nhất.",
          hintZh: "提示：在河内，首丽公园最美（đẹp nhất / lớn hơn cả）。"
        },
        {
          before: "5. Ở Việt Nam, Thành phố Hồ Chí Minh",
          blank: "lớn nhất",
          after: ".",
          fullAudio: "Ở Việt Nam, Thành phố Hồ Chí Minh lớn nhất.",
          hintZh: "提示：在越南，胡志明市最大（lớn nhất / đông dân nhất）。"
        },
        {
          before: "6. Theo tôi, ở Việt Nam, thành phố Huế",
          blank: "đẹp hơn hết",
          after: ".",
          fullAudio: "Theo tôi, ở Việt Nam, thành phố Huế đẹp hơn hết.",
          hintZh: "提示：在我看来，在越南顺化市最美（đẹp hơn hết / đẹp nhất）。"
        },
        {
          before: "7. Ở Việt Nam, vịnh Hạ Long",
          blank: "đẹp nhất",
          after: ".",
          fullAudio: "Ở Việt Nam, vịnh Hạ Long đẹp nhất.",
          hintZh: "提示：在越南，下龙湾最美（đẹp nhất / nổi tiếng nhất）。"
        }
      ]
    },

    // THỰC HÀNH 11 TRONG PDF: Nghe đoạn hội thoại và xác nhận Đúng / Sai
    trueFalseQuiz: {
      titleVi: "Bài 2 (Thực hành 11): Nghe hội thoại và chọn Đúng / Sai",
      titleZh: "练习二（教材第11题）：听对话并判断正误（Đúng / Sai）",
      audioText: "Khách hàng: Chị ơi, cho tôi gửi bức thư này đi Huế. Nhân viên: Anh muốn gửi thường hay gửi chuyển phát nhanh ạ? Khách hàng: Cho tôi gửi chuyển phát nhanh nhé. Bao giờ thì thư đến Huế hả chị? Nhân viên: Ngày mai thư sẽ đến nơi anh ạ. Anh viết rõ địa chỉ người gửi và người nhận lên phong bì nhé. Của anh hết 25.000 đồng. Khách hàng: Vâng, xin gửi tiền chị.",
      transcriptLines: [
        { speaker: "Khách", vi: "Chị ơi, cho tôi gửi bức thư này đi Huế.", zh: "姐姐，请帮我把这封信寄去顺化。" },
        { speaker: "Nhân viên", vi: "Anh muốn gửi thường hay gửi chuyển phát nhanh ạ?", zh: "您想寄平信还是特快专递？" },
        { speaker: "Khách", vi: "Cho tôi gửi chuyển phát nhanh nhé. Bao giờ thì thư đến Huế hả chị?", zh: "请帮我寄特快专递吧。信什么时候能到顺化呢，姐姐？" },
        { speaker: "Nhân viên", vi: "Ngày mai thư sẽ đến nơi anh ạ. Anh viết rõ địa chỉ người gửi và người nhận lên phong bì nhé. Của anh hết 25.000 đồng.", zh: "明天信就会送到，先生。请您在信封上写清楚寄件人和收件人地址。您的费用一共25,000盾。" },
        { speaker: "Khách", vi: "Vâng, xin gửi tiền chị.", zh: "好的，给您钱。" }
      ],
      statements: [
        {
          statementVi: "1. Anh ấy gửi thư đi Hà Nội.",
          statementZh: "他把信寄去河内。",
          answer: false,
          explanationZh: "Sai（错）：他把信寄去顺化（Huế），不是河内。"
        },
        {
          statementVi: "2. Anh ấy gửi thư chuyển phát nhanh.",
          statementZh: "他寄的是特快专递信件。",
          answer: true,
          explanationZh: "Đúng（对）：他选择寄特快专递（chuyển phát nhanh）。"
        },
        {
          statementVi: "3. Anh viết địa chỉ người gửi và người nhận.",
          statementZh: "他写了寄件人和收件人的地址。",
          answer: true,
          explanationZh: "Đúng（对）：工作人员请他在信封上写清楚寄件人和收件人地址。"
        },
        {
          statementVi: "4. Hôm nay, thư sẽ đến Huế.",
          statementZh: "今天信就会到达顺化。",
          answer: false,
          explanationZh: "Sai（错）：工作人员说“明天信就会送到”（Ngày mai thư sẽ đến nơi），不是今天。"
        },
        {
          statementVi: "5. Anh ấy trả 25.000 đồng.",
          statementZh: "他付了25,000越南盾。",
          answer: true,
          explanationZh: "Đúng（对）：邮费一共25,000越南盾。"
        }
      ]
    },

    // THỰC HÀNH 12 TRONG PDF: Sắp xếp lại các từ ngữ để tạo thành câu (7 câu)
    wordOrder: {
      titleVi: "Bài 3 (Thực hành 12): Sắp xếp lại các từ ngữ để tạo thành câu",
      titleZh: "练习三（教材第12题）：连词成句（点击词语按顺序排列）",
      items: [
        {
          words: ["anh Peter", "bưu điện", "đi", "gửi bưu phẩm", "để."],
          correct: "Anh Peter đi bưu điện để gửi bưu phẩm."
        },
        {
          words: ["chị Anna", "đi", "để", "ngân hàng", "rút tiền."],
          correct: "Chị Anna đi ngân hàng để rút tiền."
        },
        {
          words: ["ông Hoàng", "về Việt Nam", "bay", "hôm qua."],
          correct: "Ông Hoàng bay về Việt Nam hôm qua."
        },
        {
          words: ["hiện nay", "sống", "anh ấy", "Hà Nội", "ở", "đang."],
          correct: "Hiện nay anh ấy đang sống ở Hà Nội."
        },
        {
          words: ["bà Linda", "thành phố Hồ Chí Minh", "làm việc", "ở", "rồi", "2 năm."],
          correct: "Bà Linda làm việc ở thành phố Hồ Chí Minh 2 năm rồi."
        },
        {
          words: ["nó", "bay", "về Việt Nam", "Singapore", "từ."],
          correct: "Nó bay từ Singapore về Việt Nam."
        },
        {
          words: ["họ", "Đức", "về Việt Nam", "hôm qua", "từ."],
          correct: "Họ từ Đức về Việt Nam hôm qua."
        }
      ]
    }
  }
});