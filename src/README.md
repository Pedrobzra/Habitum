# Instruções de utilização

## 🖥️ Back-End (ASP.NET 9 + MySQL)

### ✅ Pré-requisitos

- **.NET 9 SDK** (Preview): https://dotnet.microsoft.com/en-us/download/dotnet/9.0
- **MySQL 8.0+**
- (Opcional) **MySQL Workbench**
- **Git**
- (Opcional) **Visual Studio** ou VS Code com extensão C#

---

### 1. Clonar o repositório:

```bash
git clone https://github.com/Pedrobzra/Habitum.git
cd pmv-ads-2025-1-e3-proj-mov-t4-habitum/src/habitumAPI
```

---

### 2. Editar o arquivo `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "HabitumContext": "Server=localhost;Port=3306;Database=habitum;User=root;Password=root;"
  }
}
```

> Altere `User` e `Password` conforme seu MySQL local. Se não for usar banco local, ajuste também `Server` e `Port`.

---

### 3. Aplicar Migrations:

> ⚠️ Se o `appsettings.json` não estiver corretamente configurado, este passo falhará.

**Com Visual Studio (Console NuGet):**

```powershell
Update-Database
```

**Ou no terminal:**

```bash
dotnet ef database update
```

---

### 4. Rodar o back-end:

```bash
dotnet run --launch-profile "dev"
```

> Acesse via Swagger em:  
> `https://localhost:5100/` (HTTPS)  
> ou `http://192.168.0.100:5100/` (HTTP, substitua o "192.168.0.100" pelo IP real da máquina)

---

## 📱 Front-End (React Native + Expo)

### ✅ Pré-requisitos

- [Node.js (LTS)](https://nodejs.org/)
- Expo CLI:
  ```bash
  npm install -g expo-cli
  ```
- Expo Go app no celular OU emulador Android/iOS
- Git

---

### 1. Acessar a pasta do front:

```bash
cd src/habitum
```

---

### 2. Instalar dependências:

```bash
npm install
```

---

### 3. Configurar `api/apisettings.ts`:

Abra o arquivo `src/habitum/api/apisettings.ts` e altere:

```ts
baseURL: "http://localhost:5100/"
```

para:

```ts
baseURL: "http://SEU_IP_LOCAL:5100/"
```

> Use o IP da máquina que roda o back-end para que funcione no celular via Expo Go. `localhost` só funciona no emulador ou no mesmo PC.

---

### 4. Rodar o front-end:

```bash
npx expo start
```

---

## ✅ Pronto!

Com o back rodando e o front apontando para o IP certo, o app estará funcional.
