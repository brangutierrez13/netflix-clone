"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  const login = () => {
    const loginParam = "login"; // Reemplaza 'yourParameter' con el valor que deseas enviar
    router.push(`/auth/${loginParam}`);
  };
  return (
    <header className="w-full h-[80px] absolute z-10">
      <nav className="w-full h-full flex items-center justify-between md:px-32 px-5">
        <Link href="/">
          <h1>Peliculas y series</h1>
        </Link>

        <div className="nav-links">
          <button
            onClick={login}
            className="bg-red-600 px-4 py-1 rounded font-semibold hover:bg-white hover:text-red-600 hover:border-red-600 hover:border transition-all duration-100"
          >
            Iniciar sesion
          </button>
        </div>
      </nav>
    </header>
  );
}
