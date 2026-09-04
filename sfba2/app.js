/* ================= 内置默认数据（读取失败时使用） ================= */
const DEFAULT_DATA_CSV = `部门,层级,人员,角色,职责,依赖部门,备注
美术部,部门,小火,负责人,KV;场贩/随票物料设计;各部门request支援,策划部,
美术部,部门,Vita,成员,美术执行,,
美术部,部门,Abi,成员,美术执行,,
策划部,部门,Fero,负责人,主题沉浸活动;摊位小游戏;布景道具,,
策划部,部门,咩咩,成员,内容;文案(包括宣发),,
策划部,部门,蜀山,成员,舞台小游戏;一番赏;舞台时间轴/主持讲解,,
宣发部,部门,咩咩,负责人,SNS宣发节点;官Coser联系,美术部;策划部;物流部,
宣发部,部门,盐宝,成员,网站更新;购票/招募页面,,
物流部,部门,早苗,负责人,物料统筹;运输存储监管,美术部;法务部,又名企鹅物流
物流部,部门,红白,成员,下单打样;运输,,
舞台部,部门,早苗,负责人,节目招募审核;AV规划;PPT,小游戏组;法务部,
舞台部,部门,老师,成员,舞台技术;设备租赁调试,,
法务部,部门,光,负责人,NPO;预算;贩售;合作赞助,,
法务部,部门,Xixi,成员,财务法务支援,,
法务部,部门,早苗,成员,场地调研/合同/保险,,
小游戏组,组,蜀山,负责人,小游戏统筹,策划部,
小游戏组,组,Fero,成员,小游戏设计与讲解,,
布景组,组,Fero,负责人,布景统筹;布景制作,美术部;物流部,
布景组,组,咩咩,成员,布景设计,,
布景组,组,Abi,成员,布景制作,,
布景组,组,蜀山,成员,布景支援,,
社区运营,组,夜灵,负责人,英文社区运营,,
Staff管理+后勤+PM,组,早苗,负责人,Staff规划招募培训;合同报酬;后勤采购;PM,法务部,
AA,组,蜀山,负责人,邀请招募;审核联系,法务部,Artist Alley`;

