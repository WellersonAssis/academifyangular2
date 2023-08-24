package com.example.academify.controller;

import com.example.academify.dominio.Aluno;

public class AlunoController {

    public boolean isAlunoValido(Aluno aluno) {
        return isNomeValido(aluno) && isMatriculaValida(aluno);
    }


    private boolean isNomeValido(Aluno aluno) {
        if ((aluno.getNome().isEmpty())  || aluno.getNome().length() < 3) {
            return false;
        }

        return true;
    }
    public boolean isMatriculaValida(Aluno aluno) {
        if (aluno.getMatricula().isEmpty()) return false;
        if (aluno.getMatricula().length() < 8) return false;
        if (!aluno.getMatricula().matches("[0-9]+")) return false;

        return true;
    }
}
