COMO RODAR NO WINDOWS

1) Abra o PowerShell dentro da pasta do projeto.
2) Rode:

npm config set registry https://registry.npmjs.org/
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm cache clean --force
npm install
npm run dev

Se der erro EPERM, feche VS Code, navegador, terminal e rode o PowerShell como Administrador.
