import React from "react";
import { useProveedores } from "../hooks/useProveedor";
import ProveedorForm from "./ProveedorForm";
import ProveedorList from "./ProveedorList";

const GestorProveedores: React.FC = () => {
  const {
    proveedores,
    formData,
    setFormData,
    proveedorToEdit,
    setProveedorToEdit,
    loading,
    activeSection,
    handleInputChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    goToNewProveedor,
  } = useProveedores();

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">
          Gestor de Proveedores
        </h1>

        {activeSection === "list" && (
          <div className="space-y-5">
            <button
              onClick={goToNewProveedor}
              disabled={loading}
              className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Nuevo Proveedor
            </button>
            <ProveedorList
              proveedores={proveedores}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              loading={loading}
            />
          </div>
        )}

        {activeSection === "form" && (
          <ProveedorForm
            formData={formData}
            setFormData={setFormData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            proveedorToEdit={proveedorToEdit}
            setProveedorToEdit={setProveedorToEdit}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
  
};

export default GestorProveedores;
