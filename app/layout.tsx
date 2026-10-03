import './globals.css';
import type {Metadata} from 'next';
import {StoreProvider} from '@/lib/store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
export const metadata:Metadata={title:{default:'ÚNICO — Streetwear Made Different',template:'%s | ÚNICO'},description:'Descubra a ÚNICO, uma marca contemporânea de streetwear criada para quem transforma estilo em identidade.',openGraph:{title:'ÚNICO — Streetwear Made Different',type:'website',locale:'pt_BR'}};
export default function Root({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><StoreProvider><Header/><main>{children}</main><Footer/><CartDrawer/></StoreProvider></body></html>}
