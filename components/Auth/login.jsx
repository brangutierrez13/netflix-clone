export default function Login() {
  return (
    <section className="w-full h-screen">
      <form className="" action="" method="">
        <h1 className="">Iniciar sesion</h1>
        <input
          type="text"
          id="id"
          name="name"
          placeholder="Correo electronico"
          className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
        />
        <input
          type="text"
          id="id"
          name="name"
          placeholder="Contrasena"
          className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
        />
        <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
          Iniciar sesion
        </button>
      </form>
    </section>
  );
}
