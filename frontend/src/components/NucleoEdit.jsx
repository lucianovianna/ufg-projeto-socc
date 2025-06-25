import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNucleoById, responderManifestacao } from "../services/api";
import toast, { Toaster } from "react-hot-toast";

// Dados demonstrativos para autocomplete e detalhes extras
const AREAS_DEMO = [
  { id: 1, nome: "Ciência da Computação" },
  { id: 2, nome: "Engenharia Elétrica" },
  { id: 3, nome: "Matemática" },
  { id: 4, nome: "Física" },
];
const DOCENTES_DEMO = [
  {
    id: 1,
    nome: "Ana Souza",
    email: "ana.souza@demo.com",
    ingresso: "2020-01-01",
    status: "Ativo",
  },
  {
    id: 2,
    nome: "Bruno Lima",
    email: "bruno.lima@demo.com",
    ingresso: "2020-02-01",
    status: "Ativo",
  },
  {
    id: 3,
    nome: "Carlos Silva",
    email: "carlos.silva@demo.com",
    ingresso: "2020-03-01",
    status: "Ativo",
  },
  {
    id: 4,
    nome: "Daniela Castro",
    email: "daniela.castro@demo.com",
    ingresso: "2020-04-01",
    status: "Ativo",
  },
  {
    id: 5,
    nome: "Eduardo Alves",
    email: "eduardo.alves@demo.com",
    ingresso: "2020-05-01",
    status: "Ativo",
  },
  {
    id: 6,
    nome: "Fernanda Rocha",
    email: "fernanda.rocha@demo.com",
    ingresso: "2020-06-01",
    status: "Ativo",
  },
  {
    id: 7,
    nome: "Gabriel Martins",
    email: "gabriel.martins@demo.com",
    ingresso: "2020-07-01",
    status: "Ativo",
  },
  {
    id: 8,
    nome: "Helena Dias",
    email: "helena.dias@demo.com",
    ingresso: "2020-08-01",
    status: "Ativo",
  },
  {
    id: 9,
    nome: "Igor Pereira",
    email: "igor.pereira@demo.com",
    ingresso: "2020-09-01",
    status: "Ativo",
  },
  {
    id: 10,
    nome: "Juliana Costa",
    email: "juliana.costa@demo.com",
    ingresso: "2020-10-01",
    status: "Ativo",
  },
  {
    id: 31,
    nome: "Rodrigo Pires",
    email: "rodrigo.pires@demo.com",
    ingresso: "2022-12-12",
    status: "Ativo",
  },
  {
    id: 32,
    nome: "Letícia Nunes",
    email: "leticia.nunes@demo.com",
    ingresso: "2023-05-05",
    status: "Ativo",
  },
  {
    id: 33,
    nome: "André Barbosa",
    email: "andre.barbosa@demo.com",
    ingresso: "2018-07-07",
    status: "Ativo",
  },
  {
    id: 34,
    nome: "Marina Freitas",
    email: "marina.freitas@demo.com",
    ingresso: "2021-09-09",
    status: "Ativo",
  },
  {
    id: 35,
    nome: "Gustavo Rezende",
    email: "gustavo.rezende@demo.com",
    ingresso: "2020-11-11",
    status: "Ativo",
  },
];
const DISCIPLINAS_DEMO = [
  {
    id: 1,
    nome: "Algoritmos",
    codigo: "ALG101",
    curso: "BCC",
    matriz: "2020",
    chTeorica: 30,
    chPratica: 30,
  },
  {
    id: 2,
    nome: "Estruturas de Dados",
    codigo: "ED102",
    curso: "BCC",
    matriz: "2020",
    chTeorica: 40,
    chPratica: 20,
  },
  {
    id: 3,
    nome: "Banco de Dados",
    codigo: "BD103",
    curso: "BCC",
    matriz: "2020",
    chTeorica: 30,
    chPratica: 30,
  },
  {
    id: 4,
    nome: "Redes de Computadores",
    codigo: "RC104",
    curso: "BCC",
    matriz: "2020",
    chTeorica: 35,
    chPratica: 25,
  },
  {
    id: 5,
    nome: "Sistemas Operacionais",
    codigo: "SO105",
    curso: "BCC",
    matriz: "2020",
    chTeorica: 30,
    chPratica: 30,
  },
];

