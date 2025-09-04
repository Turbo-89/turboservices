import { NextRequest } from 'next/server';
import fs from 'fs'; import path from 'path';
function ensure(file:string){ const d=path.dirname(file); if(!fs.existsSync(d)) fs.mkdirSync(d,{recursive:true}); if(!fs.existsSync(file)) fs.writeFileSync(file,'[]'); }
async function createPayLink(kind:string){ return { url: `https://pay.example/${kind}/${Date.now()}` }; }
export async function POST(req:NextRequest){
  const body=await req.json(); const store=path.join(process.cwd(),'data','requests.json'); ensure(store);
  const all=JSON.parse(fs.readFileSync(store,'utf8')); const id=String(Date.now());
  const record={ id, createdAt:new Date().toISOString(), ...body, status:'new' }; all.push(record); fs.writeFileSync(store, JSON.stringify(all,null,2));
  let promise='We komen binnen 24 uur langs.';
  if(body.urgent){ promise='We plannen je voor vandaag of morgen. Je krijgt zo een sms/WhatsApp met tijdsvenster.'; }
  else if(body.window==='morgen'){ promise='We plannen je voor morgen. Tijdsvlak volgt per sms.'; }
  else if(body.window==='andere' && body.date){ promise=`We plannen je op ${body.date} (${body.dayPart}). Tijdsvlak volgt per sms.`; }
  let pay=null; if(body.sendPaylink){ let kind='ontstopping'; if(body.serviceType==='ketel_aanbetaling') kind='ketel_aanbetaling'; if(body.serviceType==='ketel_volledig') kind='ketel_volledig'; pay=await createPayLink(kind); }
  return new Response(JSON.stringify({ ok:true, id, message: promise, pay }), { headers:{'Content-Type':'application/json'} });
}
