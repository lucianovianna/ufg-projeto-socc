import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNucleoById, responderManifestacao } from "../services/api";

export default function NucleoEdit() {
  const { id } = useParams();
  const [nucleo, setNucleo] = useState(null);

  useEffect(() => {
    getNucleoById(id).then((res) => setNucleo(res.data)).catch(console.error);
  }, [id]);

  const responder = () => {
    responderManifestacao(id)
      .then(() => alert("Manifestação respondida com sucesso!"))
      .catch(() => alert("Erro ao responder manifestação."));
  };

  if (!nucleo) return <div className="p-6">Carregando...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detalhes do Núcleo</h1>
      <div className="mb-2"><strong>Núcleo:</strong> {nucleo.nome}</div>
      <div className="mb-2"><strong>Área:</strong> {nucleo.area}</div>
      <div className="mb-2"><strong>Facilitador:</strong> {nucleo.facilitador}</div>
      <div className="mb-4"><strong>Descrição:</strong> {nucleo.descricao}</div>

      {nucleo.manifestacaoAberta && (
        <button onClick={responder} className="bg-green-600 text-white px-4 py-2 rounded">
          Responder Manifestação de Intenção
        </button>
      )}
    </div>
  );
}