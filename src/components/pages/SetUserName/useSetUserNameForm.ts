import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usernameService } from "@/services/api/username.service";

const schema = yup
    .object({
        npub: yup.string().required("Username is required"),
    })
    .required();

const useCheckAvailability = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: { npub: string }) => {
        try {
            setLoading(true);
            await usernameService.checkAvailability(data.npub);
            navigate("");
        } catch (error) {
            console.log(error);
            navigate("");
        } finally {
            setLoading(false);
        }
    };

    return {
        register,
        onSubmit,
        errors,
        handleSubmit: handleSubmit(onSubmit),
        loading,
    };
};

export default useCheckAvailability;
