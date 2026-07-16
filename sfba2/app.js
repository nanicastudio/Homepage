/* ================= 内置默认数据（读取失败时使用） ================= */
const DEFAULT_DATA_CSV = `部门,层级,人员,角色,职责,依赖部门,备注
主催部,部门,蜀山,负责人,统筹;PM;规划;活动方向,,总负责
主催部,部门,光,成员,统筹;规划,,
主催部,部门,早苗,成员,PM;规划,,
宣发部,部门,咩咩,负责人,跑展;SNS;账号;活动拍摄,美术部;策划部;物流部,
宣发部,部门,蜀山,成员,宣发内容;社媒Secondary,,
宣发部,部门,盐宝,成员,网站运营;返图;无料发放,,
策划部,部门,咩咩,负责人,内容;文案(包括宣发),主催部,
策划部,部门,Fero,成员,活动策划;小游戏设计;文案,,
策划部,部门,蜀山,成员,内容支援,,
美术部,部门,小火,负责人,设计统筹;KV,策划部,
美术部,部门,Vita,成员,美术执行,,
美术部,部门,Abi,成员,美术执行,,
法务部,部门,光,负责人,财务;法务;对外(合同/赞助/寄售),主催部,
法务部,部门,Xixi,成员,财务法务支援,,
法务部,部门,早苗,成员,财务法务支援,,
舞台部,部门,早苗,负责人,搭建;技术统筹,小游戏组;法务部,
舞台部,部门,老师,成员,舞台技术;节目,,
舞台部,部门,波兰小哥,成员,技术指导,,
物流部,部门,早苗,负责人,物料物流运输存储统筹,美术部;法务部,又名企鹅物流
物流部,部门,红白,成员,下单打样;运输,,
小游戏组,组,Fero,负责人,小游戏设计与讲解,策划部,
小游戏组,组,蜀山,成员,小游戏支援,,
布景组,组,蜀山,负责人,布景统筹,美术部;物流部,
布景组,组,咩咩,成员,布景设计,,
布景组,组,Abi,成员,布景制作,,
布景组,组,Fero,成员,布景制作,,
社区运营,组,蜀山,负责人,中文社群,宣发部,
社区运营,组,夜灵,成员,社群运营,,
Staff管理,组,早苗,负责人,Staff规划招募培训排班,法务部,`;

