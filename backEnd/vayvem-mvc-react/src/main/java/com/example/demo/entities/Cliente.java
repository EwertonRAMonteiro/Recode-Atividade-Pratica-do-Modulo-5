package com.example.demo.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;

import org.hibernate.validator.constraints.br.CPF;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "cliente")
public class Cliente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private long id;
	
	@Column(name = "nome", length = 20, nullable = false)
	private String nome;
	
	@CPF(message = "CPF Invalido")
	@Column(name = "cpf", length = 15, nullable = false)
	private String cpf;
	
	@Column(name = "endereco", length = 40, nullable = false)
	private String endereco;
	
	@Column(name = "email", length = 40, nullable = false, unique = true)
	@Email(message = "Email invalido")
	private String email;
	
	
	@JsonIgnore
	@OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
	private List<Hospedagem> hospedagems = new ArrayList<Hospedagem>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
	private List<Destino> destinos = new ArrayList<Destino>();

	public Cliente() {
		
	}

	public Cliente(long id, String nome, @CPF(message = "CPF Invalido") String cpf, String endereco,
			@Email(message = "Email invalido") String email) {
		super();
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.endereco = endereco;
		this.email = email;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Hospedagem> getHospedagems() {
		return hospedagems;
	}

	public void setHospedagems(List<Hospedagem> hospedagems) {
		this.hospedagems = hospedagems;
	}

	public List<Destino> getDestinos() {
		return destinos;
	}

	public void setDestinos(List<Destino> destinos) {
		this.destinos = destinos;
	}

	
	
}

	
