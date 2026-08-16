import {json,session,clearCookie} from "../_helpers.js";
export async function onRequestPost({request,env}){const s=await session(request,env);if(s)await env.DB.prepare("DELETE FROM sessions WHERE token_hash=?").bind(s.tokenHash).run();return json({ok:true},200,{"Set-Cookie":clearCookie(),"Cache-Control":"no-store"})}
