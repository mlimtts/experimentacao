function gerarResumo() {
  const get = id => document.getElementById(id).value;
  const checked = id => document.getElementById(id).checked ? 'Sim' : 'Não';

  const resumo = `
📌 IDEAÇÃO
Persona: ${get('persona')}
Dor: ${get('dor')}
Momento: ${get('momento')}
NSM: ${get('nsm')}
Propósito: ${get('proposito')}
Diagnóstico: ${get('diagnostico')}
Hipótese: ${get('hipotese')}

🔧 EXPERIMENTO
Canal / Ativo: ${get('canal')}
Métricas Intermediárias: ${get('metricas')}
Solução proposta: ${get('solucao')}
Responsável: ${get('responsavel')}
Orçamento: R$ ${get('orcamento')}
Prazo: ${get('prazo')}
Aprendizados esperados: ${get('aprendizado')}
Métrica chave esperada: ${get('metricaChave')}

✔️ Critérios
Acessível: ${checked('acessivel')}
Auditável: ${checked('auditavel')}
Acionável: ${checked('acionavel')}
`;

  document.getElementById("resumoTexto").textContent = resumo;

  localStorage.setItem("experimentoResumo", resumo);
}

function exportarTxt() {
  const texto = document.getElementById("resumoTexto").textContent;
  const blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.download = "experimento.txt";
  link.href = URL.createObjectURL(blob);
  link.click();
}
