# Site Profissional - Psicanalista

Site profissional e moderno para psicanalista, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização moderna e responsiva
- **Gray Matter** - Processamento de arquivos Markdown para o blog
- **Remark** - Processamento de Markdown

## 📋 Estrutura do Site

### Páginas

- **Home** (`/`) - Página inicial com Hero Section e apresentação
- **Sobre** (`/sobre`) - Informações sobre a psicanalista
- **Serviços** (`/servicos`) - Detalhamento dos serviços oferecidos
- **Blog** (`/blog`) - Artigos sobre saúde mental e psicanálise
- **Depoimentos** (`/depoimentos`) - Avaliações de pacientes
- **Contato** (`/contato`) - Formulário de contato e informações
- **Agendamento** (`/agendamento`) - Formulário para agendamento de consultas

### Componentes

- `Header` - Navegação responsiva com menu mobile
- `Footer` - Rodapé com links e informações de contato
- `Hero` - Seção hero da página inicial
- `ServiceCard` - Card para exibição de serviços
- `TestimonialCard` - Card para depoimentos
- `BlogCard` - Card para posts do blog
- `ContactForm` - Formulário de contato com validação
- `AppointmentForm` - Formulário de agendamento
- `StructuredData` - Dados estruturados para SEO

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

O site estará disponível em `http://localhost:3000`

## 📝 Configuração

### Personalização de Conteúdo

1. **Informações de Contato**: Edite os dados em:
   - `app/layout.tsx` (metadata)
   - `components/Footer.tsx`
   - `components/StructuredData.tsx`
   - `app/contato/page.tsx`

2. **Conteúdo das Páginas**: Edite os arquivos em `app/`:
   - `app/sobre/page.tsx`
   - `app/servicos/page.tsx`
   - `app/depoimentos/page.tsx`

3. **Blog**: Adicione posts em `content/blog/` como arquivos `.md` com frontmatter:
   ```markdown
   ---
   title: "Título do Post"
   date: "2024-01-15"
   excerpt: "Resumo do post"
   category: "Categoria"
   ---
   
   Conteúdo do post em Markdown...
   ```

### SEO

- **Sitemap**: Configurado em `app/sitemap.ts`
- **Robots.txt**: Configurado em `app/robots.ts`
- **Meta Tags**: Configuradas em `app/layout.tsx` e em cada página
- **Structured Data**: Configurado em `components/StructuredData.tsx`

⚠️ **Importante**: Atualize a URL base (`https://exemplo.com`) em:
- `app/sitemap.ts`
- `app/robots.ts`
- `app/layout.tsx`
- `components/StructuredData.tsx`

### Formulários

Os formulários de contato e agendamento estão configurados para simulação. Para integrar com serviços reais:

1. **Contato**: Edite `components/ContactForm.tsx` para integrar com API de email (ex: SendGrid, Resend)
2. **Agendamento**: Edite `components/AppointmentForm.tsx` para integrar com sistema de agendamento

## 🎨 Customização de Design

As cores e estilos podem ser personalizados em:
- `app/globals.css` - Variáveis CSS e estilos globais
- Classes Tailwind nos componentes

Cores principais definidas:
- Primary: Indigo (`#6366f1`)
- Secondary: Purple (`#8b5cf6`)
- Background: Branco suave

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop
- Tablet
- Mobile

## 🔒 Segurança e Privacidade

- Formulários com validação client-side
- Pronto para integração com APIs seguras
- Dados estruturados para conformidade com schema.org

## 📄 Licença

Este projeto foi criado para uso profissional.

## 🔄 Próximos Passos

1. Substituir informações placeholder pelo conteúdo real
2. Integrar formulários com serviços de email/agendamento
3. Adicionar imagens profissionais
4. Configurar domínio e hospedagem
5. Configurar Google Analytics e Search Console
6. Adicionar certificado SSL
