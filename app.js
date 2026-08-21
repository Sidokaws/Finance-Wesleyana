const STORAGE_KEY='finance-wesleyana-vault-v2';
const RECOVERY_KEY='finance-wesleyana-vault-recovery-v1';
const REMEMBER_DB='finance-wesleyana-access-v1',REMEMBER_STORE='keys',REMEMBER_ID='device-unlock';
const DEFAULT_PAYLOAD={"v":2,"i":310000,"z":"gzip","salt":"z6w4C66Anil+juuBgb0tlQ==","iv":"lDFNMjSGXtjqa4pg","data":"SBi+CTO+vvsi5WA5xDeeeLf6Jk1eZm+lfdt86n4Pw2GRJO5iZsB6l7Ix8yrgs1fZdINaSUe7cyORfjdM9cVdbeNkvlBVY/VTHs8lMyghfXdvo/0zDWAq8En66s6LJHr9OPEkqwTwWu40b6IpKlA7aUw5P1NLnKbh/GMe+HpR34+xtNzwS6nA93pq+8Swe365hp6vSQBich9+KJf+uOuZUeZN1KPUHaCRME4IWln6MKZS8PRwz8YOm7jMEOntUXpQUual5U5KVw+p6Q03owsMm1b5ATfqzvnwp3bmP6EohVbizc5wDO9O6ZMVzUbtbGI8GfhlgeRPgmMam3HWwDON1ZHP/crnqnJcAUP3QZFjshiRd9GBEig77yUaH5UdcBJ9PGHrn+9/hjtJc5jr4JzmMaN/7IxEV6XYnD1j5BUUBbWaxTjCaxaw0AzexsASwdofVkF/cWO6xghq/TlELfpwauZU999KXynMtucLH0zm1HmPSZpWQ/5Ld2naliQWXoGhG+70tvrVuDU5ADmuPo3jfVyBrJgX3x82E93ejHmTwxeixSc0/rtBQ2QlS2DiOg3f6wLrhX9fUxsx8rUVEffZ/gZanIkDvx7WBHnjREWc5RGDnBxZFEECQ+6SycKpcxbAOl/5G5RGdSao0CgCG1sk8RKKGOkZ/i8RQERnP3K8UNCq4a+vWiimR8cPs9cIyOzEV4lliba3WrNNI8EOqHcmzHO1/Or+YoPr11DIqH4hU5162XIiYALoeeEjoO+/e96zs4iGPU4lWSaonjl1nlS3Eyqzv1ljxBbxFzbeQsqVfSYHWRdygsAUo33Ua6yJlLcbzIDLP5nfhYlRCfefMc9xnpMZ5aYI/7L/0a7CAmtwDRGaQ85YiS8EtwdJEYTYl7x+tL+nSOxUyXyRSstcjHbFX1gAFP+7fkFidma49AJmrBaxjHT3fwIPA7VAY6c6GPrdPOzTG8X8n2t+736ctceRGvzNs38Ex6hjytS4ouVd98Wobd/ETNApC+2mCGH76/VWaOxaOUPhY/2kEI2EOwh7QfvUi6Hw98ncbcgKaUtiPEbTish9iYht9B5phr32FTxAKrrJSFRIjVirTrDSGy8DMhnx/YkG3O9Y0rwAgP6mt4nGNJIQ3hO+jUU+WAHoxYMo2V4t46sGDybxPhub7B7ELbyyMMnx6UWCEc72eCQdOq0fmsgLe83hFRK7LNUQ9UQqVDyK7Y24W0Z/qX0OhbxHSPEavsXq19lX3QRlcapn+uyAVSgfDcluis2IpzHUGpRLTcC+UdCRA/QzC8hISwxNOknjx7xy6uIfVYSBi0Onjv5glRYO5X1jxI0pXOHD7qoeTHNYX6ItNFkMIVfI82JdUeIvT7Y1W7pYWMv8pKOzIJ//+l7tQBUBU6MM3W9K3J/D1PWJBfe85ZXu/hM4hFBw9sUeCl/KCESeRva9QVoWeByabLR2v/4xW2vb9/gLR/+KLw8nZ1SPcCjV4jEFvJFGE+W1q/GQW6H6kZtuGzS2LUR/8H80O3ux5VZ1+KO4mXLshgD/RnpkW1iBIMxnbPMY6+UIgHvcQhdWbC3Cz4HSPzizWH09l0jzdBJ3/Mtel7iGUn/rE0Q/1to7HqYgbaJhP7/pv3MGoa/EwTcFfOEam9MecSeJ2UcPNNkMQDI+6aiWWogVRJNKgZBliz4P3jngnz6RVmxzaGB0T+F+ns6PZA2W/ivU90UsLbSNAkioC0p0A/K8E6Bj"};
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
  const owner=bill.owner||'wesley';
  if(scope==='joint')return owner==='joint'?Math.max(0,bill.amount-(bill.expectedRefund||0)):0;
  if(scope==='ana'){
    if(owner==='ana')return Math.max(0,bill.amount-(bill.expectedRefund||0));
    return bill.anaAmount??bill.anaContribution??0;
  }
  if(owner!=='wesley')return 0;
  return Math.max(0,bill.amount-(bill.anaContribution||0)-(bill.expectedRefund||0));
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
  const text=`${bill.account||''} ${bill.title||''} ${bill.note||''}`.toLowerCase();
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
  for(const bill of bills){
    const amount=amountForScope(bill,state.scope);
    if(amount<=0)continue;
    const category=categoryFor(bill);
    grouped.set(category,(grouped.get(category)||0)+amount);
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
  const radius=37,circumference=2*Math.PI*radius,gap=Math.min(1.8,circumference/(groups.length*18));let start=0;
  const segments=groups.map(([category,value],index)=>{
    const portion=value/total,visibleLength=Math.max(.1,portion*circumference-gap),offset=-(start*circumference);start+=portion;
    const percent=portion*100,color=colors[index%colors.length];
    return `<circle class="donut-segment" cx="50" cy="50" r="${radius}" pathLength="${circumference}" stroke="${color}" stroke-dasharray="${visibleLength} ${circumference-visibleLength}" stroke-dashoffset="${offset}" transform="rotate(-90 50 50)"><title>${escapeHtml(category)}: ${brl(value)} (${percent.toFixed(1).replace('.',',')}%)</title></circle>`;
  }).join('');
  const legend=groups.map(([category,value],index)=>{const percent=value/total*100,color=colors[index%colors.length];return `<div class="legend-row"><i class="legend-dot" style="--dot:${color}"></i><div class="legend-copy"><strong>${escapeHtml(category)}</strong><small>${percent.toFixed(percent>=10?0:1).replace('.',',')}% do mês</small></div><div class="legend-value"><strong>${brl(value)}</strong><small>${percent.toFixed(1).replace('.',',')}%</small></div></div>`}).join('');
  box.innerHTML=`<div class="donut-wrap"><svg class="donut-svg" viewBox="0 0 100 100" aria-hidden="true"><circle class="donut-track" cx="50" cy="50" r="${radius}"></circle>${segments}</svg><div class="donut-center"><span>Total</span><strong>${brl(total)}</strong></div></div><div class="chart-legend">${legend}</div>`;
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
  if(state.scope==='wesley'){$('#debtValue').textContent=brl(state.debt.amount);$('#immediateValue').textContent=brl(state.debt.immediate);$('#internetValue').textContent=brl(state.debt.internet)}
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
      currentPassword=password;rememberDeviceEnabled=true;rememberedReady=true;
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
