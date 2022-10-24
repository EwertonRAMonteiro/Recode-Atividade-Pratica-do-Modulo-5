import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Api from '../../Api/Api'

export default function Create() {
	const [nomeDestino, setNomeDestino] = useState('')
    const [endereco, setEndereco] = useState('')
    const [ida, setIda] = useState('')
    const [volta, setVolta] = useState('')
    const [valor, setValor] = useState('')
	const [cliente, setCliente] = useState({ id: 0 })
	const [Clientes, setClientes] = useState([])
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		Api.get('/clientes')
			.then((response) => {
				setClientes(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	const criarOuEditarDestino = (e) => {
		e.preventDefault()

		const destino = { nomeDestino, endereco, ida, volta, valor, cliente }

		if (id) {
			Api.put('/destinos/' + id, destino).then((response) => {
				navigate('/Destinos')
			})
		} else {
			Api.post('/destinos/', destino).then((response) => {
				navigate('/Destinos')
			})
		}
	}

	useEffect(() => {
		function getDestinoById() {
			if (id) {
				Api.get(`/destinos/${id}`)
					.then((response) => {
						setNomeDestino(response.data.nomeDestino)
                        setEndereco(response.data.endereco)
                        setIda(response.data.ida)
                        setVolta(response.data.volta)
                        setValor(response.data.valor)
						setCliente({
							id: response.data.cliente.id,
						})
					})
					.catch((error) => {
						console.log(error)
					})
			}
		}

		getDestinoById()
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
								id="NomeDestino"
								className="form-control s"
								placeholder="NomeDestino"
								value={nomeDestino}
								onChange={(e) => setNomeDestino(e.target.value)}
							/>
						</div>
					</div>
                    <div className="mb-3">
						<div className="align">
							<input
								type="text"
								id="Endereco"
								className="form-control s"
								placeholder="Endereco"
								value={endereco}
								onChange={(e) => setEndereco(e.target.value)}
							/>
						</div>
					</div>
                    <div className="mb-3">
						<div className="align">
							<input
								type="date"
								id="Ida"
								className="form-control s"
								placeholder="Ida"
								value={ida}
								onChange={(e) => setIda(e.target.value)}
							/>
						</div>
					</div>
                    <div className="mb-3">
						<div className="align">
							<input
								type="date"
								id="Volta"
								className="form-control s"
								placeholder="Volta"
								value={volta}
								onChange={(e) => setVolta(e.target.value)}
							/>
						</div>
					</div>
                    <div className="mb-3">
						<div className="align">
							<input
								type="float"
								id="Valor"
								className="form-control s"
								placeholder="Valor"
								value={valor}
								onChange={(e) => setValor(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-group mb-3">
						<div className="align">
							<select
								id="ClienteId_cliente"
								name="ClienteId_cliente"
								className="form-select s"
								onChange={(e) =>
									setCliente({ id: Number.parseInt(e.target.value) })
								}
							>
								<option value="DEFAULT">
									{id ? cliente.nome : 'escolha um cliente'}
								</option>
								{Clientes.map((cliente) => (
									<option key={cliente.id} value={cliente.id}>
										{cliente.nome}
									</option>
								))}
							</select>
						</div>
					</div>
          <div className="d-grid-sm d-flex justify-content-center">
					<button
						type="submit"
						className="btn btn-success"
						onClick={(e) => criarOuEditarDestino(e)}
					>
						Cadastrar
					</button>
					<Link
						to="/Destinos"
						className="btn btn-danger"
						style={{ marginLeft: '10px' }}
					>
						Cancelar
					</Link>
          </div>
				</fieldset>
			</form>
		</div>
	)
}
