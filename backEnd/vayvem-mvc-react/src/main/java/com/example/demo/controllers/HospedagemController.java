package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.ResourceNotFoundException;
import com.example.demo.entities.Cliente;
import com.example.demo.entities.Hospedagem;
import com.example.demo.repositorys.ClienteRepository;
import com.example.demo.repositorys.HospedagemRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class HospedagemController {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private HospedagemRepository hospedagemRepository;
	
	@GetMapping("/hospedagems")
	public List<Hospedagem> getAllHospedagem(){
		return hospedagemRepository.findAll();
	}
	
	@GetMapping("/hospedagem/{id}")
	public ResponseEntity<Hospedagem> getHospedagemById(@PathVariable Long id) {
		Hospedagem hospedagem = hospedagemRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Hospedagem inexistente"));
		 return ResponseEntity.ok(hospedagem);
	}
	
	@PostMapping("/hospedagem")
	public Hospedagem createHospedagem(@RequestBody Hospedagem hospedagem) {
		return hospedagemRepository.save(hospedagem);
	}
	
	@PutMapping("hospedagems/{id}")
	public ResponseEntity<Hospedagem> updatehospedagem(@PathVariable Long id, @RequestBody Hospedagem HospedagemDetails){
		
		Hospedagem hospedagem = hospedagemRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Hospedagem Inexistente"));
		Cliente cliente = clienteRepository.findById(HospedagemDetails.getCliente().getId()).get();
		
		hospedagem.setNomeHotel(HospedagemDetails.getNomeHotel());
		hospedagem.setEndereco(HospedagemDetails.getEndereco());
		hospedagem.setValor(HospedagemDetails.getValor());
		hospedagem.setCheckin(HospedagemDetails.getCheckin());
		hospedagem.setCheckout(HospedagemDetails.getCheckout());
		hospedagem.setCliente(cliente);
		
	    Hospedagem newHospedagem = hospedagemRepository.save(hospedagem);
		
		return ResponseEntity.ok(newHospedagem); 
		}
	
	@DeleteMapping("/hospedagems/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDestino(@PathVariable Long id){
		
		Hospedagem hospedagem = hospedagemRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Hospedagem Inexistente"));
		
		hospedagemRepository.delete(hospedagem);
		Map<String, Boolean> response = new HashMap<>();
		response.put("é isso! deletado", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