const DEFAULT_TASKS_CSV = `ID,部门,分类,任务,负责人,前置任务,截止日期,状态,备注
T01,美术部,KV,确认初步KV设计草图,小火,,2026-07-15,已完成,
T02,美术部,KV,对接KV设计+签合同,小火,T01,2026-08-15,已完成,request法务协助
T03,美术部,KV,完成KV设计,小火,T02,2026-10-30,进行中,
T04,美术部,设计,设计+下单场贩物料,小火,T03,2026-12-01,未开始,立牌 通行证 吧唧 等
T05,美术部,设计,设计+下单随票内容,小火,T03,2026-11-15,未开始,门票; 场刊; 纸袋; 手环/吊牌; 普票赠品; VIP赠品; 面具; 等
T06,美术部,设计,完成其他部门request任务,小火,,,未开始,小游戏奖品; 舞台小游戏奖品; 一番赏; 主视觉布景; CosplayLineUp; 宣发用素材; 网站设计; 购物网站设计; 志愿者纪念品; 志愿者工牌; 等
T07,策划部,主题全场,设计主题沉浸活动背景文案/互动,Fero;全员,,2026-10-01,进行中,包括完整剧情 谜题 互动体验完整流程
T111,策划部,主题全场,全场布景 - 完成设计方案,Fero;全员,T07,2026-10-01,未开始,包括全场 - 入场 主视觉区域 官COS 等 可根据设计增加布景内容; 不包括小游戏摊位 舞台; 设计+制作/下单主题所需道具/布景; 布景企划
T112,策划部,主题全场,研发背景板统一Solution,Fero;全员,T111,2026-10-01,未开始,
T08,策划部,主题全场,大型布景 - Placeholder1 - 博士尸体?,Fero;全员,T111;T112,2026-11-01,未开始,
T113,策划部,主题全场,大型布景 - Placeholder2 - 狼头?,Fero;全员,T111;T112,2026-12-01,未开始,
T114,策划部,主题全场,大型布景 - Placeholder3 - 武器库?,Fero;全员,T111;T112,2027-01-01,未开始,原表日期1/1/2026，已确认年份应为2027年
T115,策划部,主题全场,大型布景 - Placeholder4 - 蓝门?,Fero;全员,T111;T112,2027-02-01,未开始,原表日期2/1/2026，已确认年份应为2027年
T116,策划部,主题全场,大型布景 - Placeholder5 - 柱子?,Fero;全员,T111;T112,2027-03-01,未开始,原表日期3/1/2026，已确认年份应为2027年
T117,策划部,主题全场,大型布景 - Placeholder6 - 舞会圆桌?,Fero;全员,T111;T112,2027-03-01,未开始,原表日期3/1/2026，已确认年份应为2027年
T118,策划部,主题全场,完成角色等身立牌制作,Fero;全员,T111;T112,2027-02-01,未开始,原表日期2/1/2026，已确认年份应为2027年
T10,策划部,主题全场,调研+制作/下单无人摊位,Fero;全员,T07,2027-01-01,未开始,布景COS角 抓娃娃机 拍照相框等
T119,策划部,主题全场,无人摊位 - Placeholder1 - 拼豆墙?,Fero;全员,T10,2027-03-01,未开始,原表日期3/1/2026，已确认年份应为2027年
T120,策划部,主题全场,无人摊位 - Placeholder2 - 无料展示墙?,Fero;全员,T10,2027-03-01,未开始,原表日期3/1/2026，已确认年份应为2027年
T11,策划部,主题全场,制作视觉布景指导+预演/会议沟通传达,Fero;全员,T08;T09;T10;T113;T114;T115;T116;T117;T118;T119;T120,2027-03-19,未开始,提前搭建/Visualize所有布景 ; 分组行动 每组Leader与member开会确认视觉以及执行方案
T09,策划部,COS区,设计+制作/下单所需道具/布景,咩咩,T07,2026-12-01,未开始,负责设计/下单
T12,策划部,舞台小游戏,舞1-设计活动及相关美术,蜀山,,2026-09-15,未开始,有需要request美术部/物流部/布景组
T13,策划部,舞台小游戏,舞1-设计+制作/下单游戏道具,蜀山,T12,2026-09-22,未开始,
T14,策划部,舞台小游戏,舞2-设计活动及相关美术,蜀山,,2026-09-29,未开始,
T15,策划部,舞台小游戏,舞2-设计+制作/下单游戏道具,蜀山,T14,2026-10-06,未开始,
T16,策划部,舞台小游戏,舞3-设计活动及相关美术,蜀山,,2026-10-13,未开始,
T17,策划部,舞台小游戏,舞3-设计+制作/下单游戏道具,蜀山,T16,2026-10-20,未开始,
T18,策划部,舞台小游戏,设计+下单奖品,蜀山,,2027-01-01,已完成,"8/7: 已买5/6, 差缄默德克萨斯 遗君手办等到货; 9/7: 海运到货"
T19,策划部,舞台小游戏,安排舞台时间轴,蜀山,T17,2027-02-01,未开始,与舞台部合作拟定
T20,策划部,舞台小游戏,准备同主持人讲解内容,蜀山,T19,2027-03-01,未开始,
T21,策划部,互动小游戏,摊1-设计摊位活动+相关美术/布景+讲解,蜀山,,2026-11-03,未开始,有需要request美术部/布景部/物流部
T22,策划部,互动小游戏,摊1-设计+制作/下单游戏道具,蜀山,T21,2026-11-10,未开始,
T23,策划部,互动小游戏,摊2-设计摊位活动+相关美术/布景+讲解,蜀山,,2026-11-17,未开始,
T24,策划部,互动小游戏,摊2-设计+制作/下单游戏道具,蜀山,T23,2026-11-24,未开始,
T25,策划部,互动小游戏,摊3-设计摊位活动+相关美术/布景+讲解,蜀山,,2026-12-01,未开始,
T26,策划部,互动小游戏,摊3-设计+制作/下单游戏道具,蜀山,T25,2026-12-08,未开始,
T27,策划部,互动小游戏,摊4-设计摊位活动+相关美术/布景+讲解,蜀山,,2026-12-15,未开始,
T28,策划部,互动小游戏,摊4-设计+制作/下单游戏道具,蜀山,T27,2026-12-22,未开始,
T29,策划部,互动小游戏,摊5 - 设计摊位活动+相关美术设计/布景,蜀山,,2026-12-29,未开始,
T30,策划部,互动小游戏,摊5-设计+制作/下单游戏道具,蜀山,T29,2027-01-05,未开始,
T31,策划部,互动小游戏,设计+下单一番赏,蜀山,,2027-01-12,未开始,
T32,宣发部,SNS,0宣 - KV - 角色1,咩咩,T03,2026-11-06,未开始,流程:; KV/宣传图/视频 - 宣发部request美术部制作素材/成图/视频; 谷子图/视频 - 宣发部request物流部拍摄图/视频; 文案 - 宣发部request策划部出文案; 中英双语 同步小红书/ins/tt?; 宣发部执行发送+跟进+回复(包括收集反馈/效果/统计数据/改进); 周宣可选内容:; 摊主招募; 舞台预告 - 乐队/乐曲; 物料预告; Cosplaylineup模板; 痛车参展预告; 倒计时; 停车指导; 场地指导; 场宣传照片; 布景道具视频过程; *志愿者招募-不用招募会分流买票
T121,宣发部,SNS,周宣,咩咩,T32,2026-11-13,未开始,
T34,宣发部,SNS,周宣,咩咩,T32,2026-11-20,未开始,
T35,宣发部,SNS,周宣,咩咩,T32,2026-11-27,未开始,
T36,宣发部,SNS,1宣 - KV - 角色2,咩咩,T32,2026-12-04,未开始,
T33,宣发部,SNS,开票 - 时间TBD,咩咩,T36;T59,2026-12-04,未开始,开票时间TBD，暂按原表2026-12-04排期
T37,宣发部,SNS,周宣,咩咩,T36,2026-12-11,未开始,
T38,宣发部,SNS,周宣,咩咩,T36,2026-12-18,未开始,
T39,宣发部,SNS,周宣,咩咩,T36,2026-12-25,未开始,
T40,宣发部,SNS,2宣 - KV - 角色3,咩咩,T36,2027-01-01,未开始,
T41,宣发部,SNS,周宣,咩咩,T40,2027-01-08,未开始,
T42,宣发部,SNS,周宣,咩咩,T40,2027-01-15,未开始,
T43,宣发部,SNS,周宣,咩咩,T40,2027-01-22,未开始,
T44,宣发部,SNS,3宣 - KV - 角色4,咩咩,T40,2027-01-29,未开始,
T45,宣发部,SNS,周宣,咩咩,T44,2027-02-05,未开始,
T46,宣发部,SNS,周宣,咩咩,T44,2027-02-12,未开始,
T47,宣发部,SNS,周宣,咩咩,T44,2027-02-19,未开始,
T48,宣发部,SNS,4宣 - KV - 角色5,咩咩,T44,2027-02-26,未开始,
T49,宣发部,SNS,周宣,咩咩,T48,2027-03-05,未开始,
T50,宣发部,SNS,周宣,咩咩,T48,2027-03-12,未开始,
T51,宣发部,SNS,终宣 - 全体,咩咩,T48,2027-03-19,未开始,
T52,宣发部,SNS,周宣,咩咩,T51,2027-03-26,未开始,
T122,宣发部,网站更新,po去年的活动照片,盐宝,,2026-11-01,未开始,
T123,宣发部,网站更新,支持活动request,盐宝,,,未开始,策划部request网站更新
T53,宣发部,网站更新,0宣 - 更新网站,盐宝,T32,2026-11-06,未开始,"素材流程同上 复用SNS素材 同步01234终宣更新网站; 文案可负责人自己写, 亦可request策划部, 宣发部Leader同意即可; 网站更新Idea由负责人发起, 宣发部美术部Leader同意即可"
T54,宣发部,网站更新,1宣 - 更新网站,盐宝,T36,2026-12-04,未开始,
T55,宣发部,网站更新,2宣 - 更新网站,盐宝,T40,2027-01-01,未开始,
T56,宣发部,网站更新,3宣 - 更新网站,盐宝,T44,2027-01-29,未开始,
T57,宣发部,网站更新,4宣 - 更新网站,盐宝,T48,2027-02-26,未开始,
T58,宣发部,网站更新,终宣 - 更新网站,盐宝,T51,2027-03-19,未开始,
T59,宣发部,网站更新,设计+上架购票页面,盐宝,T53,2026-12-04,未开始,
T60,宣发部,网站更新,设计+上架招募活动页面,盐宝,,2027-01-01,未开始,
T124,宣发部,跑展,Arknights Cupsleeve,全员,,2026-09-12,未开始,"A sack of Potatoes 1-5 PM; 929 Story Road, San Jose, CA 95122"
T61,宣发部,跑展,LA Arknights Only,全员,,2026-09-26,未开始,宣传/Booth 发放无料/现场卖票送谷子折扣抵扣券; 集邮发放无料; 看人员availability 争取让可爱的女孩子发!
T62,宣发部,跑展,Anime Destiny,全员,,2026-10-31,未开始,
T63,宣发部,跑展,ALA,全员,,2027-01-07,未开始,1/7/27~1/10/27
T64,宣发部,跑展,Carrier Con,全员,,2027-03-20,未开始,3/20/27~3/21/27
T65,宣发部,跑展,Anime Otapia,全员,,,未开始,Jan 2027 具体日期待定
T66,宣发部,运营,运营英文社区,夜灵,,,未开始,
T67,宣发部,运营,运营中文社区,全员,,,未开始,
T72,法务部,预算,确定初始预算,光,T71,2026-09-04,已完成,场地确定之后全体开会决定 2.0-预算表
T73,法务部,预算,控制审批预算,光,T72,,未开始,严格管控!
T71,法务部,场地前期,调研+决策场地,早苗,,2026-09-01,已完成,"收集信息, 发信联系, 看场地, 发材料, 看预算; 全体开会Trade Off Analysis, 投票决定; 2.0-场地"
T74,法务部,场地,签订场地合同,光,T71,2026-09-01,已完成,request法务
T75,法务部,场地,买场地保险,光,T74,2027-02-01,未开始,如果包括在合同里就不需要单独
T76,法务部,场地,签场地安保合约,光,T74,2027-02-01,未开始,如果包括在合同里就不需要单独
T77,法务部,场地,租赁+搬运场地桌椅设备,光,T74,2027-02-01,未开始,如果包括在合同里就不需要单独
T78,法务部,场地,规划场地动线,光,T74,2027-01-01,未开始,"负责人牵头和其他部门沟通, 最后落地到图纸"
T79,法务部,场地,确认场地布置,光,T78,2027-01-01,未开始,负责人牵头和策划/布景组确认
T80,法务部,场地,绘制场地布置详细图纸,光,T79,2027-03-01,未开始,负责人像牛一样球球脆脆:P
T81,法务部,场地,绘制场地路线引导/停车,光,T78,2027-03-01,未开始,负责人像牛一样球球脆脆:P
T82,法务部,场地,购置场地规划需要材料,光,T80,2027-03-01,未开始,"负责人找企鹅下单胶带 警戒线, 画好示意图"
T83,法务部,贩售,更新售卖网站,光,,,未开始,盐宝能帮忙吗?; 日期待定
T84,法务部,贩售,准备官摊收银设备/Catalog/价格/流程,光,,2027-03-15,未开始,收银组(4人)负责当天搭建/售卖
T85,合作,寄售,联系寄售,全员,,2027-03-01,未开始,全员reachout（红白小火可能有人脉）; 光去和所有人谈分成; 上次脆脆做的剩的拿过来; 争取能抓到一些reliable的人来帮忙; 争取国内画师出海贩售
T87,合作,合作/赞助,拟定合作计划与对接,光,T86,2027-03-15,未开始,
T86,合作,合作/赞助,联系可能的赞助/合作(物料厂商),光,,2027-03-15,未开始,卡牌店/谷子店
T88,合作,合作/赞助,联动活动/摊位参展(Anime Otapia),光,,2027-03-15,未开始,联系ONLY 不包括参展 参展找宣发部门
T89,合作,AA,制定邀请招募,蜀山,,2026-11-01,未开始,制作问卷/表格 可request宣发
T90,合作,AA,审核+联系摊位,蜀山,T89,2027-02-01,未开始,
T91,合作,AA,签订摊位合同+收款,蜀山,T90,2027-02-01,未开始,request法务部
T92,合作,官Coser,联系Coser嘉宾,咩咩,,2026-10-01,未开始,已经confirm
T125,合作,官Coser,联系Guest嘉宾,咩咩,,2026-11-01,未开始,跳舞来吗?
T93,合作,官Coser,购买需要服装道具,咩咩,T92,2026-12-01,未开始,"口径是: 自己准备, 可以报销一部分, 报销的部分100刀"
T94,合作,官Coser,联系Coser嘉宾后勤,咩咩,T92,,未开始,
T95,舞台部,舞台,发布招募舞台节目,光,,2026-11-01,未开始,request宣发; 原表11/1/2027疑为笔误，沿用原任务日期2026-11-01
T96,舞台部,舞台,审核舞台节目及发放审批邮件,光,T95,2027-03-01,未开始,可以提前陆续发offer 确保可以提前排练
T97,舞台部,舞台,规划舞台场地+AV需求,光,T74,2026-10-01,未开始,原表10/1/2027疑为笔误，沿用原任务日期2026-10-01
T98,舞台部,舞台,制作舞台PPT,光,T96,2027-03-15,未开始,会变成其他人的(x
T99,舞台部,舞台,租赁+运送舞台设备,光,T97,2027-03-27,未开始,
T100,舞台部,舞台,调试舞台音响,光,T99,2027-03-27,未开始,
T101,物流部,物流,物料下单与打样,早苗,,,未开始,各个组request物流组
T102,物流部,物流,确认/清点/存储/运送/监管物料运输,早苗,T101,,未开始,
T103,物流部,物流,物料检查分发打包,早苗,T101,2027-03-19,未开始,
T104,物流部,物流,场地物料运输(uhaul),早苗,T103,2027-03-27,未开始,
T105,Staff后勤,Staff,规划现场需要的人员+预算,早苗,,2026-07-25,已完成,2.0-Staff安排/预算
T106,Staff后勤,Staff,签订Staff合同+发放报酬,早苗,T105,2027-01-01,未开始,找法务部
T107,Staff后勤,Staff,联系Staff并培训,早苗,T105,2027-03-19,未开始,
T108,Staff后勤,后勤,购买场地需要的零食饮料,早苗,,2027-03-24,未开始,
T109,Staff后勤,后勤,购买需要的医疗用品,早苗,,2027-03-24,未开始,
T110,Staff后勤,后勤,预定员工午餐,早苗,,2027-03-24,未开始,`;

