import { moviedb, movieDb } from "../lib/themoviedb"

export  async function Banner(){
  try {
     const result = await moviedb.searchMovie(
      {
        query: 'Guardians'
      }
    )
    console.log(result)
    return(
      <div>Se cargaron los datos</div>
    )
  } catch (error) {
    console.log('Ha ocurrido un error')
    return(
      <div className="">Ha ocurrido un error</div>
    )
  }
}

export default function homePage() {
  return (
    <main className="h-screen w-full">
        <section className="banner">
            <Banner/>
        </section>
    </main>
  )
}
