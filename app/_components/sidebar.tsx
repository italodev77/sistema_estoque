const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* imagem */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">EstoquErp</h1>
      </div>
      {/*botoes */}
      <div className="flex flex-col gap-2 p-2">
        <button className="px-6 py-3">Dashboard</button>
        <button className="px-6 py-3">Produtos</button>
        <button className="px-6 py-3">vendas</button>
      </div>
    </div>
  );
};

export default Sidebar;