const HEADERS  = ['部门','层级','人员','角色','职责','依赖部门','备注'];
const THEADERS = ['ID','部门','分类','任务','负责人','前置任务','截止日期','状态','备注'];
const STATUSES = ['未开始','进行中','已完成'];
const ST_COLOR = { '未开始':'var(--st0)', '进行中':'var(--st1)', '已完成':'var(--st2)' };
const PALETTE = ['#FFD90F','#4DA3FF','#FF8A2A','#7BE0A5','#E07BD4','#8FA6FF','#FF6B6B','#5FD4D9','#C9E06B','#B98CFF','#F0A6C0','#9CB5C9'];

let listSort = 'id';   // 'id' | 'dueAsc' | 'dueDesc'

function parseDue(s){
  s = String(s || '').trim().replace(/\//g, '-');
  if(!/^\d{4}-\d{1,2}-\d{1,2}$/.test(s)) return null;
  const d = new Date(s + 'T00:00:00');
  return isNaN(d) ? null : d;
}
function todayZero(){ const d = new Date(); d.setHours(0,0,0,0); return d; }
function isOverdue(t){
  const d = parseDue(t['截止日期']);
  return !!d && d < todayZero() && t['状态'] !== '已完成';
}

let rows = [];      // 成员
let tasks = [];     // 任务
let handles = { data: null, tasks: null };
let selDept = null, selPerson = null, selTask = null;
let filters = { person: null, status: null, dept: '' };
let curView = 'map';

/* ================= CSV utils ================= */
function parseRaw(text){
  text = text.replace(/^\uFEFF/, '');
  const out = []; let row = [], cur = '', q = false;
  for(let i = 0; i < text.length; i++){
    const c = text[i];
    if(q){
      if(c === '"'){ if(text[i+1] === '"'){ cur += '"'; i++; } else q = false; }
      else cur += c;
    }else{
      if(c === '"') q = true;
      else if(c === ','){ row.push(cur); cur = ''; }
      else if(c === '\n' || c === '\r'){
        if(c === '\r' && text[i+1] === '\n') i++;
        row.push(cur); cur = '';
        if(row.some(v => v.trim() !== '')) out.push(row);
        row = [];
      }
      else cur += c;
    }
  }
  row.push(cur);
  if(row.some(v => v.trim() !== '')) out.push(row);
  return out;
}
function mapByHeader(raw, headers, requiredField){
  if(!raw.length) return [];
  const head = raw[0].map(h => h.trim());
  const idx = headers.map(h => head.indexOf(h));
  return raw.slice(1).map(r => {
    const o = {};
    headers.forEach((h, j) => o[h] = (idx[j] >= 0 ? (r[idx[j]] || '') : '').trim());
    return o;
  }).filter(o => o[requiredField]);
}
function isTasksCSV(raw){
  const head = (raw[0] || []).map(h => h.trim());
  return head.includes('ID') && head.includes('任务');
}
function csvCell(v){ v = String(v ?? ''); return /[",\n\r]/.test(v) ? '"' + v.replace(/"/g,'""') + '"' : v; }
function serialize(list, headers){
  return headers.join(',') + '\n' + list.map(r => headers.map(h => csvCell(r[h])).join(',')).join('\n') + '\n';
}
function splitList(s){ return String(s || '').split(/[;；]/).map(x => x.trim()).filter(Boolean); }
function esc(s){ return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ================= model helpers ================= */
function buildModel(){
  const depts = new Map();
  rows.forEach(r => {
    const d = r['部门'];
    if(!depts.has(d)) depts.set(d, { name: d, tier: (r['层级'] === '组' ? '组' : '部门'), people: [], deps: new Set() });
    const D = depts.get(d);
    D.people.push(r);
    splitList(r['依赖部门']).forEach(x => D.deps.add(x));
  });
  return depts;
}
const PERSON_ORDER = ['小火','Fero','咩咩','光','早苗','蜀山'];
function sortPersons(arr){
  return arr.slice().sort((a, b) => {
    const ia = PERSON_ORDER.indexOf(a), ib = PERSON_ORDER.indexOf(b);
    if(ia >= 0 && ib >= 0) return ia - ib;
    if(ia >= 0) return -1;
    if(ib >= 0) return 1;
    return arr.indexOf(a) - arr.indexOf(b);   // 其他人保持出现顺序
  });
}
function allPersons(){
  const s = [];
  rows.forEach(r => { if(r['人员'] && !s.includes(r['人员'])) s.push(r['人员']); });
  tasks.forEach(t => splitList(t['负责人']).forEach(p => { if(!s.includes(p)) s.push(p); }));
  return sortPersons(s);
}
const PERSON_COLORS = {
  '小火':'#FF6B6B',   // 红
  '咩咩':'#FF8A2A',   // 橙
  '光':'#FFD90F',     // 黄
  '早苗':'#35D07F',   // 绿
  'Fero':'#4DA3FF',   // 蓝
  '蜀山':'#B98CFF',   // 紫
};
const FALLBACK_COLORS = ['#5FD4D9','#E07BD4','#C9E06B','#8FA6FF','#F0A6C0','#9CB5C9','#D9B38C'];
function personColor(name){
  if(PERSON_COLORS[name]) return PERSON_COLORS[name];
  const others = allPersons().filter(n => !PERSON_COLORS[n]);
  return FALLBACK_COLORS[others.indexOf(name) % FALLBACK_COLORS.length] || '#888';
}
function taskById(id){ return tasks.find(t => t['ID'] === id); }
function downstreamOf(id){ return tasks.filter(t => splitList(t['前置任务']).includes(id)); }
function nextTaskId(){
  let m = 0;
  tasks.forEach(t => { const n = /^T(\d+)$/.exec(t['ID'] || ''); if(n) m = Math.max(m, +n[1]); });
  return 'T' + String(m + 1).padStart(2, '0');
}

/* ================= tabs ================= */
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});
function switchView(v){
  curView = v;
  document.querySelectorAll('.tab').forEach(b => b.classList.toggle('on', b.dataset.view === v));
  document.querySelectorAll('.view').forEach(s => s.classList.toggle('on', s.id === 'view-' + v));
  if(v === 'map'){ render(); }
  if(v === 'tasks'){ renderTaskBoard(); }
  if(v === 'list'){ renderList(); }
  if(v === 'timeline'){ renderTimeline(); }
}

/* ================================================================
   VIEW 1 · 部门分工导图
================================================================ */
const grid = document.getElementById('grid');
const roster = document.getElementById('roster');

function render(){
  const depts = buildModel();
  grid.innerHTML = '';
  const gDepts = document.createElement('div'); gDepts.className = 'g-depts';
  const sep = document.createElement('div'); sep.className = 'grid-sep';
  sep.textContent = 'TEAMS // 机动小组';
  const gGroups = document.createElement('div'); gGroups.className = 'g-groups';
  grid.appendChild(gDepts);
  let si = 0, ti = 0, hasGrp = false;
  depts.forEach(D => {
    const isGrp = D.tier === '组';
    const code = isGrp ? 'TEAM.' + String(++ti).padStart(2,'0') : 'SEC.' + String(++si).padStart(2,'0');
    const card = document.createElement('div');
    card.className = 'card' + (isGrp ? ' grp' : ''); card.dataset.dept = D.name; card.tabIndex = 0;
    card.setAttribute('role', 'button');
    const depTags = [...D.deps].map(d => `<span class="dep-tag">${esc(d)}</span>`).join('');
    card.innerHTML = `
      <div class="card-head">
        <span class="dept-code">${code}</span>
        <span class="dept-name">${esc(D.name)}</span>
      </div>
      ${depTags ? `<div class="dep-tags">${depTags}</div>` : ''}
      <div class="members">
        ${D.people.map(p => `
          <div class="member" style="--pc:${personColor(p['人员'])}">
            <div class="row1">
              <span class="name" data-person="${esc(p['人员'])}">${esc(p['人员'])}</span>
              <span class="role ${p['角色']==='负责人' ? 'lead' : ''}">${p['角色']==='负责人' ? 'LEAD' : 'MEMBER'}</span>
            </div>
            <div class="duties">${splitList(p['职责']).map(d => `<span class="duty">${esc(d)}</span>`).join('')}</div>
          </div>`).join('')}
      </div>`;
    card.addEventListener('click', e => {
      const pn = e.target.dataset && e.target.dataset.person;
      if(pn){ selectPerson(selPerson === pn ? null : pn); e.stopPropagation(); return; }
      selectDept(selDept === D.name ? null : D.name); e.stopPropagation();
    });
    card.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); selectDept(selDept === D.name ? null : D.name); }
    });
    if(isGrp){
      if(!hasGrp){ grid.appendChild(sep); grid.appendChild(gGroups); hasGrp = true; }
      gGroups.appendChild(card);
    }else{
      gDepts.appendChild(card);
    }
  });

  // roster（含任务数，点「任务 ↗」跳转到列表并按人筛选）
  const people = new Map();
  rows.forEach(r => {
    if(!r['人员']) return;
    if(!people.has(r['人员'])) people.set(r['人员'], []);
    people.get(r['人员']).push(r);
  });
  roster.innerHTML = '';
  sortPersons([...people.keys()]).forEach(name => {
    const list = people.get(name);
    const myTasks = tasks.filter(t => splitList(t['负责人']).includes(name));
    const done = myTasks.filter(t => t['状态'] === '已完成').length;
    const el = document.createElement('div');
    el.className = 'person'; el.style.setProperty('--pc', personColor(name));
    el.dataset.person = name;
    el.innerHTML = `<div class="p-name">${esc(name)}</div>
      <div class="p-depts">${list.map(r => `<b>${esc(r['部门'])}</b> · ${esc(splitList(r['职责']).join('、'))}`).join('<br>')}</div>
      ${myTasks.length ? `<div class="p-task-link" data-goto="${esc(name)}">TASKS ${done}/${myTasks.length} ↗</div>` : ''}`;
    el.addEventListener('click', e => {
      const g = e.target.dataset && e.target.dataset.goto;
      if(g){ filters.person = g; filters.status = null; switchView('list'); e.stopPropagation(); return; }
      selectPerson(selPerson === name ? null : name);
    });
    roster.appendChild(el);
  });

  applyHighlight();
  requestAnimationFrame(drawWires);
}

