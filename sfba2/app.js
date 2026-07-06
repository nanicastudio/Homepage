/* ================= 内置默认数据（读取失败时使用） ================= */
const DEFAULT_DATA_CSV = `部门,人员,角色,职责,依赖部门,备注
主催,蜀山,负责人,活动方向;Timeline制定;宣发内容Support,统筹,总负责
统筹,光,负责人,统筹协调;预算管理;Timeline制定,主催,
统筹,早苗,成员,Timeline维护;会议组织;外交(寄售联系等),,
PM,早苗,负责人,项目进度管理;跨部门协调;会议推进,统筹,
财务法务场地,光,负责人,预算;法务;场地对接,统筹,
活动设计,Fero,负责人,活动设计;内容设计;活动文案,主催,
宣发,咩咩,负责人,宣发策略,活动设计;美术,
宣发,蜀山,成员,宣发内容Support,,
美术,小火,负责人,美术统筹;物料跟进,宣发;活动设计,
美术,Abi,成员,美术执行,,
美术,Vita,成员,美术执行,,
布景,咩咩,负责人,布景设计,美术;物料物流;财务法务场地,
布景,Abi,成员,布景执行,,
布景,Fero,成员,布景支援,,
物料物流,红白,负责人,物料制作;物流运输,美术;财务法务场地,
物料物流,小火,成员,物料跟进,,
舞台,老师,负责人,舞台技术;舞台安排,财务法务场地;活动设计,
社区运营,待定,负责人,社群维护;现场社区活动,宣发,人员待定
Staff管理,早苗,负责人,Staff招募;排班;现场管理,统筹,`;

const DEFAULT_TASKS_CSV = `ID,部门,分类,任务,负责人,前置任务,状态,备注
T01,主催,方向,活动整体方向确认,蜀山,,进行中,
T02,主催,Timeline,总Timeline制定,蜀山;光,,进行中,
T03,统筹,Timeline,Timeline维护与更新,早苗,T02,进行中,
T04,统筹,会议,例会组织与纪要,早苗,,进行中,
T05,PM,进度,各部门进度跟踪,早苗,T03,进行中,
T06,PM,协调,跨部门问题协调,早苗,,未开始,
T07,财务法务场地,财务,设置账表,光,,未开始,
T08,财务法务场地,财务,设置账户,光,,未开始,
T09,财务法务场地,法务,注册IRS,光,,未开始,
T10,财务法务场地,场地,搜集场地,光,,进行中,
T11,财务法务场地,场地,实地考察场地,光,T10,未开始,
T12,活动设计,内容,现场活动企划,Fero,T01,进行中,
T13,活动设计,文案,活动文案撰写,Fero,T12,未开始,
T14,宣发,策略,宣发排期策略,咩咩,T02,进行中,
T15,宣发,内容,一宣文案与发布,蜀山;咩咩,T17,未开始,
T16,美术,KV,KV(主视觉)设计,小火,,进行中,
T17,美术,宣传图,一宣图,Abi,T16,未开始,
T18,美术,宣传图,二宣图,Vita,T16,未开始,
T19,美术,周边,一番赏设计,小火,,未开始,
T20,物料物流,物料,KV镭射票,红白,T16,未开始,
T21,物料物流,物料,KV通行证,红白,T16,未开始,
T22,物料物流,物料,一番赏挂坠,红白,T19,未开始,
T23,物料物流,物料,一番赏透卡,红白,T19,未开始,
T24,物料物流,物流,物料运输安排,红白;小火,T20;T21;T22;T23,未开始,
T25,布景,设计,场地布景方案,咩咩,T11;T16,未开始,
T26,布景,执行,布景搭建执行,Abi;Fero,T25,未开始,
T27,舞台,技术,舞台音响灯光方案,老师,T11,未开始,
T28,舞台,安排,舞台节目流程表,老师,T12,未开始,
T29,社区运营,社群,官方群运营,待定,,未开始,人员待定
T30,社区运营,现场,现场社区活动,待定,T12,未开始,
T31,Staff管理,招募,Staff招募,早苗,,进行中,
T32,Staff管理,排班,现场排班表,早苗,T31,未开始,`;

