# AGENTS.md - Guia Global do Projeto

## 1. Regras de Estilo de Código (Gerais)
* Prefira funções de flecha (arrow functions) sempre que possível.
* Use apenas Html e Css e javascript nos primeros passos do projeto.

## 2. Estrutura de Pastas
* `/src/images`:  e onde estão a imagens usadas no projeto.

* `/src/javascript`: onde o script javascript deve ser escrito e de onde deve ser importado para index.html 

* `/src/styles`: Prefira usar o estilo do tailwind se não for possivel escreva o arquivo css nesta pasta.

* `/src/utils`: Contém **funções auxiliares puras** (ex: formatar data, validação). **Não deve** ter dependências do DOM.


## 3. Ponto de Entrada do Projeto
* O arquivo principal do projeto é `index.html`.
* Todos os scripts e estilos finais devem ser ligados a este arquivo.