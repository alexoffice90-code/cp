export function json(data,status=200,headers={}){return new Response(JSON.stringify(data),{status,headers:{"Content-Type":"application/json; charset=utf-8",...headers}})}
export function b64(bytes){let s="";for(const b of bytes)s+=String.fromCharCode(b);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}
export function token(n=32){const a=new Uint8Array(n);crypto.getRandomValues(a);return b64(a)}
export async function sha256(s){const d=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return b64(new Uint8Array(d))}
function bytesFromB64(s){s=s.replace(/-/g,"+").replace(/_/g,"/");s+="=".repeat((4-s.length%4)%4);return Uint8Array.from(atob(s),c=>c.charCodeAt(0))}
export async function hashPassword(password,salt){const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(password),"PBKDF2",false,["deriveBits"]);const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt:bytesFromB64(salt),iterations:120000,hash:"SHA-256"},key,256);return b64(new Uint8Array(bits))}
export async function makePassword(p){const a=new Uint8Array(16);crypto.getRandomValues(a);const salt=b64(a);return {salt,hash:await hashPassword(p,salt)}}
export function cookies(r){const o={};for(const p of (r.headers.get("Cookie")||"").split(";")){const i=p.indexOf("=");if(i>0)o[p.slice(0,i).trim()]=decodeURIComponent(p.slice(i+1).trim())}return o}
export async function session(request,env){const t=cookies(request).planner_session;if(!t)return null;const h=await sha256(t);const r=await env.DB.prepare("SELECT s.user_id,s.expires_at,u.username FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=?").bind(h).first();if(!r)return null;if(Number(r.expires_at)<Date.now()){await env.DB.prepare("DELETE FROM sessions WHERE token_hash=?").bind(h).run();return null}return {userId:r.user_id,username:r.username,tokenHash:h}}
export async function createSession(id,env){const t=token(),h=await sha256(t),now=Date.now(),exp=now+30*86400000;await env.DB.prepare("INSERT INTO sessions(token_hash,user_id,expires_at,created_at) VALUES(?,?,?,?)").bind(h,id,exp,now).run();return t}
export function cookie(t){return `planner_session=${encodeURIComponent(t)}; Path=/; Max-Age=2592000; HttpOnly; Secure; SameSite=Lax`}
export function clearCookie(){return "planner_session=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax"}
