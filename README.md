# Site pessoal — Erberth Henrique

Site estático em HTML, CSS e JavaScript, preparado para publicação no GitHub Pages.

## Publicar no GitHub Pages

1. Crie um repositório **público** chamado exatamente `erberthdev.github.io` na conta `erberthdev`.
2. Envie todos os arquivos desta pasta para a raiz do repositório. O `index.html` precisa ficar na raiz.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`. Salve.
5. Aguarde a publicação e abra `https://erberthdev.github.io/`.

Se você usar outro nome de repositório, o endereço padrão será diferente e será necessário atualizar os endereços canônicos, `robots.txt`, `sitemap.xml` e JSON-LD.

## SEO já incluído

- título e meta description em português;
- `robots` meta tag;
- URL canonical;
- Open Graph básico;
- dados estruturados JSON-LD do tipo `Person`;
- `robots.txt` e `sitemap.xml`;
- idioma `pt-BR`, layout responsivo e respeita preferência por movimento reduzido.

## Depois da publicação

1. Abra o [Google Search Console](https://search.google.com/search-console/).
2. Adicione uma propriedade de prefixo de URL com `https://erberthdev.github.io/` e conclua a verificação solicitada.
3. Envie o sitemap: `https://erberthdev.github.io/sitemap.xml`.
4. Use a inspeção de URL para testar a página publicada e, se disponível, solicitar indexação.
5. Confira no navegador se `https://erberthdev.github.io/robots.txt` e `https://erberthdev.github.io/sitemap.xml` abrem corretamente.

## Personalizar projetos

No `index.html`, os três cartões de projeto apontam para o perfil do GitHub por enquanto. Quando os repositórios estiverem públicos, substitua esses links pelos endereços exatos de cada projeto. Mantenha as descrições fiéis ao estado real dos projetos.

## Observações

- A indexação e a exibição em resultados de busca não são garantidas nem imediatas.
- O JSON-LD ajuda mecanismos de busca a interpretar a página; não garante que uma IA específica use essas informações.
- O site carrega as fontes Manrope e DM Mono do Google Fonts. Se preferir evitar chamadas externas, remova a linha `@import` no início de `style.css`; fontes de sistema serão usadas como alternativa.
