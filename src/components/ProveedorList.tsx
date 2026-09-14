import React from "react";
import type { ProveedorListProps } from "../types/Props";

const ProveedorList: React.FC<ProveedorListProps> = ({
  proveedores,
  handleEdit,
  handleDelete,
  loading,
}) => {
  if (loading) {
    return <p>Cargando proveedores...</p>;
  }

  if (proveedores.length === 0) {
    return <p>No hay proveedores registrados.</p>;
  }

  return (
    <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
  <thead className="bg-gray-100">
    <tr>
      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Nombre</th>
      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Contacto</th>
      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Dirección</th>
      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Teléfono</th>
      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Correo</th>
      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Acciones</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200 bg-white">
    {proveedores.map((p) => (
      <tr key={p.id}>
        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{p.nombre}</td>
        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{p.contacto}</td>
        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{p.direccion}</td>
        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{p.telefono}</td>
        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{p.correo}</td>
        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 space-x-2">
          <button
            onClick={() => handleEdit(p)}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded disabled:opacity-50"
          >
            Editar
          </button>
          <button
            onClick={() => handleDelete(p.id)}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded disabled:opacity-50"
          >
            Eliminar
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

  );
};

export default ProveedorList;
