const STORAGE_KEY='finance-wesleyana-vault-v2';
const RECOVERY_KEY='finance-wesleyana-vault-recovery-v1';
const REMEMBER_DB='finance-wesleyana-access-v1',REMEMBER_STORE='keys',REMEMBER_ID='device-unlock';
const DEFAULT_PAYLOAD={"v":2,"i":310000,"z":"gzip","salt":"sFAhFyzqzJBEzULU4amA+A==","iv":"byY2h6cCCUxg0e9Q","data":"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"};
const MONTHS={'2026-08':'Agosto','2026-09':'Setembro','2026-10':'Outubro'};
const CATEGORY_COLORS={
  wesley:['#23a9d8','#3f7fff','#8758c9','#f1a33b','#43c58a','#ed6f9f','#7eb4ff'],
  ana:['#ff4f91','#e87ac0','#995bd4','#ff9f63','#39b8d6','#f5c24b','#d68fe5'],
  joint:['#9b6be2','#f16da8','#4f93ec','#f1ad47','#44c2a0','#d587dc','#7cb5ef']
};
let state=null,currentPassword='',rememberDeviceEnabled=false,rememberedReady=false,attempts=0,pendingDeleteId=null,pendingBackup=null,savingBill=false;
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
  if(/marmitex|supermercado|mercearia|\bmercado\b(?!\s+pago)|comida|alimentação|alimentacao|restaurante|lanche/.test(text))return 'Alimentação';
  if(/pneu|gasolina|combustível|combustivel|uber|transporte|deslocamento/.test(text))return 'Transporte';
  if(/seguro|saúde|saude|farmácia|farmacia|consulta/.test(text))return 'Saúde';
  if(/tec|gpt|assinatura|mensalidade|netflix|spotify/.test(text))return 'Assinaturas';
  if(/empréstimo|emprestimo|dívida|divida|devolver/.test(text))return 'Dívidas';
  if(/studio|tênis|tenis|placa|ventoinha|processador|suporte|brinquedo|roupa|bateria|lightbar/.test(text))return 'Compras';
  if(/cinema|jogo|lazer|passeio/.test(text))return 'Lazer';
  if(/nubank|mercado pago|banco do brasil|fatura|cartão|cartao/.test(text))return 'Cartões e faturas';
  return 'Outros';
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
    bill.status=next[bill.status];bill.updatedAt=Date.now();await saveState();render();toast('Situação atualizada e criptografada.');
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
  if(latest.income)state.income=structuredClone(latest.income);
  for(const item of latest.clearConsolidatedTotals||[]){
    if(state.consolidatedTotals?.[item.scope])delete state.consolidatedTotals[item.scope][item.month];
  }
  state.dataRevision=revision;
  await saveState();return true;
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
    await saveState();form.reset();$('#billDialog').close();render();toast('Lançamento salvo de forma criptografada.');
  }finally{
    savingBill=false;submit.disabled=false;submit.textContent='Salvar lançamento';
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
  state.bills.splice(index,1);pendingDeleteId=null;
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
