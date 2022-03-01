## Proposta

Site hospedado na vercel https://private-code-challenge-supertgo.vercel.app/

Esse projeto foi realizado durante o desafio da [private code](https://privatecode.com.br/) para aplicação de uma vaga remota de front-end.

O objetivo era replicar o layout da landing page presente no [Figma](https://www.figma.com/file/ESJgBz1dpcImjUwe4pcLex/Desafio?node-id=0%3A1) utilizando os seguintes requisitos com um prazo de 5 dias: 

  - A aplicação deveria ser responsiva atendendo a versão web e mobile;
  - Fidelidade ao layout;
  - Utilização das tecnologias HTML, CSS e JS;
  - Publicar a aplicação e compartilhar o link de acesso

## Demos

<img src="/demo/private-code-challenge-desktop.gif" />

<p align="center">
  <img src="/demo/private-code-challenge-mobile.gif" />
</p>


## Habilidades desenvolvidas/aprimoradas durante o desenvolvimento do projeto

### Componentes 

O primeiro passo que realizei durante a criação do projeto foi uma varredura pelo arquivo do figma. Sendo assim, busquei as principais incidências e as transformei em componentes como, por exemplo, os botões presentes em quase todas as seções que apenas variavam no tamanho e no conteúdo - com ou sem ícone. Além do mais, criei um arquivo que generaliza, majoritariamente, os espaçamento do items e cores. Ele está presente  em src/styles/theme.ts.

### Testes

Os principais components foram testados unitariamente utilizando as tecnologias Jest e ReactTestingLibrary. 

### Templates

Visando o ampliamento do projeto, separando as responsabilidades e evitando o DRY, criei alguns templates que podem ser reutilizados em páginas futuras. Um exemplo dessa prática é o template "Base", que contém o Menu(Header) e o Footer da aplicação além de receber um children, que é o conteúddo único da página.

### Deploy

O deploy foi realizado na plataforma da Vercel porque o projeto foi desenvolvido em NextJS.
 
## Tecnologias

Dentre as demais utilizadas, as principais tecnologias são essas

- [TypeScript](https://www.typescriptlang.org/) Ferramenta para garantir a tipagem e evitar possíveis erros durante o envio de dados.
- [NextJS](https://nextjs.org/) Framework para ser aplicado durante a produção da aplicação.
- [Styled Components](https://styled-components.com/) Ferramenta para utilizar o conceito de CSS in JS e facilitar a mutação dos elementos conforme a viewport.
- [Jest](https://jestjs.io/) Ferramenta para realizar testes unitários dos principais componentes da aplicação.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) Ferramenta para simular o DOM durante a testagem da aplicação.
- [Storybook](https://storybook.js.org/) Tecnologia utilizada para verfificar e usar, de maneira individual, os compoentes criados.
- [Eslint](https://eslint.org/) Utilizado para verficiar erros de sintaxe.
- [Prettier](https://prettier.io/) Foi utilizado para padronizar a escrita do código.
- [Husky](https://github.com/typicode/husky) Ferramenta para evitar que erros de sintaxe sejam enviados ao github.

## Como testar no seu computador

Após baixar o repositório, rode um dos seguintes comandos no terminal:

```bash
npm run dev
# or
yarn dev
```

Abra a url no link: [http://localhost:3000](http://localhost:3000).



## Comandos

- `dev`: Roda a aplicação no `localhost:3000`
- `build`: Cria uma versão de build
- `start`: Inicia um servidor em build
- `lint`: Roda os linters em todos os arquivos que foram monitorados
- `test`: Roda o Jest para testar todos os componentes da aplicação
- `test:watch`: Roda o Jest em watch mode
- `storybook`: Roda o Storybook no`localhost:6006`



