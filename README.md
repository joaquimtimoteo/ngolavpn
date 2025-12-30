# NgolaVPN - Landing Page

Landing page moderna para o app NgolaVPN, desenvolvida em Next.js com Tailwind CSS.

## 🚀 Começar

### 1. Instalar dependências

```bash
npm install
```

### 2. Adicionar suas imagens

Coloque suas imagens na pasta `public/images/`:

```
public/
└── images/
    ├── logo.png            # Logo do NgolaVPN (40x40 ou maior)
    ├── onboarding_1.png    # Primeira imagem de onboarding do app
    ├── onboarding_2.png    # Segunda imagem de onboarding do app
    ├── onboarding_3.png    # Terceira imagem de onboarding (opcional)
    └── og-image.png        # Imagem para compartilhamento (1200x630)
```

#### 📸 Especificações das imagens:

| Imagem | Tamanho Recomendado | Uso |
|--------|---------------------|-----|
| `logo.png` | 200x200px | Header, Footer |
| `onboarding_1.png` | 1920x1080px | Hero background |
| `onboarding_2.png` | 800x1600px | Phone mockup |
| `og-image.png` | 1200x630px | Compartilhamento social |

### 3. Rodar em desenvolvimento

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

### 4. Build para produção

```bash
npm run build
```

## 🎨 Cores do Tema

As cores estão configuradas em `tailwind.config.js`:

| Nome | Cor | Uso |
|------|-----|-----|
| `primary` | #C4E538 | Destaques, gradientes |
| `secondary` | #00A650 | Botões, links (verde Unitel) |
| `background` | #0A0F0A | Fundo principal |
| `card` | #131A13 | Cards, seções |
| `gold` | #FFD700 | Estrelas, recompensas |

## 📁 Estrutura do Projeto

```
ngolavpn-landing/
├── public/
│   └── images/           # Suas imagens aqui
├── src/
│   ├── app/
│   │   ├── page.tsx      # Página principal
│   │   ├── layout.tsx    # Layout global
│   │   ├── globals.css   # Estilos globais
│   │   ├── privacidade/  # Política de privacidade
│   │   ├── termos/       # Termos de uso
│   │   └── contato/      # Página de contato
│   └── components/
│       ├── Header.tsx    # Navegação
│       └── Footer.tsx    # Rodapé
├── tailwind.config.js    # Configuração Tailwind
└── package.json
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Push para GitHub
2. Conecte no [vercel.com](https://vercel.com)
3. Deploy automático!

Ou via CLI:

```bash
npm i -g vercel
vercel
```

### Outros hosts

```bash
npm run build
npm run start
```

## ✏️ Personalização

### Alterar textos

Edite diretamente em `src/app/page.tsx`

### Alterar cores

Edite `tailwind.config.js` e `src/app/globals.css`

### Adicionar links de download

Em `src/app/page.tsx`, procure os botões de download e substitua `href="#"` pelos links reais:

```tsx
<a href="https://play.google.com/store/apps/details?id=seu.app">
```

### Alterar email de contato

Procure por `suporte@ngolavpn.com` e substitua pelo seu email.

## 📄 Páginas Incluídas

- `/` - Página principal
- `/privacidade` - Política de privacidade
- `/termos` - Termos de uso
- `/contato` - Página de contato

## 🇦🇴 Feito para Angola

Este projeto foi desenvolvido especialmente para o mercado angolano, com foco na Unitel e usuários que buscam internet grátis.

---

© 2024 NgolaVPN. Todos os direitos reservados.
