## Usuários/Atores

- Administrador
- Apostador do sistema
- Sistema


## Funcionais
1. Calcular o valor da aposta para um apostador vencedor  [ok]
    - O sistema deve calcular o valor que N apostadores vão ganhar quando estes forem vencedores de uma aposta. 
2. Registrar a aposta de um apostador em uma aposta aberta [ok]
3. O Administrador deve poder Fechar uma aposta na data desejada manualmente [ok]
    - Quem participou
    - Vencedores
    - Perdedores
4.  O sistema deve permitir o agendamento de quando uma aposta deve ser fechada automaticamente [Não entrega no MVP]
    - Para que o administrador não tenha que fechar manualmente cada aposta
5. O Administrador deve registrar apostas abertas para apostadores
    - O sistema deve permitir que novas apostas sejam abertas para apostadores poderem apostar nelas
6. O Administrador deve poder Gerenciar {entidades} [ok]
    - {entidade} = [esporte | categoria | aposta aberta]
    - Gerenciar aqui significa um CRUD
7. O Apostador deve poder interagir com {entidade} [Não entrega no MVP]*
    - {entidade} = [esporte | categoria | aposta aberta]
    - Interação aqui significa filtrar, listar, procurar e apostar em uma {entidade}
8. O apostador deve poder adicionar fundos à conta [ok]
9. O apostador deve poder sacar fundos da conta [ok]
10. O sistema deve mostrar Leaderboard com Maiores apostadores [Não entrega no MVP]
11. O sistema deve apresentar as apostas mais procuradas do site [Não entrega no MVP]
12. Tela de Admin (CRUD)
13. Tela Home com listagem de apostas
14. Tela de Adicionar fundos
15. Tela de aposta
16. Tela de criar conta de apostador
17. Tela de Login


## Não funcionais
1. Deve se garantir a privacidade das informações das apostas e apostadores [Não entrega no MVP]
    - Nome dos vercedores e não vencedores
    - Contas bancárias
    - Senhas
    - Dados de perfil dos apostadores
2. O sistema deve prover barreiras que dificultem que hackers possam se aproveitar do sistema para danificar a empresa. [Não entrega no MVP]
3. Deve se garantir acessibilidade para que umas maior parte da população possa utilizar o sistema [Parcialmente]

