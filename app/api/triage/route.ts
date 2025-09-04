import { NextRequest } from 'next/server';
function decideReply(text:string){
  const t=text.toLowerCase();
  const urgent=/dringend|urgent|vandaag|nu|24/.test(t);
  const toilet=/wc|toilet/.test(t);
  const recurring=/terugkerend|meermaals|geur|bij regen|stank/.test(t);
  if(urgent) return 'Begrijpelijk. We werken met een 24u-belofte. Ik kan je inplannen voor vandaag of morgen. Wil je dat ik meteen een aanvraag aanmaak, of mag iemand van de planning je bellen?';
  if(recurring && toilet) return 'Klinkt als een terugkerend wc-probleem. Camera-inspectie is aangeraden. We plannen binnen 24 uur. Wil je je adres doorgeven?';
  return 'We plannen intern en bevestigen je tijdsvenster per sms/WhatsApp. Mag ik je adres en telefoon noteren, of wil je dat iemand van de planning je belt?';
}
export async function POST(req:NextRequest){
  const body=await req.json(); const history=body.history||[]; const last=history[history.length-1]?.text||'';
  return new Response(JSON.stringify({reply:decideReply(last)}),{headers:{'Content-Type':'application/json'}});
}
