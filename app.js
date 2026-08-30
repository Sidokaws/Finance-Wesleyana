const STORAGE_KEY='finance-wesleyana-vault-v2';
const RECOVERY_KEY='finance-wesleyana-vault-recovery-v1';
const REMEMBER_DB='finance-wesleyana-access-v1',REMEMBER_STORE='keys',REMEMBER_ID='device-unlock';
const OAB_MIGRATION='2026-08-30-oab-total-350-v1';
const DEFAULT_PAYLOAD={"v":2,"i":310000,"z":"gzip","salt":"JYn6QsjC5jEzqwSodVbdrg==","iv":"8W/TzSEhHCgsBs6n","data":"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"};
const MONTHS={'2026-08':'Agosto','2026-09':'Setembro','2026-10':'Outubro','2026-11':'Novembro','2026-12':'Dezembro'};
const CATEGORY_COLORS={
  wesley:['#23a9d8','#3f7fff','#8758c9','#f1a33b','#43c58a','#ed6f9f','#7eb4ff'],
  ana:['#ff4f91','#e87ac0','#995bd4','#ff9f63','#39b8d6','#f5c24b','#d68fe5'],
  joint:['#9b6be2','#f16da8','#4f93ec','#f1ad47','#44c2a0','#d587dc','#7cb5ef']
};
let state=null,currentPassword='',rememberDeviceEnabled=false,rememberedReady=false,attempts=0,pendingDeleteId=null,pendingBackup=null,savingBill=false,quickSaving=false;
const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const brl=value=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(Number(value)||0);
const parseMoney=value=>Number(String(value||'0').replace(/\./g,'').replace(',','.').replace(/[^0-9.-]/g,''))||0;
const escapeHtml=value=>String(value||'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const bytesToB64=bytes=>{let binary='';for(const byte of bytes)binary+=String.fromCharCode(byte);return btoa(binary)};
const b64ToBytes=value=>Uint8Array.from(atob(value),char=>char.charCodeAt(0));

function openRememberDb(){
  return new Promise((resolve,reject)=>{
    const request=indexedDB.open(REMEMBER_DB,1);
    request.onupgradeneeded=()=>request.result.createObjectStore(REMEMBER_STORE,{keyPath:'id'});
    request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);
  });
}
async function rememberAccess(password){
  const key=await crypto.subtle.generateKey({name:'AES-GCM',length:256},false,['encrypt','decrypt']);
  const iv=crypto.getRandomValues(new Uint8Array(12));
  const encrypted=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},key,new TextEncoder().encode(password)));
  const db=await openRememberDb();
  await new Promise((resolve,reject)=>{
    const transaction=db.transaction(REMEMBER_STORE,'readwrite');
    transaction.objectStore(REMEMBER_STORE).put({id:REMEMBER_ID,key,iv:bytesToB64(iv),data:bytesToB64(encrypted)});
    transaction.oncomplete=resolve;transaction.onerror=()=>reject(transaction.error);
  });
  db.close();
}
async function readRememberedAccess(){
  try{
    const db=await openRememberDb();
    const value=await new Promise((resolve,reject)=>{
      const request=db.transaction(REMEMBER_STORE).objectStore(REMEMBER_STORE).get(REMEMBER_ID);
      request.onsuccess=()=>resolve(request.result||null);request.onerror=()=>reject(request.error);
    });
    db.close();return value;
  }catch{return null}
}
async function forgetRememberedAccess(){
  try{
    const db=await openRememberDb();
    await new Promise((resolve,reject)=>{
      const transaction=db.transaction(REMEMBER_STORE,'readwrite');
      transaction.objectStore(REMEMBER_STORE).delete(REMEMBER_ID);
      transaction.oncomplete=resolve;transaction.onerror=()=>reject(transaction.error);
    });
    db.close();
  }catch{}
}

async function deriveKey(password,salt,iterations,usage){
  const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveKey']);
  return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,usage);
}
async function decompress(bytes){
  const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}
async function compress(bytes){
  const stream=new Blob([bytes]).stream().pipeThrough(new CompressionStream('gzip'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}
async function decryptVault(payload,password){
  const salt=b64ToBytes(payload.salt),iv=b64ToBytes(payload.iv),data=b64ToBytes(payload.data);
  const key=await deriveKey(password,salt,payload.i,['decrypt']);
  return decryptVaultWithKey(payload,key);
}
async function decryptVaultWithKey(payload,key){
  const iv=b64ToBytes(payload.iv),data=b64ToBytes(payload.data);
  const decrypted=new Uint8Array(await crypto.subtle.decrypt({name:'AES-GCM',iv},key,data));
  const plain=payload.z==='gzip'?await decompress(decrypted):decrypted;
  return JSON.parse(new TextDecoder().decode(plain));
}
async function encryptVault(value,password){
  const salt=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12)),iterations=310000;
  const key=await deriveKey(password,salt,iterations,['encrypt']);
  const plain=await compress(new TextEncoder().encode(JSON.stringify(value)));
  const encrypted=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},key,plain));
  return {v:2,i:iterations,z:'gzip',salt:bytesToB64(salt),iv:bytesToB64(iv),data:bytesToB64(encrypted)};
}
async function saveState(){
  if(!currentPassword)throw new Error('Painel bloqueado.');
  const encrypted=await encryptVault(state,currentPassword);
  const previous=localStorage.getItem(STORAGE_KEY);
  if(previous){
    try{JSON.parse(previous);localStorage.setItem(RECOVERY_KEY,previous)}catch{}
  }
  localStorage.setItem(STORAGE_KEY,JSON.stringify(encrypted));
  if(rememberDeviceEnabled)await rememberAccess(currentPassword);
}

