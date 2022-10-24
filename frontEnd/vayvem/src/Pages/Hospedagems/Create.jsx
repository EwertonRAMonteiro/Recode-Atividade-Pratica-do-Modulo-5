import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Api from '../../Api/Api'

export default function Create() {
	const [nomeHotel, setNomeHotel] = useState('')
    const [endereco, setEndereco] = useState('')
    const [valor, setValor] = useState('')
    const [checkin, setCheckin] = useState('')
    const [checkout, setCheckout] = useState('')
	const [cliente, setCliente] = useState({ id: 0 })
	const [clientes, setClientes] = useState([])
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

	const criarOuEditarHospedagem = (e) => {
		e.preventDefault()

		const hospedagem = { nomeHotel, endereco, valor, checkin, checkout, cliente }

		if (id) {
			Api.put('/hospedagems/' + id, hospedagem).then((response) => {
				navigate('/Hospedagems')
			})
		} else {
			Api.post('/hospedagems/', hospedagem).then((response) => {
				navigate('/Hospedagems')
			})
		}
	}

	useEffect(() => {
		function getHospedagemById() {
			if (id) {
				Api.get(`/hospedagems/${id}`)
					.then((response) => {
						setNomeHotel(response.data.nomeHotel)
                        setEndereco(response.data.endereco)
                        setValor(response.data.valor)
                        setCheckin(response.data.checkin)
                        setCheckout(response.data.checkout)
						setCliente({
							id: response.data.cliente.id,
						})
					})
					.catch((error) => {
						console.log(error)
					})
			}
		}

		getHospedagemById()
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
								id="NomeHotel"
								className="form-control s"
								placeholder="NomeHotel"
								value={nomeHotel}
								onChange={(e) => setNomeHotel(e.target.value)}
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
								type="float"
								id="Valor"
								className="form-control s"
								placeholder="Valor"
								value={valor}
								onChange={(e) => setValor(e.target.value)}
							/>
						</div>
					</div>
                    <div className="mb-3">
						<div className="align">
							<input
								type="date"
								id="Checkin"
								className="form-control s"
								placeholder="Checkin"
								value={checkin}
								onChange={(e) => setCheckin(e.target.value)}
							/>
						</div>
					</div>
                    <div className="mb-3">
						<div className="align">
							<input
								type="date"
								id="Checkout"
								className="form-control s"
								placeholder="Checkout"
								value={checkout}
								onChange={(e) => setCheckout(e.target.value)}
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
								{clientes.map((cliente) => (
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
						onClick={(e) => criarOuEditarHospedagem(e)}
					>
						Cadastrar
					</button>
					<Link
						to="/Hospedagems"
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
