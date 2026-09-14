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
    setActiveSection,
    handleInputChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    goToNewProveedor,
  } = useProveedores();

  return (
    <div className="gestor-proveedores-container">
      <h1>Gestor de Proveedores</h1>

      {activeSection === "list" && (
        <>
          <button onClick={goToNewProveedor} disabled={loading}>
            Nuevo Proveedor
          </button>
          <ProveedorList
            proveedores={proveedores}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            loading={loading}
          />
        </>
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
  );
  
};

export default GestorProveedores;