function storedVaultCandidates(){
  const candidates=[];
  for(const key of [STORAGE_KEY,RECOVERY_KEY]){
    try{const stored=localStorage.getItem(key);if(stored)candidates.push(JSON.parse(stored))}catch{}
  }
  candidates.push(DEFAULT_PAYLOAD);
  return candidates;
}

function formatBackupDate(value){
  const date=new Date(value);
  return Number.isNaN(date.valueOf())?'data indisponível':new Intl.DateTimeFormat('pt-BR',{dateStyle:'short',timeStyle:'short'}).format(date);
}

function renderBackupStatus(){
  const label=$('#backupStatus'),lastBackup=state?.backup?.lastExportedAt;
  if(!label)return;
  label.textContent=lastBackup?`Último backup salvo em ${formatBackupDate(lastBackup)}.`:'Nenhum backup salvo neste aparelho.';
  label.classList.toggle('saved',Boolean(lastBackup));
}

function validateBackupFile(value){
  if(!value||value.app!=='finance-wesleyana'||value.format!==1||!value.vault||value.vault.v!==2||typeof value.vault.data!=='string'||typeof value.vault.salt!=='string'||typeof value.vault.iv!=='string'){
    throw new Error('Este arquivo não é um backup válido do Finance Wesleyana.');
  }
  return value;
}

function mergeBackupState(current,restored){
  if(!restored||typeof restored!=='object'||!Array.isArray(restored.bills))throw new Error('O backup não contém lançamentos válidos.');
  const existing=new Map(current.bills.map(bill=>[bill.id,bill]));
  let added=0,updated=0;
  for(const bill of restored.bills){
    if(!bill||typeof bill!=='object'||typeof bill.id!=='string'||!bill.id||typeof bill.month!=='string'||typeof bill.amount!=='number'||!Number.isFinite(bill.amount)){
      throw new Error('O backup contém um lançamento inválido e não foi restaurado.');
    }
    const previous=existing.get(bill.id);
    if(!previous){existing.set(bill.id,structuredClone(bill));added++;continue}
    const restoredTime=Number(bill.updatedAt)||0,currentTime=Number(previous.updatedAt)||0;
    if(restoredTime>currentTime){existing.set(bill.id,{...previous,...structuredClone(bill)});updated++}
  }
  return {bills:[...existing.values()],added,updated};
}

async function exportBackup(){
  const exportedAt=new Date().toISOString(),scope=state.scope;
  state.backup={...(state.backup||{}),lastExportedAt:exportedAt};
  await saveState();
  const vault=JSON.parse(localStorage.getItem(STORAGE_KEY));
  const backup={app:'finance-wesleyana',format:1,exportedAt,scope,vault};
  const blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');
  link.href=url;link.download=`finance-wesleyana-${scope}-${exportedAt.slice(0,10)}.json`;
  document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  renderBackupStatus();toast('Backup criptografado salvo neste aparelho.');
}

function amountForScope(bill,scope){
  const owner=bill.owner||'wesley',confirmedRefund=bill.refundStatus==='received'?(bill.expectedRefund||0):0;
  if(scope==='joint')return owner==='joint'?Math.max(0,bill.amount-confirmedRefund):0;
  if(scope==='ana'){
    if(owner==='ana')return Math.max(0,bill.amount-confirmedRefund);
    return bill.anaAmount??bill.anaContribution??0;
  }
  if(owner!=='wesley')return 0;
  return Math.max(0,bill.amount-(bill.anaContribution||0)-confirmedRefund);
}

function visibleBills(){
  return state.bills.filter(bill=>bill.month===state.month&&amountForScope(bill,state.scope)>0).sort((a,b)=>a.due.localeCompare(b.due));
}
function totalsFor(bills){
  const sum=list=>list.reduce((total,bill)=>total+amountForScope(bill,state.scope),0);
  const total=sum(bills),paid=sum(bills.filter(bill=>bill.status==='paid')),reserved=sum(bills.filter(bill=>bill.status==='reserved'));
  const calculated={total,paid,reserved,pending:Math.max(0,total-paid-reserved)};
  return state.consolidatedTotals?.[state.scope]?.[state.month]||calculated;
}
function accountMark(account){return account==='Nubank'?'Nu':account==='Mercado Pago'?'MP':account==='Banco do Brasil'?'BB':account.slice(0,2)}