function selectDept(name){ selDept = name; selPerson = null; applyHighlight(); drawWires(); }
function selectPerson(name){ selPerson = name; selDept = null; applyHighlight(); drawWires(); }
document.getElementById('boardWrap').addEventListener('click', () => {
  selDept = null; selPerson = null; applyHighlight(); drawWires();
});

function applyHighlight(){
  const depts = buildModel();
  const cards = [...grid.querySelectorAll(".card")];
  cards.forEach(c => c.classList.remove('sel','dep-out','dep-in','faded','person-hit'));
  document.querySelectorAll('.person').forEach(p => p.classList.toggle('sel', p.dataset.person === selPerson));
  if(selDept){
    const D = depts.get(selDept);
    const incoming = new Set();
    depts.forEach(x => { if(x.deps.has(selDept)) incoming.add(x.name); });
    cards.forEach(c => {
      const n = c.dataset.dept;
      if(n === selDept) c.classList.add('sel');
      else if(D && D.deps.has(n)) c.classList.add('dep-out');
      else if(incoming.has(n)) c.classList.add('dep-in');
      else c.classList.add('faded');
    });
  }else if(selPerson){
    cards.forEach(c => {
      const hit = rows.some(r => r['部门'] === c.dataset.dept && r['人员'] === selPerson);
      c.classList.toggle('person-hit', hit);
      c.classList.toggle('faded', !hit);
    });
  }
}

