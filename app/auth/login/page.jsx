"use client"
import { useRouter } from "next/navigation"

export default function Auth() {

    const router = useRouter()

    const register = () => {
        const registerParam = "register"; // Reemplaza 'yourParameter' con el valor que deseas enviar
        router.push(`/auth/${registerParam}`);
      };

    return (
        <section className="w-full h-screen flex items-center justify-center">
            <form className="flex flex-col md:w-1/3 w-[90%] bg-black bg-opacity-75 md:px-10 px-5 py-10" action="" method="">
                <h1 className="text-3xl font-semibold mb-5">Iniciar sesion</h1>
                <input
                    type="text"
                    id="id"
                    name="name"
                    placeholder="Correo electronico"
                    className="mb-10 px-4 py-4 bg-transparent border border-gray-700"
                />
                <input
                    type="text"
                    id="id"
                    name="name"
                    placeholder="Contrasena"
                    className="mb-10 px-4 py-4 bg-transparent border border-gray-700"
                />
                <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-600 h-[60px]">
                    Iniciar sesion
                </button>
            </form>
        </section>
    )

}