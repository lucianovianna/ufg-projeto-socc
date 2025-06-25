import React from "react";
import { useEffect, useState } from "react";
import { getAllNucleos } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function NucleosList() {
  const [nucleos, setNucleos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [dialogNucleo, setDialogNucleo] = useState(null);

  const abrirDialog = (type, nucleo) => {
    setDialogType(type);
    setDialogNucleo(nucleo);
    setDialogOpen(true);
  };

  useEffect(() => {
    getAllNucleos()
      .then((res) => setNucleos(res.data))
      .catch(console.error);
  }, []);

  const nucleosFiltrados = nucleos.filter((nucleo) => {
    const termo = searchTerm.toLowerCase();
    return (
      nucleo.nome?.toLowerCase().includes(termo) ||
      nucleo.area?.nome?.toLowerCase().includes(termo) ||
      nucleo.facilitador?.nome?.toLowerCase().includes(termo)
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Núcleos de Conhecimento</h1>

      <div className="flex items-center gap-4 mb-4">
        <input
          className="border p-2 flex-1"
          placeholder="Pesquisar por nome, área ou facilitador..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded opacity-50 cursor-not-allowed"
          disabled
        >
          Adicionar
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Nome</th>
            <th className="p-2 border">Área</th>
            <th className="p-2 border">Facilitador</th>
            <th className="p-2 border">Docentes</th>
            <th className="p-2 border">Disciplinas</th>
            <th className="p-2 border">Ações</th>
          </tr>
        </thead>
        <tbody>
          {nucleosFiltrados.map((nucleo) => (
            <tr key={nucleo.id} className="border-t">
              <td className="p-2 border">{nucleo.nome}</td>
              <td className="p-2 border">{nucleo.area?.nome}</td>
              <td className="p-2 border">{nucleo.facilitador?.nome}</td>
              <td className="p-2 border">
                <button
                  className="underline text-blue-600"
                  onClick={() => abrirDialog("docentes", nucleo)}
                >
                  {nucleo.docentes?.length || 0}
                </button>
              </td>
              <td className="p-2 border">
                <button
                  className="underline text-blue-600"
                  onClick={() => abrirDialog("disciplinas", nucleo)}
                >
                  {nucleo.disciplinas?.length || 0}
                </button>
              </td>
              <td className="p-2 border">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => navigate(`/nucleo/${nucleo.id}`)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
          {nucleosFiltrados.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center p-4">
                Nenhum núcleo encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {dialogOpen && dialogNucleo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h3 className="text-lg font-semibold mb-4">
              {dialogType === "docentes"
                ? "Docentes do Núcleo"
                : "Disciplinas do Núcleo"}
            </h3>
            <ul className="mb-4">
              {(dialogType === "docentes"
                ? dialogNucleo.docentes
                : dialogNucleo.disciplinas
              )?.map((item) => (
                <li key={item.id} className="mb-1">
                  {item.nome}
                </li>
              ))}
            </ul>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setDialogOpen(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