/* ---- dept wires ---- */
const wireG = document.getElementById('wireG');
const board = document.getElementById('board');
const svg = document.getElementById('wires');

function edgePoint(rect, tx, ty){
  const cx = rect.x + rect.w/2, cy = rect.y + rect.h/2;
  const dx = tx - cx, dy = ty - cy;
  if(dx === 0 && dy === 0) return { x: cx, y: cy };
  const sx = (rect.w/2) / Math.abs(dx || 1e-9), sy = (rect.h/2) / Math.abs(dy || 1e-9);
  const s = Math.min(sx, sy);
  return { x: cx + dx*s, y: cy + dy*s };
}
function curvePath(p1, p2){
  const mx = (p1.x + p2.x)/2, my = (p1.y + p2.y)/2;
  const bend = Math.min(46, Math.hypot(p2.x - p1.x, p2.y - p1.y)/4);
  const nx = -(p2.y - p1.y), ny = (p2.x - p1.x), nl = Math.hypot(nx, ny) || 1;
  return `M${p1.x},${p1.y} Q${mx + nx/nl*bend},${my + ny/nl*bend} ${p2.x},${p2.y}`;
}
function drawWires(){
  const bw = board.getBoundingClientRect();
  svg.setAttribute('width', board.scrollWidth);
  svg.setAttribute('height', board.scrollHeight);
  const pos = {};
  [...grid.querySelectorAll(".card")].forEach(c => {
    const r = c.getBoundingClientRect();
    pos[c.dataset.dept] = { x: r.left - bw.left, y: r.top - bw.top, w: r.width, h: r.height };
  });
  const depts = buildModel();
  let html = '';
  depts.forEach(D => {
    D.deps.forEach(t => {
      const a = pos[D.name], b = pos[t];
      if(!a || !b) return;
      const ac = { x: a.x + a.w/2, y: a.y + a.h/2 }, bc = { x: b.x + b.w/2, y: b.y + b.h/2 };
      const p1 = edgePoint(a, bc.x, bc.y), p2 = edgePoint(b, ac.x, ac.y);
      let stroke = '#3a3f2a', w = 1.2, op = .55, marker = 'arrDim';
      if(selDept){
        if(D.name === selDept){ stroke = '#FFD90F'; w = 2.2; op = 1; marker = 'arrY'; }
        else if(t === selDept){ stroke = '#4DA3FF'; w = 2; op = .95; marker = 'arrB'; }
        else op = .10;
      }else if(selPerson){ op = .12; }
      html += `<path d="${curvePath(p1,p2)}" fill="none" stroke="${stroke}" stroke-width="${w}" opacity="${op}" marker-end="url(#${marker})"/>`;
    });
  });
  wireG.innerHTML = html;
}

/* ================================================================
   VIEW 2 · 任务导图（任务级依赖）
================================================================ */
const tgrid = document.getElementById('tgrid');
const twireG = document.getElementById('twireG');
const taskBoard = document.getElementById('taskBoard');
const tsvg = document.getElementById('twires');

function renderTaskBoard(){
  // 部门顺序：跟随成员表，任务表里多出的部门排后面
  const order = [];
  rows.forEach(r => { if(!order.includes(r['部门'])) order.push(r['部门']); });
  tasks.forEach(t => { if(!order.includes(t['部门'])) order.push(t['部门']); });

  tgrid.innerHTML = '';
  let i = 0;
  order.forEach(dept => {
    const list = tasks.filter(t => t['部门'] === dept);
    if(!list.length) return;
    i++;
    const groups = new Map();
    list.forEach(t => {
      const g = t['分类'] || '其他';
      if(!groups.has(g)) groups.set(g, []);
      groups.get(g).push(t);
    });
    const done = list.filter(t => t['状态'] === '已完成').length;
    const card = document.createElement('div');
    card.className = 'tcard';
    let inner = `<div class="tcard-head">
      <span class="dept-code">SEC.${String(i).padStart(2,'0')}</span>
      <span class="dept-name">${esc(dept)}</span>
      <span class="prog"><b>${done}</b>/${list.length}</span>
    </div>`;
    groups.forEach((ts, g) => {
      inner += `<div class="tgroup"><div class="tgroup-label">${esc(g)}</div>` +
        ts.map(t => `
          <div class="task" data-tid="${esc(t['ID'])}" style="--stc:${ST_COLOR[t['状态']] || 'var(--st0)'}" tabindex="0" role="button">
            <div class="t-r1">
              <span class="t-dot"></span>
              <span class="t-name">${esc(t['任务'])}</span>
              <span class="t-id">${esc(t['ID'])}</span>
            </div>
            <div class="t-r2">
              <span class="t-who">${splitList(t['负责人']).map(esc).join(' · ') || '—'}</span>
            </div>
          </div>`).join('') + `</div>`;
    });
    card.innerHTML = inner;
    tgrid.appendChild(card);
  });

  tgrid.querySelectorAll('.task').forEach(el => {
    el.addEventListener('click', e => {
      const id = el.dataset.tid;
      selTask = (selTask === id) ? null : id;
      applyTaskHighlight(); drawTaskWires();
      e.stopPropagation();
    });
    el.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); el.click(); }
    });
  });

  applyTaskHighlight();
  requestAnimationFrame(drawTaskWires);
}
document.getElementById('taskWrap').addEventListener('click', () => {
  selTask = null; applyTaskHighlight(); drawTaskWires();
});

function applyTaskHighlight(){
  const els = tgrid.querySelectorAll('.task');
  els.forEach(el => el.classList.remove('sel','up','down','faded'));
  if(!selTask) return;
  const t = taskById(selTask);
  const ups = new Set(t ? splitList(t['前置任务']) : []);
  const downs = new Set(downstreamOf(selTask).map(x => x['ID']));
  els.forEach(el => {
    const id = el.dataset.tid;
    if(id === selTask) el.classList.add('sel');
    else if(ups.has(id)) el.classList.add('up');
    else if(downs.has(id)) el.classList.add('down');
    else el.classList.add('faded');
  });
}

