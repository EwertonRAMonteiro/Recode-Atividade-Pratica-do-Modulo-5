import React, { Component } from 'react';

class ListaCliente extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clientes: []

    }
}


    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Clientes</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                                <th>#</th>
                                <th>CPF</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>Rua</th>
                                <th>Bairro</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>E-mail</th>
                                <th>Senha</th>
                                <th>Telefone</th>
                        </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.clientes.map(
                                    cliente =>
                                    <tr key = {cliente.id}>
                                        <td>{cliente.cpf}</td>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.sobrenome}</td>
                                        <td>{cliente.rua}</td>
                                        <td>{cliente.bairro}</td>
                                        <td>{cliente.cidade}</td>
                                        <td>{cliente.estado}</td>
                                        <td>{cliente.email}</td>ds
                                        <td>{cliente.senha}</td>
                                        <td>{cliente.telefone}</td>
                                        <td>
                                            <a className="btn btn-danger" type="submit" href="ClienteDelete?clienteId=${cliente.id}">Deletar</a>
                                            <a className="btn btn-success" type="submit" href="ClienteUpdate?clienteId=${cliente.id}">Atualizar</a>
                                        </td>
                                    </tr>
                             )
                            }
                        
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

ListaCliente.propTypes = {

};

export default ListaCliente;