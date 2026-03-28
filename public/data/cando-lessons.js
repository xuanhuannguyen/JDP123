window.CANDO_LESSONS = [
  {
    id: "lesson-4",
    lesson: 4,
    title: "Lesson 4: Places, descriptions, weather, food",
    modules: [
      {
        id: "l4-slot1",
        slot: "Can-do 1",
        skill: "Nói về vị trí, phương tiện và thời gian di chuyển",
        goal: "Ask and answer simple questions about where a city is and how long it takes to get there.",
        prompts: [
          {
            id: "l4s1q1",
            japanese: "ハノイからホーチミンまでどのくらいですか。",
            vi: "Từ Hà Nội đến Hồ Chí Minh mất khoảng bao lâu?",
            sampleAnswer: "ひこうきで二時間ぐらいです。",
            hints: ["Dùng mẫu: A から B まで", "Trả lời với phương tiện + thời lượng"]
          },
          {
            id: "l4s1q2",
            japanese: "ホーチミンはベトナムのどこですか。",
            vi: "Hồ Chí Minh ở đâu của Việt Nam?",
            sampleAnswer: "ベトナムのみなみにあります。",
            hints: ["Mẫu vị trí: くに の きた / みなみ / まんなか"]
          },
          {
            id: "l4s1q3",
            japanese: "ダナンからホーチミンまで何で行きますか。",
            vi: "Từ Đà Nẵng đến Hồ Chí Minh đi bằng gì?",
            sampleAnswer: "ひこうきで行きます。",
            hints: ["Mẫu hỏi: 何で行きますか"]
          },
          {
            id: "l4s1q4",
            japanese: "東京から大阪までどのくらいですか。",
            vi: "Từ Tokyo đến Osaka mất bao lâu?",
            sampleAnswer: "しんかんせんで二時間半ぐらいです。",
            hints: ["Mẫu: A から B までどのくらいですか", "Có thể trả lời bằng thời gian ぐらいです"]
          },
          {
            id: "l4s1q5",
            japanese: "ハノイからダナンまでバスでどのくらいですか。",
            vi: "Từ Hà Nội đến Đà Nẵng đi xe buýt mất bao lâu?",
            sampleAnswer: "バスで十五時間ぐらいです。",
            hints: ["Mẫu: A から B まで Nでどのくらいですか"]
          },
          {
            id: "l4s1q6",
            japanese: "FPT大学からダナンえきまでタクシーでどのくらいですか。",
            vi: "Từ Đại học FPT đến ga Đà Nẵng đi taxi mất bao lâu?",
            sampleAnswer: "タクシーで三十分ぐらいです。",
            hints: ["Có thể thay địa điểm quen thuộc của bạn", "Trả lời ngắn gọn bằng phương tiện + thời gian"]
          }
        ]
      },
      {
        id: "l4-slot2",
        slot: "Can-do 2",
        skill: "Miêu tả thành phố, trường học, nhà cửa",
        goal: "Describe a place using simple adjectives and existence patterns.",
        prompts: [
          {
            id: "l4s2q1",
            japanese: "ダナン市はどんな市ですか。",
            vi: "Thành phố Đà Nẵng là thành phố như thế nào?",
            sampleAnswer: "きれいで、にぎやかな市です。",
            hints: ["Dùng tính từ đuôi い và な", "Có thể nối bằng で"]
          },
          {
            id: "l4s2q2",
            japanese: "FPT大学は小さいですか。",
            vi: "Đại học FPT có nhỏ không?",
            sampleAnswer: "いいえ、小さくないです。きれいでゆうめいです。",
            hints: ["Câu yes/no có thể trả lời rồi bổ sung mô tả"]
          },
          {
            id: "l4s2q3",
            japanese: "〜さんのうちのちかくに何がありますか。",
            vi: "Gần nhà bạn có gì?",
            sampleAnswer: "スーパーとこうえんがあります。",
            hints: ["Dùng mẫu: N が あります"]
          },
          {
            id: "l4s2q4",
            japanese: "あなたのまちはどんなところですか。",
            vi: "Thành phố của bạn là nơi như thế nào?",
            sampleAnswer: "しずかで、きれいなところです。",
            hints: ["Mẫu: どんなところですか", "Có thể nối 2 tính từ bằng で"]
          },
          {
            id: "l4s2q5",
            japanese: "あなたのまちはにぎやかですか。",
            vi: "Thành phố của bạn có nhộn nhịp không?",
            sampleAnswer: "はい、にぎやかです。でも、よるはしずかです。",
            hints: ["Câu yes/no có thể trả lời rồi bổ sung thêm ý"]
          },
          {
            id: "l4s2q6",
            japanese: "あなたのまちにやまがありますか。",
            vi: "Thành phố của bạn có núi không?",
            sampleAnswer: "はい、あります。ゆうめいなやまがあります。",
            hints: ["Mẫu: まちにNがありますか", "Có thể thay bằng きょうかい / おてら"]
          }
        ]
      },
      {
        id: "l4-slot3",
        slot: "Can-do 3",
        skill: "Nói về thời tiết và món ăn",
        goal: "Talk about weather and local food in a city or country.",
        prompts: [
          {
            id: "l4s3q1",
            japanese: "ベトナムのりょうりはどうですか。",
            vi: "Món ăn Việt Nam thế nào?",
            sampleAnswer: "おいしくて、あまりたかくないです。",
            hints: ["Dùng どうですか để đánh giá chung"]
          },
          {
            id: "l4s3q2",
            japanese: "きょうはあついですか。",
            vi: "Hôm nay có nóng không?",
            sampleAnswer: "はい、ちょっとあついです。",
            hints: ["Có thể trả lời ngắn rồi thêm mức độ"]
          },
          {
            id: "l4s3q3",
            japanese: "あなたのくには１２月どうですか。",
            vi: "Tháng 12 ở nước bạn như thế nào?",
            sampleAnswer: "さむいですが、あまりゆきはふりません。",
            hints: ["Nói về thời tiết theo tháng"]
          },
          {
            id: "l4s3q4",
            japanese: "ダナンのたべものはどうですか。",
            vi: "Đồ ăn ở Đà Nẵng thế nào?",
            sampleAnswer: "おいしくて、ゆうめいです。",
            hints: ["Mẫu tổng quát: ～はどうですか"]
          },
          {
            id: "l4s3q5",
            japanese: "ベトナムは春どうですか。",
            vi: "Việt Nam vào mùa xuân thế nào?",
            sampleAnswer: "あたたかくて、すごしやすいです。",
            hints: ["Mẫu mùa: はる / なつ / あき / ふゆ"]
          },
          {
            id: "l4s3q6",
            japanese: "ハノイは七月あついですか。",
            vi: "Hà Nội vào tháng 7 có nóng không?",
            sampleAnswer: "はい、とてもあついです。",
            hints: ["Mẫu theo tháng: ～は～月あついですか"]
          }
        ]
      }
    ]
  },
  {
    id: "lesson-5",
    lesson: 5,
    title: "Lesson 5: Weekend activities and preferences",
    modules: [
      {
        id: "l5-slot6",
        slot: "Can-do 6",
        skill: "Hỏi đáp về những việc đã làm vào ngày nghỉ",
        goal: "Talk about past activities using simple past tense.",
        prompts: [
          {
            id: "l5s6q1",
            japanese: "日曜日、何をしましたか。",
            vi: "Chủ nhật bạn đã làm gì?",
            sampleAnswer: "ともだちとえいがを見ました。そのあと、レストランで食事しました。",
            hints: ["Dùng động từ quá khứ: しました / 行きました / 見ました"]
          },
          {
            id: "l5s6q2",
            japanese: "どこでべんきょうしましたか。",
            vi: "Bạn đã học ở đâu?",
            sampleAnswer: "としょかんでべんきょうしました。",
            hints: ["Nơi chốn + で"]
          },
          {
            id: "l5s6q3",
            japanese: "だれとえいがを見ましたか。",
            vi: "Bạn đã xem phim với ai?",
            sampleAnswer: "ルームメイトと見ました。",
            hints: ["Người đi cùng + と"]
          },
          {
            id: "l5s6q4",
            japanese: "きのう、どこかへ行きましたか。",
            vi: "Hôm qua bạn có đi đâu không?",
            sampleAnswer: "はい、スーパーへ行きました。",
            hints: ["Mẫu hỏi quá khứ yes/no với どこかへ"]
          },
          {
            id: "l5s6q5",
            japanese: "せんしゅう、だれとばんごはんを食べましたか。",
            vi: "Tuần trước bạn đã ăn tối với ai?",
            sampleAnswer: "ともだちと食べました。",
            hints: ["Mẫu: せんしゅう、だれとVましたか"]
          },
          {
            id: "l5s6q6",
            japanese: "きのう、どうして学校へ行きませんでしたか。",
            vi: "Hôm qua vì sao bạn không đi học?",
            sampleAnswer: "びょうきでしたから、行きませんでした。",
            hints: ["Mẫu lý do: ～でしたから", "Có thể dùng いそがしかったですから"]
          }
        ]
      },
      {
        id: "l5-slot7",
        slot: "Can-do 7",
        skill: "Nói cảm nhận về ngày nghỉ",
        goal: "Describe how an activity or day felt using adjectives in the past.",
        prompts: [
          {
            id: "l5s7q1",
            japanese: "りょうりはどうでしたか。",
            vi: "Món ăn thế nào?",
            sampleAnswer: "とてもおいしかったです。",
            hints: ["Tính từ quá khứ: おいしかった / たいへんでした"]
          },
          {
            id: "l5s7q2",
            japanese: "きのうはいそがしかったですか。",
            vi: "Hôm qua bạn có bận không?",
            sampleAnswer: "はい、ちょっといそがしかったです。",
            hints: ["Có thể dùng ちょっと để giảm sắc thái"]
          },
          {
            id: "l5s7q3",
            japanese: "アルバイトはたいへんでしたか。",
            vi: "Công việc làm thêm có vất vả không?",
            sampleAnswer: "はい、でもおもしろかったです。",
            hints: ["Nối cảm xúc bằng でも"]
          },
          {
            id: "l5s7q4",
            japanese: "きのうのえいがはどうでしたか。",
            vi: "Bộ phim hôm qua thế nào?",
            sampleAnswer: "おもしろかったです。",
            hints: ["Mẫu nhận xét quá khứ: ～はどうでしたか"]
          },
          {
            id: "l5s7q5",
            japanese: "せんしゅうのしゅうまつはどうでしたか。",
            vi: "Cuối tuần tuần trước thế nào?",
            sampleAnswer: "いそがしかったですが、たのしかったです。",
            hints: ["Có thể nói 2 cảm nhận trái nhau trong một câu"]
          },
          {
            id: "l5s7q6",
            japanese: "きのうのてんきはどうでしたか。",
            vi: "Thời tiết hôm qua thế nào?",
            sampleAnswer: "あまりよくなかったです。",
            hints: ["Áp dụng mẫu cảm nhận cho thời tiết"]
          }
        ]
      },
      {
        id: "l5-slot8",
        slot: "Can-do 8",
        skill: "Nói sở thích, điều muốn có, muốn làm",
        goal: "Express wants, likes, and plans with ほしい and 〜たいです.",
        prompts: [
          {
            id: "l5s8q1",
            japanese: "何がほしいですか。",
            vi: "Bạn muốn có gì?",
            sampleAnswer: "新しいカメラがほしいです。",
            hints: ["Mẫu: N が ほしいです"]
          },
          {
            id: "l5s8q2",
            japanese: "どこへ行きたいですか。",
            vi: "Bạn muốn đi đâu?",
            sampleAnswer: "北海道へ行きたいです。",
            hints: ["Mẫu: どこへ V-たいです"]
          },
          {
            id: "l5s8q3",
            japanese: "だれに会いたいですか。",
            vi: "Bạn muốn gặp ai?",
            sampleAnswer: "国のともだちに会いたいです。",
            hints: ["Người muốn gặp + に"]
          },
          {
            id: "l5s8q4",
            japanese: "今、何がいちばんほしいですか。",
            vi: "Bây giờ bạn muốn có gì nhất?",
            sampleAnswer: "ノートパソコンがいちばんほしいです。",
            hints: ["Mẫu: 何がいちばんほしいですか"]
          },
          {
            id: "l5s8q5",
            japanese: "今、何がいちばんすきですか。",
            vi: "Bây giờ bạn thích gì nhất?",
            sampleAnswer: "日本の音楽がいちばんすきです。",
            hints: ["Mẫu: 何がいちばんすきですか"]
          },
          {
            id: "l5s8q6",
            japanese: "お金がたくさんあります。何をしたいですか。",
            vi: "Nếu có nhiều tiền, bạn muốn làm gì?",
            sampleAnswer: "日本へりょこうしたいです。",
            hints: ["Mẫu giả định đơn giản rồi trả lời bằng Vたいです"]
          }
        ]
      },
      {
        id: "l5-slot9",
        slot: "Can-do 9",
        skill: "Nói về dự định ngày nghỉ tới",
        goal: "Talk about upcoming holiday plans.",
        prompts: [
          {
            id: "l5s9q1",
            japanese: "しゅうまつ、何をしますか。",
            vi: "Cuối tuần bạn sẽ làm gì?",
            sampleAnswer: "うちで日本語をべんきょうします。",
            hints: ["Dùng thì hiện tại cho kế hoạch gần"]
          },
          {
            id: "l5s9q2",
            japanese: "日曜日、だれに会いに行きますか。",
            vi: "Chủ nhật bạn sẽ đi gặp ai?",
            sampleAnswer: "ともだちに会いに行きます。",
            hints: ["Mẫu: に会いに行きます"]
          },
          {
            id: "l5s9q3",
            japanese: "こんどのふゆやすみ、国へ帰りますか。",
            vi: "Kỳ nghỉ đông tới bạn có về nước không?",
            sampleAnswer: "はい、帰ります。かぞくとすごします。",
            hints: ["Có thể mở rộng bằng người cùng đi hoặc việc sẽ làm"]
          },
          {
            id: "l5s9q4",
            japanese: "あした何をしに行きますか。",
            vi: "Ngày mai bạn sẽ đi làm gì?",
            sampleAnswer: "ともだちとえいがを見に行きます。",
            hints: ["Mẫu: Vます-stem + に行きます"]
          },
          {
            id: "l5s9q5",
            japanese: "あした、だれと買いものをしに行きますか。",
            vi: "Ngày mai bạn sẽ đi mua sắm với ai?",
            sampleAnswer: "あねと行きます。",
            hints: ["Kết hợp người đi cùng + mục đích"]
          },
          {
            id: "l5s9q6",
            japanese: "らいしゅう、学校のあと何をしますか。",
            vi: "Tuần sau sau giờ học bạn sẽ làm gì?",
            sampleAnswer: "カフェでべんきょうします。",
            hints: ["Dùng hiện tại cho kế hoạch gần tương lai"]
          }
        ]
      }
    ]
  },
  {
    id: "lesson-6",
    lesson: 6,
    title: "Lesson 6: Invitations, comparisons, making appointments",
    modules: [
      {
        id: "l6-slot11",
        slot: "Can-do 11",
        skill: "Rủ bạn tham gia hoạt động và phản hồi",
        goal: "Invite someone and accept or decline politely.",
        prompts: [
          {
            id: "l6s11q1",
            japanese: "来週の日曜日、いっしょにサッカーをしませんか。",
            vi: "Chủ nhật tuần sau cùng chơi bóng đá nhé?",
            sampleAnswer: "はい、いいですね。行きましょう。",
            hints: ["Nhận lời: はい、いいですね", "Từ chối nhẹ: すみません、ちょっと…"]
          },
          {
            id: "l6s11q2",
            japanese: "こんばん、いっしょにばんごはんを食べませんか。",
            vi: "Tối nay cùng đi ăn tối nhé?",
            sampleAnswer: "すみません、きょうはアルバイトがあります。",
            hints: ["Từ chối nên kèm lý do"]
          },
          {
            id: "l6s11q3",
            japanese: "よこはまで何がありますか。",
            vi: "Ở Yokohama có gì?",
            sampleAnswer: "はなびがあります。",
            hints: ["Lấy từ nhóm câu hỏi không tranh của bài 6"]
          },
          {
            id: "l6s11q4",
            japanese: "こんばん、いっしょにえいがを見ませんか。",
            vi: "Tối nay cùng đi xem phim nhé?",
            sampleAnswer: "はい、見ましょう。",
            hints: ["Mẫu rủ rê: いっしょに～Vませんか"]
          },
          {
            id: "l6s11q5",
            japanese: "こうえんで何がありますか。",
            vi: "Ở công viên có gì?",
            sampleAnswer: "おまつりがあります。",
            hints: ["Mẫu: ～で何がありますか"]
          },
          {
            id: "l6s11q6",
            japanese: "らいしゅうの土曜日、いっしょにカラオケへ行きませんか。",
            vi: "Thứ bảy tuần sau cùng đi karaoke nhé?",
            sampleAnswer: "すみません、その日はやくそくがあります。",
            hints: ["Từ chối lịch sự và nêu lý do"]
          }
        ]
      },
      {
        id: "l6-slot12",
        slot: "Can-do 12",
        skill: "Hỏi và so sánh mức độ nhất, chọn phương án tốt hơn",
        goal: "Compare preferences and choose the best option.",
        prompts: [
          {
            id: "l6s12q1",
            japanese: "日本の食べ物で何がいちばんすきですか。",
            vi: "Trong các món ăn Nhật, bạn thích món nào nhất?",
            sampleAnswer: "ラーメンがいちばんすきです。",
            hints: ["Mẫu: N が いちばん すきです"]
          },
          {
            id: "l6s12q2",
            japanese: "でんしゃとバスとどちらがいいですか。",
            vi: "Tàu điện và xe buýt, cái nào tốt hơn?",
            sampleAnswer: "でんしゃのほうがいいです。はやいですから。",
            hints: ["Mẫu: A のほうがいいです"]
          },
          {
            id: "l6s12q3",
            japanese: "一年で何月がいちばんあついですか。",
            vi: "Trong năm, tháng nào nóng nhất?",
            sampleAnswer: "六月がいちばんあついです。",
            hints: ["Nói so sánh nhất theo tháng hoặc mùa"]
          },
          {
            id: "l6s12q4",
            japanese: "ベトナムでどこがいちばんきれいですか。",
            vi: "Ở Việt Nam, nơi nào đẹp nhất?",
            sampleAnswer: "ダナンがいちばんきれいです。",
            hints: ["Mẫu: ～でどこがいちばんAですか"]
          },
          {
            id: "l6s12q5",
            japanese: "クラスでだれがいちばんしずかですか。",
            vi: "Trong lớp, ai là người yên lặng nhất?",
            sampleAnswer: "リンさんがいちばんしずかです。",
            hints: ["Mẫu: ～でだれがいちばんAですか"]
          },
          {
            id: "l6s12q6",
            japanese: "ベトナムで何がいちばんゆうめいですか。",
            vi: "Ở Việt Nam, cái gì nổi tiếng nhất?",
            sampleAnswer: "フォーがいちばんゆうめいです。",
            hints: ["Mẫu: ～で何がいちばんAですか"]
          }
        ]
      },
      {
        id: "l6-slot13",
        slot: "Can-do 13",
        skill: "So sánh hơn và hỏi trải nghiệm đã từng",
        goal: "Use より and もう for comparisons and experiences.",
        prompts: [
          {
            id: "l6s13q1",
            japanese: "タイのカレーは日本のカレーよりからいですか。",
            vi: "Cà ri Thái có cay hơn cà ri Nhật không?",
            sampleAnswer: "はい、日本のカレーよりからいです。",
            hints: ["Mẫu so sánh: A は B より Adj です"]
          },
          {
            id: "l6s13q2",
            japanese: "もうインドのカレーを食べましたか。",
            vi: "Bạn đã ăn cà ri Ấn chưa?",
            sampleAnswer: "はい、もう食べました。とてもおいしかったです。",
            hints: ["Mẫu trải nghiệm: もう Vました"]
          },
          {
            id: "l6s13q3",
            japanese: "もうオーストラリアへ行きましたか。",
            vi: "Bạn đã đi Úc chưa?",
            sampleAnswer: "いいえ、まだ行っていません。",
            hints: ["Chưa từng: まだ Vていません"]
          },
          {
            id: "l6s13q4",
            japanese: "もうしゅくだいをしましたか。",
            vi: "Bạn làm bài tập xong chưa?",
            sampleAnswer: "はい、もうしました。",
            hints: ["Mẫu: もう～Vましたか"]
          },
          {
            id: "l6s13q5",
            japanese: "コーヒーとおちゃとどちらがおいしいですか。",
            vi: "Cà phê và trà, cái nào ngon hơn?",
            sampleAnswer: "わたしはコーヒーのほうがおいしいと思います。",
            hints: ["Mẫu so sánh lựa chọn: ～と～とどちらがAですか"]
          },
          {
            id: "l6s13q6",
            japanese: "もうその本を読みましたか。",
            vi: "Bạn đọc cuốn sách đó rồi à?",
            sampleAnswer: "いいえ、まだ読んでいません。",
            hints: ["Cặp trả lời chuẩn: もう / まだ"]
          }
        ]
      },
      {
        id: "l6-slot14",
        slot: "Can-do 14",
        skill: "Chốt thời gian và địa điểm cuộc hẹn",
        goal: "Finalize a meeting by deciding when and where to meet.",
        prompts: [
          {
            id: "l6s14q1",
            japanese: "何時に会いますか。",
            vi: "Mấy giờ gặp nhau?",
            sampleAnswer: "四時に会いましょう。",
            hints: ["Mẫu chốt hẹn: 〜に会いましょう"]
          },
          {
            id: "l6s14q2",
            japanese: "四時はどうですか。",
            vi: "4 giờ được không?",
            sampleAnswer: "はい、いいです。",
            hints: ["Có thể phản hồi: ちょっと… 五時はどうですか"]
          },
          {
            id: "l6s14q3",
            japanese: "どこで会いますか。",
            vi: "Gặp nhau ở đâu?",
            sampleAnswer: "駅の前で会いましょう。",
            hints: ["Dùng địa điểm quen thuộc, ngắn gọn"]
          }
        ]
      }
    ]
  },
  {
    id: "lesson-7",
    lesson: 7,
    title: "Lesson 7: Directions, requests, ongoing actions",
    modules: [
      {
        id: "l7-slot17",
        slot: "Can-do 17",
        skill: "Hỏi chỉ đường, mô tả vị trí",
        goal: "Ask where things are and explain location using front, back, next to, etc.",
        prompts: [
          {
            id: "l7s17q1",
            japanese: "こうばんはどこにありますか。",
            vi: "Đồn cảnh sát ở đâu?",
            sampleAnswer: "はなやの前にあります。",
            hints: ["Mẫu vị trí: N の前 / うしろ / となり"]
          },
          {
            id: "l7s17q2",
            japanese: "FPT大学のちかくに何がありますか。",
            vi: "Gần Đại học FPT có gì?",
            sampleAnswer: "コンビニとカフェがあります。",
            hints: ["Mẫu tồn tại: 〜があります"]
          },
          {
            id: "l7s17q3",
            japanese: "バスていはスーパーのうしろにありますか。",
            vi: "Trạm xe buýt có ở phía sau siêu thị không?",
            sampleAnswer: "はい、あります。",
            hints: ["Yes/no về vị trí"]
          },
          {
            id: "l7s17q4",
            japanese: "あなたのうちはどこにありますか。",
            vi: "Nhà bạn ở đâu?",
            sampleAnswer: "FPT大学の近くにあります。",
            hints: ["Mẫu: ～はどこにありますか"]
          },
          {
            id: "l7s17q5",
            japanese: "ねこはどこにいますか。",
            vi: "Con mèo đang ở đâu?",
            sampleAnswer: "いすの下にいます。",
            hints: ["Dùng います cho người/động vật"]
          },
          {
            id: "l7s17q6",
            japanese: "あなたのうちの近くに何がありますか。",
            vi: "Gần nhà bạn có gì?",
            sampleAnswer: "コンビニとぎんこうがあります。",
            hints: ["Mẫu: ～の近くに何がありますか"]
          }
        ]
      },
      {
        id: "l7-slot18",
        slot: "Can-do 18",
        skill: "Nhờ vả và đưa yêu cầu khi chuẩn bị tiệc",
        goal: "Ask people to do something and ask about tools or objects.",
        prompts: [
          {
            id: "l7s18q1",
            japanese: "サラダをつくってください。",
            vi: "Hãy làm salad nhé.",
            sampleAnswer: "はい、わかりました。",
            hints: ["Phản hồi ngắn khi nhận yêu cầu"]
          },
          {
            id: "l7s18q2",
            japanese: "野菜のきりかたをおしえてください。",
            vi: "Hãy chỉ cho tôi cách cắt rau.",
            sampleAnswer: "はい。まず、ナイフで小さくきります。",
            hints: ["Có thể nói từng bước đơn giản"]
          },
          {
            id: "l7s18q3",
            japanese: "なにでカレーを食べますか。",
            vi: "Ăn cà ri bằng gì?",
            sampleAnswer: "スプーンで食べます。",
            hints: ["Dùng mẫu: Nで Vます"]
          },
          {
            id: "l7s18q4",
            japanese: "何でりんごをきりますか。",
            vi: "Cắt táo bằng gì?",
            sampleAnswer: "ナイフできります。",
            hints: ["Mẫu: 何でNをきりますか"]
          },
          {
            id: "l7s18q5",
            japanese: "ベトナム人はフォークとナイフでご飯を食べますか。",
            vi: "Người Việt ăn cơm bằng nĩa và dao à?",
            sampleAnswer: "いいえ、ふつうははしやスプーンで食べます。",
            hints: ["Dùng yes/no rồi sửa lại thông tin"]
          },
          {
            id: "l7s18q6",
            japanese: "日本人は何でご飯を食べますか。",
            vi: "Người Nhật ăn cơm bằng gì?",
            sampleAnswer: "はしで食べます。",
            hints: ["Mẫu: ～人は何でご飯を食べますか"]
          }
        ]
      },
      {
        id: "l7-slot19",
        slot: "Can-do 19",
        skill: "Miêu tả hành động đang diễn ra và đề nghị giúp đỡ",
        goal: "Describe ongoing actions and offer help politely.",
        prompts: [
          {
            id: "l7s19q1",
            japanese: "だれがうたをうたっていますか。",
            vi: "Ai đang hát vậy?",
            sampleAnswer: "メアリーさんがうたをうたっています。",
            hints: ["Dùng thể て います"]
          },
          {
            id: "l7s19q2",
            japanese: "だれがソフィアさんとはなしていますか。",
            vi: "Ai đang nói chuyện với Sophia?",
            sampleAnswer: "ダニエルさんがはなしています。",
            hints: ["Hỏi người đang làm hành động gì"]
          },
          {
            id: "l7s19q3",
            japanese: "りょうりをとりましょうか。",
            vi: "Tôi lấy đồ ăn giúp nhé?",
            sampleAnswer: "ありがとうございます。お願いします。",
            hints: ["Mẫu đề nghị giúp: Vましょうか"]
          },
          {
            id: "l7s19q4",
            japanese: "山田さんは何をしていますか。",
            vi: "Yamada đang làm gì?",
            sampleAnswer: "でんわをかけています。",
            hints: ["Mẫu: ～さんは何をしていますか"]
          },
          {
            id: "l7s19q5",
            japanese: "だれがおどっていますか。",
            vi: "Ai đang nhảy?",
            sampleAnswer: "アインさんがおどっています。",
            hints: ["Mẫu: だれが～Vていますか"]
          },
          {
            id: "l7s19q6",
            japanese: "いぬは何をしていますか。",
            vi: "Con chó đang làm gì?",
            sampleAnswer: "ねています。",
            hints: ["Dùng Vています để mô tả hành động đang diễn ra"]
          }
        ]
      }
    ]
  }
];