function drawTaskWires(){
  const bw = taskBoard.getBoundingClientRect();
  tsvg.setAttribute('width', taskBoard.scrollWidth);
  tsvg.setAttribute('height', taskBoard.scrollHeight);
  const pos = {};
  tgrid.querySelectorAll('.task').forEach(el => {
    const r = el.getBoundingClientRect();
    pos[el.dataset.tid] = { x: r.left - bw.left, y: r.top - bw.top, w: r.width, h: r.height };
  });
  let html = '';
  tasks.forEach(t => {
    splitList(t['前置任务']).forEach(pre => {
      const a = pos[pre], b = pos[t['ID']];       // 方向：前置 → 任务
      if(!a || !b) return;
      const ac = { x: a.x + a.w/2, y: a.y + a.h/2 }, bc = { x: b.x + b.w/2, y: b.y + b.h/2 };
      const p1 = edgePoint(a, bc.x, bc.y), p2 = edgePoint(b, ac.x, ac.y);
      let stroke = '#3a3f2a', w = 1.1, op = .5, marker = 'tarrDim';
      if(selTask){
        if(t['ID'] === selTask){ stroke = '#FFD90F'; w = 2.2; op = 1; marker = 'tarrY'; }        // 我的前置 → 我
        else if(pre === selTask){ stroke = '#4DA3FF'; w = 2; op = .95; marker = 'tarrB'; }        // 我 → 等我的下游
        else op = .07;
      }
      html += `<path d="${curvePath(p1,p2)}" fill="none" stroke="${stroke}" stroke-width="${w}" opacity="${op}" marker-end="url(#${marker})"/>`;
    });
  });
  twireG.innerHTML = html;
}

/* ================================================================
   VIEW 3 · 任务列表（可编辑 + 筛选）
================================================================ */
const taskRows = document.getElementById('taskRows');
const fPersons = document.getElementById('fPersons');
const fStatus = document.getElementById('fStatus');
const fDept = document.getElementById('fDept');
const fSummary = document.getElementById('fSummary');

function renderFilters(){
  // 人员 chips
  fPersons.innerHTML = '';
  const all = document.createElement('button');
  all.className = 'chip' + (filters.person === null ? ' on' : '');
  all.textContent = '全部';
  all.addEventListener('click', () => { filters.person = null; renderList(); });
  fPersons.appendChild(all);
  allPersons().forEach(p => {
    const c = document.createElement('button');
    c.className = 'chip' + (filters.person === p ? ' on' : '');
    c.innerHTML = `<span class="cdot" style="background:${personColor(p)}"></span>${esc(p)}`;
    c.addEventListener('click', () => { filters.person = (filters.person === p ? null : p); renderList(); });
    fPersons.appendChild(c);
  });
  // 状态 chips
  fStatus.innerHTML = '';
  const sAll = document.createElement('button');
  sAll.className = 'chip' + (filters.status === null ? ' on' : '');
  sAll.textContent = '全部';
  sAll.addEventListener('click', () => { filters.status = null; renderList(); });
  fStatus.appendChild(sAll);
  STATUSES.forEach((s, i) => {
    const c = document.createElement('button');
    c.className = 'chip st' + i + (filters.status === s ? ' on' : '');
    c.innerHTML = `<span class="cdot" style="background:${ST_COLOR[s]}"></span>${s}`;
    c.addEventListener('click', () => { filters.status = (filters.status === s ? null : s); renderList(); });
    fStatus.appendChild(c);
  });
  // 部门下拉
  const order = [];
  rows.forEach(r => { if(!order.includes(r['部门'])) order.push(r['部门']); });
  tasks.forEach(t => { if(!order.includes(t['部门'])) order.push(t['部门']); });
  fDept.innerHTML = `<option value="">全部部门</option>` + order.map(d =>
    `<option value="${esc(d)}" ${filters.dept === d ? 'selected' : ''}>${esc(d)}</option>`).join('');
  // 排序 chips
  const fSort = document.getElementById('fSort');
  fSort.innerHTML = '';
  [['id','默认'],['dueAsc','截止 ↑'],['dueDesc','截止 ↓']].forEach(([k,label]) => {
    const c = document.createElement('button');
    c.className = 'chip' + (listSort === k ? ' on' : '');
    c.textContent = label;
    c.addEventListener('click', () => { listSort = k; renderList(); });
    fSort.appendChild(c);
  });
}
fDept.addEventListener('change', () => { filters.dept = fDept.value; renderList(); });
document.getElementById('btnClearFilter').addEventListener('click', () => {
  filters = { person: null, status: null, dept: '' }; renderList();
});

function taskVisible(t){
  if(filters.person && !splitList(t['负责人']).includes(filters.person)) return false;
  if(filters.status && t['状态'] !== filters.status) return false;
  if(filters.dept && t['部门'] !== filters.dept) return false;
  return true;
}

function sortedTasks(){
  if(listSort === 'id') return tasks.slice();
  const dir = listSort === 'dueAsc' ? 1 : -1;
  return tasks.slice().sort((a, b) => {
    const da = parseDue(a['截止日期']), db = parseDue(b['截止日期']);
    if(da && db) return (da - db) * dir;
    if(da) return -1;           // 有日期的排前面（无论升降序）
    if(db) return 1;
    return 0;
  });
}

function renderList(){
  renderFilters();
  taskRows.innerHTML = '';
  sortedTasks().forEach(t => taskRows.appendChild(listRow(t)));
  sizeTaskColumn();
  growAll(taskRows);
  updateSummary();
}

/* 任务列宽 = 最长任务文字宽度（下限翻倍到300，上限800，超出折行） */
const _measureCtx = document.createElement('canvas').getContext('2d');
function sizeTaskColumn(){
  _measureCtx.font = "12.5px 'Noto Sans SC',system-ui,sans-serif";
  let max = 0;
  tasks.forEach(t => { max = Math.max(max, _measureCtx.measureText(t['任务'] || '').width); });
  const base = window.matchMedia('(max-width:700px)').matches ? 180 : 300;
  const w = Math.min(800, Math.max(base, Math.ceil(max) + 32));
  const th = document.getElementById('thTask');
  if(th) th.style.width = w + 'px';
}
function autoGrow(ta){
  ta.style.height = 'auto';
  ta.style.height = ta.scrollHeight + 'px';
}
function growAll(scope){
  scope.querySelectorAll('textarea').forEach(autoGrow);
}

function stIndex(s){ const i = STATUSES.indexOf(s); return i < 0 ? 0 : i; }

