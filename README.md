## Sobre o Projeto

Teste efetuado utilizando o NodeJs para o backend e React para o frontend, para rodar a aplicação localmente basta efetuar o clone ou download. Acessar a pasta backend e digitar: 

```
npm install

```
e depois:

```
npm start

```
repetir o processo para a pasta frontend, desta forma as duas partes da aplicação irão se comunicar.

## 💻 Projeto

A empresa de telefonia **VxTel**, especializada em chamadas de longa distância nacional, vai colocar um novo produto no mercado chamado **FaleMais**.

Normalmente um cliente **VxTel** pode fazer uma chamada de uma cidade para outra pagando uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs de origem e destino:


| Origem | Destino | R$/min |
| ------ | ------ | ------ |
| 011 | 016 | 1.90 |
| 016 | 011 | 2.90 |
| 011 | 017 | 1.70 | 
| 017 | 011 | 2.70 |
| 011 | 018 | 0.90 |
| 018 | 011 | 1.90 |


Com o novo produto **FaleMais** da **VxTel** o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acrescimo de 10% sobre a tarifa normal do minuto. Os planos são **FaleMais** 30 (30 minutos), **FaleMais** 60 (60 minutos) e **FaleMais** 120 (120 minutos).

A **VxTel**, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o plano **FaleMais**. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2) sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este problema. 

## 💱Exemplo de Valores:

|Origem | Destino | Tempo | Plano FaleMais | Com FaleMais | Sem FaleMais |
| ------ | ------ | ------ | ------ | ------ | ------ |
| 011 | 016 | 20 | FaleMais 30 | R$ 0,00 | R$ 38,00 |
| 011 | 017 | 80 | FaleMais 60 | R$ 37,40 | R$ 136,00 |
| 018 | 011 | 200 | FaleMais 120 | R$ 167,20 | R$ 380,00 |
| 018 | 017 | 100 | FaleMais 30 | - | - |

#pracimafuracao

 ---
<h4 align="center">
   Code and coffee ☕
</h4>

