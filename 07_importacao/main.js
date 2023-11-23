/*
    Para importar é preciso que a fonte de dados (arquivo fonte)
    tenha a instrução de importação.
    Imorta o que está sendo exportado por outro arquivo.

    ### Desestruturação (destructuring assignment)

    Essa abordagem é útil quando você exporta várias funcionalidades de um módulo e só precisa de algumas delas em um arquivo específico. A desestruturação permite que você selecione apenas o que precisa, tornando o código mais conciso.
> 

    Essa linha de código está utilizando a desestruturação (destructuring assignment) em conjunto com `require` para importar módulos específicos de um arquivo no Node.js. Vamos analisar cada parte:

    1. | const { gets, print} |: Aqui, estamos utilizando a sintaxe de desestruturação para extrair propriedades específicas de um objeto. No contexto de `require`, isso significa extrair as funcionalidades específicas exportadas pelo módulo.
    
    2. | require('./funcoes_auxiliares.js') |: Esta parte está importando o módulo local chamado `modulo.js`. O caminho | ('./funcoes_auxiliares.js') | especifica o local do arquivo em relação ao arquivo atual.

    Isso significa que, no arquivo atual (onde essa linha de código está sendo executada), você pode usar | gets | e | print | como se fossem funções locais, mesmo que elas estejam definidas em outro arquivo.
*/

// Cria variáveis locais ao Importa um objeto que tem as funções gets e print
const { gets, print} = require('./funcoes_auxiliares.js');

print(gets());