function categoryFor(bill){
  if(bill.category)return bill.category;
  const account=String(bill.account||'').toLowerCase(),title=String(bill.title||'').toLowerCase(),text=`${account} ${title} ${bill.note||''}`.toLowerCase();
  if(/nubank|mercado pago|banco do brasil/.test(account)&&/fatura/.test(title))return 'Cartões e faturas';
  if(/internet|claro|energia|água|agua|aluguel|casa/.test(text))return 'Casa e serviços';
  if(/marmitex|supermercado|ara\s*super|arasuper|ifood|mercearia|\bmercado\b(?!\s+pago)|comida|alimentação|alimentacao|restaurante|lanche/.test(text))return 'Alimentação';
  if(/pneu|gasolina|combustível|combustivel|uber|transporte|deslocamento/.test(text))return 'Transporte';
  if(/seguro|saúde|saude|farmácia|farmacia|consulta/.test(text))return 'Saúde';
  if(/tec|gpt|prime|assinatura|mensalidade|netflix|spotify|crunchyroll/.test(text))return 'Assinaturas';
  if(/empréstimo|emprestimo|dívida|divida|devolver/.test(text))return 'Dívidas';
  if(/studio|tênis|tenis|placa|ventoinha|processador|suporte|brinquedo|boneco|figure|presente|memória|memoria|ram|roupa|bateria|lightbar/.test(text))return 'Compras';
  if(/cinema|jogo|lazer|passeio/.test(text))return 'Lazer';
  if(/nubank|mercado pago|banco do brasil|fatura|cartão|cartao/.test(text))return 'Cartões e faturas';
  return 'Outros';
}

function invalidateConsolidatedTotals(month=state.month){
  if(!state.consolidatedTotals)return;
  for(const scope of ['wesley','ana','joint']){
    if(state.consolidatedTotals[scope])delete state.consolidatedTotals[scope][month];
  }
}

function quickAmount(text){
  const number='(\\d{1,3}(?:\\.\\d{3})+(?:,\\d{1,2})?|\\d+(?:,\\d{1,2})?|\\d+(?:\\.\\d{1,2})?)';
  const read=value=>/^\d+\.\d{1,2}$/.test(value)?Number(value):parseMoney(value);
  const patterns=[
    new RegExp(`r\\$\\s*${number}`,'i'),
    new RegExp(`\\b${number}\\s*(?:reais?|conto)\\b`,'i'),
    new RegExp(`\\b(?:por|valor(?:\\s+de)?|custou|ficou|foi)\\s*(?:r\\$\\s*)?${number}`,'i'),
    new RegExp(`\\b(?:gastei|paguei|comprei|separei|reservei|devo|mandei|enviei|transferi)\\s*(?:r\\$\\s*)?${number}`,'i')
  ];
  for(const pattern of patterns){const match=text.match(pattern);if(match)return read(match[1])}
  const fallback=text.replace(/\b\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?\b/g,'').match(/\b\d+(?:[.,]\d{1,2})?\b/);
  return fallback?read(fallback[0]):0;
}

function quickDate(text){
  const now=new Date(),explicit=text.match(/\b(\d{1,2})[/-](\d{1,2})(?:[/-](\d{2,4}))?\b/);
  let date;
  if(explicit){
    let year=explicit[3]?Number(explicit[3]):Number(state.month.slice(0,4));
    if(year<100)year+=2000;
    date=new Date(year,Number(explicit[2])-1,Number(explicit[1]));
  }else if(/\b(?:anteontem)\b/i.test(text)){
    date=new Date(now);date.setDate(date.getDate()-2);
  }else if(/\b(?:ontem)\b/i.test(text)){
    date=new Date(now);date.setDate(date.getDate()-1);
  }else if(/\b(?:amanhã|amanha)\b/i.test(text)){
    date=new Date(now);date.setDate(date.getDate()+1);
  }else if(/\bhoje\b/i.test(text)){
    date=now;
  }else{
    const [year,month]=state.month.split('-').map(Number),lastDay=new Date(year,month,0).getDate();
    date=new Date(year,month-1,Math.min(now.getDate(),lastDay));
  }
  if(Number.isNaN(date.valueOf()))return null;
  const day=String(date.getDate()).padStart(2,'0'),month=String(date.getMonth()+1).padStart(2,'0');
  return {month:`${date.getFullYear()}-${month}`,due:`${day}/${month}`};
}

function quickOwner(text){
  if(/\b(?:nós|nosso|nossa|casal|compartilhad[oa])\b/i.test(text))return 'joint';
  if(/\b(?:ana\s+(?:gastou|pagou|comprou)|gasto\s+da\s+ana|conta\s+da\s+ana|cartão\s+da\s+ana|cartao\s+da\s+ana)\b/i.test(text))return 'ana';
  if(/\b(?:wesley\s+(?:gastou|pagou|comprou)|gasto\s+do\s+wesley|conta\s+do\s+wesley|cartão\s+do\s+wesley|cartao\s+do\s+wesley)\b/i.test(text))return 'wesley';
  return state.scope;
}

