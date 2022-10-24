import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from '../../Api/Api';
import './hospedagem.css'

export default function Index() {
  const [hospedagems, setHospedagems] = useState([]);
  const [redirect, setRedirect] = useState(false); 


  useEffect(() => {
    Api.get('/hospedagems')
      .then((response) => {
        setHospedagems(response.data);
        setRedirect(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [redirect]);

  function deleteHospedagem(id){
    Api.delete(`/hospedagems/${id}`)
    setRedirect(true);}

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro de Hospedagem</h1>
      </header>
      <div className="container p-3">
        <Link to="/Hospedagems-Create" className="btn btn-sakura mb-2">
          Cadastrar Hospedagem
        </Link>
        <div className="table-responsive d-flex justify-content-center">
          <table className="table table-hover table-sm table-colors">
            <thead>
              <tr>
                <th>ID</th>
                <th>Hotel</th>
                <th>Cidade</th>
                <th>Preço</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Cliente</th>
              </tr>
            </thead>
            <tbody>
              {hospedagems.map((hospedagem) => (
                <tr className="text-white tr-hover" key={hospedagem.id}>
                  <td className="text-white">{hospedagem.id}</td>
                  <td className="text-white">{hospedagem.nomeHotel}</td>
                  <td className="text-white">{hospedagem.endereco}</td>
                  <td className="text-white">{hospedagem.valor}</td>
                  <td className="text-white">{hospedagem.checkin}</td>
                  <td className="text-white">{hospedagem.checkout}</td>
                  <td className="text-white">{hospedagem.cliente.nome}</td>
                  <td className="d-flex justify-content-end">
                    <Link
                      to={`/Hospedagems-Update/${hospedagem.id}`}
                      className="btn btn-warning"
                    >
                      Atualizar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteHospedagem(hospedagem.id)}
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
