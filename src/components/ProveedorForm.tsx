import React from "react";
import type { ProveedorFormProps } from "../types/Props";

const ProveedorForm: React.FC<ProveedorFormProps> = ({
  formData,
  setFormData,
  handleInputChange,
  handleSubmit,
  proveedorToEdit,
  setProveedorToEdit,
  loading,
}) => {
  const handleCancel = () => {
    setProveedorToEdit(null);
    setFormData({
      nombre: "",
      contacto: "",
      direccion: "",
      telefono: "",
      correo: "",
    });
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-3xl px-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
      >
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600">
            Proveedor
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            {proveedorToEdit ? "Editar Proveedor" : "Nuevo Proveedor"}
          </h2>
          <p className="text-sm text-gray-500">
            Completa la información del proveedor y guarda los cambios.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-gray-700">
              Nombre
            </span>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
              disabled={loading}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-gray-100"
              placeholder="Ej. Distribuidora Central"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-gray-700">
              Contacto
            </span>
            <input
              type="text"
              name="contacto"
              value={formData.contacto}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-gray-100"
              placeholder="Ej. Juan Pérez"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="mb-2 block text-sm font-semibold text-gray-700">
              Dirección
            </span>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-gray-100"
              placeholder="Ej. Colonia Palmira, Tegucigalpa"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-gray-700">
              Teléfono
            </span>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-gray-100"
              placeholder="Ej. 9999-9999"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-gray-700">
              Correo
            </span>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-gray-100"
              placeholder="Ej. contacto@proveedor.com"
            />
          </label>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Guardando..."
              : proveedorToEdit
              ? "Actualizar"
              : "Crear"}
          </button>

          {proveedorToEdit && (
            <button
              type="button"
              onClick={handleCancel}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-xl bg-gray-200 px-5 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProveedorForm;
