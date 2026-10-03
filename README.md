# ÚNICO — MVP de e-commerce (Next.js 14 + TypeScript + Tailwind)
    npm install
    npm run dev   # http://localhost:3000
## Onde mexer
- `data/products.ts`: produtos, preços, estoque, cupons (mock). Troque por banco/API.
- `types/index.ts`: modelos (Product, Order, Coupon...).
- `lib/pricing.ts`: subtotal, desconto, frete e total.
- `lib/payments.ts`: ponto de integração de pagamento (hoje mock, nada é cobrado).
- `components/ProductImage.tsx`: coloque URLs em `images` de cada produto; sem imagem aparece placeholder.
## Pendente
Conta/pedidos, admin, guia de tamanhos, filtros avançados, i18n, páginas de coleção.