function quickAccount(text){
  const rules=[
    [/\b(?:nubank|nu)\b/i,'Nubank'],
    [/\bmercado\s+pago\b/i,'Mercado Pago'],
    [/\b(?:banco\s+do\s+brasil|bb)\b/i,'Banco do Brasil'],
    [/\bpix\b/i,'Pix'],
    [/\b(?:dinheiro|espécie|especie)\b/i,'Dinheiro'],
    [/\bclaro\b/i,'Claro'],
    [/\binternet\b/i,'Internet'],
    [/\boab\b/i,'OAB'],
    [/\b(?:pais|família|familia)\b/i,'Família']
  ];
  return rules.find(([pattern])=>pattern.test(text))?.[1]||'Não informado';
}

function quickTitle(text,category){
  const known=[
    [/ara\s*super|arasuper/i,'Ara Super'],[/ifood/i,'iFood'],[/duna/i,'Duna Restaurante'],[/restaurante/i,'Restaurante'],
    [/gasolina|combustível|combustivel/i,'Gasolina'],[/uber/i,'Uber'],[/marmitex/i,'Marmitex'],[/internet/i,'Internet'],[/claro/i,'Claro'],
    [/memória\s+ram|memoria\s+ram|\bram\b/i,'Memória RAM'],[/ventoinha/i,'Ventoinha'],[/bonecos?|figures?/i,'Bonecos'],
    [/prime/i,'Prime'],[/netflix/i,'Netflix'],[/spotify/i,'Spotify'],[/oab/i,'OAB'],[/mercado(?!\s+pago)|supermercado/i,'Supermercado']
  ];
  const match=known.find(([pattern])=>pattern.test(text));if(match)return match[1];
  let cleaned=text
    .replace(/r\$\s*\d{1,3}(?:\.\d{3})*(?:,\d{1,2})?|\b\d+(?:[.,]\d{1,2})?\s*(?:reais?|conto)?\b/gi,' ')
    .replace(/\b(?:gastei|paguei|comprei|separei|reservei|vou\s+pagar|devo|mandei|enviei|transferi|hoje|ontem|anteontem|amanhã|amanha)\b/gi,' ')
    .replace(/\b(?:no|na|pelo|pela)?\s*(?:nubank|mercado\s+pago|banco\s+do\s+brasil|bb|pix|dinheiro)\b/gi,' ')
    .replace(/\b(?:por|de|em|para|pra|com|reais?|conto)\b/gi,' ')
    .replace(/\s+/g,' ').trim();
  if(!cleaned)return category;
  cleaned=cleaned.slice(0,70);
  return cleaned.charAt(0).toUpperCase()+cleaned.slice(1);
}

function parseQuickEntry(text){
  const raw=String(text||'').trim(),amount=quickAmount(raw),date=quickDate(raw);
  if(!raw)return {error:'Escreva o que aconteceu.'};
  if(!amount)return {error:'Não consegui identificar o valor. Tente incluir “R$ 50” ou “50 reais”.'};
  if(!date||!MONTHS[date.month])return {error:'A data informada está fora dos meses disponíveis no painel.'};
  const owner=quickOwner(raw),account=quickAccount(raw),status=/\b(?:vou\s+pagar|falta\s+pagar|a\s+vencer|pendente|devo)\b/i.test(raw)?'pending':/\b(?:separei|reservei)\b/i.test(raw)?'reserved':'paid';
  const preview={account,title:'',note:raw},category=categoryFor(preview),title=quickTitle(raw,category);
  return {id:crypto.randomUUID(),month:date.month,owner,account,title,amount,due:date.due,status,note:'',category,quickText:raw,updatedAt:Date.now()};
}

function groupedSpending(bills){
  const grouped=new Map();
  const add=(category,amount)=>grouped.set(category,(grouped.get(category)||0)+amount);
  for(const bill of bills){
    const amount=amountForScope(bill,state.scope);
    if(amount<=0)continue;
    let assigned=0;
    for(const item of bill.breakdown||[]){
      if((item.owner||bill.owner||'wesley')!==state.scope)continue;
      const available=Math.max(0,amount-assigned),share=Math.min(available,Number(item.amount)||0);
      if(share<=0)continue;
      add(categoryFor(item),share);assigned+=share;
    }
    const remaining=Math.max(0,amount-assigned);
    if(remaining>.001)add(categoryFor(bill),remaining);
  }
  const ordered=[...grouped.entries()].sort((a,b)=>b[1]-a[1]);
  if(ordered.length<=6)return ordered;
  const visible=ordered.slice(0,5),others=ordered.slice(5).reduce((total,item)=>total+item[1],0);
  visible.push(['Outros',others]);return visible;
}

