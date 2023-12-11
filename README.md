Olá, para fazer a instalação do Jest que é responsável pelos testes unitários, basta rodar o comando
``` npx expo install jest-expo jest ```

Esse comando será responsável por instalaar a biblioteca Jest.

Depois de instala-lo, não se esqueça de colocar no arquivo "package.json" os seguintes codigos

"scripts": {
  ... 
  "test": "jest"
},
... 
"jest": {
  "preset": "jest-expo"
}

"jest": {
  "preset": "jest-expo",
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ]
}


Para executar os testes, utilize o comando
``` npm run test ```



1) Qual a diferença entre testes unitários e testes E2E (End to End) em aplicações mobile? (responda no Readme.md do repositório github).

R: Testes unitários: Testes unitários é a menor porção de um teste, ela é responsável por testar um unico elemento/componente da aplicação.

Testes E2E: São testes responsáveis por simular a ação de usuário ao abrir o app e navegar pelas telas propostas do app, diferentemente do teste unitário que não envolve diretamente a interface, o teste E2E envolve completamente a interface e texta uma porção maior da aplicação, testando varios componentes ao mesmo tempo em algumas situações.
