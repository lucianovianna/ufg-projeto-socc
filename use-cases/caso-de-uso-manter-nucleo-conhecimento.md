# Caso de Uso: Manter Núcleo de Conhecimento


| <div style="width:290px">Versão</div> | Atividade | Autor | Data |
|:------------|:----------------|:--------------|:----------------|
| 2.0 | Versão Secundária do Arquivo | Hamze Jihad | 30/05/2024 |
| 2.1 | Atualização dos campos Disciplinas e Docentes Associados | Matheus de Azevedo | 05/06/2024 |
| 2.2 | Atualização das RN | Afonso Ueslei da Fonseca | 10/06/2024 |
| 2.3 | Refatoramento do Arquivo | Giancarlo Oliveira Silva | 21/10/2024 |
| 2.4 | Atualização do refatoramento do Arquivo | Giancarlo Oliveira Silva | 15/11/2024 |

## **Descrição**
Este caso de uso permite que todos os usuários visualizem os núcleos e o Co-coordenador ou o Secretário Acadêmico gerencie os núcleos de conhecimento, ou seja, poderá criar, listar, editar ou excluir entidades núcleo.

## **Ator(es)**
Todos os usuários

## **Caminho para Acesso à Funcionalidade**
Login >> Página Inicial >> Núcleos de Conhecimento


## **Pré-condições**
O usuário deve estar autenticado no sistema com uma conta válida.


## **Descrição da(s) Tela(s)**