function renderSpendingChart(bills){
  const box=$('#spendingChart'),scopeLabel=state.scope==='wesley'?'Wesley':state.scope==='ana'?'Ana':'Nós',groups=groupedSpending(bills),total=groups.reduce((sum,item)=>sum+item[1],0),colors=CATEGORY_COLORS[state.scope]||CATEGORY_COLORS.joint;
  $('#chartScopeTitle').textContent=`Gastos de ${scopeLabel}`;
  $('#chartMonthLabel').textContent=(MONTHS[state.month]||state.month).slice(0,3).toUpperCase();
  box.setAttribute?.('aria-label',`Distribuição dos gastos de ${scopeLabel} em ${MONTHS[state.month]||state.month}`);
  if(!groups.length||!total){box.innerHTML='<div class="chart-empty">Adicione lançamentos para visualizar a distribuição dos gastos por categoria.</div>';return}
  const center=120,inner=24,gap=groups.length===1?.35:2.4,outerRadii=[94,106,80,91,72,84];let cursor=-128;
  const polar=(radius,angle)=>{const radians=(angle-90)*Math.PI/180;return {x:center+radius*Math.cos(radians),y:center+radius*Math.sin(radians)}};
  const number=value=>Number(value.toFixed(3));
  const segments=groups.map(([category,value],index)=>{
    const percent=value/total*100,span=Math.min(359.6,value/total*360),start=cursor+gap/2,end=cursor+Math.max(gap/2,span-gap/2),middle=(start+end)/2,outer=outerRadii[index%outerRadii.length],displacement=index===1?9:index===0?2:4;
    cursor+=span;
    const radians=(middle-90)*Math.PI/180,dx=number(Math.cos(radians)*displacement),dy=number(Math.sin(radians)*displacement),outerStart=polar(outer,start),outerEnd=polar(outer,end),innerEnd=polar(inner,end),innerStart=polar(inner,start),large=end-start>180?1:0;
    const path=`M ${number(outerStart.x)} ${number(outerStart.y)} A ${outer} ${outer} 0 ${large} 1 ${number(outerEnd.x)} ${number(outerEnd.y)} L ${number(innerEnd.x)} ${number(innerEnd.y)} A ${inner} ${inner} 0 ${large} 0 ${number(innerStart.x)} ${number(innerStart.y)} Z`;
    const labelRadius=inner+(outer-inner)*.64,label=polar(labelRadius,middle),display=percent>=6?`<text class="radial-percent" x="${number(label.x)}" y="${number(label.y)}">${percent.toFixed(percent>=10?0:1).replace('.',',')}%</text>`:'';
    return `<g class="radial-slice" transform="translate(${dx} ${dy})"><path class="radial-path" d="${path}" fill="${colors[index%colors.length]}"><title>${escapeHtml(category)}: ${brl(value)} (${percent.toFixed(1).replace('.',',')}%)</title></path>${display}</g>`;
  }).join('');
  const legend=groups.map(([category,value],index)=>{const percent=value/total*100,color=colors[index%colors.length];return `<div class="legend-row"><i class="legend-dot" style="--dot:${color}"></i><div class="legend-copy"><strong>${escapeHtml(category)}</strong></div><div class="legend-value"><strong>${brl(value)}</strong><small>${percent.toFixed(1).replace('.',',')}%</small></div></div>`}).join('');
  box.innerHTML=`<div class="chart-total"><span>Total considerado</span><strong>${brl(total)}</strong></div><div class="radial-wrap"><svg class="radial-svg" viewBox="0 0 240 240" aria-hidden="true">${segments}<circle class="radial-core" cx="120" cy="120" r="17"></circle></svg></div><div class="chart-legend">${legend}</div>`;
}

