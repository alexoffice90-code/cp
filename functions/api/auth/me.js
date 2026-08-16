import {json,session} from "../_helpers.js";
export async function onRequestGet({request,env}){const s=await session(request,env);if(!s)return json({user:null},401,{"Cache-Control":"no-store"});return json({user:{id:s.userId,username:s.username}},200,{"Cache-Control":"no-store"})}