<a name="01"></a>
### Tela 1 - Listar Núcleos de Conhecimento (Co-coordenador e Secretário Acadêmico)
![Listagem de núcleos - co-coordenador](https://github.com/user-attachments/assets/eebd4a22-3532-416d-9587-a8c9f5f8895f)
| Nome do Atributo | Preench. Obrigatório | Preench. Automático | Tipo | Máscara | Observações | Regra de Interface |
|:--------------|:----------------:|:--------------:|:--------------|:----------------|:--------------|:----------------|
| Campo pesquisar Núcleo de Conhecimento | | Não | Alfanumérico | | | |
| Criar Núcleo de Conhecimento| | | Botão | | Visível apenas se o usuário for Co-coordenador ou Secretário Acadêmicoo |  |
| Nome do Núcleo |  | Sim | Alfanumérico | | [RN36](#RN) | |
| Área |  | Sim | Alfanumérico | | [RN37](#RN)  | |
| Facilitador |  | Sim | Alfanumérico | | [RN37](#RN)  | |
| Docentes Associados |  | Sim | Ícone  | | ícone apresenta um docente mais o número quantitativo dos outros docentes| |
| Disciplinas |  | Sim | ícone | | O Ícone apresenta o número quantitativo de disciplinas associadas ao núcleo| |
| Filtro | | | Botão | | |[RI06](#RI) |
| Editar | | | Botão  | | Ícone de lápis visível apenas se o usuário for Co-coordenador e Secretário Acadêmico | |
| Editar com Intenção| | | Botão| | Ícone de lápis e mão visível para Co-coordenador ou Secretário Acadêmico quando há manifestação de intenção em aberto |	|
| Excluir | | | Botão | |  Ícone de lixeira Visível apenas se o usuário for Co-coordenador ou Secretário Acadêmico  |  |
| Voltar | | | Botão | | | |


<a name="02"></a>
### Tela 2 - Listar Núcleos de Conhecimento (Outros usuários)
![Listagem de núcleos - Docente](https://github.com/user-attachments/assets/879f10d6-bfa8-43c6-ae22-3a8e9f497790)

| Nome do Atributo | Preench. Obrigatório | Preench. Automático | Tipo | Máscara | Observações | Regra de Interface |
|:--------------|:----------------:|:--------------:|:--------------|:----------------|:--------------|:----------------|
| Visualizar| | | Botão| | Ícone de olho Visível para Docente e Outros usuários |	|

* Outros usuários são todos usuários com acesso a tela de Núcleos de Conhecimento com exceção do Co-coordenador, Secretário Acadêmico.

<a name="03"></a>
### Tela 3 - Editar Núcleo de Conhecimento (Somente Co-coordenador e Secretário Acadêmico)
![Editar núcleo de conhecimento](https://github.com/user-attachments/assets/7a831bcc-6d15-4bbf-a70a-e7ec1183c81a)

| Nome do Atributo | Preench. Obrigatório | Preench. Automático | Tipo | Máscara | Observações | Regra de Interface |
|:--------------|:----------------:|:--------------:|:--------------|:----------------|:--------------|:----------------|
| Núcleo | Sim  | Não | Alfanumérico | | | |
| Área | Sim  | Não  | Autocomplete Dropdown | | | |
| Facilitador  | Sim |  | Autocomplete Dropdown | | | [RN37](#RN) |  
| Descrição  | Sim | Não | Alfanumérico | |   | |
| Lista de Docentes |  |  | Lista | || |
| Campo selecione docente|  |  |  Autocomplete Dropdown  | |   | |
| Adicionar docente| | | Botão | | Habilitado somente se selecionado um docente |  |
| Usuário |  |  | Ícone e Alfanumérico | |   | |
| Docente |  |  | Alfanumérico | |   | |
| E-mail  |  | Sim | Alfanumérico | |  | |
| Data de Ingresso |  |  | Data | dd/MM/yyyy |   | |
| Status |  |  | Alfanumérico | |   | |
| Responder Manifestação de Intenção| | | Botão| |  Ícone de mão presente quando há manifestação em aberto |	|
| Excluir Docente| | | Botão | | |  |
| Campo selecione disciplina|  |  | Autocomplete Dropdown | |  | |
| Adicionar Disciplina| | | Botão | | Habilitado somente se selecionada uma disciplina |  |
| Código |  |   | Alfanumérico | |   | |
| Disciplina |  |   | Alfanumérico | |   | |
| Curso |  |   | Alfanumérico | |   | |
| Matriz |  |   | Alfanumérico | |   | |
| CH Teórica |  |   | Alfanumérico | |   | |
| CH Prática |  |   | Alfanumérico | |   | |
| CH Total |  |   | Alfanumérico | |   | |
| Excluir Disciplina | | | Botão | | |   |
| Filtro||| Botão || No header das colunas|[RI06](#RI) |
| Salvar| | | Botão | | |  |
| Cancelar| | | Botão | | |  | 

<a name="04"></a>
### Tela 4 - Criar Núcleo de Conhecimento (Somente Co-coordenador e Secretário Acadêmico)
![Criar núcleo de conhecimento(1)](https://github.com/user-attachments/assets/eb3c3328-4644-4d7a-be0e-d644761ca079)

<a name="05"></a>
### Tela 5 - Visualizar Núcleo de Conhecimento (Outros usuários sem permissão de edição)
 ![Visualizar núcleo de conhecimento](https://github.com/user-attachments/assets/d0d45dcd-0d9d-4125-aae2-17e793881a53)

<a name="06"></a>
### Tela 6 -  Excluir Núcleo de Conhecimento (Somente Co-coordenador e Secretário Acadêmico)     
![Excluir núcleo de conhecimento](https://github.com/user-attachments/assets/c02e26fd-ea52-453d-8fc9-4b1cc8e08085)
| Nome do Atributo | Preench. Obrigatório | Preench. Automático | Tipo | Máscara | Observações | Regra de Interface |
|:--------------|:----------------:|:--------------:|:--------------|:----------------|:--------------|:----------------|
| Descrição  |   | Sim | Alfanumérico | |   | [RI5](#RI)|
| Sim |   |  | Botão | |  | |
| Não |   |  | Botão | |  | |

<a name="07"></a>
 ### Tela 7 -  Responder manifestação de intenção aceito    
 ![Editar com inteção](https://github.com/user-attachments/assets/1cee421d-7bb4-4912-91f1-704e7d8c5a7d)

| Nome do Atributo | Preench. Obrigatório | Preench. Automático | Tipo | Máscara | Observações | Regra de Interface |
|:--------------|:----------------:|:--------------:|:--------------|:----------------|:--------------|:----------------|
| Nome  |   | Sim | Alfanumérico | |   | |
| Data da Solicitação  |   | Sim | Data |dd/MM/yyyy |   | |
| Status  |  Sim |   | Seleção | |   | |
| Justificativa  |  Sim |  | Alfanumérico | |   |[RI09](#RI) |
| Sim |   |  | Botão | |  | |
| Não |   |  | Botão | |  | |

<a name="08"></a>
### Tela 8 -  Responder manifestação de intenção recusado 
![listagem com intenção recusado](https://github.com/user-attachments/assets/5eaf0e46-ef97-49e0-9278-3fab15020f41)

<a name="09"></a>
### Tela 9 - Intenção em Núcleo de conhecimento     
![Intenções dos núcleos](https://github.com/user-attachments/assets/d03a5d40-f278-443a-82b5-a776fc254fad)

| Nome do Atributo | Preench. Obrigatório | Preench. Automático | Tipo | Máscara | Observações | Regra de Interface |
|:--------------|:----------------:|:--------------:|:--------------|:----------------|:--------------|:----------------|
| Campo Pesquisar Docente |    |   | Alfanumérico | | | |
| Docente  |   | Sim | Alfanumérico | |   | |
| Núcleo  |   | Sim | Alfanumérico | |   | |
| Área  |   | Sim | Alfanumérico | |   | |
| Facilitador  |   | Sim | Alfanumérico | |   | |
| Docentes Associados  | Sim   | Sim | Ícone | |   | |
| Data Solicitação  |   | Sim | Data |dd/MM/yyyy  |   | |
| Responder Manifestação de Intenção  |   | Sim | Botão | |   | |
| Filtro||| Botão |||[RI06](#RI) |
| Voltar | | | Botão | | |  |

<a name="10"></a>
### Tela 10 - Histórico de Manifestações  
![Histórico de Manifestações (4)](https://github.com/user-attachments/assets/191e1b7b-3441-4e81-b80d-a3e844eda449)

| Nome do Atributo | Preench. Obrigatório | Preench. Automático | Tipo | Máscara | Observações | Regra de Interface |
|:--------------|:----------------:|:--------------:|:--------------|:----------------|:--------------|:----------------|
| Campo Núcleo |    |   | Alfanumérico | | | |
| Docente  |   | Sim | Alfanumérico | |   | |
| Núcleo  |   | Sim | Alfanumérico | |   | |
| Área  |   | Sim | Alfanumérico | |   | |
| Facilitador  |   | Sim | Alfanumérico | |   | |
| Data Solicitação  |   | Sim | Data | |   | |
| Data Resposta |   | Sim | Data | dd/MM/yyyy |   | |
| Status |   | Sim | Seleção  |  |   | |
| Filtro||| Botão |||[RI06](#RI) |
| Voltar | | | Botão | | |  |

<a name="11"></a>
### Tela 11 - Sucesso Criar  
![Sucesso Criar](https://github.com/user-attachments/assets/cd4f775c-713e-4345-8f42-cd0f346d2561)

<a name="12"></a>
### Tela 12 - Sucesso Editar  
![Sucesso Editar](https://github.com/user-attachments/assets/17a055d7-832c-4b51-9a30-8f2ebab84095)

<a name="13"></a>
### Tela 13 - Sucesso Excluir 
![Sucesso Excluir](https://github.com/user-attachments/assets/2dd32399-8ca1-4dc8-b244-52282d15ffc8)

<a name="14"></a>
### Tela 14 - Sucesso resposta intenção
 ![Adicionar docente núcleo de conhecimento  - sucesso](https://github.com/user-attachments/assets/c3b99f18-4e02-48fa-9d3c-7dc376840f47)

| Nome do Atributo | Preench. Obrigatório | Preench. Automático | Tipo | Máscara | Observações | Regra de Interface |
|:--------------|:----------------:|:--------------:|:--------------|:----------------|:--------------|:----------------|
| Mensagem de Sucesso	             |                    |                   | Pop-up          | | | [RI03](#RI)|
| Fechar(x)            |                   |                   | Botão          | | | [RI07](#RI) |

<a name="15"></a>
### Tela 15 - Servidor indisponível 
![Servidor Indisponível](https://github.com/user-attachments/assets/8d0c1cf9-9ee9-4559-8277-ba87412a7b5f)

<a name="16"></a>
### Tela 16 - Nome do Núcleo já existe
![Erro Nome existente](https://github.com/user-attachments/assets/de879a1f-8ab7-4c24-ac4d-79cd4ac3c054)

| Nome do Atributo   | Preench. Obrigatório | Preench. Automático | Tipo             | Máscara | Observações| Regra de Interface |
|--------------------|----------------------|----------------------|----------------|-----------|-----|-----|
| Mensagem de Erro	             |                    |                   | Pop-up          | | | [RI04](#RI)|
| Fechar(x)            |                   |                   | Botão          | | | [RI07](#RI) |

<a name="17"></a>
### Tela 17 - Página inicial
![Página Inicial (1)](https://github.com/user-attachments/assets/704f73d8-d5fd-47c9-a3aa-c07246504708)


## **Fluxo Principal**
<a name="FP"></a>
### FP - Listar Os Núcleos de Conhecimento 

| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1  | O usuário acessa a tela inicial e seleciona card "Núcleos de Conhecimento" | | [FE05](#fe05---acessar-tela-de-intenção-em-núcleo-de-conhecimento) [FE06](#fe06---acessar-tela-de-histórico-de-manifestações) | [Tela 17](#17) |
| 2  | O sistema exibe a listagem dos Núcleos de Conhecimento existentes | [FA01](#fa01---criar-núcleo-de-conhecimento) [FA02](#fa02---editar-núcleo-de-conhecimento) [FA03](#fa03--visualizar-núcleo-de-conhecimento) [FA04](#fa04---excluir-núcleo-de-conhecimento) [FA05](#fa05---responder-manifestação-de-intenção)| |[Tela 1](#01) |

## **Fluxo Alternativo**
<a name="FA01"></a>
### FA01 - Criar Núcleo de Conhecimento 

| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1  | O usuário clica no botão "Criar" | | | [Tela 1](#01)|
| 2  | O sistema direciona o usuário para a tela de Criar Núcleo de Conhecimento com os campos a serem preenchidos | | |[Tela 4](#04)  |
| 3  | O usuário preenche os campos obrigatórios "Núcleo", "Área", "Descrição" e "Facilitador" e clica em "Salvar" |[FE01](#fe01---adicionar-associação-entre-docente-e-núcleo) [FE02](#fe02---excluir-associação-entre-docente-e-núcleo)    [FE03](#fe03---adicionar-associação-entre-disciplina-e-núcleo)    [FE04](#fe04---excluir-associação-entre-disciplina-e-núcleo) |[Tela 4](#04) |    |
| 4  | O sistema salva o novo Núcleo de Conhecimento e exibe uma mensagem de confirmação "Sucesso! O Núcleo de Conhecimento (nome do Núcleo de Conhecimento) foi criado" e retorna o usuário à lista de núcleos de conhecimento | | | [Tela 11](#11)|

### FA02 - Editar Núcleo de Conhecimento 

| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1  | O usuário clica no botão "Editar" da linha do núcleo de conhecimento desejado| | |  [Tela 1](#01) |
| 2  | O sistema direciona o usuário para a tela de Editar Núcleo de conhecimento com campos preenchidos  | | |  [Tela 3](#03)|
| 3  | O usuário altera os campos e clica em "Salvar" |[FE01](#fe01---adicionar-associação-entre-docente-e-núcleo)  [FE02](#fe02---excluir-associação-entre-docente-e-núcleo)    [FE03](#fe03---adicionar-associação-entre-disciplina-e-núcleo)    [FE04](#fe04---excluir-associação-entre-disciplina-e-núcleo)| |   [Tela 3](#03) |
| 4  | O sistema salva o perfil e exibe uma mensagem de confirmação "Sucesso! O perfil (nome do perfil) foi atualizado" e retorna o usuário à lista de núcleos de conhecimento| | | [Tela 12](#tela-12---sucesso-editar)|
 
### FA03 - Visualizar Núcleo de Conhecimento  
| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1 |  O usuário clica no botão "Visualizar" da linha do núcleo de conhecimento desejado | | | [Tela 1](#01) |
| 2  | O sistema direciona o usuário para a tela de Visualizar Núcleo de Conhecimento  | | |[Tela 5](#tela-5---visualizar-núcleo-de-conhecimento)  |


### FA04 - Excluir Núcleo de Conhecimento

| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1  | O usuário clica no botão "Excluir" da linha do núcleo de conhecimento desejado | |   |  [Tela 1](#01)   |
| 2  | O sistema exibe um modal de Excluir com o nome do núcleo de conhecimento | | |[Tela 6](#tela-6---excluir-núcleo-de-conhecimento)  |
| 3  | O usuário aperta sim confirmando a exclusão do núcleo de conhecimento  | | |  [Tela 6](#tela-6---excluir-núcleo-de-conhecimento)  |
| 4  | O sistema exclui o perfil e exibe uma mensagem de confirmação "Sucesso! O  núcleo de conhecimento (nome do núcleo de conhecimento) foi excluído" | | | [Tela 13](#tela-13---sucesso-excluir)|

 ### FA05 - Responder Manifestação de Intenção
 | ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1  | O usuário clica no botão "Responder Manifestação de Intenção" da linha do núcleo de conhecimento desejado | |   |  [Tela 1](#01)   |
| 2  | O sistema exibe um modal de Intenção em participar do núcleo  | | |[Tela 7](#tela-7---responder-manifestação-de-intenção-aceita)  |
| 3  | O usuário seleciona um status "Aceito" e aperta o botão "Salvar"        | | |  [Tela 7](#tela-7---responder-manifestação-de-intenção-aceita) |
| 4  | O sistema conclui a ação e exibe uma mensagem de confirmação "Sucesso! O docente (usuário do docente) foi adicionado ao núcleo (nome do núcleo)" | | | [Tela 14](#tela-14---sucesso-resposta-intenção)|

 ### FA06 - Responder Manifestação de Intenção recusado
 | ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1 | O usuário seleciona um status "Recusado", preenche a justificativa e aperta o botão "Salvar"        | | |  [Tela 8](#tela-8---responder-manifestação-de-intenção-recusada)  |
| 2  | O sistema conclui a ação e exibe uma mensagem de confirmação "Sucesso! O docente (usuário do docente) não foi adicionado ao núcleo (nome do núcleo)" | | | [Tela 14](#tela-14---sucesso-resposta-intenção)|


## **Fluxo Extensão**
### FE01 - Adicionar Associação entre Docente e Núcleo 

| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1 | O usuário consulta o nome do docente no Campo pesquisa docente  |   | |[Tela 3](#03) |
| 2 | O sistema exibe uma lista filtrada de acordo com a pesquisa do usuário |    | |  |
| 3 | O usuário seleciona um docente |    | |  |
| 4 | O sistema adiciona o docente a lista de docentes  |   | |  |
 
### FE02 - Excluir Associação entre Docente e Núcleo 
| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1 | O usuário seleciona o botão de excluir na linha de um docente   |   | ||[Tela 3](#03)
| 2 | O sistema apaga o docente da lista de docentes |    | |  |


### FE03 - Adicionar Associação entre Disciplina e Núcleo 

| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1 | O usuário consulta o nome da disciplina no Campo pesquisa disciplina |  |   | [Tela 3](#03)|
| 2 | O sistema exibe uma lista filtrada de acordo com a pesquisa do usuário |    |   |
| 3 | O usuário seleciona uma disciplina |    | |  |
| 4 | O sistema adiciona a disciplina a lista de disciplinas  |   | |  |


### FE04 - Excluir Associação entre Disciplina e Núcleo 

| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1 | O usuário seleciona o botão de excluir na linha de uma disciplina  |  |   | [Tela 3](#03)|
| 2 | O sistema apaga a disciplina da lista de disciplinas  |  |  | |   

### FE05 - Acessar tela de Intenção em Núcleo de Conhecimento
| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1 | O usuário seleciona no sidebar a opção "Intenção em Núcleo de Conhecimento"  |  |   | [Tela 1](#01)|
| 2 | O sistema direciona o usuário para a tela de Intenção em Núcleo de Conhecimento  | [FA05](#fa05---responder-manifestação-de-intenção) |  | [Tela 9](#tela-9---intenção-em-núcleo-de-conhecimento)|   

### FE06 - Acessar tela de Histórico de Manifestações
| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1 | O usuário seleciona no sidebar a opção "Histórico de Manifestações"  |  |   | [Tela 1](#01)|
| 2 | O sistema direciona o usuário para a tela de Intenção em Núcleo de Conhecimento  |  |  |  [Tela 10](#tela-10---histórico-de-manifestações)|  
## **Fluxo Exceção**
### FEX01 -  Falha na Comunicação  

| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1 | Durante qualquer operação, o sistema detecta uma falha na comunicação com o servidor |  | |  |
| 2 | O sistema exibe a seguinte mensagem "Erro! Servidor indisponível, tente novamente em alguns minutos" |  | | [Tela 15](#tela-15---servidor-indisponível)|

## FEX02 - Nome Duplicado ao Criar um Núcleo de Conhecimento  

| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1 | O sistema identifica que o nome fornecido para o novo núcleo já existe em outro núcleo |  | |  |
| 2 | O sistema exibe uma mensagem de erro informando que o nome escolhido já está em uso e solicita um nome diferente |  | [RNO2](#RN) |[Tela 16](#tela-16---nome-do-núcleo-já-existe)  |
 
## FEX03 - < Campos Obrigatórios não Preenchidos ao Criar Núcleo > 
| ID | Passo | Fluxo | Regra de Negócio | Tela |
|:--------------|:----------------|:--------------|:----------------|:--------------|
| 1 | O sistema identifica que campos obrigatórios não foram preenchidos corretamente ao criar um núcleo de conhecimento |  | |  |
| 2 | O sistema exibe mensagens de erro específicas para cada campo não preenchido corretamente |  | |   |
| 3 | O usuário corrige as informações e tenta novamente confirmar a operação |  | |  |

 

<a name="RN"></a>
## Regras de Negócio

| ID | Descrição da Regra |
|:-----|:-----|
| **RN35** | Um núcleo de conhecimento não pode ser excluído se houver docente(s) associado(s).|
| **RN36** | Um núcleo de conhecimento deve ter um nome único, não sendo permitido que existam dois núcleos com o mesmo nome.|
| **RN37** | Um núcleo de conhecimento deve ter número mínimo e máximo de facilitador conforme definido na parametrização do sistema.|

<a name="RI"></a>
## Regras de Interface 

| ID | Descrição da Regra |
|:-----|:-----|
| **RI01** | O campo deverá ficar com a borda vermelha quando for informado um valor inválido ou quando for um campo obrigatório e não estiver preenchido. |
| **RI02** | Na listagem dos núcleos tem que ter a opção de ordenar e buscar pelo nome. |
| **RI03** | Mensagens de Sucesso devem ser exibidas em verde na parte superior da tela após uma operação bem-sucedida |
| **RI04** | Mensagens de Erro devem ser exibidas em vermelho na parte superior da tela após uma operação mal-sucedida |
| **RI05** | As páginas de visualizar, editar e o modal de exclusão devem conter o nome do núcleo de conhecimento informado  |
| **RI06** | Todas as telas que incluem listagem devem permitir pesquisa e ordenação de cada atributo. |
| **RI07** | A pop-up deve ser exibida na tela por no máximo 7 segundos e o usuário deve possuir a opção de fechá-la manualmente |
| **RI08** | A pop-up deve conter o nome do núcleo de conhecimento quando a ação for sobre um núcleo específico|
| **RI09** | O modal de responder a manifestação da Intenção de participar do núcleo só apresenta o campo justificativa quando o Status for "Recusado"|