function render(){
  const bills=visibleBills(),totals=totalsFor(bills),scopeLabel=state.scope==='wesley'?'Wesley':state.scope==='ana'?'Ana':'Nós';
  $('#app').className=`app theme-${state.scope}`;
  $$('.scope-tabs button').forEach(button=>button.classList.toggle('active',button.dataset.scope===state.scope));
  $$('.month-tabs button').forEach(button=>button.classList.toggle('active',button.dataset.month===state.month));
  $('#viewLabel').textContent=`${MONTHS[state.month].toUpperCase()} · VISÃO ${scopeLabel.toUpperCase()}`;
  $('#monthHeading').textContent=`${MONTHS[state.month]} de 2026`;
  $('#totalValue').textContent=brl(totals.total);$('#paidValue').textContent=brl(totals.paid);$('#reservedValue').textContent=brl(totals.reserved);$('#pendingValue').textContent=brl(totals.pending);
  $('#paidProgress').style.width=`${totals.total?Math.min(100,((totals.paid+totals.reserved)/totals.total)*100):0}%`;
  $('#debtCard').classList.toggle('hidden',state.scope!=='wesley');$('#heroGrid').classList.toggle('single',state.scope!=='wesley');
  if(state.scope==='wesley'){
    $('#debtValue').textContent=brl(state.debt.amount);$('#immediateValue').textContent=brl(state.debt.immediate);$('#internetValue').textContent=brl(state.debt.internet);
    const salary=Number(state.income?.received)||0;$('#salaryDetail').classList.toggle('hidden',!salary);$('#remainingDetail').classList.toggle('hidden',!salary);
    if(salary){$('#salaryValue').textContent=brl(salary);$('#remainingValue').textContent=brl(Math.max(0,salary-state.debt.amount))}
  }
  renderBills(bills);renderAttention(bills,totals);renderSpendingChart(bills);renderRecurring(bills);renderBackupStatus();
}
function renderBills(bills){
  const list=$('#billList');
  if(!bills.length){list.innerHTML='<div class="empty">Nenhum compromisso nesta visão.</div>';return}
  list.innerHTML=bills.map(bill=>{
    const scoped=amountForScope(bill,state.scope);
    const showOriginal=state.scope==='wesley'&&Math.abs(scoped-bill.amount)>.001;
    const note=state.scope==='ana'?(((bill.owner||'wesley')==='ana'?bill.note:bill.anaNote)||''):bill.note;
    return `<article class="bill-row"><div class="account-icon">${escapeHtml(accountMark(bill.account))}</div><div class="bill-copy"><div><strong>${escapeHtml(bill.account)}</strong><span>${escapeHtml(bill.title)}</span></div><p>Vence ${escapeHtml(bill.due)}${note?' · '+escapeHtml(note):''}</p></div><div class="bill-money"><strong>${brl(scoped)}</strong>${showOriginal?`<small>de ${brl(bill.amount)}</small>`:''}</div><button class="status ${bill.status}" data-status-id="${escapeHtml(bill.id)}" title="Clique para alterar">${bill.status==='paid'?'Pago':bill.status==='reserved'?'Separado':'Pendente'}</button><button class="row-delete" type="button" data-delete-id="${escapeHtml(bill.id)}" aria-label="Excluir ${escapeHtml(bill.title)}" title="Excluir lançamento">×</button></article>`
  }).join('');
  $$('[data-status-id]').forEach(button=>button.onclick=async()=>{
    const bill=state.bills.find(item=>item.id===button.dataset.statusId),next={pending:'reserved',reserved:'paid',paid:'pending'};
    bill.status=next[bill.status];bill.updatedAt=Date.now();invalidateConsolidatedTotals(bill.month);await saveState();render();toast('Situação atualizada e criptografada.');
  });
  $$('[data-delete-id]').forEach(button=>button.onclick=()=>{
    const bill=state.bills.find(item=>item.id===button.dataset.deleteId);
    if(!bill)return;
    pendingDeleteId=bill.id;
    $('#deleteCopy').textContent='Você vai apagar “'+bill.account+' — '+bill.title+'”, no valor de '+brl(amountForScope(bill,state.scope))+'. Esta ação será salva neste navegador.';
    $('#deleteDialog').showModal();
  });
}
function renderAttention(bills,totals){
  const title=state.scope==='wesley'?'Sua visão pessoal':state.scope==='ana'?'Compromissos da Ana':'Despesas compartilhadas';
  $('#attentionTitle').textContent=title;
  if(state.scope==='joint'&&!bills.length){$('#attentionList').innerHTML='<li>Esta aba recebe somente lançamentos realmente compartilhados entre Wesley e Ana.</li>';return}
  const paid=bills.filter(bill=>bill.status==='paid').length,pending=bills.filter(bill=>bill.status==='pending').length;
  $('#attentionList').innerHTML=`<li>${bills.length} compromisso${bills.length===1?'':'s'} nesta visão.</li><li>${paid} pago${paid===1?'':'s'} e ${pending} pendente${pending===1?'':'s'}.</li><li>Valor ainda a vencer: ${brl(totals.pending)}.</li>`;
}
function renderRecurring(bills){
  const card=$('#recurringCard');card.classList.toggle('hidden',state.scope!=='wesley');if(state.scope!=='wesley')return;
  const recurring=bills.filter(bill=>/internet|claro|tec|gpt/i.test(`${bill.account} ${bill.title} ${bill.note||''}`));
  $('#recurringList').innerHTML=recurring.length?recurring.map(bill=>`<div class="recurring-row"><span>${escapeHtml(bill.account)} · ${escapeHtml(bill.due)}</span><strong>${brl(amountForScope(bill,'wesley'))}</strong></div>`).join(''):'<div class="empty">Sem recorrências neste mês.</div>';
}
function toast(message){const element=$('#toast');element.textContent=message;element.classList.remove('hidden');clearTimeout(toast.timer);toast.timer=setTimeout(()=>element.classList.add('hidden'),2800)}
function openApp(){
  $('#password').value='';$('#loginError').classList.add('hidden');$('#lockScreen').classList.add('hidden');$('#app').classList.remove('hidden');render();
}

async function applyPublishedDataUpdates(password){
  let latest;
  try{latest=await decryptVault(DEFAULT_PAYLOAD,password)}catch{return false}
  const revision=latest.dataRevision;
  if(!revision||state.dataRevision===revision)return false;
  const updates=new Map((latest.bills||[]).filter(bill=>bill.syncRevision===revision).map(bill=>[bill.id,bill]));
  state.bills=state.bills.map(current=>{
    const updated=updates.get(current.id);
    if(!updated)return current;
    return {...current,...structuredClone(updated),status:current.status,updatedAt:current.updatedAt||updated.updatedAt};
  });
  const existingIds=new Set(state.bills.map(bill=>bill.id));
  for(const addition of latest.bills||[]){
    if(addition.syncRevision!==revision||addition.publishMode!=='add'||existingIds.has(addition.id))continue;
    state.bills.push(structuredClone(addition));existingIds.add(addition.id);
  }
  if(latest.income)state.income=structuredClone(latest.income);
  for(const item of latest.clearConsolidatedTotals||[]){
    if(state.consolidatedTotals?.[item.scope])delete state.consolidatedTotals[item.scope][item.month];
  }
  state.dataRevision=revision;
  await saveState();return true;
}

