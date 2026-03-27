# 💈 Barbearia Estilo Livre

<p align="center">
  <img src="https://github.com/Ricardo-dev-00/imagens/blob/main/depois1.png?raw=true" alt="Performance após otimização" width="100%">
</p>

---

## 🚀 Sobre o Projeto

A **Barbearia Estilo Livre** é uma landing page moderna e responsiva desenvolvida como parte do módulo de **Desempenho e Otimização para Web** do curso de Desenvolvimento Front-End da EBAC.

O projeto teve como foco principal a análise e otimização de performance, aplicando melhorias baseadas em métricas reais obtidas através do PageSpeed Insights.

---

## 🧠 Objetivo

Identificar gargalos de performance em uma aplicação web real e aplicar técnicas de otimização para melhorar significativamente a experiência do usuário, especialmente em dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

- HTML5  
- CSS3  
- Bootstrap 5  
- Font Awesome  

---

## 🌐 Acesse o Projeto

👉 https://ricardo-dev-00.github.io/Estilo_Livre/

---

## ⚠️ Gargalos Identificados

Durante a análise inicial de performance, foram encontrados os seguintes problemas:

- 🖼️ Imagens extremamente pesadas (mais de 16MB no total)  
- 📉 LCP extremamente alto (~79 segundos)  
- ⛔ CSS bloqueando a renderização  
- 🌐 Alto volume de dados transferidos  
- 🗂️ Cache ineficiente  
- 📏 Imagens sem dimensões definidas  

---

## ⚡ Melhorias Aplicadas

Para resolver os problemas identificados, foram implementadas as seguintes otimizações:

- ✅ Compressão e otimização de imagens  
- ✅ Redução do tamanho total da página  
- ✅ Minificação de CSS, JavaScript e HTML  
- ✅ Remoção de JavaScript inline  
- ✅ Implementação de lazy loading  
- ✅ Uso de CDNs minificados  
- ✅ Redução de recursos bloqueantes  

---

## 📊 Comparativo de Performance

| Métrica | Antes | Depois |
|--------|------|--------|
| Performance | 71 | **97** 🚀 |
| FCP | 2.4s | 1.7s |
| LCP | 79.6s | **2.4s** |
| TBT | 0ms | 0ms |
| CLS | 0 | 0 |
| Speed Index | 3.5s | 1.8s |

---

## 📸 Testes de Performance – Antes da Otimização

As imagens abaixo são **prints do PageSpeed Insights**, mostrando os resultados antes das melhorias.

### 📊 Visão Geral

<p align="center">
  <img src="https://github.com/Ricardo-dev-00/imagens/blob/84ffeb328213e9750cce19cbd0e9506cefac1f5b/inicio01.png" width="80%">
</p>

💬 Performance classificada como **regular (71/100)**, indicando problemas no carregamento.

---

### 📉 Métricas

<p align="center">
  <img src="https://github.com/Ricardo-dev-00/imagens/blob/main/inicio02.png?raw=true" width="80%">
</p>

💬 Destaque negativo para:
- **LCP extremamente alto (79,6s)** ❌  
- Carregamento lento do conteúdo principal  

---

### ⚠️ Problemas Identificados

<p align="center">
  <img src="https://github.com/Ricardo-dev-00/imagens/blob/main/inicio03.png?raw=true" width="80%">
</p>

💬 Principais gargalos:
- Imagens pesadas  
- CSS bloqueante  
- Alto payload de rede  

---

## 📸 Testes de Performance – Após Otimização

Resultados após aplicação das melhorias.

### 📊 Visão Geral

<p align="center">
  <img src="https://github.com/Ricardo-dev-00/imagens/blob/main/depois1.png?raw=true" width="80%">
</p>

💬 Performance elevada para **97/100** 🚀

---

### ⚡ Métricas Otimizadas

<p align="center">
  <img src="https://github.com/Ricardo-dev-00/imagens/blob/main/depois2.png?raw=true" width="80%">
</p>

💬 Melhorias significativas:
- **LCP: 2,4s** (antes 79,6s)  
- FCP: 1,7s  
- Speed Index: 1,8s  

---

## 📈 Impacto das Melhorias

Após as otimizações:

- ⚡ Carregamento muito mais rápido  
- 📱 Melhor experiência mobile  
- 🚀 Redução extrema do tempo de renderização  
- 📉 Diminuição do tamanho da página  

---

## 🚀 Execução Local

- `index.html` → versão de desenvolvimento  
- `index.min.html` → versão otimizada  

---

## 📦 Deploy

O projeto está publicado via **GitHub Pages**.

---

## 📈 Diferenciais

- 🔥 Caso real de otimização de performance  
- 📊 Baseado em métricas reais (PageSpeed Insights)  
- ⚡ Redução extrema de LCP (79s → 2.4s)  
- 💼 Projeto ideal para portfólio front-end  

---

## 👨‍💻 Autor

**Ricardo Vieira**  

📧 ricardo.dev.of@gmail.com  
🔗 https://github.com/Ricardo-dev-00  

---

## 📜 Licença

Este projeto está sob a licença MIT.