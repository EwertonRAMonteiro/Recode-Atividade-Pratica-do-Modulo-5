import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Api from '../../Api/Api'

export default function Create() {
    const [cpf, setCpf] = useState('')
	const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
	const [telefone, setTelefone] = useState('')
	const { id } = useParams()
	const navigate = useNavigate()

	const criarOuEditarCliente = (e) => {
		e.preventDefault()

		const cliente = { cpf, nome, sobrenome, rua, bairro, cidade, estado, email, senha, telefone}

		if (id) {
			Api.put('/clientes/' + id, cliente).then((response) => {
				navigate('/Clientes')
			})
		} else {
			Api.post('/clientes/', cliente).then((response) => {
				navigate('/Clientes')
			})
		}
	}

	useEffect(() => {
		function getClienteById() {
			if (id) {
				Api.get(`/clientes/${id}`)
					.then((response) => {
                        setCpf(response.data.cpf)
						setNome(response.data.nome)
						setSobrenome(response.data.sobrenome)
                        setRua(response.data.rua)
                        setBairro(response.data.bairro)
                        setCidade(response.data.cidade)
                        setEstado(response.data.estado)
                        setEmail(response.data.email)
                        setSenha(response.data.senha)
                        setTelefone(response.data.telefone)
					})
					.catch((error) => {
						console.log(error)
					})
			}
		}
		getClienteById()
	}, [id])

	return (
		<div className="container py-3">
			<form>
				<fieldset>
					<legend>
						<h2 className="text-center">{id ? 'Editar' : 'Criar'}</h2>
					</legend>
                    <div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Cpf"
								className="form-control s"
								placeholder="CPF"
								value={cpf}
								onChange={(e) => setCpf(e.target.value)}
							/>
						</div>
                    </div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Nome"
								className="form-control s"
								placeholder="Nome"
								value={nome}
								onChange={(e) => setNome(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Sobrenome"
								className="form-control s"
								placeholder="Sobrenome"
								value={sobrenome}
								onChange={(e) => setSobrenome(e.target.value)}
							/>
						</div>
					</div>
                    <div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Rua"
								className="form-control s"
								placeholder="Rua"
								value={rua}
								onChange={(e) => setRua(e.target.value)}
							/>
						</div>
					</div>
                    <div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Bairro"
								className="form-control s"
								placeholder="Bairro"
								value={nome}
								onChange={(e) => setBairro(e.target.value)}
							/>
						</div>
					</div>
                    <div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Cidade"
								className="form-control s"
								placeholder="Cidade"
								value={cidade}
								onChange={(e) => setCidade(e.target.value)}
							/>
						</div>
					</div>
                    <div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Estado"
								className="form-control s"
								placeholder="Estado"
								value={estado}
								onChange={(e) => setEstado(e.target.value)}
							/>
						</div>
					</div>
                    <div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Email"
								className="form-control s"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
                    <div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Senha"
								className="form-control s"
								placeholder="Senha"
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
							/>
						</div>
					</div>
                    <div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Telefone"
								className="form-control s"
								placeholder="Telefone"
								value={telefone}
								onChange={(e) => setTelefone(e.target.value)}
							/>
						</div>
					</div>
          <div className="d-flex justify-content-center">
					<button
						type="submit"
						className="btn btn-primary"
						onClick={(e) => criarOuEditarCliente(e)}
					>
						Enviar
					</button>
					<Link
						to="/Destinos"
						className="btn btn-danger"
						style={{ marginLeft: '10px' }}
					>
						Cancelar Destino
					</Link>
                    <Link
						to="/Hospedagems"
						className="btn btn-danger"
						style={{ marginLeft: '10px' }}
					>
						Cancelar Hospedagem
					</Link>
          </div>
				</fieldset>
			</form>
		</div>
	)
}