const DEFAULT_TASKS_CSV = `ID,部门,分类,任务,负责人,前置任务,截止日期,状态,备注
T01,宣发,节点,宣发作图(发出去的图),小火;Vita;Abi,T51,2026-10-01,未开始,0宣~3宣/终宣;小火主导美术团队;盐宝可能想参与由小火分配
T02,宣发,节点,宣发文案,咩咩;蜀山,,2026-09-30,未开始,0宣~3宣/终宣;1宣之后保持weekly;定宣发节点锚定每周宣发内容
T03,宣发,物料,物料图拍摄(打样/成品效果),红白,T83,,未开始,物料团队负责拍摄;物料部门对接
T04,宣发,活动,线下漫展返图,咩咩;蜀山;盐宝,,,未开始,AIBA 7.18/Anime Destiny 10.31/ALA 1月初/Carrier Con 3月末/Anime Otapia(?);AX没做下次做
T05,宣发,活动,线下漫展无料发放,蜀山;盐宝;小火,T83,,未开始,全员谁去谁发 还得美少女发
T06,宣发,运营,持续关注社媒账号并回答问题,咩咩;蜀山,,,未开始,蜀山Secondary;转发
T07,宣发,运营,网站运营更新,盐宝,,,未开始,美术部门找人更新(盐宝?)
T08,宣发,运营,保持社群活跃度(Discord英文/中文),蜀山;夜灵,,,未开始,英文:早苗试试找人不保证;中文:蜀山负责
T09,财务,法务,预算估计与审核,光;Xixi;早苗,,2026-08-31,未开始,联动各种合同
T10,财务,法务,Non-profit准备材料,光;Xixi;早苗,,2026-08-15,未开始,
T11,财务,法务,Non-profit foundation成立,光;Xixi;早苗,T10,2026-09-30,未开始,
T12,财务,法务,Non-profit 501c3批准以及更新宣传,光;Xixi;早苗,T11,2026-12-31,未开始,
T13,财务,寄售,联系寄售并确认数量,光,T21,2026-11-15,未开始,
T14,财务,寄售,确认寄售物料运输/清点/储存,红白,T13,2027-01-31,未开始,企鹅物流
T15,财务,官谷,更新售卖网站,光,T59,2026-12-31,未开始,啥时候弄完
T16,财务,官谷,确认KV官谷物料运输/清点/储存,红白,T83,2027-01-31,未开始,企鹅物流
T17,商务外交,赞助,拟定合作计划与对接,光;Xixi,T18,,未开始,
T18,商务外交,赞助,联系可能的赞助(食品饮料/物料厂商),光,,,未开始,比如UME
T19,商务外交,参展,联动活动/摊位参展(Anime Otapia),光,,,未开始,联系ONLY不包括参展;参展找宣发部门
T20,商务外交,参展,Artist Alley邀请参展,蜀山,,,未开始,上次收application蜀山批
T21,商务外交,寄售,联系寄售(全员人脉reachout),红白;小火;光,,2026-10-15,未开始,红白小火可能有人脉;光去和所有人谈分成;能抓到reliable的人帮忙
T22,场地,合同,场地调研,蜀山;光;早苗;咩咩;Fero,,2026-08-15,未开始,主催三人组+咩咩Fero
T23,场地,合同,场地合同,光;Xixi,T22,2026-09-30,未开始,光团
T24,场地,合同,场地保险,光;Xixi,T23,2026-10-31,未开始,联动法务/财务
T25,场地,合同,场地安保,光;Xixi,T23,2026-12-15,未开始,
T26,场地,合同,场地食物许可,光;Xixi,T23,2026-12-15,未开始,
T27,场地,规划,设计场地规划(动线),蜀山;光;早苗;咩咩;Fero;老师,T23,2026-11-15,未开始,多部门(主催+策划+舞台)
T28,场地,规划,确认场地布置详细图纸,蜀山;光;早苗;小火,T27,2026-12-15,未开始,小火refine
T29,场地,规划,准备场地规划所需材料(胶带/警戒线),早苗;红白,T28,2027-01-15,未开始,早苗发需求 企鹅物流组执行
T30,场地,规划,场地路线引导/停车规划,蜀山;光;早苗,T27,2027-01-15,未开始,
T31,场地,规划,场地布置确认,光;Xixi,T28,2027-01-31,未开始,
T32,场地,布景,主题布景设计,咩咩;Fero;小火;蜀山;光;早苗,T51,2026-10-15,未开始,联动美术
T33,场地,布景,主题布景下单,咩咩;Fero,T32,2026-11-15,未开始,
T34,场地,布景,主题布景制作,Fero;Abi;小火,T33,2026-12-31,未开始,
T35,场地,布景,主题布景运输,红白,T34,2027-01-31,未开始,企鹅物流
T36,场地,布景,主题布景设置(提前一天/预演),咩咩;Fero;小火;蜀山;光;早苗,T35,2027-02-06,未开始,
T37,AA,摊位,摊位招募,蜀山,,2026-10-01,未开始,联动法务
T38,AA,摊位,摊位审核,蜀山,T37,2026-11-01,未开始,
T39,AA,摊位,摊位联系,蜀山,T38,2026-11-15,未开始,
T40,AA,摊位,摊位合同确认以及收款,光,T39,2026-12-15,未开始,
T41,舞台,节目,舞台节目招募,早苗;老师,,2026-11-01,未开始,宅舞/唱歌
T42,舞台,节目,舞台节目审核,早苗;老师;波兰小哥,T41,2026-12-01,未开始,跳宅舞
T43,舞台,小游戏,舞台小游戏设计和跟Hina讲解,Fero,T63,,未开始,联动小游戏设计
T44,舞台,节目,舞台时间轴安排,Fero;早苗;老师,T42,2027-01-15,未开始,
T45,舞台,技术,舞台场地规划(AV需求),早苗;老师;波兰小哥,T23,2026-12-15,未开始,
T46,舞台,节目,舞台PPT,Fero;早苗;老师;小火,T44,2027-01-31,未开始,
T47,舞台,技术,舞台设备租赁,早苗;老师;波兰小哥,T45,2027-01-15,未开始,MIN=保证舞台能用 对齐去年水平
T48,舞台,技术,舞台音响调试,早苗;老师;波兰小哥,T47,2027-02-06,未开始,
T49,美术,KV,确认初步KV设计草图,小火,,2026-08-01,未开始,
T50,美术,KV,对接KV设计,小火,T49,2026-08-15,未开始,
T51,美术,KV,完成KV设计,小火,T50,2026-09-15,未开始,
T52,美术,物料设计,设计场贩物料,小火;Vita;Abi,T51,2026-10-31,未开始,联动物料
T53,美术,物料设计,设计奖品物料,小火;Vita;Abi,T51,2026-10-31,未开始,
T54,美术,场地,场刊与纸袋等赠品设计,小火;Vita;Abi,T51,,未开始,
T55,美术,场地,Cosplay lineup模板,小火;Vita;Abi,,,未开始,
T56,美术,场地,小活动相关美术设计,Fero;小火;Vita;Abi,T61,,未开始,Fero提要求+美术组+布景组
T57,美术,网站,网页设计与更新,盐宝,T58;T51,2026-10-15,未开始,盐(?)
T58,美术,网站,写网页所需文案(policy/招募问卷表格),光,,2026-09-15,未开始,联动法务/财务
T59,美术,网站,购票页面,盐宝;小火,T57,2026-11-15,未开始,
T60,活动,策划,设计主题沉浸活动背景文案,Fero,,2026-09-30,未开始,联动美术/物料/宣发
T61,活动,策划,拆分主题沉浸活动到摊位/布景/物料,Fero,T60,2026-10-31,未开始,
T62,活动,策划,准备对应材料并设计印刷,Fero;小火;Vita;Abi,T61,2026-12-15,未开始,Fero提要求+美术组
T63,活动,舞台,设计舞台小游戏活动,Fero,,,未开始,联动舞台
T64,活动,舞台,准备舞台小游戏物料,Fero;小火;Vita;Abi,T63,,未开始,Fero提要求+美术组
T65,活动,舞台,讲解舞台小游戏,Fero,T64,,未开始,
T66,活动,有人摊位,设计摊位活动,Fero,,,未开始,联动人力
T67,活动,有人摊位,准备摊位小游戏物料,Fero;小火;Vita;Abi,T66,,未开始,Fero提要求+美术组
T68,活动,有人摊位,讲解摊位小游戏给Staff,Fero,T67,,未开始,
T69,活动,无人摊位,调研是否设置无人摊位(布景/抓娃娃机等),蜀山;光;早苗;Fero;咩咩,,,未开始,联动布景
T70,活动,无人摊位,无人摊位准备相应设备,蜀山;咩咩;Abi;Fero,T69,,未开始,布景组
T71,人力,Coser,联系Coser嘉宾并购买所需服装道具,咩咩,T51,2026-10-31,未开始,联动KV/宣发
T72,人力,Coser,联系Coser嘉宾后勤,咩咩,T71,2027-01-15,未开始,
T73,人力,Staff,规划现场需要的人员,早苗,,2026-12-01,未开始,联动法务
T74,人力,Staff,联系人员并培训,早苗,T73,2027-01-15,未开始,
T75,人力,Staff,Staff合同起草以及报酬发放,光;Xixi,T74,2027-02-28,未开始,光团
T76,人力,主负责,安排主要区域人员,蜀山;光;早苗,T73,2027-01-15,未开始,主催三人组
T77,人力,主负责,对接全部staff与培训,早苗,T74,2027-01-31,未开始,
T78,人力,杂项,购买场地需要的零食饮料,早苗,,,未开始,
T79,人力,杂项,购买午餐,早苗,,,未开始,
T80,人力,杂项,购买需要的医疗用品,早苗,,,未开始,
T81,人力,杂项,考虑场地物料运输(uhaul),红白,T82,2027-02-06,未开始,企鹅物流组
T82,人力,杂项,物料检查分发打包,全员,T83,2027-02-05,未开始,能上的都上!
T83,物料,物流,所有物料下单与打样,红白,T52;T53,2026-11-30,未开始,企鹅物流
T84,物料,物流,准备贩售物料menu与印刷运输成品,红白,T13;T52,2026-12-15,未开始,企鹅物流
T85,物料,物流,监管所有物料运输,红白,T83,2027-01-31,未开始,联动美术;企鹅物流`;

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
function allPersons(){
  const s = [];
  rows.forEach(r => { if(r['人员'] && !s.includes(r['人员'])) s.push(r['人员']); });
  tasks.forEach(t => splitList(t['负责人']).forEach(p => { if(!s.includes(p)) s.push(p); }));
  return s;
}
function personColor(name){
  const names = allPersons();
  return PALETTE[names.indexOf(name) % PALETTE.length] || '#888';
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
  let si = 0, ti = 0;
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
    grid.appendChild(card);
  });

  // roster（含任务数，点「任务 ↗」跳转到列表并按人筛选）
  const people = new Map();
  rows.forEach(r => {
    if(!r['人员']) return;
    if(!people.has(r['人员'])) people.set(r['人员'], []);
    people.get(r['人员']).push(r);
  });
  roster.innerHTML = '';
  people.forEach((list, name) => {
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
  const cards = [...grid.children];
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
  [...grid.children].forEach(c => {
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
    const col = document.createElement('div');
    col.className = 'tl-col' + (s === todayStr ? ' today-col' : (d < today ? ' past' : ''));
    col.innerHTML = `<div class="tl-date"><span>${esc(fmtDateLabel(s))}</span><span class="cnt">${groups.get(s).length}</span></div>`
      + groups.get(s).map(mkNode).join('');
    tlCols.appendChild(col);
  });
  if(undated.length){
    const col = document.createElement('div');
    col.className = 'tl-col undated';
    col.innerHTML = `<div class="tl-date"><span>未定期</span><span class="cnt">${undated.length}</span></div>`
      + undated.map(mkNode).join('');
    tlCols.appendChild(col);
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
