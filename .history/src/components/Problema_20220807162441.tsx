import React from "react";

import config from "../config/index.json";

const Problema = () => {
  const { features } = config;
  const { title, subtitle, description, items: featuresList } = features;
  return (
    <div className={`py-12 bg-background`} id="problema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Problema
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
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

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <img
                      className={`inline-block h-6 w-6`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Problema;
