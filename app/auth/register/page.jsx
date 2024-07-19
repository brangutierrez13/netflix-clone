"use client"
import { useForm } from 'react-hook-form'

export default function Register() {

    const { register, handleSubmit, formState: {errors} } = useForm()
    const onSubmit = handleSubmit(data => {
        console.log(data)
    })

    return (
        <section className="w-full h-screen flex items-center justify-center">
            <form className="flex flex-col w-[70%] h-[70%] bg-black bg-opacity-75 px-10 py-10" onSubmit={onSubmit}>
                <h1 className="text-3xl font-semibold mb-5">Registrate para ver Peliculas y series ilimitadas</h1>
                <div className="flex flex-col lg:grid grid-cols-2 grid-rows-3 gap-2 mt-5 h-full">
                    <input
                        placeholder="Correo electronico"
                        type="email"
                        className="mb-5 px-4 py-4 bg-transparent border border-gray-700"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Se requiere este campo.'
                            },
                        })}
                    />
                    {
                    errors.email && (
                        <span className="text-red-600 font-light">Se necesita este espacio</span>
                    )
                    }
                    <input
                        placeholder="Nombre de usuario"
                        type="text"
                        className="mb-5 px-4 py-4 bg-transparent border border-gray-700"
                        {...register("username", {
                            required: true,
                        })}
                    />
                    <input
                        placeholder="Nombre"
                        type="text"
                        className="mb-5 px-4 py-4 bg-transparent border border-gray-700"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <input
                        placeholder="Apellidos completos"
                        type="text"
                        className="mb-5 px-4 py-4 col-start-1 row-start-3 bg-transparent border border-gray-700"
                        {...register("lastname", {
                            required: true,
                        })}
                    />
                    <input
                        placeholder="Contrasena"
                        type="password"
                        className="mb-5 px-4 py-4 bg-transparent border border-gray-700"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <input
                        placeholder="Confirmar contrasena"
                        type="password"
                        className="mb-5 px-4 py-4 bg-transparent border border-gray-700"
                        {...register("confirmPassword", {
                            required: true,
                        })}
                    />
                </div>
                <div className="">
                    <button type="submit" className="bg-red-600 px-4 py-2 rounded font-semibold">Registrarse</button>
                </div>
            </form>
        </section>
    )
}
