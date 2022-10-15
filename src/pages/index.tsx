import Head from '../../node_modules/next/head'
import Image from '../../node_modules/next/image'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import useClientes from '../hooks/useClientes'
export default function Home() {
  
  const {
    cliente, 
    clientes, 
    selecionarCliente, 
    excluirCliente,
    salavarCliente,
    NovoCliente,
    tabelaVisivel,
    exibirTabela
     } = useClientes()
  

  return (
    <div className={`
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
        
        <Layout titulo='Cadastro Simples'>
          {tabelaVisivel ?(
            <>
            <div className='flex justify-end'>
              <Botao cor="green" className='mb-4'
                onClick={NovoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} 
            clienteSelecionado={selecionarCliente}
            clienteExcluido={excluirCliente}/>
            </>

          ):(
            <Formulario 
            cliente={cliente}
            clienteMudou={salavarCliente}
            cancelado={() => exibirTabela()}
            />
          )}
        </Layout>
    </div>
  )
}
