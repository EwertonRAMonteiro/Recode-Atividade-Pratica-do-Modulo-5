package com.example.demo.entities;


import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "destino")
public class Destino implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nome_destino", length = 40, nullable = false)
	private String nomeDestino;
	
	@Column(name = "endereco", length = 40, nullable = false)
	private String endereco;
	
	@Column(name = "ida", nullable = false)
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date ida;
	
	@Column(name = "volta", nullable = true)
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date volta;
	
	@Column(name = "valor", nullable = false)
	private Float valor;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "cliente_id")
	private Cliente cliente;

	public Destino() {
		super();
	}

	public Destino(Long id, String nomeDestino, String endereco, Date ida, Date volta, Float valor) {
		super();
		this.id = id;
		this.nomeDestino = nomeDestino;
		this.endereco = endereco;
		this.ida = ida;
		this.volta = volta;
		this.valor = valor;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomeDestino() {
		return nomeDestino;
	}

	public void setNomeDestino(String nomeDestino) {
		this.nomeDestino = nomeDestino;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public Date getIda() {
		return ida;
	}

	public void setIda(Date ida) {
		this.ida = ida;
	}

	public Date getVolta() {
		return volta;
	}

	public void setVolta(Date volta) {
		this.volta = volta;
	}

	public Float getValor() {
		return valor;
	}

	public void setValor(Float valor) {
		this.valor = valor;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	

}
