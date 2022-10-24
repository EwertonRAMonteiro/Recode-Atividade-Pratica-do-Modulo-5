import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from '../../Api/Api';
import './destino.css'

export default function Index() {
  const [destinos, setDestinos] = useState([]);
  const [redirect, setRedirect] = useState(false); 


  useEffect(() => {
    Api.get('/destinos')
      .then((response) => {
        setDestinos(response.data);
        setRedirect(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [redirect]);

  function deleteDestino(id){
    Api.delete(`/destinos/${id}`)
    setRedirect(true);}

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro de Destinos</h1>
      </header>
      <div className="container p-3">
        <Link to="/Destinos-Create" className="btn btn-sakura mb-2">
          Cadastrar Destino
        </Link>
        <div className="table-responsive d-flex justify-content-center">
          <table className="table table-hover table-sm table-colors">
            <thead>
              <tr>
                <th>ID</th>
                <th>Destino</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Ida</th>
                <th>Volta</th>
                <th>Preço</th>
                <th>Cliente</th>
              </tr>
            </thead>
            <tbody>
              {destinos.map((destino) => (
                <tr className="text-white tr-hover" key={destino.id}>
                  <td className="text-white">{destino.id}</td>
                  <td className="text-white">{destino.nomeDestino}</td>
                  <td className="text-white">{destino.cidade}</td>
                  <td className="text-white">{destino.estado}</td>
                  <td className="text-white">{destino.ida}</td>
                  <td className="text-white">{destino.volta}</td>
                  <td className="text-white">{destino.valor}</td>
                  <td className="text-white">{destino.cliente.nome}</td>
                  <td className="d-flex justify-content-end">
                    <Link
                      to={`/Destinos-Update/${destino.id}`}
                      className="btn btn-warning"
                    >
                      Atualizar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteDestino(destino.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
