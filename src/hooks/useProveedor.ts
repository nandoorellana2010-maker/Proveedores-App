import React, { useEffect, useState, type ChangeEvent } from "react";
import Swal from "sweetalert2";
import type { Proveedor } from "../types/Proveedor";
import type { ProveedorFormData } from "../types/ProveedorFormData";
import type { ProveedorToEditType } from "../types/Props";

const LOCAL_STORAGE_KEY = "proveedores";

export const useProveedores = () => {
    const DEFAULT_FORM: ProveedorFormData = {
        nombre: "",
        contacto: "",
        direccion: "",
        telefono: "",
        correo: "",
    };

    const [proveedores, setProveedores] = useState<Proveedor[]>([]);
    const [formData, setFormData] = useState<ProveedorFormData>(DEFAULT_FORM);
    const [proveedorToEdit, setProveedorToEdit] = useState<ProveedorToEditType>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<"list" | "form">("list");

    useEffect(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
            setProveedores(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(proveedores));
    }, [proveedores]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const resetForm = (): void => {
        setFormData(DEFAULT_FORM);
        setProveedorToEdit(null);
    };

    const goToNewProveedor = (): void => {
        resetForm();
        setActiveSection("form");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setLoading(true);

        try {
            if (proveedorToEdit) {
                const updatedProveedor: Proveedor = {
                    ...proveedorToEdit,
                    ...formData,
                };
                setProveedores((prev) =>
                    prev.map((p) => (p.id === proveedorToEdit.id ? updatedProveedor : p))
                );
                Swal.fire({
                    icon: "success",
                    title: "Actualizado!",
                    text: "El proveedor fue actualizado correctamente.",
                    background: "#1a1d27",
                    color: "#f1f2f6",
                    confirmButtonColor: "#6c63ff",
                });
            } else {
                const newProveedor: Proveedor = {
                    id: Date.now(),
                    ...formData,
                };
                setProveedores((prev) => [newProveedor, ...prev]);
                Swal.fire({
                    icon: "success",
                    title: "Creado!",
                    text: "Nuevo proveedor fue agregado correctamente.",
                    background: "#1a1d27",
                    color: "#f1f2f6",
                    confirmButtonColor: "#6c63ff",
                });
            }

            resetForm();
            setActiveSection("list");
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo guardar el proveedor",
                background: "#1a1d27",
                color: "#f1f2f6",
                confirmButtonColor: "#6c63ff",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (proveedor: Proveedor): void => {
        setProveedorToEdit(proveedor);
        setFormData({
            nombre: proveedor.nombre ?? "",
            contacto: proveedor.contacto ?? "",
            direccion: proveedor.direccion ?? "",
            telefono: proveedor.telefono ?? "",
            correo: proveedor.correo ?? "",
        });
        setActiveSection("form");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleDelete = async (id: number): Promise<void> => {
        const result = await Swal.fire({
            icon: "warning",
            title: "Eliminar proveedor",
            text: "Esta acción no se puede deshacer.",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
            background: "#1a1d27",
            color: "#f1f2f6",
            confirmButtonColor: "#ef4444",
        });
        if (!result.isConfirmed) return;

        setLoading(true);

        try {
            setProveedores((prev) => prev.filter((p) => p.id !== id));
            Swal.fire({
                icon: "success",
                title: "Eliminado!",
                text: "El proveedor fue eliminado.",
                background: "#1a1d27",
                color: "#f1f2f6",
                confirmButtonColor: "#6c63ff",
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "No se pudo eliminar el proveedor.",
                background: "#1a1d27",
                color: "#f1f2f6",
                confirmButtonColor: "#6c63ff",
            });
        } finally {
            setLoading(false);
        }
    };

    return {
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
    };
};
