const STORAGE_KEY='finance-wesleyana-vault-v2';
const DEFAULT_PAYLOAD={"v":2,"i":310000,"z":"gzip","salt":"VuplKe+8LSOFeyZ4Ss0TWg==","iv":"evLzxaVwe/pNp2dE","data":"kXv+j6TZhHt/TefR4km+Yk7vqNE6rxYLHxRGO6WV/gdwDjD1AKZEYu9F8tAiNeYhsdSjxCMFbuCNFS//1qvTjZnHhXDrSK7Le+cnLZc27Y7sFdxfN+7lG8V6c58+IpV6524QioYwbQ9DiZUN44p9Xr5z/JVHCY/NrfUBUUzspbY175IfdDMnN1/CvzzDA3yPmVe9Jc9bdp+reSRKTz2s9qGG23K95mW3Tjy+2EOMtHZbchOSSRys/XGBTR7UtxAL8qvNFQwmQzfsUNxRHn/nwGSkZtQmmgiUl3YJvs5mkuIqfFu+fyQ7Q4QR5LiI7/M7uWZwPA0o4RSjCobFiHZ/mNWaBkrnYnD/ktwiYWiMcvSfFFpob/wuFDYVAJi0wB0drJp/G47BHmMt9I0NVLqtbXqsUmanYGlPMFj8yQOkFVlZIZ1pid8ZF3EIrgYnj1FK/trizREToST7ubwgtbFOA0JGtWKX4M4irK6l1jZ5Lmdv+5wMhrJkF+/9Xl5AkO6cKWazDSsEDCSIloYzErhdry/XDUMuqvMHa1PlwapfZccqP8bGTZEZII3vXajZbGBvfyNJWlDmnUiELuXSGZnc9CoimFLcw2B1ZVgiufoI44VOvgKfQS1YXHpZTjF3jGzThH12wPXw+HLtTWYv9qey7xCPO/GeHKtoHxDNrVI1O/jpSqrse+IKyeCCRABjTxYTPxIHlLClkR22JGJxGiAhDsVBB+mgBSPwMwlbZTTAQzjx5Frh9+idxU3taAIN+Vh9bUl2wY2oTxPuFsuEO2okntuLu58qnYd6KyYlP7ZuyrurhwZGAaN2MKhPKY+M9cumemRfs/z89b/QRYZ3HJ1tD74fdrZYO1XXBrf1tOCbR883FDxIer2f5ctmodhH1jJnFc0XNbELy3aOY4jrtZtoS7smvPGnD4cUvQ2Ty32BZ5F69XJp7V6WT3iEMRpjTs0fdxGxymLa/7alceBsXHvkZ5RJPqd+Aw8vQDB8TsOU4tYNg4aWgfNagnK3Ee5VQe0qSK7XwJpWxgPn5BPpIfUx1wFXFPvGbqOfydm4zNAugMULvjhawh5i5q0QPxT0eTfSbZCMhP2XQvtPa14O1nCNtBbyPdtlsw5L4AyDEOlafm07dQXWofupDhrzoqtldHDTH0LNfj2SMzILTH8kIjjMOli4Ix6B9ZIxzvLJ3BDKNj5jwhMbI1e64/cqunqr8NCQFQ+ZT7yDzN/38nbc/K79H3Eju4ReHzIiSE/Z7yE0o7xqkwigPcWb99qE+JEV8/K1WP025NqZ9Y67Cbo8aoN4STk51CoYL0kiXtkUIOCvQPK4b38nmm9DG/GlMZRl4o5uKunshjG1nzFOLBdLrlLCsybsWVGOK/nw/vMFQ/goIb3tnmx48mKhIePb+M+dfjYL2lAXnOgQj50ACVP7SyB4dMRhrtIPxybcz3MGpshAChn12hG9aG9FkCEg8MXwbqH14Rm6WL5C1OauLWFXH01u1xT4Myy1izd77RTcdanpJvrT5GqYcotNDefIP9EwO2yJWNInlKIoIiuOBx3d16zw0vIPy6Xnrv991Cug5AwI/XcOuaGeueupXPfUrF5iPINDGkSmeQa40S6S0uJrV7ONevycbxPhZK9RVjhAAXDQ"};
const MONTHS={'2026-08':'Agosto','2026-09':'Setembro','2026-10':'Outubro'};
let state=null,currentPassword='',attempts=0;
const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const brl=value=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(Number(value)||0);
const parseMoney=value=>Number(String(value||'0').replace(/\./g,'').replace(',','.').replace(/[^0-9.-]/g,''))||0;
const escapeHtml=value=>String(value||'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const bytesToB64=bytes=>{let binary='';for(const byte of bytes)binary+=String.fromCharCode(byte);return btoa(binary)};
const b64ToBytes=value=>Uint8Array.from(atob(value),char=>char.charCodeAt(0));

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
  const encrypted=await encryptVault(state,currentPassword);
  localStorage.setItem(STORAGE_KEY,JSON.stringify(encrypted));
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
  return {total,paid,reserved,pending:Math.max(0,total-paid-reserved)};
}
function accountMark(account){return account==='Nubank'?'Nu':account==='Mercado Pago'?'MP':account==='Banco do Brasil'?'BB':account.slice(0,2)}

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
  renderBills(bills);renderAttention(bills,totals);renderRecurring(bills);
}
function renderBills(bills){
  const list=$('#billList');
  if(!bills.length){list.innerHTML='<div class="empty">Nenhum compromisso nesta visão.</div>';return}
  list.innerHTML=bills.map(bill=>{
    const scoped=amountForScope(bill,state.scope);
    const showOriginal=state.scope==='wesley'&&Math.abs(scoped-bill.amount)>.001;
    const note=state.scope==='ana'?(((bill.owner||'wesley')==='ana'?bill.note:bill.anaNote)||''):bill.note;
    return `<article class="bill-row"><div class="account-icon">${escapeHtml(accountMark(bill.account))}</div><div class="bill-copy"><div><strong>${escapeHtml(bill.account)}</strong><span>${escapeHtml(bill.title)}</span></div><p>Vence ${escapeHtml(bill.due)}${note?' · '+escapeHtml(note):''}</p></div><div class="bill-money"><strong>${brl(scoped)}</strong>${showOriginal?`<small>de ${brl(bill.amount)}</small>`:''}</div><button class="status ${bill.status}" data-status-id="${escapeHtml(bill.id)}" title="Clique para alterar">${bill.status==='paid'?'Pago':bill.status==='reserved'?'Separado':'Pendente'}</button></article>`
  }).join('');
  $$('[data-status-id]').forEach(button=>button.onclick=async()=>{
    const bill=state.bills.find(item=>item.id===button.dataset.statusId),next={pending:'reserved',reserved:'paid',paid:'pending'};
    bill.status=next[bill.status];await saveState();render();toast('Situação atualizada e criptografada.');
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

$('#loginForm').addEventListener('submit',async event=>{
  event.preventDefault();const password=$('#password').value,error=$('#loginError');
  if(attempts>=5){error.textContent='Muitas tentativas. Feche a aba e tente novamente.';error.classList.remove('hidden');return}
  try{
    const stored=localStorage.getItem(STORAGE_KEY);
    if(stored){
      try{state=await decryptVault(JSON.parse(stored),password)}
      catch{state=await decryptVault(DEFAULT_PAYLOAD,password)}
    }else{
      state=await decryptVault(DEFAULT_PAYLOAD,password);
    }
    currentPassword=password;
    $('#password').value='';error.classList.add('hidden');$('#lockScreen').classList.add('hidden');$('#app').classList.remove('hidden');render();
  }catch{
    attempts++;error.textContent='Senha incorreta.';error.classList.remove('hidden');$('#password').value='';
  }
});
$$('.scope-tabs button').forEach(button=>button.onclick=()=>{state.scope=button.dataset.scope;render()});
$$('.month-tabs button').forEach(button=>button.onclick=()=>{state.month=button.dataset.month;render()});
$('#lockBtn').onclick=()=>{state=null;currentPassword='';$('#app').classList.add('hidden');$('#lockScreen').classList.remove('hidden');$('#password').focus()};
$('#addBtn').onclick=()=>$('#billDialog').showModal();
$('#changePasswordBtn').onclick=()=>$('#passwordDialog').showModal();
$$('[data-close]').forEach(button=>button.onclick=()=>$('#'+button.dataset.close).close());

$('#billForm').addEventListener('submit',async event=>{
  event.preventDefault();const data=new FormData(event.currentTarget);
  state.bills.push({id:crypto.randomUUID(),month:state.month,owner:state.scope,account:String(data.get('account')).trim(),title:String(data.get('title')).trim(),amount:parseMoney(data.get('amount')),due:String(data.get('due')).trim(),status:String(data.get('status')),note:String(data.get('note')||'').trim()});
  await saveState();event.currentTarget.reset();$('#billDialog').close();render();toast('Lançamento salvo de forma criptografada.');
});
$('#passwordForm').addEventListener('submit',async event=>{
  event.preventDefault();const data=new FormData(event.currentTarget),next=String(data.get('newPassword')),confirmation=String(data.get('confirmation')),error=$('#passwordError');
  if(next.length<10){error.textContent='Use pelo menos 10 caracteres.';error.classList.remove('hidden');return}
  if(next!==confirmation){error.textContent='As senhas não são iguais.';error.classList.remove('hidden');return}
  currentPassword=next;await saveState();event.currentTarget.reset();error.classList.add('hidden');$('#passwordDialog').close();toast('Senha alterada e dados recriptografados.');
});
