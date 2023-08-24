package com.example.academify.repository;

import com.example.academify.dominio.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;



public interface AlunoRepository extends JpaRepository<Aluno, Integer> {
}
