## Usuários/Atores

- Administrador
- Apostador do sistema
- Sistema


## Funcionais
1. Calcular o valor da aposta para um apostador vencedor  
    - O sistema deve calcular o valor que N apostadores vão ganhar quando estes forem vencedores de uma aposta. 
2. Registrar a aposta de um apostador em uma aposta aberta
3. Fechamento de uma aposta na data desejada
    - Quem participou
    - Vencedores
    - Perdedores
4.  O sistema deve permitir o agendamento de quando uma aposta deve ser fechada automaticamente
    - Para que o administrador não tenha que fechar manualmente cada aposta
5. O Administrador deve registrar apostas abertas para apostadores
    - O sistema deve permitir que novas apostas sejam abertas para apostadores poderem apostar nelas
6. O Administrador deve poder Gerenciar {entidades}
    - {entidade} = [esporte | categoria | aposta aberta]
    - Gerenciar aqui significa um CRUD + listar
7. O Apostador deve poder interagir com {entidade}
    - {entidade} = [esporte | categoria | aposta aberta]
    - Interação aqui significa filtrar, listar, procurar e apostar em uma {entidade}
8. O apostador deve poder adicionar fundos à conta
9. O apostador deve poder sacar fundos da conta
10. O sistema deve mostrar Leaderboard com Maiores apostadores
11. O sistema deve apresentar as apostas mais procuradas do site



## Não funcionais
1. Deve se garantir a privacidade das informações das apostas e apostadores
    - Nome dos vercedores e não vencedores
    - Contas bancárias
    - Senhas
    - Dados de perfil dos apostadores
2. O sistema deve prover barreiras que dificultem que hackers possam se aproveitar do sistema para danificar a empresa.
3. Deve se garantir acessibilidade para que umas maior parte da população possa utilizar o sistema
4. Feed infinito de apostas, para que o apostador sempre tenha uma aposta para apostar.
