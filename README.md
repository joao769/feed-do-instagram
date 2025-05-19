# Feed do Instagram

**Projeto desenvolvido para a disciplina de *Programação Web*, no curso de *Engenharia de Software* da UPE.**  
Atividade proposta pelo professor *Augusto*, este projeto é uma réplica do Feed de Postagens do Instagram, desenvolvido com React/Next.js e estilizado com Tailwind CSS.  
O objetivo é reproduzir a interface e funcionalidades básicas de um feed de postagens, conforme modelo fornecido.

##  ⚙️ Funcionalidades Implementadas

- **Componente PostItem**: Recebe um objeto post com propriedades típicas de uma postagem do Instagram.

- **Array de Postagens**: Os dados das postagens estão organizados no arquivo posts.json, que contém um array com pelo menos 20 objetos representando diferentes publicações. Esse arquivo é utilizado para alimentar dinamicamente o feed.

- **Renderização Dinâmica**: As postagens são exibidas em sequência no feed a partir do conteúdo do JSON, garantindo modularidade e separação entre lógica e dados.

- **Botão Like Interativo**:
  - O botão de curtida pode ser clicado para alternar entre os estados “curtido” e “não curtido”.
  - O ícone do botão muda para um coração preenchido quando curtido e para o coração vazio quando não curtido.
  - A contagem de curtidas é atualizada dinamicamente para refletir a ação do usuário.

## 🚀 Como executar o Projeto

1. Clone o repositório:

    ```bash
    git clone https://github.com/joao769/feed-do-instagram.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd feed-do-instagram
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Execute o projeto:

    ```bash
    npm run dev
    ```

5. Acesse `http://localhost:3000` no seu navegador para visualizar o feed.