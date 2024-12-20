const MMPI = {
    // 题目数据
    questions: {
        1: '我喜欢看科技方面的新闻',
        2: '我的胃口很好',
        3: '我早上起来的时候，多半觉得睡眠充足，头脑清醒',
        4: '我想我会喜欢图书管理员的工作',
        5: '我睡觉时很容易被吵醒',
        6: '我喜欢看与犯罪有关的新闻',
        7: '我的手脚经常是很暖和的',
        8: '我的日常生活中，充满了使我感兴趣的事情',
        9: '我现在工作（学习）的能力，和从前差不多',
        10: '我的喉咙里总好像有一块东西堵着似的',
        11: '一个人应该去了解自己的梦，并从中得到指导或警告',
        12: '我喜欢看侦探小说或神秘小说',
        13: '我总是在很紧张的情况下工作',
        14: '我每个月至少有一、二次拉肚子',
        15: '偶尔我会想到一些坏得说不出口的事',
        16: '我深信生活对我是不公平的',
        17: '我的父亲是一个好人',
        18: '我很少有便秘的毛病',
        19: '当我找到一件新的工作时，总喜欢别人秘密告诉我，我应该接近谁',
        20: '我的性生活是满意的',
        21: '有时我非常想离开家',
        22: '有时我会哭一阵笑一阵，连自己也不能控制',
        23: '恶心和呕吐的毛病使我苦恼',
        24: '似乎没有一个人理解我',
        25: '我想我会喜欢当一名歌唱家',
        26: '当我处境困难的时候，我觉得最好是不开口',
        27: '有时我觉得有鬼神附在我身上',
        28: '当别人惹了我时，我觉得只要有机会就应报复，这是理所当然的',
        29: '我有胃酸过多的毛病，一星期要犯好几次',
        30: '有时我真想骂人',
        31: '每隔几个晚上我就做噩梦',
        32: '我发现我很难把注意力集中到一件工作上',
        33: '我曾经有过很特别、很奇怪的体验',
        34: '我时常咳嗽',
        35: '假如不是有人和我作对，我一定会有更大的成就',
        36: '我很少担心自己的健康',
        37: '我从来没有因我的性方面的行为而遇到麻烦',
        38: '我小的时候，有一段时间我干过小偷小摸的事',
        39: '有时我真想摔东西',
        40: '有很多时候我宁愿坐着空想，而不愿做任何事情',
        41: '我曾一连几天、几个星期、几个月什么也不想干，因为我总是提不起精神',
        42: '我家里人不喜欢我选择的工作（或将要选择的职业）',
        43: '我睡得不安稳，容易被惊醒',
        44: '我常觉得我的头到处都疼',
        45: '有时我也讲假话',
        46: '我现在的判断力比以往任何时候都好',
        47: '每星期至少有一、二次，我突然觉得无缘无故地全身发热',
        48: '当我与人相处的时候，听到别人谈论稀奇古怪的事，我就心烦',
        49: '最好是把所有的法律全都废除',
        50: '有时我觉得我的灵魂离开了我的身体',
        51: '我的身体和我的大多数朋友一样健康',
        52: '遇到同学或不常见的朋友，除非他们先向我打招呼，不然我就装作没看见',
        53: '一位牧师（和尚、道士、神父、阿訇等教士）能用祈祷和把手放在病人头上来治病',
        54: '认识我的人差不多都喜欢我',
        55: '我从来没有因为胸痛或心痛而感到苦恼',
        56: '我小时候，曾经因为胡闹而受过学校的处分',
        57: '我和别人一见面就熟了，或者说我是自来熟的性格',
        58: '一切事情都由老天爷或命运安排好了',
        59: '我时常得听从某些人的指挥，其实他们还不如我高明',
        60: '我不是每天都看报纸上的每一篇社论',
        61: '我从未有过正常的生活',
        62: '我身体的某些部分常有像火烧、刺痛、虫爬或麻木的感觉',
        63: '我的大便不难控制',
        64: '有时我会不停地做一件事，直到别人都感到厌烦',
        65: '我爱我的父亲',
        66: '我能在我周围看到其他人所看不到的东西、动物或人',
        67: '我希望我能像别人那样快乐',
        68: '我几乎从未感到过脖子（颈部）后面疼痛',
        69: '同性别的人对我有很强的吸引力',
        70: '我过去曾喜欢玩“丢手帕”之类的游戏',
        71: '我觉得许多人为了得到别人的同情和帮助，而喜欢夸大自己的不幸',
        72: '我为每隔几天或经常感到心口（胃）不舒服而烦恼',
        73: '我是个重要的人物',
        74: 'm我总希望我是个女人f我从不因为我是女人而遗憾',
        75: '我有时发怒',
        76: '我时常感到悲观失望',
        77: '我喜欢看爱情小说',
        78: '我喜欢诗',
        79: '我的感情不易受伤害',
        80: '我有时捉弄动物',
        81: '我想我会喜欢干森林管理员那一类的工作',
        82: '和人争辩的时候，我常争不过别人',
        83: '凡是有能力而且愿意吃苦的人都会有很好的成功机会',
        84: '现在，我发现自己很容易自暴自弃',
        85: '有时我被别人的东西，如鞋、手套等等所强烈吸引，虽然这些东西对我毫无用处，但我总想摸摸它或把它偷来',
        86: '我确实缺少自信心',
        87: '我愿意做一名花匠',
        88: '我总觉得人生是有价值的',
        89: '要使大多数人相信事实的真相，是要经过一番辩论的',
        90: '有时我将本该今天做的事，拖到明天去做',
        91: '我不在乎别人拿我开玩笑',
        92: '我想当个护士',
        93: '我觉得大多数人是为了向上爬而不惜说谎的',
        94: '许多事情，我做过以后就后悔了',
        95: '我几乎每星期都去教堂（或常去寺庙之类的宗教场所）',
        96: '我很少和家人争吵',
        97: '有时我有一种强烈的冲动，想去做一些惊人或有害的事',
        98: '我相信善有善报，恶有恶报',
        99: '我喜欢参加热闹的聚会',
        100: '我曾碰到一些千头万绪的问题，使我感到犹豫不决',
        101: '我认为女性在性生活方面，应该和男性有同等的自由',
        102: '我认为最难的是控制我自己',
        103: '我很少有肌肉抽筋或颤抖的毛病',
        104: '我似乎对什么事情有都不在乎',
        105: '我身体不舒服的时候，有时会发脾气',
        106: '我总觉得我自己好像做错了什么事或犯了什么罪',
        107: '我经常是快乐的',
        108: '我时常觉得头胀鼻塞似的',
        109: '有些人太霸道，即使我明知他们是对的，也要和他们对着干',
        110: '有人想害我',
        111: '我从来没有为寻求刺激而去做危险的事',
        112: '我时常认为必须坚持那些我认为正确的事',
        113: '我相信法制',
        114: '我常觉得头上好像有一根绷得紧紧的带子',
        115: '我相信人死后还会有“来世”',
        116: '我更喜欢我下了赌的比赛或游戏',
        117: '大部分人之所以是诚实的，主要是因为怕被别人识破',
        118: '我在上学的时候，有时因胡闹而被教导主任或者校长叫去',
        119: '我说话总是那样不快也不慢，不含糊也不嘶哑',
        120: '我在外边和朋友们一起吃饭的时候，比在家规矩得多',
        121: '我相信有人暗算我',
        122: '我似乎和我周围的人一样精明能干',
        123: '我相信有人跟踪我',
        124: '大多数人不惜用不正当的手段谋取利益，而不愿失掉机会',
        125: '我的胃有很多毛病',
        126: '我喜欢戏剧或歌舞剧',
        127: '我知道我的烦恼是谁造成的',
        128: '看到血的时候，我既不害怕也不难受',
        129: '我自己往往弄不清为什么会这样爱生气或发牢骚',
        130: '我从来没有吐过血，或咯过血',
        131: '我不为得病而担心',
        132: '我喜欢栽花或采集花草',
        133: '我从来没有放纵自己发生过任何不正常的性行为',
        134: '有时我的思想跑得太快都来不及表达出来',
        135: '假如我能不买票，白看电影，而且不会被人发觉，我可能会去这样干的',
        136: '如果别人待我好，我常常怀疑他们别有用心',
        137: '我相信我的家庭生活，和我所认识的许多人一样幸福快乐',
        138: '批评和责骂都使我非常伤心',
        139: '有时我仿佛觉得我必须伤害自己或别人',
        140: '我喜欢做饭烧菜',
        141: '我的行为多半受我周围人的习惯所支配',
        142: '有时我觉得我真是毫无用处',
        143: '小时候我曾加入过一个团伙，有福共享，有难同当',
        144: '我喜欢当兵',
        145: '有时我想借故和别人打架',
        146: '我喜欢到处乱逛，如果不让我这么做，我会不高兴',
        147: '由于我经常不能当机立断，因而失去过许多良机',
        148: '当我正在做一件重要事情的时候，如果有人向我请教或打扰我，我会不耐烦的',
        149: '我以前写过日记',
        150: '玩游戏的时候，我只想赢而不愿输',
        151: '有人一直想毒害我',
        152: '大多数晚上我睡觉时，不受什么思想干扰',
        153: '近几年来大部分时间，我的身体都很好',
        154: '我从来没有过抽风的毛病',
        155: '现在我的体重既没有增加也没有减轻',
        156: '有一段时间，我自己做过的事情全不记得了',
        157: '我觉得我时常无缘无故地受到惩罚',
        158: '我容易哭',
        159: '我不能象从前那样理解我所读的东西了',
        160: '在我一生中，我从来没有感觉到像现在这么好',
        161: '有时候我觉得我的头顶一碰就疼',
        162: '我痛恨别人以不正当的手段捉弄我，使我不得不认输',
        163: '我不容易感到疲倦',
        164: '我喜欢研究和阅读与我目前工作有关的东西',
        165: '我喜欢结识一些重要人物，这样会使我感到自己也很重要',
        166: '我很害怕从高处往下看',
        167: '即使我家里有人犯法，我也不会紧张',
        168: '我的脑子有点毛病',
        169: '我不怕管理钱财',
        170: '我不在乎别人对我有什么看法',
        171: '在聚会当中，尽管有人出风头，如果让我也这样做，我会感到很不舒服',
        172: '我时常需要努力使自己不显出怕羞的样子',
        173: '我过去喜欢上学',
        174: '我从来没有晕倒过',
        175: '我很少头昏眼花',
        176: '我不大怕蛇',
        177: '我母亲是个好人',
        178: '我的记忆力似乎还不错',
        179: '有关性方面的问题使我烦恼',
        180: '我觉得我遇到生人的时候就不知道说什么好了',
        181: '无聊的时候，我就会惹事寻开心',
        182: '我怕自己会发疯',
        183: '我反对把钱给乞丐',
        184: '我时常听到说话的声音，而又不知道它是从哪里来的',
        185: '我的听觉显然和大多数人一样好',
        186: '当我要做一件事的时候，我常发现我的手在发抖',
        187: '我的双手并没有变得笨拙不灵',
        188: '我能阅读很长的时间，而眼睛不觉得累',
        189: '许多时候，我觉得浑身无力',
        190: '我很少头痛',
        191: '有时当我难为情的时候会出很多汗，这使我非常苦恼',
        192: '我从未感到走路时不能保持平衡',
        193: '我没哮喘这一类疾病',
        194: '我曾有过几次突然不能控制自己的行动或言语，但当时我的头脑还很清醒',
        195: '我所认识的人里，不是个个我都喜欢',
        196: '我喜欢到我从来没有到过的地方去游览',
        197: '有人一直想抢我的东西',
        198: '我很少空想',
        199: '我们应该把有关性方面的主要知识告诉孩子',
        200: '有人想窃取我的思想和计划',
        201: '但愿我不像现在这样的害羞',
        202: '我相信我是一个受谴责的人',
        203: '假若我是一个新闻记者，我会更喜欢报道娱乐圈的新闻',
        204: '我喜欢做一个新闻记者',
        205: '有时我会控制不住想要偷一点东西',
        206: '我相信神，程度超过了大多数人',
        207: '我喜欢许多不同种类的游戏或娱乐',
        208: '我喜欢和异性说笑',
        209: '我相信我的罪恶是不可饶恕的',
        210: '每种东西吃起来味道都是一样的',
        211: '我白天能睡觉，晚上却睡不着',
        212: '我家里的人把我当作小孩子，而不当作大人看待',
        213: '走路时，我会很小心地跨过人行道上的接缝',
        214: '我从来没有为皮肤上长点东西而烦恼',
        215: '我曾经饮酒过度',
        216: '和别人的家庭比较，我的家庭缺乏爱和温暖',
        217: '我时常感到自己在为某些事而担忧',
        218: '当我看到动物受折磨的时候，我并不觉得特别难受',
        219: '我想我会喜欢建筑承包的工作',
        220: '我爱我的母亲',
        221: '我喜欢科学',
        222: '即使我以后不能报答恩惠，我也愿向朋友求助',
        223: '我很喜欢打猎',
        224: '我父母经常反对那些和我交往的人',
        225: '有时我也会说说人家的闲话',
        226: '我家里有些人的习惯，使我非常讨厌',
        227: '有人告诉过我，我在睡觉中会起来梦游',
        228: '有时我觉得我能非常容易地做出决定',
        229: '我喜欢同时参加几个团体',
        230: '我从来没有感到心慌气短',
        231: '我喜欢谈论两性方面的事',
        232: '我曾经立志要过一种以责任为重的生活，我一直照此谨慎从事',
        233: '我有时阻止别人做某些事，并不是因为那种事有多大影响，而是在“道义”上我应该干预他',
        234: '我很容易生气，但很快就能平静下来',
        235: '我已独立自主，不受家庭的约束',
        236: '我有很多心事',
        237: '我的亲属几乎全都同情我',
        238: '有时我十分烦躁，坐立不安',
        239: '我曾经失恋过',
        240: '我从来不为我的外貌而伤脑筋',
        241: '我常梦到一些不可告人的事',
        242: '我相信我并不比别人更为神经过敏',
        243: '我几乎没有什么地方有疼痛的毛病',
        244: '我的做事方法容易被人误解',
        245: '我的父母和家里人对我过于挑剔',
        246: '我脖子（颈部）上时常出现红斑',
        247: '我有理由妒忌我家里的某些人',
        248: '我有时无缘无故地，甚至在不顺利的时候也会觉得非常快乐',
        249: '我相信死后的世界有魔鬼和地狱',
        250: '有人想把世界上所能得到的东西都夺到手，我也不会责怪他',
        251: '我曾经有一阵突然发呆（发愣）停止活动，不知道周围发生了什么事情',
        252: '谁也不会关心他人的遭遇',
        253: '有些人所做的事，虽然我认为是错的，但我仍然能够友好地对待他们',
        254: '我喜欢和一些能互相开玩笑的人在一起相处',
        255: '在选举的时候，有时我会选出我不熟悉的人',
        256: '报纸上只有“漫画”最有趣',
        257: '凡是我所做的事，我都指望能够成功',
        258: '我相信有上帝（神）',
        259: '做什么事情，我都感到难以开头',
        260: '在学校里，我是个笨学生',
        261: '如果我是个画家，我会更喜欢画花',
        262: '我虽然相貌不好看，也不因此而苦恼',
        263: '即使在冷天，我也很容易出汗。',
        264: '我十分自信',
        265: '对任何人都不信任，是比较安全的',
        266: '每星期至少有一两次我十分兴奋',
        267: '人多的时候，我不知道说些什么话好',
        268: '在我心情不好的时候，总会有一些事使我高兴起来',
        269: '我能很容易使人怕我，有时我故意这样作来寻开心',
        270: '我离家外出的时候，从来不担心家里门窗是否关好或锁好了',
        271: '我不会责怪一个欺负了自找没趣者的人',
        272: '我有时精力充沛。',
        273: '我的皮肤上有一两处麻木了',
        274: '我的视力和往年一样好',
        275: '有人控制着我的思想',
        276: '我喜欢小孩子',
        277: '有时我非常欣赏骗子的机智，我甚至希望他能侥幸混过去',
        278: '我时常觉得有些陌生人用挑剔的眼光盯着我',
        279: '我每天喝特别多的水',
        280: '大多数人交朋友，是因为朋友对他们有用',
        281: '我觉得我很少耳鸣',
        282: '通常我爱家里的人，偶尔也恨他们',
        283: '假如我是一个新闻记者，我会更愿意报道体育新闻',
        284: '我确信别人正在议论我',
        285: '偶尔我听了下流的笑话也会发笑',
        286: '我独自一个人的时候，感到更快乐',
        287: '使我害怕的事比我的朋友们少得多',
        288: '恶心和呕吐的毛病使我苦恼',
        289: '当一个罪犯可以通过能言善辩的律师开脱罪责时，我对法律感到厌恶',
        290: '我总是在很紧张的情况下工作的',
        291: '在我这一生中，至少有一两次我觉得有人用催眠术指挥我做了一些事',
        292: '我一般不愿意同人讲话，除非对方先开口',
        293: '有人一直想要左右我的思想',
        294: '我从来没有犯过法',
        295: '我喜欢看《红楼梦》这一类的小说',
        296: '有些时候，我会无缘无故地觉得非常愉快',
        297: '我希望我不再受那种和性方面有关的念头所困扰',
        298: '假若有几个人闯了祸，他们最好先编一套假话，而且不改口',
        299: '我认为我比大多数人更容易动感情',
        300: '在我的一生当中，从来没有喜欢过洋娃娃',
        301: '许多时候，生活对我来说是一件吃力的事',
        302: '我从来没有因我的性方面的行为而遇到麻烦',
        303: '对于某些事情我很敏感，以至使我不能提及',
        304: '在学校里，要我在班上发言，是非常困难的',
        305: '即使和人们在一起，我还是经常感到孤单',
        306: '应得的同情，我全得到了',
        307: '我拒绝玩那些我玩不好的游戏',
        308: '有时我非常想离开家',
        309: '我交朋友差不多和别人一样容易',
        310: '我的性生活是满意的',
        311: '我小的时候，有一段时间我干过小偷小摸的事',
        312: '我不喜欢有人在我的身旁',
        313: '有人不将自己的贵重物品保管好因而引起别人偷窃，这种人和小偷一样应受责备',
        314: '偶尔我会想到一些坏得说不出口的事',
        315: '我深信生活对我是不公平的',
        316: '我想差不多每个人，都会为了避免麻烦说点假话',
        317: '我比大多数人更敏感',
        318: '在我的日常生活中，充满着使我感兴趣的事情',
        319: '大多数人，都是内心不愿意挺身而出去帮助别人的',
        320: '我的梦有好些是关于性方面的事',
        321: '我很容易感到难为情',
        322: '我为金钱和事业忧虑',
        323: '我曾经有过很特殊很奇怪的体验',
        324: '我从来没有爱上过任何人',
        325: '我家里有些人所做的事，使我吃惊',
        326: '有时我会哭一阵，笑一阵，连自己也不能控制',
        327: '我的母亲或父亲时常要我服从他，即使我认为是不合理的',
        328: '我发现我很难把注意力集中到一件工作上',
        329: '我几乎从不做梦',
        330: '我从来没有瘫痪过，或是感到肌肉非常软弱无力',
        331: '假如不是有人和我作对，我一定会有更大的成就',
        332: '即使我没有感冒，我有时也会发不出声音或声音改变',
        333: '似乎没有人理解我',
        334: '有时我会闻到奇怪的气味',
        335: '我不能专心于一件事情上',
        336: '我很容易对人感到不耐烦',
        337: '我几乎整天都在为某件事或某个人而焦虑',
        338: '我所操心的事，远远超过了我所应该操心的范围',
        339: '大部分时间，我觉得我还是死了的好',
        340: '有时我会兴奋得难以入睡',
        341: '有时我的听觉太灵敏了，反而使我感到烦恼',
        342: '别人对我说的话，我立刻就忘记了',
        343: '哪怕是琐碎的小事，我也会再三考虑后才去做',
        344: '有时为了避免和某些人相遇，我会绕道而行',
        345: '我常常觉得好像一切都不是真的',
        346: '我有一个习惯，喜欢点数一些不重要的东西，像路上的电线杆等等',
        347: '我没有真正想伤害我的仇人',
        348: '我提防那些对我过分亲近的人',
        349: '我有一些奇怪和特别的念头',
        350: '在我独处的时候，我会听到奇怪的声音',
        351: '当我必须短期离家出门的时候，我会感到心神不定',
        352: '我怕一些东西或人，虽然我明知他们是不会伤害我的',
        353: '如果屋子里已经有人聚在一起谈话，这时要我一个人进去，我是一点也不害怕的',
        354: '我害怕使用刀子或任何尖利的东西',
        355: '有时我喜欢折磨我所爱的人',
        356: '我似乎比别人更难于集中注意力',
        357: '有好几次我放弃正在做的事，因为我感到自己的能力太差了',
        358: '我脑子里常常出现一些坏的可怕的字眼，我却无法摆脱它们',
        359: '有时一些无关紧要的念头缠着我，使我好多天都感到不安',
        360: '几乎每天都有使我感到害怕的事情发生',
        361: '我总是将事情看得严重些',
        362: '我比大多数人更敏感。',
        363: '有时我喜欢受到我心爱的人的折磨',
        364: '有人用侮辱性的和下流的话议论我',
        365: '我呆在屋里总感到不安',
        366: '即使和人们在一起，我仍经常感到孤单',
        367: '我并不是特别害羞拘谨',
        368: '有时我的头脑似乎比平时迟钝',
        369: '在社交场合，我多半是一个人坐着，或者只跟另一个人坐在一起，而不到人群里去',
        370: '人们常使我失望',
        371: '我喜欢参加舞会',
        372: '有时我感到困难重重，无法克服',
        373: '我常想：“我要是能再成为一个孩子就好了”',
        374: '如果给我机会，我一定能做些对世界大有益处的事',
        375: '我时常遇见一些所谓的专家，他们并不比我高明',
        376: '当我听说我所熟悉的人成功了，我就觉得自己失败了',
        377: '如果有机会，我一定能成为一个人民的好领袖',
        378: '下流的故事使我感到不好意思',
        379: '一般来说人们要求别人尊重自己比较多，而自己却很少尊重别人',
        380: '我总想把好的故事记住，讲给别人听',
        381: '我喜欢搞输赢不大的赌博',
        382: '为了可以和人们在一起，我喜欢社交活动。',
        383: '我喜欢人多热闹的场合',
        384: '当我和一群快活的朋友在一起的时候，我的烦恼就烟消云散了',
        385: '当人们说我同伙的闲话时，我从来不参与',
        386: '只要我开始做一件事，就很难放下，哪怕是暂时的',
        387: '我的小便不困难，也不难控制',
        388: '我常发现别人妒忌我的好主意，因为他们没能先想到',
        389: '只要有可能，我就会避开人群',
        390: '我不怕见生人',
        391: '记得我曾经为了逃避某件事而装过病',
        392: '在火车和公共汽车上，我常跟陌生人交谈',
        393: '当事情不顺利的时候，我就想立即放弃。',
        394: '我喜欢让人家知道我对于事物的态度',
        395: '有些时间，我感到劲头十足，以至一连好几天都不需要睡觉',
        396: '在人群中，如果叫我带头发言，或对我所熟悉的事情发表意见，我并不感到不好意思',
        397: '我喜欢聚会和社交活动',
        398: '面对困难或危险的时候，我总退缩不前',
        399: '我原来想做的事，假若别人认为不值得做，我很容易放弃',
        400: '我不怕火',
        401: '我不怕水',
        402: '对某些事我常常是仔细考虑后才做出决定',
        403: '生活在这个丰富多彩的时代里是多么美好',
        404: '当我想纠正别人的错误和帮助他们的时候，我的好意常被误解',
        405: '我无吞咽困难',
        406: '我有时回避见人，因为我怕我会做出或讲出一些事后令我懊悔的事',
        407: '我通常很镇静，不容易激动',
        408: '我不轻易流露自己的感情，以至于人家伤害了我，他自己还不知道',
        409: '有时我因为承担的事情太多，而使自己精疲力竭',
        410: '我当然乐于以其人之道还治其人之身',
        411: '宗教不使我烦恼',
        412: '我生病或受伤的时候，不怕找医生',
        413: '我有罪，应受重罚',
        414: '我把失望的事看得太重，以至于总忘不了',
        415: '我很不喜欢匆匆忙忙地干工作',
        416: '虽然我明知自己能把事做好，但是我也怕别人看着我做',
        417: '在排队的时候如果有人插到我前面去，我会感到恼火而指责他',
        418: '有时我觉得自己一无是处',
        419: '小时候我时常逃学',
        420: '我曾经有过很不寻常的宗教体验',
        421: '我家里有人很神经过敏',
        422: '我因为家里有的人所从事过的职业而感到不好意思',
        423: '我很喜欢（或者喜欢过）钓鱼',
        424: '我几乎总感到肚子饿',
        425: '我经常做梦',
        426: '有时只好用不客气的态度去对付那些粗鲁或令人厌恶的人',
        427: '我倾向于对各种不同爱好发生兴趣，而不愿意长期坚持其中的某一种',
        428: '我喜欢阅读报纸的社论',
        429: '我喜欢听主题严肃的演说',
        430: '我易受异性的吸引',
        431: '我相当担心那些可能发生的不幸',
        432: '我有着坚定的政治见解',
        433: '我曾经有过想像的同伴',
        434: '我希望能成为一个摩托车运动员',
        435: '我通常喜欢和女性一起工作',
        436: '我确信只有一种宗教是真的',
        437: '只要你不是真正地犯法，钻法律的空子是可以的',
        438: '有些人讨厌极了，我会因为他们自食其果而暗中高兴',
        439: '要我等待，我就紧张',
        440: '当我兴高采烈的时候，见到别人忧郁消沉就使我大为扫兴',
        441: '我喜欢身材高的女人',
        442: '有些时期我因忧虑而失眠',
        443: '假若别人认为我对某些事的做法不妥当的话，我很容易放弃',
        444: '我不想去纠正那些发表愚昧无知见解的人',
        445: '我年轻（童年）的时候，喜欢寻求刺激',
        446: '警察通常是诚实的',
        447: '当别人反对我的意见时，我会不惜一切去说服他',
        448: '在街上、车上或在商店里，如果有人注视我，我会觉得不安',
        449: '我不喜欢看到妇女吸烟',
        450: '我很少有忧郁的毛病',
        451: '如果有人对我所熟悉的事情发表愚蠢和无知的意见，我总是没法纠正他',
        452: '我喜欢开别人的玩笑',
        453: '我小时候，对参加团伙不热心',
        454: '独自住在深山或老林的小木屋里，我也会觉得快乐',
        455: '许多人都说我是急性子',
        456: '如果一个人触犯了一条他认为不合理的法律，他是不应该受到惩罚的',
        457: '我认为一个人决不应该喝酒',
        458: '小时候和我关系密切的人（父亲、继父等）对我十分严厉',
        459: '我有几种坏习惯，已经根深蒂固，难于改正',
        460: '我只适量地喝一点酒（或者一点也不喝）',
        461: '我希望我能摆脱因为破口伤人而引起的烦恼',
        462: '我觉得不能把自己的一切都告诉别人',
        463: '我从前喜欢玩“跳房子”（或跳橡皮筋）的游戏',
        464: '我从来没有见过幻象',
        465: '对于我的终身职业，我已经好几次改变过主意',
        466: '除了医生的嘱咐，我从来不服用任何药物或安眠药',
        467: '我时常默记一些无关紧要的号码（如汽车牌照等）',
        468: '我时常因为自己爱发脾气和爱抱怨而感到懊悔',
        469: '闪电是我害怕的东西中的一种',
        470: '有关性方面的事使我厌恶',
        471: '在学校中老师对我的品行评定总是很不好',
        472: '火对我有一种诱惑力。',
        473: '我喜欢让别人猜测我下一步的活动',
        474: '我的小便次数不比别人多',
        475: '万不得已的时候，我只吐露一些无损于自己的那部分实情',
        476: '我是上帝（神）派来的特使',
        477: '假如我和几个朋友有着同样的过错，我宁可一人承担而不愿连累别人',
        478: '我还从来没有因为家里人惹了事而自己感到特别紧张',
        479: '人与人之间的相互欺骗是我所知道的唯一的奇迹',
        480: '我常常怕黑暗',
        481: '我害怕一个人单独呆在黑暗中',
        482: '我的计划看来总是困难重重，使我不得不一一放弃',
        483: '上帝（神）创造奇迹',
        484: '有些缺点，我只好承认并设法加以控制，但无法消除',
        485: '一个男人和一个女人相处的时候，他通常想到的是关于她的性方面的事',
        486: '我从来没有发现我尿中有血',
        487: '当我试图使别人不犯错误，而做的事被人误解的时候，我往往感到十分难过',
        488: '每星期我祈祷几次',
        489: '我同情那些不能摆脱苦恼和忧愁的人',
        490: '我每星期念几次经',
        491: '对认为世界上只有一种宗教是真的那些人，我感到不耐烦',
        492: '我想起地震就害怕',
        493: '我喜欢那种需要注意力集中的工作，而不喜欢省心（不费劲）的工作',
        494: '我怕自己被关在小房间里或禁闭的小地方',
        495: '对那些我想帮助他们改正或提高的人，我总是坦率地交底',
        496: '我从来没有过将一件东西看成两件（复视现象）',
        497: '我喜欢探险小说',
        498: '坦率永远是一件好事',
        499: '我必须承认，我有时会不合理地担心一些无关紧要的事情',
        500: '我很乐意百分之百的接受一个好意见',
        501: '我一向总是靠自己解决问题，而不是找人教我怎样做',
        502: '风暴使我惊慌',
        503: '我经常不对别人的行动表示强烈的赞成或反对',
        504: '我不想隐瞒我对一个人的坏印象或同情，免得他不知道我对他的看法',
        505: '我认为“不肯拉车的马应该受到鞭打”',
        506: '我是个神经高度紧张的人',
        507: '我经常遇到一些顶头上司，他们把功劳归于自己，把错误推给下级',
        508: '我相信我的嗅觉和别人一样好',
        509: '因为我太拘谨，所以有时我难于坚持自己的正确意见',
        510: '肮脏使我害怕或恶心',
        511: '我有一种不愿告诉别人的梦幻生活',
        512: '我不喜欢洗澡',
        513: '我认为为别人谋求幸福比自己争取自由更为伟大',
        514: '我喜欢有男子气的女人',
        515: '我们家总是不愁吃不愁穿',
        516: '我家里有些人脾气急躁',
        517: '我无论什么事情都做不好',
        518: '我经常感到惭愧，因为我对某些事情想的和做的不一样',
        519: '我的性器官有点毛病',
        520: '我总是强烈地坚持自己的意见',
        521: '我常常向别人请教',
        522: '我不害怕蜘蛛',
        523: '我从来不脸红',
        524: '我不怕从门把上传染上疾病',
        525: '有些动物使我神经紧张',
        526: '我的前途似乎没有希望',
        527: '我家里人和近亲们相处得很好',
        528: '我并不容易比人脸红',
        529: '我喜欢穿高档的衣服',
        530: '我常常担心自己会脸红',
        531: '即使我以为自己对某种事已经打定了主意，别人也很容易使我变卦或改变主意',
        532: '我和别人一样能够忍受同量的痛苦',
        533: '我并不因为常常打嗝（呃逆）而觉得很烦恼',
        534: '有好几次都是我一个人坚持到底，最后才放弃了所做的事',
        535: '我几乎整天感到口干',
        536: '只要有人催我，我就生气',
        537: '我想去深山野林中打老虎',
        538: '我想我会喜欢裁缝的工作',
        539: '我不怕老鼠',
        540: '我的面部从来没有麻痹过',
        541: '我的皮肤似乎对触摸特别敏感',
        542: '我从来没有过像柏油一样的黑粪便',
        543: '每星期我总有几次觉得好像有可怕的事情要发生',
        544: '我大部分时间都感到疲倦',
        545: '有时我一再做同样的梦',
        546: '我喜欢阅读有关历史的书籍',
        547: '未来是变化无常的，一个人很难做出认真的安排',
        548: '如果可以避免的话，我决不去看色情电影',
        549: '许多时候，即使一切顺利，我对任何事情都觉得无所谓',
        550: '我喜欢修理门锁',
        551: '有时我可以肯定别人知道我在想什么',
        552: '我喜欢阅读有关科学的书籍',
        553: '我害怕单独呆在空旷的地方',
        554: '假如我是个画家，我喜欢画小孩子',
        555: '有时我觉得我就要垮了',
        556: '我很注意我的衣着式样',
        557: '我喜欢当一个私人秘书',
        558: '许多人都因为有过不良的性行为而感到惭愧',
        559: '我经常在半夜里受惊吓',
        560: '我经常因为记不清把东西放在哪里而感到苦恼',
        561: '我很喜欢骑马',
        562: '小时候，我最依恋和钦佩的是一个女人（祖母、母亲、姐姐、姑、婶、姨等）',
        563: '我喜欢探险小说胜过爱情小说',
        564: '我不轻易生气',
        565: '当我站在高处的时候，我就很想往下跳',
        566: '我喜欢电影里的爱情镜头'
    
    },

    // 量表计分规则
    scoringRules: {
        // 效度量表-疑问分数 Q
        Q: {
            pairs: [
                [8, 318], [13, 290], [15, 314], [16, 315], [20, 310],
                [21, 308], [22, 326], [23, 288], [24, 333], [32, 328],
                [33, 323], [35, 331], [37, 302], [38, 311], [305, 366],
                [317, 362]
            ]
        },

        // 效度量表-说谎分数 L
        L: {
            falseAnswers: [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 195, 225, 255, 285]
        },

        // 效度量表-诈病分数 F
        F: {
            trueAnswers: [14, 27, 31, 34, 35, 40, 42, 48, 49, 50, 53, 56, 66, 85, 121, 123, 139, 146, 151, 156, 168, 184, 197, 200, 202, 205, 206, 209, 210, 211, 215, 218, 227, 245, 246, 247, 252, 256, 269, 275, 286, 288, 291, 293],
            falseAnswers: [17, 20, 54, 65, 75, 83, 112, 113, 115, 164, 169, 177, 185, 196, 199, 220, 257, 258, 272, 276]
        },

        // 效度量表-校正分数 K
        K: {
            trueAnswers: [96],
            falseAnswers: [30, 39, 71, 89, 124, 129, 134, 138, 142, 148, 160, 170, 171, 180, 183, 217, 234, 267, 272, 296, 316, 322, 368, 370, 372, 373, 375, 386, 394]
        },

        // 完整的男女常模数据
        norms: {
            male: {
                // 基础量表
                L: { mean: 5.70, sd: 2.52 },
                F: { mean: 13.68, sd: 6.86 },
                K: { mean: 13.00, sd: 4.66 },
                
                // 临床量表原始分
                Hs: { mean: 8.78, sd: 4.75 },
                D: { mean: 26.16, sd: 4.97 },
                Hy: { mean: 22.07, sd: 5.36 },
                Pd: { mean: 18.98, sd: 4.36 },
                Mf: { mean: 27.56, sd: 4.04 },
                Pa: { mean: 12.84, sd: 3.92 },
                Pt: { mean: 17.86, sd: 7.93 },
                Sc: { mean: 23.01, sd: 10.15 },
                Ma: { mean: 18.48, sd: 5.26 },
                Si: { mean: 34.51, sd: 6.88 },
                
                // K校正后的分数
                'Hs+0.5K': { mean: 15.42, sd: 4.75 },
                'Pd+0.4K': { mean: 24.38, sd: 4.36 },
                'Pt+1.0K': { mean: 31.14, sd: 7.93 },
                'Sc+1.0K': { mean: 36.47, sd: 10.15 },
                'Ma+0.2K': { mean: 21.22, sd: 5.26 },
                
                // 附加量表
                Mas: { mean: 18.86, sd: 5.20 },
                Dy: { mean: 26.09, sd: 5.15 },
                Do: { mean: 15.39, sd: 3.85 },
                Re: { mean: 20.54, sd: 4.26 },
                Cn: { mean: 25.26, sd: 5.38 }
            },
            female: {
                // 基础量表
                L: { mean: 5.64, sd: 2.48 },
                F: { mean: 11.69, sd: 5.02 },
                K: { mean: 12.25, sd: 4.26 },
                
                // 临床量表原始分
                Hs: { mean: 9.83, sd: 4.98 },
                D: { mean: 28.40, sd: 5.04 },
                Hy: { mean: 22.82, sd: 5.54 },
                Pd: { mean: 18.29, sd: 4.45 },
                Mf: { mean: 31.83, sd: 3.86 },
                Pa: { mean: 12.62, sd: 3.93 },
                Pt: { mean: 18.77, sd: 7.82 },
                Sc: { mean: 22.50, sd: 9.57 },
                Ma: { mean: 16.64, sd: 5.16 },
                Si: { mean: 37.27, sd: 6.71 },
                
                // K校正后的分数
                'Hs+0.5K': { mean: 15.96, sd: 4.98 },
                'Pd+0.4K': { mean: 23.19, sd: 4.45 },
                'Pt+1.0K': { mean: 31.02, sd: 7.82 },
                'Sc+1.0K': { mean: 34.75, sd: 9.57 },
                'Ma+0.2K': { mean: 19.09, sd: 5.16 },
                
                // 附加量表
                Mas: { mean: 19.87, sd: 5.18 },
                Dy: { mean: 27.12, sd: 5.06 },
                Do: { mean: 14.64, sd: 3.73 },
                Re: { mean: 20.42, sd: 4.12 },
                Cn: { mean: 24.89, sd: 5.24 }
            }
        },

        // T分计算函数
        calculateTScore: (rawScore, mean, sd) => {
            return Math.round(50 + 10 * (rawScore - mean) / sd);
        },

        // 补充完整的临床量表规则
        clinical: {
            // 精神病态 Pd
            Pd: {
                mustBeTrue: [17, 21, 22, 31, 32, 35, 42, 52, 54, 56, 71, 82, 94, 99, 105, 113, 195, 202, 219, 225, 259, 264, 288],
                mustBeFalse: [9, 12, 34, 70, 79, 83, 95, 122, 125, 129, 143, 157, 158, 160, 167, 171, 185, 209, 214, 217, 226, 243, 261, 263, 266, 267],
                kCorrection: 0.4
            },

            // 男子气质-女子气质 Mf
            Mf: {
                mustBeTrue: [4, 25, 62, 64, 67, 74, 80, 112, 119, 122, 128, 137, 166, 177, 187, 191, 196, 205, 209, 219, 236, 251, 256, 268, 271],
                mustBeFalse: [19, 26, 27, 63, 68, 69, 76, 86, 103, 104, 107, 120, 121, 132, 133, 163, 184, 193, 194, 197, 199, 201, 207, 231, 235, 237, 239, 254, 257, 272]
            },

            // 偏执 Pa
            Pa: {
                mustBeTrue: [17, 22, 23, 24, 42, 99, 113, 138, 144, 146, 162, 234, 259, 271, 277, 285, 305, 307, 333, 336, 355, 361],
                mustBeFalse: [81, 95, 98, 100, 104, 110, 244, 255, 266, 283, 284, 286, 297, 314, 315]
            },

            // 精神衰弱 Pt
            Pt: {
                mustBeTrue: [11, 15, 17, 19, 23, 27, 32, 44, 47, 76, 95, 98, 100, 106, 141, 164, 167, 168, 170, 175, 177, 179, 180, 189, 193, 196, 218, 242, 273, 275, 277, 285, 289, 301, 302, 304, 308, 309, 310, 313, 316, 317, 320, 325, 326, 327],
                mustBeFalse: [2, 3, 9, 10, 20, 28, 55, 71, 147, 171, 175, 188, 223, 261, 265, 267],
                kCorrection: 1.0
            },

            // 精神分裂症 Sc
            Sc: {
                mustBeTrue: [15, 22, 40, 41, 47, 52, 76, 97, 104, 121, 156, 157, 159, 168, 179, 182, 194, 202, 210, 212, 238, 241, 251, 259, 266, 273, 282, 291, 297, 301, 303, 307, 308, 311, 312, 315, 320, 323, 324, 325, 328, 331, 332, 333, 334, 335, 339, 341, 345, 349, 350, 352, 354, 355, 356, 360, 363, 364, 366],
                mustBeFalse: [17, 65, 103, 119, 177, 178, 187, 192, 196, 220, 276, 281, 302, 306, 309, 310, 318, 322, 330],
                kCorrection: 1.0
            },

            // 轻躁狂 Ma
            Ma: {
                mustBeTrue: [11, 13, 21, 22, 59, 64, 73, 97, 100, 109, 127, 134, 143, 156, 157, 167, 181, 194, 212, 222, 226, 228, 232, 233, 238, 240, 250, 251, 263, 266, 268, 271, 277, 279, 298],
                mustBeFalse: [101, 105, 111, 119, 120, 148, 166, 171, 180, 267, 289],
                kCorrection: 0.2
            },

            // 社会内向 Si
            Si: {
                mustBeTrue: [32, 67, 82, 111, 117, 124, 138, 147, 171, 172, 180, 201, 236, 267, 278, 292, 304, 316, 321, 332, 336, 342, 357, 369, 370, 373, 376, 378, 379, 385, 389, 393, 398, 399],
                mustBeFalse: [25, 33, 57, 91, 99, 110, 126, 143, 193, 208, 229, 231, 254, 262, 281, 296, 309, 353, 359, 367, 371, 374, 377, 380, 381, 382, 383, 384, 387, 388, 390, 391, 392, 395, 396, 397]
            },

            // 疑病 Hs
            Hs: {
                mustBeTrue: [23, 29, 43, 62, 72, 108, 114, 125, 161, 189, 273],
                mustBeFalse: [2, 3, 7, 9, 18, 51, 55, 63, 68, 103, 130, 153, 155, 163, 175, 188, 190, 192, 230, 243, 274, 281],
                kCorrection: 0.5
            },

            // 抑郁 D
            D: {
                mustBeTrue: [5, 32, 41, 43, 52, 67, 86, 104, 130, 138, 142, 158, 159, 182, 189, 193, 236, 259, 288, 290],
                mustBeFalse: [2, 8, 9, 18, 30, 36, 39, 46, 51, 57, 58, 64, 80, 88, 89, 95, 98, 107, 122, 131, 145, 152, 153, 154, 155, 160, 178, 191, 207, 208, 233, 241, 242, 248, 263, 270, 271, 272, 285, 296]
            },

            // 癔病 Hy
            Hy: {
                mustBeTrue: [10, 23, 32, 43, 44, 47, 76, 114, 179, 186, 189, 238, 253],
                mustBeFalse: [2, 3, 6, 7, 8, 9, 12, 26, 30, 51, 55, 71, 89, 93, 103, 107, 109, 124, 128, 129, 136, 137, 141, 147, 153, 160, 162, 163, 170, 172, 174, 175, 180, 188, 190, 192, 201, 213, 230, 234, 243, 265, 267, 274, 279, 289, 292]
            }
        },

        // 补充完整的附加量表规则
        additional: {
            // 支配性 Do
            Do: {
                mustBeTrue: [64, 229, 255, 270, 406, 432, 523],
                mustBeFalse: [32, 61, 82, 86, 94, 186, 223, 224, 240, 249, 250, 267, 268, 304, 343, 356, 419, 483, 547, 558, 562]
            },

            // 社会责任感 Re
            Re: {
                mustBeTrue: [58, 111, 173, 221, 294, 412, 501, 552],
                mustBeFalse: [6, 28, 30, 33, 56, 116, 118, 157, 175, 181, 223, 224, 260, 304, 388, 419, 434, 437, 468, 471, 472, 529, 553, 558]
            },

            // 控制 Cn
            Cn: {
                mustBeTrue: [6, 20, 30, 56, 67, 105, 116, 134, 145, 162, 169, 181, 225, 236, 238, 285, 296, 319, 337, 376, 379, 381, 418, 447, 460, 461, 529, 555],
                mustBeFalse: [58, 80, 92, 96, 111, 167, 174, 220, 242, 249, 250, 291, 313, 360, 439, 444, 449, 483, 488, 489, 527, 548]
            },

            // 外显性焦虑 Mas
            Mas: {
                mustBeTrue: [13, 14, 23, 31, 32, 43, 67, 86, 125, 142, 158, 186, 191, 217, 238, 241, 263, 301, 317, 321, 322, 335, 337, 340, 352, 361, 372, 398, 418, 424, 431, 439, 442, 499, 506, 530, 555],
                mustBeFalse: [7, 18, 107, 163, 190, 230, 242, 264, 287, 367, 407, 520, 528]
            },

            // 依赖性 Dy
            Dy: {
                mustBeTrue: [19, 21, 24, 41, 63, 67, 70, 82, 86, 98, 100, 138, 141, 158, 165, 180, 189, 201, 212, 236, 239, 259, 267, 304, 305, 321, 337, 338, 343, 357, 361, 362, 370, 372, 373, 393, 398, 399, 408, 440, 443, 461, 487, 488, 489, 509, 521, 531, 554],
                mustBeFalse: [9, 79, 107, 163, 170, 193, 264, 411]
            }
        },

        // K校正计算规则
        kCorrection: {
            // 疑病量表 K校正
            'Hs+0.5K': {
                baseScale: 'Hs',
                kMultiplier: 0.5,
                calculate: (hsScore, kScore) => hsScore + Math.round(kScore * 0.5)
            },
            
            // 精神病态量表 K校正
            'Pd+0.4K': {
                baseScale: 'Pd',
                kMultiplier: 0.4,
                calculate: (pdScore, kScore) => pdScore + Math.round(kScore * 0.4)
            },
            
            // 精神衰弱量表 K校正
            'Pt+1.0K': {
                baseScale: 'Pt',
                kMultiplier: 1.0,
                calculate: (ptScore, kScore) => ptScore + Math.round(kScore * 1.0)
            },
            
            // 精神分裂症量表 K校正
            'Sc+1.0K': {
                baseScale: 'Sc',
                kMultiplier: 1.0,
                calculate: (scScore, kScore) => scScore + Math.round(kScore * 1.0)
            },
            
            // 轻躁狂量表 K校正
            'Ma+0.2K': {
                baseScale: 'Ma',
                kMultiplier: 0.2,
                calculate: (maScore, kScore) => maScore + Math.round(kScore * 0.2)
            }
        },

        // 通用K校正计算函数
        calculateKCorrected: (baseScore, kScore, kMultiplier) => {
            return baseScore + Math.round(kScore * kMultiplier);
        }
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MMPI;
} 