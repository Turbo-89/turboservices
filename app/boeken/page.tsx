'use client';
import { useState } from 'react';
type Window = 'vandaag'|'morgen'|'andere'; type DayPart='ochtend'|'namiddag'|'avond';
export default function Aanvraag(){
  const [address,setAddress]=useState(''); const [contactName,setContactName]=useState(''); const [phone,setPhone]=useState(''); const [email,setEmail]=useState('');
  const [desc,setDesc]=useState(''); const [urgent,setUrgent]=useState(true); const [windowChoice,setWindowChoice]=useState<Window>('vandaag'); const [date,setDate]=useState(''); const [dayPart,setDayPart]=useState<DayPart>('ochtend');
  const [withCamera,setWithCamera]=useState(true); const [payerDiff,setPayerDiff]=useState(false); const [payerName,setPayerName]=useState(''); const [payerEmail,setPayerEmail]=useState(''); const [sendPaylink,setSendPaylink]=useState(true);
  const [serviceType,setServiceType]=useState<'ontstopping'|'ketel_aanbetaling'|'ketel_volledig'>('ontstopping'); const [submitted,setSubmitted]=useState<any>(null);
  async function submit(){ const payload={address,contactName,phone,email,desc,urgent,withCamera,window:windowChoice,date:windowChoice==='andere'?date:null,dayPart,payer:payerDiff?{name:payerName,email:payerEmail}:null,sendPaylink,serviceType};
    const res=await fetch('/api/request',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}); const data=await res.json(); setSubmitted(data); }
  return (<section className="container py-12"><h1 className="text-3xl font-bold mb-2">Aanvraag binnen 24 uur</h1><p className="mb-6 text-slate-600">We plannen intern en bevestigen via sms/WhatsApp. Geen publieke agenda.</p>
    {!submitted && (<div className="grid md:grid-cols-2 gap-8">
      <div className="border rounded-xl p-6"><h2 className="text-xl font-semibold mb-3">Jouw gegevens</h2>
        <div className="grid gap-3">
          <input className="border px-3 py-2 rounded" placeholder="Adres / Postcode" value={address} onChange={e=>setAddress(e.target.value)}/>
          <input className="border px-3 py-2 rounded" placeholder="Naam" value={contactName} onChange={e=>setContactName(e.target.value)}/>
          <input className="border px-3 py-2 rounded" placeholder="Telefoon" value={phone} onChange={e=>setPhone(e.target.value)}/>
          <input className="border px-3 py-2 rounded" placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)}/>
          <textarea className="border px-3 py-2 rounded" rows={4} placeholder="Beschrijf het probleem…" value={desc} onChange={e=>setDesc(e.target.value)}></textarea>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={withCamera} onChange={e=>setWithCamera(e.target.checked)}/> Camera-inspectie toevoegen (+€90)</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={urgent} onChange={e=>setUrgent(e.target.checked)}/> Dringend binnen 24 uur</label>
          <div className="grid md:grid-cols-3 gap-2 text-sm">
            <label className="flex items-center gap-2"><input type="radio" name="win" checked={windowChoice==='vandaag'} onChange={()=>setWindowChoice('vandaag')}/> Vandaag</label>
            <label className="flex items-center gap-2"><input type="radio" name="win" checked={windowChoice==='morgen'} onChange={()=>setWindowChoice('morgen')}/> Morgen</label>
            <label className="flex items-center gap-2"><input type="radio" name="win" checked={windowChoice==='andere'} onChange={()=>setWindowChoice('andere')}/> Andere dag</label>
          </div>
          {windowChoice==='andere' && (<div className="grid grid-cols-2 gap-2">
            <input type="date" className="border px-3 py-2 rounded" value={date} onChange={e=>setDate(e.target.value)}/>
            <select className="border px-3 py-2 rounded" value={dayPart} onChange={e=>setDayPart(e.target.value as DayPart)}>
              <option value="ochtend">Ochtend</option><option value="namiddag">Namiddag</option><option value="avond">Avond</option>
            </select>
          </div>)}
        </div>
      </div>
      <div className="border rounded-xl p-6"><h2 className="text-xl font-semibold mb-3">Betaling & betaler</h2><p className="text-sm text-slate-600 mb-3">Online betalen is mogelijk, handig als bv. de huisbaas betaalt.</p>
        <div className="grid gap-3">
          <label className="grid gap-1 text-sm"><span>Service / betaaltype</span>
            <select className="border px-3 py-2 rounded" value={serviceType} onChange={e=>setServiceType(e.target.value as any)}>
              <option value="ontstopping">Ontstopping (€160) + optioneel camera (+€90)</option>
              <option value="ketel_aanbetaling">Ketel – aanbetaling (bv. €500)</option>
              <option value="ketel_volledig">Ketel – volledig bedrag (bv. €3.500)</option>
            </select></label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={sendPaylink} onChange={e=>setSendPaylink(e.target.checked)}/> Stuur online betaal-link</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={payerDiff} onChange={e=>setPayerDiff(e.target.checked)}/> Betaler is iemand anders (bv. huisbaas)</label>
          {payerDiff && (<div className="grid gap-2">
            <input className="border px-3 py-2 rounded" placeholder="Naam betaler" value={payerName} onChange={e=>setPayerName(e.target.value)}/>
            <input className="border px-3 py-2 rounded" placeholder="E-mail betaler" value={payerEmail} onChange={e=>setPayerEmail(e.target.value)}/>
          </div>)}
          <button onClick={submit} className="bg-turbo-red text-white px-4 py-2 rounded mt-2">Aanvraag versturen</button>
          <p className="text-xs text-slate-500">We bevestigen jouw tijdsvenster via sms/WhatsApp. Geen publieke agenda.</p>
        </div>
      </div>
    </div>)}
    {submitted && (<div className="border rounded-xl p-6 bg-slate-50"><h2 className="text-xl font-semibold mb-2">Bedankt! Aanvraag ontvangen.</h2><p className="text-sm mb-2">{submitted.message}</p>{submitted.pay?.url && (<p className="text-sm">Betaal-link: <a className="underline" href={submitted.pay.url}>{submitted.pay.url}</a></p>)}</div>)}
  </section>);
}