const HEADERS  = ['部门','人员','角色','职责','依赖部门','备注'];
const THEADERS = ['ID','部门','分类','任务','负责人','前置任务','状态','备注'];
const STATUSES = ['未开始','进行中','已完成'];
const ST_COLOR = { '未开始':'var(--st0)', '进行中':'var(--st1)', '已完成':'var(--st2)' };
const PALETTE = ['#FFD90F','#4DA3FF','#FF8A2A','#7BE0A5','#E07BD4','#8FA6FF','#FF6B6B','#5FD4D9','#C9E06B','#B98CFF','#F0A6C0','#9CB5C9'];

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
    if(!depts.has(d)) depts.set(d, { name: d, people: [], deps: new Set() });
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
}

/* ================================================================
   VIEW 1 · 部门分工导图
================================================================ */
const grid = document.getElementById('grid');
const roster = document.getElementById('roster');

function render(){
  const depts = buildModel();
  grid.innerHTML = '';
  let i = 0;
  depts.forEach(D => {
    i++;
    const card = document.createElement('div');
    card.className = 'card'; card.dataset.dept = D.name; card.tabIndex = 0;
    card.setAttribute('role', 'button');
    const depTags = [...D.deps].map(d => `<span class="dep-tag">${esc(d)}</span>`).join('');
    card.innerHTML = `
      <div class="card-head">
        <span class="dept-code">SEC.${String(i).padStart(2,'0')}</span>
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
            ${p['备注'] ? `<div class="note">⚠ ${esc(p['备注'])}</div>` : ''}
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
              ${t['备注'] ? `<span class="t-note">⚠ ${esc(t['备注'])}</span>` : ''}
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

function renderList(){
  renderFilters();
  taskRows.innerHTML = '';
  tasks.forEach(t => taskRows.appendChild(listRow(t)));
  updateSummary();
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
    <td><input data-f="任务" value="${esc(t['任务'])}"></td>
    <td><input data-f="负责人" value="${esc(t['负责人'])}"></td>
    <td>
      <input data-f="前置任务" value="${esc(t['前置任务'])}">
      ${preNames.length ? `<div class="dep-hint">← <b>${preNames.map(esc).join('；')}</b></div>` : ''}
    </td>
    <td class="down-cell">${downs.length ? downs.map(d => esc(d['ID'] + ' ' + d['任务'])).join('<br>') : '<span style="color:var(--dim)">—</span>'}</td>
    <td><input data-f="备注" value="${esc(t['备注'])}" placeholder="…"></td>
    <td><button class="row-del" title="删除任务">✕</button></td>`;

  // 状态点击循环
  tr.querySelector('.st-badge').addEventListener('click', () => {
    t['状态'] = STATUSES[(stIndex(t['状态']) + 1) % STATUSES.length];
    const nt = listRow(t); tr.replaceWith(nt);
    updateSummary(); renderFilters();
  });
  // 字段编辑
  tr.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('input', () => { t[inp.dataset.f] = inp.value; });
    // 前置任务/负责人改动后需要刷新依赖提示与筛选
    inp.addEventListener('change', () => {
      t[inp.dataset.f] = inp.value.trim();
      renderList();
    });
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
    '状态': '未开始',
    '备注': ''
  });
  renderList();
  const last = taskRows.querySelector('tr:last-child input[data-f="任务"]');
  if(last){ last.scrollIntoView({ block: 'center' }); last.focus(); }
});

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
});
if(window.ResizeObserver){
  new ResizeObserver(() => { if(curView === 'map') drawWires(); }).observe(board);
  new ResizeObserver(() => { if(curView === 'tasks') drawTaskWires(); }).observe(taskBoard);
}

loadFromFolder();
