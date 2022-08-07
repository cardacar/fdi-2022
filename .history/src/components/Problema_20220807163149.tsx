import React from "react";

const Problema = () => {
  return (
    <div className={`py-12 bg-background`} id="problema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Problema
          </p>
        </div>
        <div className={`w-full p-6 mt-20 text-center`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
              </h3>
              <p className={`text-gray-600 mb-8 text-justify`}>
              En el año 2021 se presentaron 41 billones de intentos de ataques
            cibernéticos en el mundo y siete billones en Colombia. De acuerdo
            con el último informe presentado por la Fiscalía General de la
            Nación, en Colombia en el año 2021 el número de ataques cibernéticos
            aumentó en un 30%, comparado con el año anterior. Si bien, las
            compañías y entidades oficiales han venido trabajando fuertemente en
            estrategias tendientes a robustecer las medidas de ciberseguridad,
            estas no han sido suficientes, ya que casos como el secuestro de
            información o la afectación de datos a entidades, aún continúan
            presentándose y han ocasionado grandes pérdidas económicas para las
            organizaciones, ya que estas han tenido que efectuar cuantiosos
            pagos frente a este tipo extorsiones a los cibercriminales.
            <br></br>
            <br></br>
            Los cibercrímenes generan cada vez más rentabilidad para los
            atacantes y en este sentido, si no existen herramientas para
            contrarrestarlos y estar protegidos, seguirá creciendo la curva de
            ciberataques para empresas y entidades de gobierno.
              </p>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Problema;
