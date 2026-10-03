import Link from 'next/link';
import {products} from '@/data/products';
import ProductCard from '@/components/ProductCard';
export default function Home(){
 const fresh=products.filter(p=>p.badge=='NEW'),ltd=products.filter(p=>p.badge=='LIMITED');
 return <>
 <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center">
  <div><p className="font-bold text-electric">NEW DROP</p>
   <h1 className="mt-2 bg-gradient-to-r from-ink via-electric to-violet bg-clip-text text-6xl font-black leading-[.95] tracking-tight text-transparent md:text-8xl">BE DIFFERENT. BE ÚNICO.</h1>
   <p className="mt-5 max-w-md text-ink/70">Descubra peças criadas para quem não nasceu para seguir tendências.</p>
   <div className="mt-7 flex flex-wrap gap-3"><Link href="/shop" className="rounded-full bg-electric px-7 py-3 font-bold text-white">SHOP NOW</Link><Link href="/shop?sort=new" className="rounded-full border-2 border-ink px-7 py-3 font-bold">EXPLORE COLLECTION</Link></div></div>
  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-electric via-violet to-ink"><div className="absolute inset-0 grid place-items-center text-center text-white/80"><div><div className="text-8xl font-black">Ú</div><p className="mt-3 text-xs uppercase tracking-widest">Foto de campanha: substituir (public/)</p></div></div></div>
 </section>
 <section className="mx-auto max-w-7xl px-4 py-12"><h2 className="text-4xl font-black">NEW DROP</h2><p className="mb-6 text-ink/60">As peças que acabam de chegar.</p>
  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{fresh.map(p=><ProductCard key={p.slug} p={p}/>)}</div></section>
 <section className="bg-ink py-14 text-off"><div className="mx-auto max-w-7xl px-4"><h2 className="text-4xl font-black">LIMITED EDITION</h2><p className="mb-6 text-off/70">Algumas peças não foram feitas para durar para sempre.</p>
  {ltd.map(p=><div key={p.slug} className="grid max-w-3xl gap-4 md:grid-cols-2"><div className="text-ink"><ProductCard p={p}/></div><div className="self-center"><span className="rounded-full bg-violet px-3 py-1 text-xs font-bold">LIMITED DROP</span><p className="mt-3 text-2xl font-bold">Restam {p.stock} peças</p><p className="text-sm text-off/60">Número demonstrativo vindo do estoque cadastrado.</p></div></div>)}</div></section>
 <section className="mx-auto max-w-xl px-4 py-16 text-center"><h2 className="text-3xl font-black">JOIN THE ÚNICO WORLD</h2><p className="mt-2 text-ink/60">Receba primeiro os novos drops, coleções exclusivas e novidades da ÚNICO.</p>
  <form className="mt-5 flex gap-2"><input type="email" required aria-label="Seu e-mail" placeholder="Your email" className="min-w-0 flex-1 rounded-full border border-ink/20 px-5 py-3"/><button className="rounded-full bg-ink px-6 font-bold text-white">JOIN</button></form></section></>;
}
