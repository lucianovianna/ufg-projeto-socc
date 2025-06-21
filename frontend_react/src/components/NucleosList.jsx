import React from "react";
import { useEffect, useState } from "react";
import { getAllNucleos } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function NucleosList() {
  const [nucleos, setNucleos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllNucleos().then((res) => setNucleos(res.data)).catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Núcleos de Conhecimento</h1>
      <input className="border p-2 w-full mb-4" placeholder="Pesquisar..." />
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Nome</th>
            <th className="p-2 border">Área</th>
            <th className="p-2 border">Facilitador</th>
            <th className="p-2 border">Ações</th>
          </tr>
        </thead>
        <tbody>
          {nucleos.map((nucleo) => (
            <tr key={nucleo.id} className="border-t">
              <td className="p-2 border">{nucleo.nome}</td>
              <td className="p-2 border">{nucleo.area}</td>
              <td className="p-2 border">{nucleo.facilitador}</td>
              <td className="p-2 border">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => navigate(`/nucleo/${nucleo.id}`)}
                >
                  Ver detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}