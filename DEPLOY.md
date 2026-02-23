# Despliegue de Producción

## 1) Construir imagen Docker

```powershell
docker build -t automatiza-ecuador:latest .
```

## 2) Ejecutar en local como producción

```powershell
docker run --rm -p 8080:80 automatiza-ecuador:latest
```

Abrir en navegador: http://localhost:8080
