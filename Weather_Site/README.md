# WeatherApp 
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Descrição
Este projeto é um site de previsão do tempo que oferece informações meteorológicas em tempo real, com um background que muda dinamicamente de acordo com as condições climáticas da cidade pesquisada. Desenvolvido usando Vite, React, JavaScript, e Tailwind CSS, ele demonstra habilidades modernas de desenvolvimento web, bem como integração com a API do OpenWeatherMap para obter dados meteorológicos precisos e atualizados.

## Características Principais

<li>Previsão Meteorológica: Exibe temperatura, umidade, e condições climáticas.</li>
<li>Background Dinâmico: Altera a imagem de fundo com base nas condições climáticas atuais, melhorando a experiência visual.</li>
<li>Tecnologias: Utiliza Vite para bundling rápido, React para construção de interfaces interativas, JavaScript para lógica e manipulação de dados, e Tailwind CSS para estilização flexível e responsiva.</li>

<br>
Este projeto foi criado com o objetivo de explorar e aprimorar conhecimentos em desenvolvimento web, integração de APIs e criação de interfaces de usuário intuitivas e visualmente atraentes.

## Configuração

Para executar este projeto, você precisará de uma chave API do OpenWeatherMap.

1. Clone o repositório:
    ```bash
    git clone https://github.com/usuario/repositorio.git
    cd repositorio
    ```

2. Crie um arquivo `.env` na raiz do projeto, baseado no `.env.example`, e insira sua chave API:

    ```plaintext
    VITE_API_KEY=sua-chave-api-aqui
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute o projeto:
    ```bash
    npm run dev
    ```

## Como Funciona

Este projeto utiliza a API do OpenWeatherMap para obter informações meteorológicas. Para obter sua própria chave API, você pode se registrar em [OpenWeatherMap](https://openweathermap.org/api).