function correctOabInstallments(){
  const applied=Array.isArray(state.appliedMigrations)?state.appliedMigrations:[];
  if(applied.includes(OAB_MIGRATION))return false;
  const oabBills=(state.bills||[])
    .filter(bill=>/\boab\b/i.test([bill.account,bill.title,bill.note].filter(Boolean).join(' ')))
    .sort((a,b)=>[a.month,a.due].join('-').localeCompare([b.month,b.due].join('-')));
  const totals=[116.67,116.67,116.66],anaShares=[58.33,58.34,58.33];
  oabBills.forEach((bill,index)=>{
    const label=String(bill.title||'')+' '+String(bill.note||''),matched=label.match(/\b([123])\s*\/\s*3\b/);
    const installment=matched?Number(matched[1]):Math.min(index+1,3),position=installment-1;
    bill.amount=totals[position];bill.owner='wesley';bill.anaContribution=anaShares[position];bill.anaAmount=anaShares[position];
    bill.category='Educação';bill.anaNote='Metade da parcela '+installment+'/3 da OAB';bill.updatedAt=Date.now();
    invalidateConsolidatedTotals(bill.month);
  });
  state.appliedMigrations=[...applied,OAB_MIGRATION];
  return oabBills.length>0;
}

async function applyDataMigrations(){
  const wasApplied=Array.isArray(state.appliedMigrations)&&state.appliedMigrations.includes(OAB_MIGRATION);
  const changed=correctOabInstallments();
  if(changed||!wasApplied)await saveState();
  return changed;
}

async function tryRememberedLogin(){
  const remembered=await readRememberedAccess();
  if(!remembered?.key||!remembered?.iv||!remembered?.data)return;
  let password='';
  try{
    const decrypted=await crypto.subtle.decrypt({name:'AES-GCM',iv:b64ToBytes(remembered.iv)},remembered.key,b64ToBytes(remembered.data));
    password=new TextDecoder().decode(decrypted);
  }catch{return}
  for(const payload of storedVaultCandidates()){
    try{
      state=await decryptVault(payload,password);
      currentPassword=password;rememberDeviceEnabled=true;
      try{await applyPublishedDataUpdates(password)}catch{}
      try{await applyDataMigrations()}catch{}
      rememberedReady=true;
      $('#rememberDevice').checked=true;$('#password').required=false;$('#loginForm').classList.add('remembered');
      $('#loginForm button[type="submit"]').textContent='Entrar';
      $('.lock-copy').textContent='Aparelho reconhecido. Toque em Entrar para abrir o painel de Wesley e Ana.';
      return;
    }catch{}
  }
}

$('#loginForm').addEventListener('submit',async event=>{
  event.preventDefault();
  if(rememberedReady){openApp();return}
  const password=$('#password').value,error=$('#loginError');
  if(attempts>=5){error.textContent='Muitas tentativas. Feche a aba e tente novamente.';error.classList.remove('hidden');return}
  try{
    let unlocked=false;
    for(const payload of storedVaultCandidates()){
      try{state=await decryptVault(payload,password);unlocked=true;break}catch{}
    }
    if(!unlocked)throw new Error('Senha incorreta.');
    currentPassword=password;rememberDeviceEnabled=$('#rememberDevice').checked;
    if(rememberDeviceEnabled){
      try{await rememberAccess(password)}
      catch{rememberDeviceEnabled=false;$('#rememberDevice').checked=false}
    }else{
      await forgetRememberedAccess();
    }
    try{await applyPublishedDataUpdates(password)}catch{}
    try{await applyDataMigrations()}catch{}
    openApp();
  }catch{
    attempts++;error.textContent='Senha incorreta.';error.classList.remove('hidden');$('#password').value='';
  }
});
$$('.scope-tabs button').forEach(button=>button.onclick=()=>{state.scope=button.dataset.scope;render()});
$$('.month-tabs button').forEach(button=>button.onclick=()=>{state.month=button.dataset.month;render()});
$('#lockBtn').onclick=async()=>{await forgetRememberedAccess();state=null;currentPassword='';rememberDeviceEnabled=false;rememberedReady=false;$('#rememberDevice').checked=false;$('#password').required=true;$('#loginForm').classList.remove('remembered');$('#loginForm button[type="submit"]').textContent='Entrar no painel';$('.lock-copy').textContent='Painel particular de Wesley e Ana. Os valores são descriptografados somente neste navegador.';$('#app').classList.add('hidden');$('#lockScreen').classList.remove('hidden');$('#password').focus()};
$('#addBtn').onclick=()=>$('#billDialog').showModal();
$('#changePasswordBtn').onclick=()=>$('#passwordDialog').showModal();
$$('[data-close]').forEach(button=>button.onclick=()=>$('#'+button.dataset.close).close());

