export interface IProduto {
  categoria: ICategoria;
  dataAtualizacao: Date;
  dataCriacao: Date;
  descricaop: string;
  estoque: number;
  id: number;
  imagem: string;
  marca: string;
}

export interface ICategoria {
  id: number;
  descricaoc: number;
}

export interface IProdutoCatalago extends IProduto {
  selecionado: boolean;
  quantidade: number;
}

export interface IFornecedor {
  id: number;
  razaosocial: string;
  cnpj: string;
  email: string;
  telefone: string;
}

export interface IProdutoFornecedor {
  id: number;
  preco: number;
  produto: IProduto;
  fornecedor: IFornecedor;
}

export interface IUsuario {
  cnpj: string;
  id: number;
  razaosocial: string;
}

export interface ISelecao {
  descricaop: string;
  id: number;
  preco: number;
  quantidade: number;
  produtoFornecedor: IProdutoFornecedor[];
  orcamento: IOrcamento;
  produto: IProduto;
  fornecedor: IFornecedor;
}

export interface IOrcamento {
  dataCriacao?: number;
  id?: number;
}
