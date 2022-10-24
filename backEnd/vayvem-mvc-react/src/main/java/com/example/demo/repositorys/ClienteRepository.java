package com.example.demo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Cliente;

@Repository
@Service
public interface ClienteRepository extends JpaRepository<Cliente, Long>{

}
