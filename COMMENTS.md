# Decisão da arquitetura utilizada
    **Banco de dados**
        - Postgres

    **Front-end:**
        - Axios
        - Vuetify

    **Back-end:**
        - A arquitetura utilizada foi a MCS (Model - Controller - Service)
        - CONTROLLER: Camada responsável pela interação com o cliente da API. Ela é responsável por receber as requisições com o request, fazer a chamada da camada de service, passando os dados necessários e retornar o que foi solicitado, se possível através do response.
        - SERVICE: Camada responsável pelas regras de negócio da sua aplicação. Ela é chamada pela camada Controller, recebendo ou não parâmetros. Faz as verificações e aplica as regras de negócio da sua aplicação e faz a chamada para a camada de Model, para fazer a interação com o sistema de armazenamento dos dados.
        - MODEL: Camada responsável por interações com o banco de dados ou com a ferramenta responsável pelo armazenamento dos nossos dados. SOMENTE a camada model é responsável por isso

        - Fonte: https://medium.com/@marianamohr/arquitetura-msc-o-que-%C3%A9-e-por-que-usar-42ad4cf19583

        - Escolhi esse arquitetura pela facilidade de dar manutenção, fácil compreensão.


# Lista de bibliotecas de terceiros utilizadas
    **Front-end:**
        - Axios
        - Vuetify

    **Back-end:**
        - sequelize

# O que você melhoraria se tivesse mais tempo
    - Adicionaria testes tanto no back quanto no front para garantir que quando fosse feito uma mudança em qualquer área seria garantido que não afetaria as já existentes e não quebraria o sistema ou faria funcionar de forma incorreta.
    - Documentação dos componentes com o storybook, desta forma ficaria fácil o entendimento de quais props ele recebe, suas possíveis variações.
# Quais requisitos obrigatórios que não foram entregues
    - Todos foram entregues