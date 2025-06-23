<template>
  <main class="main">
    <img src="/img/logo.png" />
    <p>A Codex Systems é uma empresa de médio porte localizada em Belo Horizonte, especializada no desenvolvimento de sistemas sob demanda para o setor jurídico. A empresa opera há mais de 12 anos no mercado e possui um time dividido entre desenvolvedores, analistas de negócios e testadores. A comunicação entre as áreas é feita majoritariamente via e-mail e reuniões semanais. O processo de entrega é baseado em ciclos longos, com versões lançadas a cada três meses.</p>
    <p>Nos últimos dois anos, a Codex passou a perder contratos importantes por conta da demora nas atualizações e por falhas recorrentes nas entregas. A insatisfação dos clientes levou a diretoria a buscar mudanças profundas. Apesar de ter investido em cursos pontuais para a equipe, a cultura ainda é fortemente departamentalizada e resistente a mudanças. A liderança decidiu explorar a adoção de práticas DevOps para integrar as equipes e melhorar a agilidade, mas o ambiente atual não oferece nenhuma automação de testes, nem práticas estruturadas de revisão de código. O time de TI é competente tecnicamente, mas não possui maturidade em práticas ágeis ou de automação.</p>
    <div class="container-visit-counter">
      <div class="visit-counter">
        Número de visitas: <b>{{ visitCounter }}</b>
      </div>
      <button class="btn-reset" @click="resetCounter">Resetar visitas</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { incrementVisitCount, resetVisitCount } from '@/services/visitCounterService';

const visitCounter = ref(0)

const resetCounter = () => {
  resetVisitCount()
  visitCounter.value = 0
}

onMounted(() => visitCounter.value = incrementVisitCount())
</script>

<style lang="css">
.main {
  padding: 3rem;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
}

.main img {
  height: auto;
  width: 20rem;
  max-width: 85%;
  border-radius: 50%;
  box-shadow: 0px 0px 10rem rgba(162, 0, 255, 0.2);
}

.main p {
  width: 100%;
  max-width: 70rem;
  text-align: justify;
  font-size: 1rem;
  font-weight: 500;
  color: var(--vt-c-white-soft);
  text-shadow: 0px 0px 0.2rem rgba(255, 255, 255, 0.1)
}

.main .container-visit-counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.main .container-visit-counter .visit-counter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--vt-c-white-soft);
}

.main .container-visit-counter .visit-counter b {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-color);
  text-shadow: 0px 0px 1rem rgba(162, 0, 255, 0.2);
}

.main .container-visit-counter .btn-reset {
  all: unset;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  background: rgba(162, 0, 255);
  color: var(--vt-c-white-soft);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 0px 1rem rgba(162, 0, 255, 0.2);
}

.main .container-visit-counter .btn-reset:hover {
  background: rgba(162, 0, 255, 0.8);
}
</style>
