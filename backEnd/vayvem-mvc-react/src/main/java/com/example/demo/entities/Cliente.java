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
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

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
	
	@Column(name = "sobrenome", length = 20, nullable = false)
	private String sobrenome;
	
	@CPF(message = "CPF Invalido")
	@Column(name = "cpf", length = 15, nullable = false)
	private String cpf;
	
	@Column(name = "rua", length = 40, nullable = false)
	private String rua;
	
	@Column(name = "bairro", length = 20, nullable = false)
	private String bairro;
	
	@Column(name = "cidade", length = 30, nullable = false)
	private String cidade;
	
	@Column(name = "estado", length = 25, nullable = false)
	private String estado;
	
	@Column(name = "telefone", length = 15, nullable = false)
	private String telefone;
	
	@Column(name = "email", length = 40, nullable = false, unique = true)
	@Email(message = "Email invalido")
	private String email;
	
	
	@Column(name = "senha", length = 12, nullable = false)
	@NotEmpty(message = "A senha deve ser informada")
	@Size(min = 8, message = "A senha deve ter no minimo 8 caracteres")
	private String senha;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
	private List<Hospedagem> hospedagems = new ArrayList<Hospedagem>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
	private List<Destino> destinos = new ArrayList<Destino>();

	public Cliente() {
		
	}

	public Cliente(long id, String nome, String sobrenome, @CPF(message = "CPF Invalido") String cpf, String rua,
			String bairro, String cidade, String estado, String telefone,
			@Email(message = "Email invalido") String email,
			@NotEmpty(message = "A senha deve ser informada") @Size(min = 8, message = "A senha deve ter no minimo 8 caracteres") String senha) {
		super();
		this.id = id;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.cpf = cpf;
		this.rua = rua;
		this.bairro = bairro;
		this.cidade = cidade;
		this.estado = estado;
		this.telefone = telefone;
		this.email = email;
		this.senha = senha;
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

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
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

	
