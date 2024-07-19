
export default function Home() {

  return (
    <main className="flex w-full h-full">
      <div className="w-full h-screen flex flex-col items-center justify-center absolute bg-transparent">
        <h1 className="font-bold md:text-5xl text-4xl text-center">Películas y series ilimitadas y mucho más</h1>
        <p className="font-regular text-2xl mt-5 text-center">Disfruta donde quieras. Cancela cuando quieras.</p>
        <p className="font-light text-xl mt-5 text-center">¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
        <form className="flex mt-10 md:flex-row flex-col" action="" method="">
          <input
            type="text"
            id="id"
            name=""
            placeholder="Correo electrónico"
            className="w-[300px] border border-gray-600 py-3 px-5 outline-none bg-black bg-opacity-50"
          />
          <button className="md:ml-4 ml-0 md:mt-0 mt-2 bg-red-600 md:py-1 py-3 px-7 rounded">
            Comenzar
          </button>
        </form>
      </div>
    </main>
  );
}
