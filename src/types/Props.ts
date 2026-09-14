import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { Proveedor } from "./Proveedor";
import type { ProveedorFormData } from "./ProveedorFormData";

export type ProveedorToEditType = Proveedor | null;

export type ProveedorFormProps = {
    formData: ProveedorFormData;
    setFormData: Dispatch<SetStateAction<ProveedorFormData>>;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    proveedorToEdit: ProveedorToEditType;
    setProveedorToEdit: Dispatch<SetStateAction<ProveedorToEditType>>;
    loading: boolean;
};

export type ProveedorListProps = {
    proveedores: Proveedor[];
    handleEdit: (proveedor: Proveedor) => void;
    handleDelete: (id: number) => void;
    loading: boolean;
}