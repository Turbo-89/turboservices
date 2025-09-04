import fs from 'fs'; import path from 'path'; import RiveLogo from '@/components/RiveLogo';
function getPosts(){ const dir=path.join(process.cwd(),'content'); if(!fs.existsSync(dir)) return []; return fs.readdirSync(dir).filter(f=>f.endsWith('.md')).map(f=>({slug:f.replace(/\.md$/,''), title:f.replace(/\.md$/,'').replace(/-/g,' ')})); }
export default function Blog(){ const posts=getPosts(); return (<section className="container py-12">
  <div className="flex items-center justify-between mb-6"><h1 className="text-3xl font-bold">Weetjes & tips</h1><RiveLogo variant="blog" className="w-12 h-12" /></div>
  <p className="mb-4">Korte, praktische tips en cases. Handig voor klanten, én goed voor Google.</p>
  <ul className="list-disc pl-6">{posts.map(p=>(<li key={p.slug}><a className="underline" href={`/blog/${p.slug}`}>{p.title}</a></li>))}</ul>
</section>); }
