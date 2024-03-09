import useClima from "../hooks/useClima"

export default function Resultado() {

    const { resultado } = useClima();
    const { name, main } = resultado;

    // Grados Kelvin
    const kelvin = 273.15

  return (
    <div className="contenedor clima">
        <h2>La temperatura de { name } es : </h2>
        <p> { parseInt(main.temp-kelvin) }  <span>&#x2103;</span></p>
        <div className="temp_min_max">
        <p>T Mín: { parseInt(main.temp_min-kelvin) } <span>&#x2103;</span></p>
        <p>T Máx: { parseInt(main.temp_max-kelvin)  }<span>&#x2103;</span></p>
        </div>
    </div>
  )
}
