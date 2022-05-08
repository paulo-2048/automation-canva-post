# Automation Canva Post

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/Paulo-2048/automation-canva-post?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/Paulo-2048/automation-canva-post?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Paulo-2048/automation-canva-post?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/Paulo-2048/automation-canva-post?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/Paulo-2048/automation-canva-post?style=for-the-badge)

<img src="example-image.png" alt="Design Criado">

> O Projeto consiste basicamente em fazer um #scrawper com Puppeteer no site https://lnkd.in/drhxDe3 com #nodejs e colocar os tópicos mais quentes em uma planilha do #google, para depois conseguir resgatar essas informações e utiliza-las criando uma arte gráfica no #canva, fazendo o uploud para o google drive posteriormente.

> Atenção: Grande parte dos seletores e links, terão que ser alterados, removidos ou adicnados de acordo as suas necessidades, visto que eles tendem alterar o nome da classe por exemplo. (Mas qualquer dúvida, chama no Linkedlin que ficarei feliz em ajudar (https://www.linkedin.com/in/paulo-vitor-92174b148/)

### Ajustes e melhorias

O projeto ainda está finalizado mas está aberto para contribuições futuras:

- [x] Scrawpper no https://explodingtopics.com/ (Via Puppeteer)
- [x] Colocar dados na planilha do Google (Via API)
- [x] Pegar as dados da planilha (Via API)
- [x] Criar post no Canva (Via Puppeteer)
- [x] Salvar post criado em uma pasta do Google Drive

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* Você instalou a versão mais recente de `Node Js`
* Dependências: 
*   `dotenv: ^9.0.2,`
*   `google-spreadsheet: ^3.1.15,`
*   `puppeteer: ^9.1.1,`
*   `puppeteer-extra: ^3.1.18,`
*   `puppeteer-extra-plugin-stealth: ^2.7.8`

## 🚀 Instalando Automation Canva Post

Para instalar e executar o Projeto, siga estas etapas:

* Baixe e instale o `Node.js`
* Faça o git clone desse repositório e abra  no Vs Code (Ou outra idle de preferência)
* Faça o `npm init` para iniciar uma instância node e criar arquivos o package.json
* Instale as dependências via `npm` do node, via o próprio terminal
* Vá em https://console.cloud.google.com/apis/credentials?project=instagram-automation-sheets, para criar uma conta de serviço (Necessária para a API do Google Sheets)
* Crie o arquivo `.env` e configure as variáveis de ambiente com as informações do "credentials" da conta de serviço, e o login do canva:
* `GOOGLE_SERVICE_ACCOUNT_EMAIL=`
* `GOOGLE_PRIVATE_KEY=`
* `CANVA_LOGIN`
* `CANVA_PASSWORD=`
* Linkar sua conta do Canva a sua conta do Google (Fazer login com Google)
* Para exportar a arte do canva para o Drive ou baixar o arquivo, terá que codificar a parte comentada no `scrawper.js`.


## ☕ Usando o Projeto

* O programa executa ações automáticas, então depois de configurado todo ambiente e  executado o `index.js`, basta esperar e verificar o drive*.

## 📫 Contribuindo para Automation Canva Post
<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->
Para contribuir com Projeto, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b "Seu Nome"`.
3. Faça suas alterações e confirme-as: `git commit -m "Nome da Correção/Feature"`
4. Envie para o branch original
5. Crie a solicitação de pull.
6. Me envie uma mensagem no Linkedlin (https://www.linkedin.com/in/paulo-vitor-92174b148/)

[⬆ Voltar ao topo](#automation-canva-post)<br>
