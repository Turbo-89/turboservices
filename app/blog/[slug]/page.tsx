import fs from 'fs'; import path from 'path';
export default function Post({ params }:{ params:{ slug:string }}){
  const file=path.join(process.cwd(),'content',`${params.slug}.md`);
  const text=fs.existsSync(file)?fs.readFileSync(file,'utf8'):'# Niet gevonden';
  return (<section className="container py-12 prose max-w-none"><article dangerouslySetInnerHTML={{__html:text.replace(/\n/g,'<br/>')}}/></section>);
}
