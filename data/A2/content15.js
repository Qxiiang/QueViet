window.LESSONS_DATA = window.LESSONS_DATA || {};
window.LESSONS_DATA["A2"] = window.LESSONS_DATA["A2"] || {};

window.LESSONS_DATA["A2"][15] = Object.assign(window.LESSONS_DATA["A2"][15] || {}, {
  id: 15,
  badge: "A2 • BÀI 15 • 第十五课",
  titleVi: "Ngày mai, trời thế nào?",
  titleZh: "明天天气怎么样？",
  objectives: [
    { vi: "Từ ngữ về thời tiết & khí hậu", zh: "天气与气候词汇" },
    { vi: "Câu hỏi: Trời thế nào? / Thời tiết thế nào?", zh: "询问天气句型" },
    { vi: "Thì tương lai gần: Sắp / Sắp ... chưa?", zh: "近将来时：快要……了" }
  ],

  dialogues: [
    {
      id: "d1",
      titleVi: "Hội thoại 1: Dự báo thời tiết ngày mai",
      titleZh: "对话一：明天的天气预报",
      lines: [
        { speaker: "Peter", vi: "Ngày mai, trời thế nào nhỉ?", zh: "明天天气怎么样呢？" },
        { speaker: "Hà", vi: "Anh không nghe tin dự báo thời tiết à?", zh: "你没听天气预报吗？" },
        { speaker: "Peter", vi: "Ừ, không, khi đó, mình đang bận làm máy tính nên không nghe.", zh: "嗯，没有，那会儿我正忙着用电脑，所以没听。" },
        { speaker: "Hà", vi: "Ngày mai, ở khu vực Bắc Bộ có mưa vừa đến mưa to, có nơi có dông.", zh: "明天北部地区有中到大雨，局部地区有雷阵雨。" },
        { speaker: "Peter", vi: "Thế thì không đi Hạ Long được rồi! Hôm nay, trời nắng đẹp thế mà ngày mai lại mưa.", zh: "那去不成下龙湾了！今天阳光这么好，明天却要下雨。" },
        { speaker: "Hà", vi: "Ồ, mùa hè, thời tiết thay đổi nhanh lắm.", zh: "哦，夏天天气变化可快了。" }
      ],
      questions: [
        { qVi: "1. Hôm nay, thời tiết thế nào?", qZh: "今天天气怎么样？", options: ["Hôm nay trời nắng đẹp.", "Hôm nay có mưa to.", "Hôm nay trời lạnh."], answer: 0 },
        { qVi: "2. Ngày mai ở Bắc Bộ trời thế nào?", qZh: "明天北部天气怎么样？", options: ["Trời nắng đẹp.", "Có mưa vừa đến mưa to, có nơi có dông.", "Có tuyết rơi."], answer: 1 },
        { qVi: "3. Tại sao anh Peter không nghe tin dự báo thời tiết?", qZh: "为什么Peter没听天气预报？", options: ["Vì anh ấy đi Hạ Long.", "Vì anh ấy đang ngủ.", "Vì anh ấy đang bận làm máy tính."], answer: 2 },
        { qVi: "4. Ngày mai, anh Peter có đi Hạ Long không?", qZh: "明天Peter去下龙湾吗？", options: ["Có, anh ấy sẽ đi.", "Không, vì ngày mai trời mưa.", "Anh ấy đi Sa Pa."], answer: 1 }
      ]
    },
    {
      id: "d2",
      titleVi: "Hội thoại 2: Thời tiết bốn mùa ở Sa Pa",
      titleZh: "对话二：沙巴的四季天气",
      lines: [
        { speaker: "Hoa", vi: "Anh sắp đi Sa Pa à?", zh: "你快要去沙巴了吗？" },
        { speaker: "Peter", vi: "Ừ, ngày mai tôi sẽ đi.", zh: "嗯，明天我就去。" },
        { speaker: "Hoa", vi: "Chuẩn bị xong chưa?", zh: "准备好了吗？" },
        { speaker: "Peter", vi: "Sắp xong rồi chị ạ.", zh: "快准备好了，姐。" },
        { speaker: "Hoa", vi: "Đầu thu, đi Sa Pa là đẹp nhất đấy!", zh: "初秋去沙巴是最美的！" },
        { speaker: "Peter", vi: "Thế mùa thu, ở Sa Pa thời tiết thế nào hả chị?", zh: "那秋天沙巴的天气怎么样啊，姐？" },
        { speaker: "Hoa", vi: "Nói chung, mùa thu ở Sa Pa, trời nắng, đẹp, thời tiết rất dễ chịu, không nóng như mùa hè, không lạnh như mùa đông và không mưa phùn ẩm ướt như mùa xuân.", zh: "总的来说，沙巴的秋天晴朗漂亮，天气非常宜人，不像夏天那么热，不像冬天那么冷，也不像春天那样有毛毛雨、潮湿。" },
        { speaker: "Peter", vi: "À, mùa đông ở Sa Pa có tuyết không chị?", zh: "啊，沙巴的冬天有雪吗，姐？" },
        { speaker: "Hoa", vi: "Thỉnh thoảng thôi, khoảng bốn năm năm mới có một lần.", zh: "只是偶尔有，大约四五年才有一次。" }
      ],
      questions: [
        { qVi: "1. Anh Peter sắp đi đâu và bao giờ đi?", qZh: "Peter快要去哪儿？什么时候去？", options: ["Đi Hạ Long, tuần sau đi.", "Đi Sa Pa, ngày mai đi.", "Đi Huế, hôm nay đi."], answer: 1 },
        { qVi: "2. Mùa xuân ở Sa Pa trời thế nào?", qZh: "沙巴的春天怎么样？", options: ["Nắng và nóng.", "Mưa phùn, ẩm ướt.", "Có tuyết rơi."], answer: 1 },
        { qVi: "3. Mấy năm ở Sa Pa có tuyết một lần?", qZh: "沙巴几年下一次雪？", options: ["Mỗi năm một lần.", "Hai năm một lần.", "Khoảng bốn năm năm mới có một lần."], answer: 2 }
      ]
    }
  ],

  reading: {
    titleVi: "Bài đọc: Khí hậu Việt Nam",
    titleZh: "阅读：越南的气候",
    paragraphs: [
      {
        vi: "Việt Nam là một đất nước dài và hẹp. Việt Nam thuộc vùng khí hậu nhiệt đới gió mùa. Khí hậu miền Bắc và miền Nam khác nhau khá rõ.",
        zh: "越南是一个狭长的国家。越南属于热带季风气候区。北部和南部的气候差异相当明显。"
      },
      {
        vi: "Miền Bắc có 4 mùa: mùa xuân, mùa hè, mùa thu, mùa đông. Mùa xuân, thời tiết ấm, có mưa phùn, ẩm ướt, rất tốt cho sự phát triển của cây cối. Mùa hè, trời nắng và nóng. Nhiệt độ trung bình 26°C, có ngày nóng tới 39°C - 40°C. Mùa thu, trời nắng đẹp, mát, dễ chịu nhưng hay có bão. Mùa đông lạnh, nhiều ngày có mưa phùn, rất ẩm ướt.",
        zh: "北部有四个季节：春季、夏季、秋季、冬季。春天天气暖和，有毛毛雨，潮湿，非常有利于植物生长。夏天晴朗炎热，平均气温26°C，有时热到39°C - 40°C。秋天晴朗凉爽、宜人，但常有台风。冬天寒冷，很多天有毛毛雨，非常潮湿。"
      },
      {
        vi: "Miền Nam chỉ có hai mùa là mùa khô và mùa mưa. Mùa mưa bắt đầu từ tháng 4 đến hết tháng 9. Mùa khô bắt đầu từ tháng 10 đến hết tháng 3. Trời nóng quanh năm, cây cối luôn luôn xanh tốt.",
        zh: "南部只有两个季节，即旱季和雨季。雨季从4月开始到9月底结束。旱季从10月开始到次年3月底结束。全年炎热，草木常年郁郁葱葱。"
      }
    ],
    questions: [
      { qVi: "1. Việt Nam thuộc vùng khí hậu nào?", qZh: "越南属于什么气候区？", options: ["Ôn đới hải dương", "Nhiệt đới gió mùa", "Hàn đới"], answer: 1 },
      { qVi: "2. Ở miền Bắc, mùa nào hay có bão?", qZh: "在越南北部，哪个季节常有台风？", options: ["Mùa xuân", "Mùa thu", "Mùa đông"], answer: 1 },
      { qVi: "3. Mùa mưa ở miền Nam kéo dài mấy tháng (từ tháng 4 đến hết tháng 9)?", qZh: "南方的雨季持续几个月（从4月到9月底）？", options: ["4 tháng", "6 tháng", "8 tháng"], answer: 1 }
    ]
  },

  grammar: [
    {
      titleVi: "2.1. Câu hỏi về thời tiết: Trời thế nào? / Thời tiết thế nào?",
      titleZh: "2.1. 询问天气的句型",
      explanationVi: "Dùng để hỏi tình hình thời tiết. 'Trời thế nào?' dùng nhiều trong khẩu ngữ (văn nói); 'Thời tiết thế nào?' dùng nhiều trong văn viết hoặc trang trọng.",
      explanationZh: "用于询问天气状况。“Trời thế nào?”多用于口语；“Thời tiết thế nào?”多用于书面语或正式场合。",
      examples: [
        { vi: "(Hôm nay) trời thế nào? — Hôm nay, trời nắng.", zh: "（今天）天气怎么样？——今天晴天。（口语）" },
        { vi: "Hôm nay, thời tiết thế nào? — Hôm nay, thời tiết đẹp.", zh: "今天天气怎么样？——今天天气很好。（书面语）" }
      ]
    },
    {
      titleVi: "2.2. Thì tương lai gần với 'Sắp' và câu hỏi 'Sắp ... chưa?'",
      titleZh: "2.2. 近将来时“Sắp”及疑问句“Sắp ... chưa?”",
      explanationVi: "Từ 'sắp' đứng trước động từ để chỉ hành động sắp xảy ra (tương đương '快要……了' trong tiếng Trung). Khi hỏi dùng 'Sắp + V + chưa?', trả lời khẳng định thường có 'rồi' ở cuối câu.",
      explanationZh: "副词“sắp”放在动词前表示动作即将发生（相当于汉语的“快要……了”）。提问用“Sắp + 动词 + chưa?”，肯定回答句末通常加“rồi”。",
      examples: [
        { vi: "Anh sắp về nước chưa? — Tôi sắp về nước rồi.", zh: "你快要回国了吗？——我快要回国了。" },
        { vi: "Anh ấy sắp học xong chưa? — Anh ấy sắp học xong rồi.", zh: "他快要学完了吗？——他快要学完了。" }
      ]
    },
    {
      titleVi: "2.3. Phân biệt 'Sắp' và 'Sẽ / Mới' khi có thời gian cụ thể",
      titleZh: "2.3. 有具体时间时“Sắp”与“Sẽ / Mới”的区别",
      explanationVi: "Lưu ý quan trọng: Nếu câu trả lời là tương lai gần nói chung (không nêu thời gian cụ thể) thì dùng 'sắp'. Nếu nêu rõ mốc thời gian cụ thể (chủ nhật tuần này, tuần sau...) thì phải dùng 'sẽ' hoặc 'mới' (nhấn mạnh muộn hơn dự kiến).",
      explanationZh: "重要提示：如果回答是笼统的近将来（不带具体时间），用“sắp”。如果带有具体时间点（如本周日、下周等），必须用“sẽ”（将要）或“mới”（才）。",
      examples: [
        { vi: "Anh sắp về nước chưa? — Sắp, chủ nhật tuần này, tôi sẽ về.", zh: "你快回国了吗？——快了，这周日我就回去。（具体时间用 sẽ）" },
        { vi: "Ông ấy sắp đi Huế chưa? — Chưa, tuần sau, ông ấy mới đi.", zh: "他快要去顺化了吗？——还没，下周他才去。（具体时间且偏晚用 mới）" }
      ]
    }
  ],

  exercises: {
    visualQuiz: [
      { icon: "☀️", promptVi: "Hôm nay trời thế nào?", promptZh: "看图标选天气：", options: ["Hôm nay trời nắng.", "Hôm nay trời mưa.", "Hôm nay trời lạnh."], answer: 0 },
      { icon: "🌧️", promptVi: "Hôm nay trời thế nào?", promptZh: "看图标选天气：", options: ["Hôm nay trời nóng.", "Hôm nay trời mưa.", "Hôm nay trời đẹp."], answer: 1 },
      { icon: "⛈️", promptVi: "Hôm nay trời thế nào?", promptZh: "看图标选天气：", options: ["Hôm nay trời có dông.", "Hôm nay trời ấm.", "Hôm nay trời mát."], answer: 0 },
      { icon: "🥶🔥", promptVi: "Mùa đông trời thế nào?", promptZh: "冬天天气怎么样？", options: ["Mùa đông trời nóng.", "Mùa đông trời lạnh.", "Mùa đông trời nắng."], answer: 1 },
      { icon: "🌸", promptVi: "Mùa nào ấm và có mưa phùn ở miền Bắc?", promptZh: "北部哪个季节暖和且有毛毛雨？", options: ["Mùa xuân", "Mùa hè", "Mùa thu"], answer: 0 },
      { icon: "❄️", promptVi: "Mùa nào ở Sa Pa thỉnh thoảng có tuyết?", promptZh: "沙巴哪个季节偶尔下雪？", options: ["Mùa thu", "Mùa đông", "Mùa xuân"], answer: 1 }
    ],

    wordOrder: [
      { words: ["ở", "mùa hè", "Việt Nam", "nắng", "nóng", "và", "trời"], correct: "Mùa hè ở Việt Nam trời nắng và nóng." },
      { words: ["ở", "mùa xuân", "ấm", "trời", "miền Bắc"], correct: "Mùa xuân ở miền Bắc trời ấm." },
      { words: ["mát", "và", "mùa thu", "dễ chịu", "thời tiết."], correct: "Mùa thu thời tiết mát và dễ chịu." },
      { words: ["lạnh", "mùa đông", "rất", "trời"], correct: "Mùa đông trời rất lạnh." },
      { words: ["miền Nam", "ở", "có", "2 mùa", "mùa khô", "là", "và", "mùa mưa"], correct: "Ở miền Nam có 2 mùa là mùa khô và mùa mưa." },
      { words: ["tôi", "thích", "mùa thu", "rất"], correct: "Tôi rất thích mùa thu." }
    ],

    fillBlanks: [
      {
        before: "Ông Hoàng",
        blank: "sắp",
        after: "đi Mỹ rồi.",
        hintZh: "提示：近将来时（快要去美国了）"
      },
      {
        before: "Anh Nam sắp về nhà",
        blank: "chưa",
        after: "? — Anh ấy sắp về nhà rồi.",
        hintZh: "提示：近将来时疑问词（……了吗？）"
      },
      {
        before: "Ông Hoàng sắp đi Mỹ phải không? — Vâng, tháng sau ông ấy",
        blank: "sẽ",
        after: "đi.",
        hintZh: "提示：后文有具体时间“tháng sau（下个月）”"
      },
      {
        before: "Bà Tâm sắp về Việt Nam à? — Vâng, tuần sau bà ấy",
        blank: "sẽ",
        after: "về.",
        hintZh: "提示：后文有具体时间“tuần sau（下周）”"
      },
      {
        before: "Ông ấy sắp đi Huế chưa? — Chưa, tuần sau ông ấy",
        blank: "mới",
        after: "đi.",
        hintZh: "提示：还没去，下周“才”去"
      }
    ],

    dictationText: "Mùa hè sắp đến. Chúng tôi rất vui. Chúng tôi sẽ được nghỉ hè 3 tháng. Chúng tôi sẽ về quê thăm ông, bà, họ hàng. Chúng tôi sẽ được đi du lịch. Năm nay, gia đình tôi sẽ đi du lịch Vịnh Hạ Long. Đây là một cảnh đẹp nổi tiếng của Việt Nam và thế giới. Người Việt Nam và người nước ngoài đều rất thích đi du lịch ở đây."
  }
});