function listRow(t){
  const tr = document.createElement('tr');
  tr.className = 'trow';
  const vis = taskVisible(t);
  if(!vis) tr.classList.add('hide');
  tr.style.borderLeftColor = ST_COLOR[t['状态']] || 'var(--st0)';

  const downs = downstreamOf(t['ID']);
  const preNames = splitList(t['前置任务']).map(id => {
    const x = taskById(id); return x ? `${id} ${x['任务']}` : id + ' ?';
  });

  tr.innerHTML = `
    <td><span class="st-badge s${stIndex(t['状态'])}" style="--stc:${ST_COLOR[t['状态']] || 'var(--st0)'}" title="点击切换状态"><i></i>${esc(t['状态'] || '未开始')}</span></td>
    <td class="tid">${esc(t['ID'])}</td>
    <td><input data-f="部门" value="${esc(t['部门'])}"></td>
    <td><input data-f="分类" value="${esc(t['分类'])}"></td>
    <td class="c-task"><textarea data-f="任务" rows="1">${esc(t['任务'])}</textarea></td>
    <td><input data-f="负责人" value="${esc(t['负责人'])}"></td>
    <td>
      <input data-f="前置任务" value="${esc(t['前置任务'])}">
      ${preNames.length ? `<div class="dep-hint">← <b>${preNames.map(esc).join('；')}</b></div>` : ''}
    </td>
    <td class="down-cell">${downs.length ? downs.map(d => esc(d['ID'] + ' ' + d['任务'])).join('<br>') : '<span style="color:var(--dim)">—</span>'}</td>
    <td><input type="date" data-f="截止日期" value="${esc(t['截止日期'] || '')}" class="${isOverdue(t) ? 'due-over' : ''}"></td>
    <td class="c-note"><textarea data-f="备注" rows="1" placeholder="…">${esc(t['备注'])}</textarea></td>
    <td><button class="row-del" title="删除任务">✕</button></td>`;

  // 状态点击循环
  tr.querySelector('.st-badge').addEventListener('click', () => {
    t['状态'] = STATUSES[(stIndex(t['状态']) + 1) % STATUSES.length];
    const nt = listRow(t); tr.replaceWith(nt);
    growAll(nt);
    updateSummary(); renderFilters();
  });
  // 字段编辑
  tr.querySelectorAll('input, textarea').forEach(inp => {
    inp.addEventListener('input', () => {
      t[inp.dataset.f] = inp.value;
      if(inp.tagName === 'TEXTAREA') autoGrow(inp);
    });
    // 前置任务/负责人改动后需要刷新依赖提示与筛选
    if(inp.tagName === 'INPUT'){
      inp.addEventListener('change', () => {
        t[inp.dataset.f] = inp.value.trim();
        renderList();
      });
    }else if(inp.dataset.f === '任务'){
      inp.addEventListener('change', () => renderList());
    }
  });
  tr.querySelector('.row-del').addEventListener('click', () => {
    if(!confirm(`删除任务 ${t['ID']} ${t['任务']}？`)) return;
    tasks = tasks.filter(x => x !== t);
    renderList();
  });
  return tr;
}

function updateSummary(){
  const visible = tasks.filter(taskVisible);
  const n0 = visible.filter(t => t['状态'] === '未开始').length;
  const n1 = visible.filter(t => t['状态'] === '进行中').length;
  const n2 = visible.filter(t => t['状态'] === '已完成').length;
  fSummary.innerHTML = `显示 <b>${visible.length}</b>/${tasks.length} · 未开始 <b>${n0}</b> · 进行中 <b>${n1}</b> · 已完成 <b>${n2}</b>`;
}

document.getElementById('btnAddTask').addEventListener('click', () => {
  tasks.push({
    'ID': nextTaskId(),
    '部门': filters.dept || '',
    '分类': '',
    '任务': '',
    '负责人': filters.person || '',
    '前置任务': '',
    '截止日期': '',
    '状态': '未开始',
    '备注': ''
  });
  renderList();
  const last = taskRows.querySelector('tr:last-child input[data-f="任务"]');
  if(last){ last.scrollIntoView({ block: 'center' }); last.focus(); }
});

/* ================================================================
   VIEW 4 · 时间线（按截止日期分列的任务流）
================================================================ */
const tlCols = document.getElementById('tlCols');
const tlBoard = document.getElementById('tlBoard');
const flSvg = document.getElementById('flwires');
const flWireG = document.getElementById('flWireG');

function fmtDateLabel(s){
  const d = parseDue(s);
  if(!d) return s;
  const wd = ['日','一','二','三','四','五','六'][d.getDay()];
  return `${s} 周${wd}`;
}

function renderTimeline(){
  // 按截止日期分组
  const groups = new Map();
  const undated = [];
  tasks.forEach(t => {
    const s = String(t['截止日期'] || '').trim();
    if(parseDue(s)){
      if(!groups.has(s)) groups.set(s, []);
      groups.get(s).push(t);
    }else undated.push(t);
  });
  const dates = [...groups.keys()].sort();
  const today = todayZero();
  const todayStr = today.toISOString().slice(0, 10);
  document.getElementById('tlToday').textContent = 'TODAY ' + todayStr;

  tlCols.innerHTML = '';
  const mkNode = t => `
    <div class="tltask ${isOverdue(t) ? 'overdue' : ''}" data-tid="${esc(t['ID'])}"
         style="--stc:${ST_COLOR[t['状态']] || 'var(--st0)'}" tabindex="0" role="button">
      <div class="t-r1">
        <span class="t-dot"></span>
        <span class="t-name">${esc(t['任务'])}</span>
        <span class="t-id">${esc(t['ID'])}</span>
      </div>
      <div class="t-meta">${esc(t['部门'])} · ${esc(t['分类'] || '—')}${isOverdue(t) ? ' · 已逾期' : ''}</div>
      <div class="t-who">${splitList(t['负责人']).map(esc).join(' · ') || '—'}</div>
    </div>`;

  dates.forEach(s => {
    const d = parseDue(s);
    const row = document.createElement('div');
    row.className = 'tl-row' + (s === todayStr ? ' today-row' : (d < today ? ' past' : ''));
    row.innerHTML = `<div class="tl-when"><span class="tl-d">${esc(fmtDateLabel(s))}</span><span class="cnt">${groups.get(s).length} 项</span></div>
      <div class="tl-tasks">${groups.get(s).map(mkNode).join('')}</div>`;
    tlCols.appendChild(row);
  });
  if(undated.length){
    const row = document.createElement('div');
    row.className = 'tl-row undated';
    row.innerHTML = `<div class="tl-when"><span class="tl-d">未定期 / 持续</span><span class="cnt">${undated.length} 项</span></div>
      <div class="tl-tasks">${undated.map(mkNode).join('')}</div>`;
    tlCols.appendChild(row);
  }

  tlCols.querySelectorAll('.tltask').forEach(el => {
    el.addEventListener('click', e => {
      const id = el.dataset.tid;
      selTask = (selTask === id) ? null : id;
      applyTlHighlight(); drawTlWires();
      e.stopPropagation();
    });
    el.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); el.click(); }
    });
  });

  applyTlHighlight();
  requestAnimationFrame(drawTlWires);
}
document.getElementById('tlWrap').addEventListener('click', () => {
  selTask = null; applyTlHighlight(); drawTlWires();
});

function applyTlHighlight(){
  const els = tlCols.querySelectorAll('.tltask');
  els.forEach(el => el.classList.remove('sel','up','down','faded'));
  if(!selTask) return;
  const t = taskById(selTask);
  const ups = new Set(t ? splitList(t['前置任务']) : []);
  const downs = new Set(downstreamOf(selTask).map(x => x['ID']));
  els.forEach(el => {
    const id = el.dataset.tid;
    if(id === selTask) el.classList.add('sel');
    else if(ups.has(id)) el.classList.add('up');
    else if(downs.has(id)) el.classList.add('down');
    else el.classList.add('faded');
  });
}

