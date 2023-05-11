# nika-styles

### Teste de um package de componentes react estilizados.


https://www.npmjs.com/package/nika-styles

## Exemplos de Teste

1.`Instalação`

Execute este comando em seu projeto react:

```Bash
npm install nika-styles
```
 
 2.`Utilização`
 
 Utilize seu componente estilizado via `nika-styles` com suas devidas `props` como no exemplo abaixo:
 
 exemplo no next 13:
 ```Javascript 
"use client";
import { Button } from "nika-styles";

export default function Home() {
  return (
      <div>
        <Button border={"1"} color={"blue"} size={"large"}>
          Hello World!
        </Button>

        <Button border={"1"} color={"red"} size={"small"}>
          Hello World!
        </Button>
      </div>
  );
}

 ```
  
  ## Renderização no lado do cliente
  
 ![Captura de Tela](iframe.jpg)
  
 ou acesse o link
 
 [Acessar o Conteúdo](https://nika-example-util.vercel.app/)
  
 