export default function NucleoEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nucleo, setNucleo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [responderLoading, setResponderLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [manifestacaoSelecionada, setManifestacaoSelecionada] = useState(null);
  const [novoStatus, setNovoStatus] = useState("ACEITO");

  const [nome, setNome] = useState("");
  const [area, setArea] = useState(null);
  const [facilitador, setFacilitador] = useState(null);
  const [descricao, setDescricao] = useState("");
  const [docentesNucleo, setDocentesNucleo] = useState([]);
  const [disciplinasNucleo, setDisciplinasNucleo] = useState([]);
  const [manifestacoesNucleo, setManifestacoesNucle] = useState([]);
  const [docenteSelecionado, setDocenteSelecionado] = useState("");
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState("");

  const carregarNucleo = () => {
    setLoading(true);

    getNucleoById(id)
      .then((nucleo) => {
        setNucleo(nucleo.data);
        setNome(nucleo.data.nome);
        setArea(nucleo.data.area);
        setFacilitador(nucleo.data.facilitador);
        setDescricao(nucleo.data.descricao || "");
        setDocentesNucleo(nucleo.data.docentes || []);
        setDisciplinasNucleo(nucleo.data.disciplinas || []);
        setManifestacoesNucle(nucleo.data.manifestacoes || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    carregarNucleo();
  }, [id]);

  const abrirDialog = (manifestacao) => {
    setManifestacaoSelecionada(manifestacao);
    setDialogOpen(true);
  };

  const enviarResposta = async () => {
    setResponderLoading(true);
    try {
      await responderManifestacao(manifestacaoSelecionada.id, novoStatus);
      toast.success("Manifestação respondida com sucesso!");
      setDialogOpen(false);
      carregarNucleo();
    } catch {
      toast.error("Erro ao responder manifestação.");
    } finally {
      setResponderLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <span className="text-gray-500 text-lg">Carregando...</span>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <Toaster position="top-right" />
      <button
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-700"
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>
      <h1 className="text-3xl font-semibold mb-6 text-gray-800 border-b pb-3">
        Editar Núcleo de Conhecimento{" "}
      </h1>

      {/* Formulário de edit demonstrativo */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block font-medium mb-1">Núcleo *</label>
          <input
            className="border rounded px-2 py-1 w-full"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            disabled
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Área *</label>
          <select
            className="border rounded px-2 py-1 w-full"
            value={area?.id || ""}
            onChange={(e) =>
              setArea(AREAS_DEMO.find((a) => a.id === Number(e.target.value)))
            }
            disabled
          >
            <option value="">Selecione...</option>
            {AREAS_DEMO.map((a) => (
              <option key={a.id} value={a.id}>
                {a.nome}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Facilitador *</label>
          <select
            className="border rounded px-2 py-1 w-full"
            value={facilitador?.id || ""}
            onChange={(e) =>
              setFacilitador(
                DOCENTES_DEMO.find((d) => d.id === Number(e.target.value))
              )
            }
            disabled
          >
            <option value="">Selecione...</option>
            {DOCENTES_DEMO.map((d) => (
              <option key={d.id} value={d.id}>
                {d.nome}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Descrição *</label>
          <textarea
            className="border rounded px-2 py-1 w-full"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            disabled
          />
        </div>
      </div>

      {/* Tabela de docentes */}
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-700 mb-2">Docentes</h2>
        <div className="flex gap-2 mb-2">
          <select
            className="border rounded px-2 py-1 flex-1"
            value={docenteSelecionado}
            onChange={(e) => setDocenteSelecionado(e.target.value)}
          >
            <option value="">Selecione um docente...</option>
            {DOCENTES_DEMO.filter(
              (d) => !docentesNucleo.some((dn) => dn.id === d.id)
            ).map((d) => (
              <option key={d.id} value={d.id}>
                {d.nome}
              </option>
            ))}
          </select>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled
          >
            Adicionar
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Nome</th>
                <th className="p-2 border">E-mail</th>
                <th className="p-2 border">Ingresso</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Ações</th>
              </tr>
            </thead>
            <tbody>
              {docentesNucleo.map((docente) => {
                const infoDemo = DOCENTES_DEMO.find((d) => d.id === docente.id);
                return (
                  <tr key={docente.id} className="border-t">
                    <td className="p-2 border flex items-center gap-2">
                      <span className="inline-block w-5 h-5 bg-gray-200 rounded-full text-center">
                        👤
                      </span>
                      {docente.nome}
                    </td>
                    <td className="p-2 border">
                      {infoDemo?.email || "demo@demo.com"}
                    </td>
                    <td className="p-2 border">
                      {infoDemo?.ingresso || "--/--/----"}
                    </td>
                    <td className="p-2 border">ACEITO</td>
                    <td className="p-2 border">
                      <div className="flex gap-2">
                        <button className="text-red-600 px-2" disabled>
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {manifestacoesNucleo
                .filter((m) => m.status === "SOLICITADO")
                .map((manifestacao) => {
                  const docente = manifestacao.docente;
                  const infoDemo = DOCENTES_DEMO.find(
                    (d) => d.id === docente.id
                  );
                  const manifestacaoSolicitada =
                    manifestacao.status === "SOLICITADO";

                  return (
                    <tr key={manifestacao.id} className="border-t">
                      <td className="p-2 border flex items-center gap-2">
                        <span className="inline-block w-5 h-5 bg-gray-200 rounded-full text-center">
                          👤
                        </span>
                        {docente.nome}
                      </td>
                      <td className="p-2 border">
                        {infoDemo?.email || "demo@demo.com"}
                      </td>
                      <td className="p-2 border">--/--/----</td>
                      <td className="p-2 border">{manifestacao.status}</td>
                      <td className="p-2 border">
                        <div className="flex gap-2">
                          {manifestacaoSolicitada && (
                            <button
                              className="text-blue-600 px-2"
                              title="Responder manifestação"
                              onClick={() => abrirDialog(manifestacao)}
                            >
                              🤚 Responder
                            </button>
                          )}
                          <button className="text-red-600 px-2" disabled>
                            Excluir
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-700 mb-2">Disciplinas</h2>
        <div className="flex gap-2 mb-2">
          <select
            className="border rounded px-2 py-1 flex-1"
            value={disciplinaSelecionada}
            onChange={(e) => setDisciplinaSelecionada(e.target.value)}
          >
            <option value="">Selecione uma disciplina...</option>
            {DISCIPLINAS_DEMO.filter(
              (d) => !disciplinasNucleo.some((dn) => dn.id === d.id)
            ).map((d) => (
              <option key={d.id} value={d.id}>
                {d.nome}
              </option>
            ))}
          </select>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled
          >
            Adicionar
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Nome</th>
                <th className="p-2 border">Código</th>
                <th className="p-2 border">Curso</th>
                <th className="p-2 border">Matriz</th>
                <th className="p-2 border">CH Teórica</th>
                <th className="p-2 border">CH Prática</th>
                <th className="p-2 border">CH Total</th>
                <th className="p-2 border">Ações</th>
              </tr>
            </thead>
            <tbody>
              {disciplinasNucleo.map((disciplina) => {
                const infoDemo =
                  DISCIPLINAS_DEMO.find((d) => d.id === disciplina.id) || {};
                const chTeorica = infoDemo.chTeorica || 0;
                const chPratica = infoDemo.chPratica || 0;
                return (
                  <tr key={disciplina.id} className="border-t">
                    <td className="p-2 border">{disciplina.nome}</td>
                    <td className="p-2 border">{infoDemo.codigo || "D000"}</td>
                    <td className="p-2 border">{infoDemo.curso || "BCC"}</td>
                    <td className="p-2 border">{infoDemo.matriz || "2020"}</td>
                    <td className="p-2 border">{chTeorica}</td>
                    <td className="p-2 border">{chPratica}</td>
                    <td className="p-2 border">{chTeorica + chPratica}</td>
                    <td className="p-2 border">
                      <button className="text-red-600 px-2" disabled>
                        Excluir
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dialog de manifestação */}
      {dialogOpen && manifestacaoSelecionada && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h3 className="text-lg font-semibold mb-4">
              Responder Manifestação
            </h3>
            <div className="mb-4 text-sm text-gray-700">
              <div className="mb-1">
                <span className="font-semibold">Docente:</span>{" "}
                {manifestacaoSelecionada.docente?.nome}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Data da Solicitação:</span>{" "}
                {manifestacaoSelecionada.dataSolicitacao}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Justificativa:</span>{" "}
                {manifestacaoSelecionada.justificativa}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Status</label>
              <select
                value={novoStatus}
                onChange={(e) => setNovoStatus(e.target.value)}
                className="w-full border rounded px-2 py-1"
              >
                <option value="ACEITO">ACEITO</option>
                <option value="NEGADO">NEGADO</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={enviarResposta}
                disabled={responderLoading}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                {responderLoading ? "Enviando..." : "Enviar"}
              </button>
              <button
                onClick={() => setDialogOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Botões de ação demonstrativos */}
      <div className="flex justify-end gap-2 mt-8">
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={() => navigate(-1)}
        >
          Cancelar
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" disabled>
          Salvar
        </button>
      </div>
    </div>
  );
}
