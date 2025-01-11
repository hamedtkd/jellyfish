import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dashboardService } from "@/services/api/dashboard.service";

const schema = yup
    .object({
        npub: yup.string().required("npub is required"),
    })
    .required();

const useEdit = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: { npub: string }) => {
        try {
            setLoading(true);
            await dashboardService.editMyUsernames(id as string, data);
            navigate("");
        } catch (error) {
            console.log(error);
            navigate("");
        } finally {
            setLoading(false);
        }
    };

    return {
        setValue,
        register,
        onSubmit,
        errors,
        handleSubmit: handleSubmit(onSubmit),
        loading,
    };
};

export default useEdit;
