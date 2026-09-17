(() => {
  const EXPECTED_HASH = '7dc0c9bf3c59c3200bfe7bf08421ccd99e01ccd538dbce3ea8a343d678526a6b';
  const SESSION_KEY = 'bearBellSiteSession';
  const MAX_AGE_MS = 8 * 60 * 60 * 1000;

  async function sha256(value){
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(digest)).map(b=>b.toString(16).padStart(2,'0')).join('');
  }
  function readSession(){
    try{
      const s=JSON.parse(sessionStorage.getItem(SESSION_KEY)||'null');
      if(!s||!s.role||!s.time||Date.now()-s.time>MAX_AGE_MS)return null;
      return s;
    }catch{return null}
  }
  function setSession(role){sessionStorage.setItem(SESSION_KEY,JSON.stringify({role,time:Date.now()}));}
  function clearSession(){sessionStorage.removeItem(SESSION_KEY);}
  function hasRole(role){const s=readSession();return !!s&&s.role===role;}
  function hasAny(roles){const s=readSession();return !!s&&roles.includes(s.role);}
  async function verify(code){return (await sha256((code||'').trim()))===EXPECTED_HASH;}
  function label(role){return ({'grand-secretary':'Grand Secretary','webmaster':'Webmaster'})[role]||'Authorised Area';}
  function gate(role,onSuccess){
    const overlay=document.createElement('div');overlay.className='login-overlay';
    overlay.innerHTML=`<div class="login-card"><img src="logo.svg" alt="Bear Bell emblem" style="width:130px"><div class="eyebrow">Secure Bear Bell Portal</div><h1>${label(role)} Access</h1><p>Enter the authorised code to continue.</p><form id="bbLogin"><input id="bbCode" type="password" autocomplete="current-password" placeholder="Access code" required><div id="bbError" class="error"></div><button class="button primary" type="submit">Enter ${label(role)}</button></form><p class="small" style="color:#cdbd96;margin-top:18px">Access remains active only for this browser tab/session.</p></div>`;
    document.body.appendChild(overlay);
    const form=overlay.querySelector('#bbLogin'),input=overlay.querySelector('#bbCode'),error=overlay.querySelector('#bbError');
    setTimeout(()=>input.focus(),40);
    form.addEventListener('submit',async e=>{e.preventDefault();error.textContent='Checking…';if(!(await verify(input.value))){error.textContent='Incorrect access code.';input.select();return;}setSession(role);overlay.remove();onSuccess?.();});
  }
  function protect(role){if(hasRole(role))return;gate(role);}
  function protectAny(roles){if(hasAny(roles))return;gate(roles[0]);}
  function loginAndGo(role,url){if(hasRole(role)){location.href=url;return;}gate(role,()=>location.href=url);}
  function logout(){clearSession();location.href='index.html';}
  window.BearBellAuth={protect,protectAny,loginAndGo,logout,hasRole,hasAny};
})();
