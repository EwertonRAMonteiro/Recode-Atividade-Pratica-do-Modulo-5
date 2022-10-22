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
import com.example.demo.entities.Destino;
import com.example.demo.repositorys.ClienteRepository;
import com.example.demo.repositorys.DestinoRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class DestinoController {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private DestinoRepository destinoRepository;
	
	@GetMapping("/destinos")
	public List<Destino> getAllDestinos(){
		return destinoRepository.findAll();
	}
	
	@GetMapping("/destinos/{id}")
	public ResponseEntity<Destino> getDestinoById(@PathVariable Long id) {
		Destino destino = destinoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Destino inexistente"));
		 return ResponseEntity.ok(destino);
	}
	
	@PostMapping("/destino")
	public Destino createDestino(@RequestBody Destino destino) {
		return destinoRepository.save(destino);
	}
	
	@PutMapping("destinos/{id}")
	public ResponseEntity<Destino> updateSala(@PathVariable Long id, @RequestBody Destino destinoDetails){
		
		Destino destino = destinoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Destino Inexistente"));
		Cliente cliente = clienteRepository.findById(destinoDetails.getCliente().getId()).get();
		
		destino.setNomeDestino(destinoDetails.getNomeDestino());
		destino.setCidade(destinoDetails.getCidade());
		destino.setEstado(destinoDetails.getEstado());
		destino.setIda(destinoDetails.getIda());
		destino.setVolta(destinoDetails.getVolta());
		destino.setValor(destinoDetails.getValor());
		destino.setCliente(cliente);
		
		
	    Destino newDestino = destinoRepository.save(destino);
		
		return ResponseEntity.ok(newDestino); 
		}
	
	@DeleteMapping("/destinos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDestino(@PathVariable Long id){
		
		Destino destino = destinoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Destino Inexistente"));
		
		destinoRepository.delete(destino);
		Map<String, Boolean> response = new HashMap<>();
		response.put("é isso! deletado", Boolean.TRUE);
		return ResponseEntity.ok(response);
	
	
	
	}
	
	

}
