import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/DB/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTableOuForm from "./useTabelaOuForm";

export default function useClientes(){
    const rep: ClienteRepositorio = new ColecaoCliente();

    const {tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = useTableOuForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(obterTodos, [])

  function obterTodos(){
    rep.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function selecionarCliente(cliente: Cliente){
    setCliente(cliente)
    exibirFormulario()
  }

 async function excluirCliente(cliente: Cliente){
    await rep.excluir(cliente)
    obterTodos()
  }

 async function salavarCliente(cliente: Cliente){
    await rep.salvar(cliente)
    obterTodos()
  }

  function NovoCliente(){
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  return {
    cliente,
    clientes,
    NovoCliente,
    salavarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela
  }
}