function drawTlWires(){
  const bw = tlBoard.getBoundingClientRect();
  flSvg.setAttribute('width', tlBoard.scrollWidth);
  flSvg.setAttribute('height', tlBoard.scrollHeight);
  const pos = {};
  tlCols.querySelectorAll('.tltask').forEach(el => {
    const r = el.getBoundingClientRect();
    pos[el.dataset.tid] = { x: r.left - bw.left, y: r.top - bw.top, w: r.width, h: r.height };
  });
  let html = '';
  tasks.forEach(t => {
    splitList(t['前置任务']).forEach(pre => {
      const a = pos[pre], b = pos[t['ID']];       // 前置 → 任务
      if(!a || !b) return;
      const ac = { x: a.x + a.w/2, y: a.y + a.h/2 }, bc = { x: b.x + b.w/2, y: b.y + b.h/2 };
      const p1 = edgePoint(a, bc.x, bc.y), p2 = edgePoint(b, ac.x, ac.y);
      let stroke = '#3a3f2a', w = 1.1, op = .45, marker = 'flDim';
      if(selTask){
        if(t['ID'] === selTask){ stroke = '#FFD90F'; w = 2.2; op = 1; marker = 'flY'; }
        else if(pre === selTask){ stroke = '#4DA3FF'; w = 2; op = .95; marker = 'flB'; }
        else op = .06;
      }
      html += `<path d="${curvePath(p1,p2)}" fill="none" stroke="${stroke}" stroke-width="${w}" opacity="${op}" marker-end="url(#${marker})"/>`;
    });
  });
  flWireG.innerHTML = html;
}

/* ================================================================
   load / save（data.csv + tasks.csv）
================================================================ */
const hint = document.getElementById('hint');
function showHint(msg, ms = 6000){
  hint.textContent = msg; hint.classList.add('show');
  if(ms) setTimeout(() => hint.classList.remove('show'), ms);
}

async function loadFromFolder(){
  let okData = false, okTasks = false;
  try{
    const res = await fetch('data.csv?_=' + Date.now());
    if(res.ok){
      const parsed = mapByHeader(parseRaw(await res.text()), HEADERS, '部门');
      if(parsed.length){ rows = parsed; okData = true; }
    }
  }catch(e){}
  try{
    const res = await fetch('tasks.csv?_=' + Date.now());
    if(res.ok){
      const parsed = mapByHeader(parseRaw(await res.text()), THEADERS, 'ID');
      if(parsed.length){ tasks = parsed; okTasks = true; }
    }
  }catch(e){}
  if(!okData)  rows  = mapByHeader(parseRaw(DEFAULT_DATA_CSV), HEADERS, '部门');
  if(!okTasks) tasks = mapByHeader(parseRaw(DEFAULT_TASKS_CSV), THEADERS, 'ID');
  refreshCurrentView();
  if(okData && okTasks) showHint('已读取同目录 data.csv 与 tasks.csv', 3000);
  else showHint('未能自动读取 CSV（file:// 打开时浏览器会限制读取）。已载入内置数据；可点「打开 CSV」一次多选 data.csv 和 tasks.csv 手动载入。', 9000);
}
function refreshCurrentView(){ switchView(curView); }

document.getElementById('btnReload').addEventListener('click', loadFromFolder);

function ingestCSV(name, text){
  const raw = parseRaw(text);
  if(isTasksCSV(raw)){
    tasks = mapByHeader(raw, THEADERS, 'ID');
    return name + ' → 任务表';
  }else{
    rows = mapByHeader(raw, HEADERS, '部门');
    return name + ' → 成员表';
  }
}

document.getElementById('btnOpen').addEventListener('click', async () => {
  if(window.showOpenFilePicker){
    try{
      const hs = await showOpenFilePicker({ multiple: true, types: [{ description: 'CSV', accept: { 'text/csv': ['.csv'] } }] });
      const msgs = [];
      for(const h of hs){
        const f = await h.getFile();
        const what = ingestCSV(f.name, await f.text());
        if(what.includes('任务表')) handles.tasks = h; else handles.data = h;
        msgs.push(what);
      }
      refreshCurrentView();
      showHint('已打开：' + msgs.join('，') + '。保存时将直接写回。', 6000);
      return;
    }catch(e){ if(e && e.name === 'AbortError') return; }
  }
  const inp = document.createElement('input');
  inp.type = 'file'; inp.accept = '.csv'; inp.multiple = true;
  inp.onchange = async () => {
    for(const f of inp.files) ingestCSV(f.name, await f.text());
    refreshCurrentView();
  };
  inp.click();
});

async function saveOne(kind, text, suggested){
  if(window.showSaveFilePicker || handles[kind]){
    try{
      if(!handles[kind]) handles[kind] = await showSaveFilePicker({ suggestedName: suggested, types: [{ description: 'CSV', accept: { 'text/csv': ['.csv'] } }] });
      const w = await handles[kind].createWritable(); await w.write(text); await w.close();
      return '已写回 ' + handles[kind].name;
    }catch(e){ if(e && e.name === 'AbortError') return suggested + ' 已跳过'; }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type: 'text/csv;charset=utf-8' }));
  a.download = suggested; a.click(); URL.revokeObjectURL(a.href);
  return '已下载 ' + suggested;
}
document.getElementById('btnSave').addEventListener('click', async () => {
  const m1 = await saveOne('data', '\uFEFF' + serialize(rows, HEADERS), 'data.csv');
  const m2 = await saveOne('tasks', '\uFEFF' + serialize(tasks, THEADERS), 'tasks.csv');
  showHint(m1 + '；' + m2, 5000);
});

/* ================================================================
   成员编辑弹窗
================================================================ */
const modal = document.getElementById('modal');
const editRows = document.getElementById('editRows');
function editorRow(r = {}){
  const tr = document.createElement('tr');
  tr.innerHTML = HEADERS.map(h => `<td><input data-h="${h}" value="${esc(r[h] || '')}"></td>`).join('')
    + `<td><button class="del-btn" title="删除此行">✕</button></td>`;
  tr.querySelector('.del-btn').addEventListener('click', () => tr.remove());
  return tr;
}
document.getElementById('btnEdit').addEventListener('click', () => {
  editRows.innerHTML = '';
  rows.forEach(r => editRows.appendChild(editorRow(r)));
  modal.classList.add('open');
});
document.getElementById('btnAddRow').addEventListener('click', () => {
  const tr = editorRow(); editRows.appendChild(tr); tr.querySelector('input').focus();
});
document.getElementById('btnCancel').addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('open'); });
document.getElementById('btnApply').addEventListener('click', () => {
  rows = [...editRows.children].map(tr => {
    const o = {};
    tr.querySelectorAll('input').forEach(i => o[i.dataset.h] = i.value.trim());
    return o;
  }).filter(o => o['部门']);
  modal.classList.remove('open');
  refreshCurrentView();
  showHint('更改已应用（尚未写入文件），点「保存 CSV」持久化。', 5000);
});

/* ================================================================
   misc
================================================================ */
window.addEventListener('resize', () => {
  if(curView === 'map') drawWires();
  if(curView === 'tasks') drawTaskWires();
  if(curView === 'list'){ sizeTaskColumn(); growAll(taskRows); }
  if(curView === 'timeline') drawTlWires();
});
if(window.ResizeObserver){
  new ResizeObserver(() => { if(curView === 'map') drawWires(); }).observe(board);
  new ResizeObserver(() => { if(curView === 'tasks') drawTaskWires(); }).observe(taskBoard);
  new ResizeObserver(() => { if(curView === 'timeline') drawTlWires(); }).observe(tlBoard);
}

loadFromFolder();
