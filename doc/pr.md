# Instruções para Pull Requests (PRs)

## Workflow de Desenvolvimento

### 1. Criar Nova Feature
- Crie uma nova branch a partir da `main`:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/nome-da-feature
  ```

### 2. Desenvolvimento
- Faça suas alterações no código
- Commit suas mudanças:
  ```bash
  git add .
  git commit -m "feat: descrição da feature"
  ```
- Push da branch:
  ```bash
  git push -u origin feature/nome-da-feature
  ```

### 3. Abrir Pull Request
- Acesse o repositório no GitHub
- Clique em "New Pull Request"
- Selecione: `base: main` → `compare: feature/nome-da-feature`
- Adicione título e descrição
- Clique em "Create Pull Request"

### 4. Aguardar E2E e Revisão
- ✅ **E2E automatizado**: O workflow `e2e` executará automaticamente
- ✅ **Aguardar approval**: Se configurado, aguardar aprovação
- ✅ **Corrigir falhas**: Se o E2E falhar, corrija e force push na branch

### 5. Merge
- Quando tudo estiver verde (e2e passou + aprovação):
  - Clique em "Merge pull request"
  - Selecione "Confirm merge"
  - Delete a branch após merge (botão que aparece depois)

## Convenções de Commit

### Prefixos
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `refactor:` - Refatoração de código
- `test:` - Adição ou correção de testes
- `ci:` - Mudanças em CI/CD
- `docs:` - Documentação
- `chore:` - Tarefas de manutenção

### Exemplos
```
feat: adicionar página de contato
fix: corrigir validação de formulário
test: adicionar testes E2E para agendamento
ci: configurar GitHub Actions para deploy
```

## Regras de Proteção da Branch `main`

### Requisitos Obrigatórios
1. ✅ **Pull Request obrigatório** - Não é possível fazer push direto na `main`
2. ✅ **E2E deve passar** - Todos os 45 testes devem ser aprovados
3. ✅ **Branches devem estar atualizadas** - Rebase/merge da main antes
4. ✅ **Force push bloqueado** - Não é possível fazer force push
5. ✅ **Deletar branch protegido** - Não é possível deletar a `main`

### Bypass
- Configurado apenas para administradores do repositório

## Troubleshooting

### E2E Falhou no PR
1. Clique em "Details" no check `e2e`
2. Veja os logs de erro
3. Corrija localmente:
   ```bash
   git checkout feature/nome-da-feature
   # faça correções
   git add .
   git commit -m "fix: corrigir problema no teste E2E"
   git push
   ```
4. O GitHub Actions reexecutará automaticamente

### Conflito com `main`
1. Atualize sua branch:
   ```bash
   git checkout feature/nome-da-feature
   git fetch origin
   git rebase origin/main
   # ou merge: git merge origin/main
   ```
2. Resolva conflitos se houver
3. Force push:
   ```bash
   git push --force-with-lease
   ```

### Reset de Branch
```bash
# Voltar para commit anterior da main
git checkout main
git pull origin main
git checkout -b feature/nova-tentativa

# Ou resetar branch atual
git reset --hard origin/main
```

## Checklist de PR

Antes de abrir um PR, verifique:
- [ ] Branch está atualizada com a `main`
- [ ] Commits seguem convenção (feat:, fix:, etc.)
- [ ] Código segue padrões do projeto
- [ ] Documentação atualizada (se necessário)
- [ ] Testes E2E passam localmente:
  ```bash
  npm run test:e2e
  ```

## Links Úteis
- Repositório: https://github.com/brunoadsba/site-porto-psicanalise
- Actions: https://github.com/brunoadsba/site-porto-psicanalise/actions
- Pull Requests: https://github.com/brunoadsba/site-porto-psicanalise/pulls