$('#billForm').addEventListener('submit',async event=>{
  event.preventDefault();if(savingBill)return;
  savingBill=true;const form=event.currentTarget,submit=form.querySelector('[type="submit"]'),data=new FormData(form);
  submit.disabled=true;submit.textContent='Salvando...';
  try{
    state.bills.push({id:crypto.randomUUID(),month:state.month,owner:state.scope,account:String(data.get('account')).trim(),title:String(data.get('title')).trim(),amount:parseMoney(data.get('amount')),due:String(data.get('due')).trim(),status:String(data.get('status')),note:String(data.get('note')||'').trim(),category:String(data.get('category')||'Outros'),updatedAt:Date.now()});
    invalidateConsolidatedTotals();
    await saveState();form.reset();$('#billDialog').close();render();toast('Lançamento salvo de forma criptografada.');
  }finally{
    savingBill=false;submit.disabled=false;submit.textContent='Salvar lançamento';
  }
});

$('#quickEntryForm').addEventListener('submit',async event=>{
  event.preventDefault();if(quickSaving)return;
  const form=event.currentTarget,input=$('#quickEntryText'),button=form.querySelector('[type="submit"]'),help=$('#quickEntryHelp'),bill=parseQuickEntry(input.value);
  help.classList.remove('error','success');
  if(bill.error){help.textContent=bill.error;help.classList.add('error');input.focus();return}
  quickSaving=true;button.disabled=true;button.textContent='Adicionando...';help.classList.remove('error');
  state.bills.push(bill);invalidateConsolidatedTotals(bill.month);
  try{
    await saveState();state.month=bill.month;input.value='';help.textContent='Pronto: o lançamento foi organizado e salvo. O formulário completo continua disponível para casos detalhados.';help.classList.add('success');render();toast(`${bill.title}: ${brl(bill.amount)} adicionado.`);
  }catch{
    state.bills=state.bills.filter(item=>item.id!==bill.id);help.textContent='Não foi possível salvar agora. Tente novamente.';help.classList.add('error');
  }finally{
    quickSaving=false;button.disabled=false;button.textContent='Adicionar';
  }
});
$('#passwordForm').addEventListener('submit',async event=>{
  event.preventDefault();const data=new FormData(event.currentTarget),next=String(data.get('newPassword')),confirmation=String(data.get('confirmation')),error=$('#passwordError');
  if(next.length<10){error.textContent='Use pelo menos 10 caracteres.';error.classList.remove('hidden');return}
  if(next!==confirmation){error.textContent='As senhas não são iguais.';error.classList.remove('hidden');return}
  currentPassword=next;await saveState();event.currentTarget.reset();error.classList.add('hidden');$('#passwordDialog').close();toast('Senha alterada e dados recriptografados.');
});
$('#deleteForm').addEventListener('submit',async event=>{
  event.preventDefault();
  const index=state.bills.findIndex(item=>item.id===pendingDeleteId);
  if(index<0){$('#deleteDialog').close();return}
  const [removed]=state.bills.splice(index,1);pendingDeleteId=null;invalidateConsolidatedTotals(removed.month);
  await saveState();$('#deleteDialog').close();render();toast('Lançamento apagado.');
});

$('#exportBackupBtn').addEventListener('click',async event=>{
  const button=event.currentTarget,original=button.textContent;
  button.disabled=true;button.textContent='Salvando...';
  try{await exportBackup()}
  catch{toast('Não foi possível salvar o backup. Tente novamente.')}
  finally{button.disabled=false;button.textContent=original}
});

$('#backupFile').addEventListener('change',async event=>{
  const file=event.currentTarget.files?.[0];
  event.currentTarget.value='';if(!file)return;
  try{
    if(file.size>5_000_000)throw new Error('O arquivo de backup é maior que o permitido.');
    pendingBackup=validateBackupFile(JSON.parse(await file.text()));
    $('#restoreCopy').textContent=`Arquivo: ${file.name}. Backup criado em ${formatBackupDate(pendingBackup.exportedAt)}.`;
    $('#restoreError').classList.add('hidden');$('#restoreForm').reset();$('#restoreDialog').showModal();
  }catch(error){pendingBackup=null;toast(error.message||'Não foi possível abrir este backup.')}
});

$('#restoreForm').addEventListener('submit',async event=>{
  event.preventDefault();if(!pendingBackup)return;
  const form=event.currentTarget,button=form.querySelector('[type="submit"]'),error=$('#restoreError'),password=String(new FormData(form).get('backupPassword')||currentPassword);
  button.disabled=true;button.textContent='Restaurando...';error.classList.add('hidden');
  try{
    let restored;
    try{restored=await decryptVault(pendingBackup.vault,password)}
    catch{throw new Error('Não foi possível abrir o backup. Confira a senha utilizada quando ele foi salvo.')}
    const merged=mergeBackupState(state,restored);
    state.bills=merged.bills;state.backup={...(state.backup||{}),lastImportedAt:new Date().toISOString()};
    await saveState();pendingBackup=null;form.reset();$('#restoreDialog').close();render();
    toast(merged.added||merged.updated?`Backup restaurado: ${merged.added} novo(s) e ${merged.updated} atualizado(s).`:'Backup conferido. Nenhum lançamento foi duplicado.');
  }catch(problem){error.textContent=problem.message||'Não foi possível restaurar o backup.';error.classList.remove('hidden')}
  finally{button.disabled=false;button.textContent='Restaurar backup'}
});

tryRememberedLogin();
