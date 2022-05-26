# Projeto Gerador de documentos

Crie um serviço (API) que permita gerar documentos a partir de um template consumindo os dados da API de votantes do Panagora. Não se esqueça que os dados da API podem mudar

# Instalação

Baixe os arquivos em um diretório da sua preferẽncia

Rode o comando do docker compose para realizar a instalação dos sistemas
Obs:Caso não tenha o docker instalado, realize a instalação seguindo a [documentação](https://docs.docker.com/engine/install/)

```docker compose up -d ```

## Front-end
Em seguida acesse o container de frontend utilizando o seguinte comando:

```docker exec -it pandoratest-frontend bash```

Dentro do container de fontend rode o comando
```yarn run dev --host ``` para que o fontend possa ser executado no seu navegador

Copie o endereço dado pela aplicação e cole no seu browser de preferência "http://<endereco_ip>:3001

