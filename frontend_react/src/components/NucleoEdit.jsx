import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNucleoById, responderManifestacao } from "../services/api";
import toast, { Toaster } from "react-hot-toast";

export default function NucleoEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nucleo, setNucleo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [responderLoading, setResponderLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [manifestacaoSelecionada, setManifestacaoSelecionada] = useState(null);
  const [novoStatus, setNovoStatus] = useState("ACEITO");

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

      setLoading(true);
      getNucleoById(id)
        .then((res) => setNucleo(res.data))
        .catch(console.error)
        .finally(() => setLoading(false));
    } catch {
      toast.error("Erro ao responder manifestação.");
    } finally {
      setResponderLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getNucleoById(id)
      .then((res) => setNucleo(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

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
        ← Voltar
      </button>
      <h1 className="text-3xl font-semibold mb-6 text-gray-800 border-b pb-3">
        Detalhes do Núcleo
      </h1>

      <div className="space-y-4 mb-6">
        <div>
          <h2 className="text-lg font-medium text-gray-700">Núcleo</h2>
          <p className="text-gray-900 text-xl">{nucleo.nome}</p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-700">Área</h2>
          <p className="text-gray-900 text-lg">{nucleo.area?.nome}</p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-700">Facilitador</h2>
          <p className="text-gray-900 text-lg">{nucleo.facilitador?.nome}</p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-700">Docentes</h2>
          <ul>
            {nucleo.docentes && nucleo.docentes.length > 0 ? (
              nucleo.docentes.map((docente) => (
                <li key={docente.id}>{docente.nome}</li>
              ))
            ) : (
              <li className="text-gray-500">Nenhum docente cadastrado.</li>
            )}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium text-gray-700 mb-2">
          Manifestações
        </h2>
        {nucleo.manifestacoes && nucleo.manifestacoes.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Docente</th>
                  <th className="p-2 border">Data da Solicitação</th>
                  <th className="p-2 border">Justificativa</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Ações</th>
                </tr>
              </thead>
              <tbody>
                {nucleo.manifestacoes.map((m) => (
                  <tr key={m.id} className="border-t">
                    <td className="p-2 border">{m.docente?.nome}</td>
                    <td className="p-2 border">{m.dataSolicitacao}</td>
                    <td className="p-2 border">{m.justificativa}</td>
                    <td className="p-2 border">{m.status}</td>
                    <td className="p-2 border">
                      {m.status === "SOLICITADO" && (
                        <button
                          className="px-2 py-1 bg-blue-600 text-white rounded"
                          onClick={() => abrirDialog(m)}
                        >
                          Responder
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-gray-500">Nenhuma manifestação cadastrada.</div>
        )}
      </div>

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
    </div>
  );
}
